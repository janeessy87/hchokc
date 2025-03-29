
const postmark = require("postmark");

exports.handler = async (event) => {
  const { name, email, message,firstName,lastName,phone, intrests, other, lawyerName } = JSON.parse(event.body);

  const client = new postmark.ServerClient(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY);

  try {
    await client.sendEmail({
      From: "WebContact | HCHOKC <admin@hchoklahoma.com>",
      To: "dssolloway@writeme.com",
      Subject: `New Message from ${name}`,
      TextBody: `
      choosen lawyer: ${lawyerName}
      From: ${
      email}\n\n${message}\n\nFirst Name ${firstName} 
      \n\n Last Name:${lastName}  
      \n\n Phone Number: ${phone}
      \n\n  My interests : ${intrests}
      \n\n addittional message: ${other}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};