import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    // Check if Resend is configured
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY in your environment variables.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Softwave Tech Solutions <onboarding@resend.dev>', // Update this with your verified domain
      to: ['softwavetechsolutionsprivateli@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">This email was sent from the Softwave Tech Solutions contact form.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}