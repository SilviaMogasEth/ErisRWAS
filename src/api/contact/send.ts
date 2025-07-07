import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  userType: 'investor' | 'originator' | 'general';
  subject: string;
  message: string;
  phone?: string;
}

export async function POST(req: any, res: any) {
  console.log('📧 Contact form API called');
  try {
    // Initialize Resend with API key check
    const apiKey = process.env.RESEND_API_KEY;
    console.log('🔑 API Key available:', !!apiKey);
    
    if (!apiKey) {
      console.log('❌ No API key found');
      return res.status(500).json({ 
        error: 'Server configuration error: RESEND_API_KEY not found' 
      });
    }
    
    const resend = new Resend(apiKey);
    console.log('✅ Resend client initialized');
    
    const body: ContactFormData = req.body;
    console.log('📝 Form data received:', { ...body, email: body.email?.substring(0, 3) + '***' });
    const { name, email, company, userType, subject, message, phone } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, subject, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Determine recipient and template based on user type
    const getEmailConfig = (userType: string) => {
      switch (userType) {
        case 'investor':
          return {
            to: ['silviam@bmbweb3.com', 'julio.cruz@eb-ms.net'],
            replyTo: email,
            templateName: 'Investor Inquiry'
          };
        case 'originator':
          return {
            to: ['silviam@bmbweb3.com', 'julio.cruz@eb-ms.net'],
            replyTo: email,
            templateName: 'Asset Originator Inquiry'
          };
        default:
          return {
            to: ['silviam@bmbweb3.com', 'julio.cruz@eb-ms.net'],
            replyTo: email,
            templateName: 'General Inquiry'
          };
      }
    };

    const emailConfig = getEmailConfig(userType);

    // Create email content
    const emailSubject = `[${emailConfig.templateName}] ${subject}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; margin: -30px -30px 30px -30px; }
            .header h1 { margin: 0; font-size: 24px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; display: block; }
            .value { background: #f8f9fa; padding: 10px; border-radius: 5px; border: 1px solid #e9ecef; }
            .message-content { background: #fff; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; font-size: 12px; color: #666; }
            .urgent { color: #dc3545; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌟 ErisRWA Contact Form</h1>
              <p>${emailConfig.templateName}</p>
            </div>
            
            <div class="field">
              <span class="label">👤 Name:</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">📧 Email:</span>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            ${company ? `
              <div class="field">
                <span class="label">🏢 Company:</span>
                <div class="value">${company}</div>
              </div>
            ` : ''}
            
            ${phone ? `
              <div class="field">
                <span class="label">📞 Phone:</span>
                <div class="value">${phone}</div>
              </div>
            ` : ''}
            
            <div class="field">
              <span class="label">👥 User Type:</span>
              <div class="value">${userType.charAt(0).toUpperCase() + userType.slice(1)}</div>
            </div>
            
            <div class="field">
              <span class="label">📋 Subject:</span>
              <div class="value">${subject}</div>
            </div>
            
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Source:</strong> ErisRWA Contact Form</p>
              <p class="urgent">⚡ Please respond within 24 hours for investor inquiries</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
ErisRWA Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
User Type: ${userType.charAt(0).toUpperCase() + userType.slice(1)}
Subject: ${subject}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
Source: ErisRWA Contact Form
    `;

    // Send email to team (including silviam@bmbweb3.com)
    console.log('📤 Sending team email to:', emailConfig.to);
    const { data: teamEmailData, error: teamEmailError } = await resend.emails.send({
      from: 'ErisRWA Contact <noreply@erisrwa.com>',
      to: emailConfig.to,
      replyTo: emailConfig.replyTo,
      subject: emailSubject,
      html: emailHtml,
      text: textContent,
      tags: [
        {
          name: 'category',
          value: 'contact-form'
        },
        {
          name: 'user-type',
          value: userType
        }
      ]
    });

    if (teamEmailError) {
      console.error('❌ Resend team email error:', teamEmailError);
      return res.status(500).json({ 
        error: 'Failed to send email to team. Please try again later.',
        details: teamEmailError.message 
      });
    }
    
    console.log('✅ Team email sent successfully:', teamEmailData?.id);

    // Send confirmation email to user
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
            .content { margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank you for contacting ErisRWA! 🚀</h1>
            </div>
            
            <div class="content">
              <p>Dear ${name},</p>
              
              <p>Thank you for your interest in ErisRWA! We have received your inquiry and our team will review it promptly.</p>
              
              <p><strong>Your submission details:</strong></p>
              <ul>
                <li><strong>Subject:</strong> ${subject}</li>
                <li><strong>User Type:</strong> ${userType.charAt(0).toUpperCase() + userType.slice(1)}</li>
                <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
              </ul>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>🔍 Our team will review your inquiry within 24 hours</li>
                <li>📞 A specialist will contact you to discuss your needs</li>
                <li>💼 We'll provide personalized recommendations based on your profile</li>
              </ul>
              
              <p>In the meantime, feel free to explore our platform and educational resources.</p>
              
              <p>Best regards,<br>
              <strong>The ErisRWA Team</strong></p>
            </div>
            
            <div class="footer">
              <p><strong>ErisRWA</strong> - Premium Real World Assets Platform</p>
              <p>📧 Email: contact@erisrwa.com | 🌐 Website: erisrwa.com</p>
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to user
    console.log('📤 Sending confirmation email to:', email);
    const { data: confirmationEmailData, error: confirmationEmailError } = await resend.emails.send({
      from: 'ErisRWA <noreply@erisrwa.com>',
      to: [email],
      subject: 'Thank you for contacting ErisRWA - We\'ll be in touch soon!',
      html: autoReplyHtml,
      tags: [
        {
          name: 'category',
          value: 'auto-reply'
        }
      ]
    });

    if (confirmationEmailError) {
      console.error('❌ Resend confirmation email error:', confirmationEmailError);
      // Don't fail the entire request if confirmation email fails
      // The main team email was sent successfully
    } else {
      console.log('✅ Confirmation email sent successfully:', confirmationEmailData?.id);
    }

    console.log('🎉 Contact form submission completed successfully');
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      teamEmailId: teamEmailData?.id,
      confirmationEmailId: confirmationEmailData?.id,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Contact form API error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.',
      timestamp: new Date().toISOString()
    });
  }
}