import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUserType?: 'investor' | 'originator' | 'general';
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultUserType = 'general' 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        
        {/* Contact Form */}
        <ContactForm 
          onClose={onClose} 
          defaultUserType={defaultUserType}
        />
      </div>
    </div>
  );
};

export default ContactFormModal;