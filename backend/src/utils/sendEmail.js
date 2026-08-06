const nodemailer = require("nodemailer");

const sendEmail = async (
  email,
  subject,
  message
) => {
  try {
    const transporter =
      nodemailer.createTransport({
        service: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    console.log("Verifying transporter...");

    await transporter.verify();

    console.log("Transport verified!");

    const info =
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        html: message,
      });

    console.log("Email sent!");
    console.log(info);

  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);
    throw error;
  }
};

module.exports = sendEmail;


// const nodemailer = require("nodemailer");

// const sendEmail = async (email, subject, message) => {
//   const transporter = nodemailer.createTransport({
//     service: "smtp.gmail.com",

//     auth: {
//       user: process.env.EMAIL_USER,

//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,

//     to: email,

//     subject,

//     html: message,
//   });
// };

// module.exports = sendEmail;
