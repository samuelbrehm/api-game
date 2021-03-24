const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },

    forgotPassword: {
      from: 'support@mywebsite.fr',
      replyTo: 'support@mywebsite.fr',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
