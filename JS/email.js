const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false, // adjust based on your server
  auth: {
    user: 'dhanonjoy6a24@gmail.com',
    pass: 'govindha888',
  },
});

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById(name).value;
  const email = document.getElementById(email).value;
  const message = document.getElementById(message).value;

  const mailOptions = {
    from: name + ' <' + email + '>',
    to: 'dhanonjoy6a24@gmail.com',
    subject: 'New enquiry',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      alert('Error sending email:', error);
    } else {
      alert('Email sent successfully!');
    }
  });
}
