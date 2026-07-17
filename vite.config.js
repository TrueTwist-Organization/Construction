import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        comingSoon: resolve(__dirname, 'coming-soon.html'),
        cookiePolicy: resolve(__dirname, 'cookie-policy.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfService: resolve(__dirname, 'terms-of-service.html'),
        adminCustomers: resolve(__dirname, 'portal/admin-customers.html'),
        adminDashboard: resolve(__dirname, 'portal/admin-dashboard.html'),
        adminLogin: resolve(__dirname, 'portal/admin-login.html'),
        clientDashboard: resolve(__dirname, 'portal/client-dashboard.html'),
        clientLogin: resolve(__dirname, 'portal/client-login.html'),
      },
    },
  },
});
