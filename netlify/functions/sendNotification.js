import { sendEmail } from "@netlify/emails";

const handler = async (req, context) => {
  console.log("sendNotification function triggered");
  
  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const {
      from,
      subject,
      Client_name,
      parameters,
      // client_address,
      // state_city_zip,
      // date,
      // letterheading,
      // letter_body,
      to
    } = await req.json();

    console.log("Received email request for:", to);
    console.log("Template parameters:", {
      from,
      Client_name,
      parameters
     
    });

    await sendEmail({
      from,
      to,
      subject,
      template: "subscribed/index", // Template located in emails/subscribed/index.html
      parameters
     
    });

    console.log("Email sent successfully to:", to);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export default handler;