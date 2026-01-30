import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ouambocanis@gmail.com',
      replyTo: email,
      subject: `${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Georgia, serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p style="margin-bottom: 20px;">${message.replace(/\n/g, '<br>')}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #666; font-size: 14px; margin: 0;">
              <strong>${name}</strong><br />
              ${email}
            </p>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}