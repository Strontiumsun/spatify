console.log("this is coming from the email js file!");

$(document).ready(function() {
  const nodemailer = require("nodemailer");

  $("#formSubmit").on("click", function(event) {
    event.preventDefault();
    console.log("form submitted!");
  });

  async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "localhost",
      port: 3306,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    let info = await transporter.sendMail({
      from: '"Hugh Man" <foo@example.com>',
      to: "bar@example.com",
      subject: "Confirmation",
      text: "AAAAAAAA SALON!!!!??!! AAAAAAA!!!!!!",
      html: "<b>REEEEEEEEEEE</b>"
    });

    console.log("Message sent: %s", info.messageID);
    console.log("PReview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
});
