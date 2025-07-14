import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PrivyWagmiProvider } from './providers/privy-provider';
import { AuthProvider } from './context/AuthContextUpdated';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import LoginSimple from './pages/auth/LoginSimple';
import Register from './pages/auth/Register';
import RoleSelectionPage from './pages/auth/RoleSelectionPage';
import Dashboard from './pages/dashboard/Dashboard';
import Marketplace from './pages/Marketplace';
import PropertyDetails from './pages/PropertyDetails';
import Academy from './pages/Academy';
import AboutUs from './pages/AboutUs';
import FeatureLanding from './pages/FeatureLanding';
import BrandKit from './components/BrandKit';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Compliance from './pages/legal/Compliance';
import Contact from './pages/Contact';

function App() {
  return (
    <PrivyWagmiProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login-simple" element={<LoginSimple />} />
              <Route path="/register" element={<Register />} />
              <Route path="/role-selection" element={<RoleSelectionPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/marketplace-landing" element={<FeatureLanding />} />
              <Route path="/academy-landing" element={<FeatureLanding />} />
              <Route path="/dashboard-landing" element={<FeatureLanding />} />
              <Route path="/brand-kit" element={<BrandKit />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/marketplace"
                element={
                  <ProtectedRoute userType="investor">
                    <Marketplace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/property/:id"
                element={
                  <ProtectedRoute userType="investor">
                    <PropertyDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/academy"
                element={
                  <ProtectedRoute userType="investor">
                    <Academy />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </PrivyWagmiProvider>
  );
}

export default App;