const nodemailer = require("nodemailer");

const sendEmail = async (
  email,
  subject,
  message
) => {
  try {
    console.log("Creating transporter...");

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    console.log("Sending email to:", email);

    const info =
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        html: message,
      });

    console.log("Email sent:", info.messageId);

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    throw error;
  }
};

module.exports = sendEmail;
// const nodemailer =
//   require("nodemailer");

// const sendEmail =
//   async (
//     email,
//     subject,
//     message
//   ) => {

//     const transporter =
//       nodemailer.createTransport({
//         service: "gmail",

//         auth: {
//           user:
//             process.env.EMAIL_USER,

//           pass:
//             process.env.EMAIL_PASS,
//         },
//       });

//     await transporter.sendMail({
//       from:
//         process.env.EMAIL_USER,

//       to: email,

//       subject,

//       html: message,
//     });
// };

// module.exports =
//   sendEmail;