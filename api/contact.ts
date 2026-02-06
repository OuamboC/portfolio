import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Email 1: Confirmation to the user
    await resend.emails.send({
      from: "Canis Breal Ouambo | Portfolio <onboarding@resend.dev>",
      to: email,
      subject: `Thank You for Reaching Out - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #020617; font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #020617; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">Canis Breal Ouambo</h1>
                        <p style="margin: 8px 0 0 0; color: #e0e7ff; font-size: 14px;">Full Stack Developer</p>
                      </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 25px 0; color: #f1f5f9; font-size: 16px;">Hi ${name},</p>
                        
                        <p style="margin: 0 0 20px 0; color: #cbd5e1; font-size: 15px; line-height: 1.7;">
                          Thank you for getting in touch! I've received your message regarding <span style="color: #3b82f6; font-weight: 500;">"${subject}"</span> and truly appreciate you reaching out.
                        </p>
                        
                        <p style="margin: 0 0 20px 0; color: #cbd5e1; font-size: 15px; line-height: 1.7;">
                          I'll carefully review your inquiry and get back to you within <strong style="color: #3b82f6;">24-48 hours</strong>. Your message is important to me!
                        </p>
                        
                        <p style="margin: 0 0 25px 0; color: #cbd5e1; font-size: 15px; line-height: 1.7;">
                          Feel free to share any additional information that could help me better understand your needs.
                        </p>
                        
                        <p style="margin: 30px 0 5px 0; color: #cbd5e1; font-size: 15px;">Warm regards,</p>
                        <p style="margin: 0 0 25px 0; color: #3b82f6; font-size: 16px; font-weight: 600;">Canis Breal Ouambo</p>
                        
                        <!-- Contact Info -->
                        <div style="border-top: 1px solid #1e293b; padding-top: 20px; margin-top: 10px;">
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">
                            Email: <a href="mailto:ouambocanis@gmail.com" style="color: #3b82f6; text-decoration: none;">ouambocanis@gmail.com</a>
                          </p>
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">
                            Portfolio: <a href="https://www.canisouambo.tech/" style="color: #3b82f6; text-decoration: none;">www.canisouambo.tech</a>
                          </p>
                          <p style="margin: 0; color: #64748b; font-size: 13px;">
                            Location: Manchester, United Kingdom
                          </p>
                        </div>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #020617; padding: 20px 30px; text-align: center; border-top: 1px solid #1e293b;">
                        <p style="margin: 0; color: #64748b; font-size: 12px;">© 2026 Canis Breal Ouambo. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Email 2: Notification to me
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ouambocanis@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #020617; font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #020617; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">New Portfolio Inquiry</h1>
                      </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <p style="margin: 0 0 5px 0; color: #3b82f6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Sender</p>
                              <p style="margin: 0; color: #f1f5f9; font-size: 16px;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <p style="margin: 0 0 5px 0; color: #3b82f6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email Address</p>
                              <p style="margin: 0; color: #f1f5f9; font-size: 16px;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 5px 0; color: #3b82f6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</p>
                              <p style="margin: 0; color: #f1f5f9; font-size: 16px;">${subject}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 15px; border-top: 1px solid #1e293b;">
                              <p style="margin: 0 0 12px 0; color: #3b82f6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
                              <div style="background-color: #020617; border-radius: 8px; padding: 20px; border-left: 4px solid #3b82f6;">
                                <p style="margin: 0; color: #cbd5e1; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #020617; padding: 20px 30px; text-align: center; border-top: 1px solid #1e293b;">
                        <p style="margin: 0; color: #64748b; font-size: 12px;">Received via your Portfolio Contact Form</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
