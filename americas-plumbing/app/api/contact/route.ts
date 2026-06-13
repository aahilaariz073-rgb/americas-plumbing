import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, firstName, lastName, phone, email, service, message } = body;

    const displayName = name || `${firstName || ''} ${lastName || ''}`.trim();

    if (!displayName || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = service
      ? `New Lead: ${service} — ${displayName}`
      : `New Lead from Website — ${displayName}`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;border:1px solid #e0e2ea;border-radius:8px;overflow:hidden;">
        <div style="background:#080f1f;padding:20px 24px;">
          <span style="color:#fff;font-size:1.1rem;font-weight:700;">America's Plumbing — New Lead</span>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#9b9eb0;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;width:110px;">Name</td><td style="padding:8px 0;color:#080f1f;font-weight:600;">${displayName}</td></tr>
            <tr><td style="padding:8px 0;color:#9b9eb0;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#C8202A;font-weight:700;text-decoration:none;">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding:8px 0;color:#9b9eb0;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;color:#080f1f;">${email}</td></tr>` : ''}
            ${service ? `<tr><td style="padding:8px 0;color:#9b9eb0;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Service</td><td style="padding:8px 0;color:#080f1f;">${service}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:8px 0;color:#9b9eb0;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;vertical-align:top;">Message</td><td style="padding:8px 0;color:#080f1f;line-height:1.6;">${message}</td></tr>` : ''}
          </table>
        </div>
        <div style="background:#f7f8fc;padding:14px 24px;font-size:0.78rem;color:#9b9eb0;">
          Sent from americasplumbing.com · ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"America's Plumbing Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email || undefined,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send. Please call us directly.' }, { status: 500 });
  }
}
