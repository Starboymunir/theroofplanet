import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Web3Forms API key — replace with your real key from https://web3forms.com
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New ${service} Request from ${name} — RoofPlanet`,
        from_name: 'RoofPlanet Website',
        name,
        email,
        phone,
        address: address || 'Not provided',
        service,
        message: message || 'No additional details',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Form submitted successfully!' });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to submit form. Please try again.' },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
