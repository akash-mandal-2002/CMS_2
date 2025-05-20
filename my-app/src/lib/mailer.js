import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Use App Password
  },
});

export const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"MyApp" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Welcome to Tail Admin',
    html: `<h2>Hi ${name},</h2><p>Welcome to MyApp! We're glad to have you 🎉</p>`,
  });
};
