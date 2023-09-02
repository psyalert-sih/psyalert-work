const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1-> create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    //secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });
  // 2-> define the email options
  const mailOptions = {
    from: 'psyalertsih.2023@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3-> actually send the email
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    console.log(info);
  });
};

module.exports = sendEmail;
