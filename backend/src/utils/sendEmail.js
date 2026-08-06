const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendEmail = async (
  email,
  subject,
  message
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject,
    html: message,
  });
};

module.exports = sendEmail;



// const nodemailer = require("nodemailer");

// const sendEmail = async (email, subject, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     console.log("Verifying transporter...");
//     await transporter.verify();
//     console.log("Transport verified!");

//     const info = await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject,
//       html: message,
//     });

//     console.log("Email sent!", info.messageId);

//   } catch (error) {
//     console.error("EMAIL ERROR:", error);
//     throw error;
//   }
// };

// module.exports = sendEmail;