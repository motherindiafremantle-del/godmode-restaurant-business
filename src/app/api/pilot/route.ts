import { NextResponse } from 'next/server';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// In-memory rate limiter: maximum 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (record.count >= 5) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown-ip';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes or email rikki@godmoderestaurantbusiness.com directly.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, restaurantName, email, phone, notes, honeypot } = body;

    // Honeypot anti-spam check: if bot filled this hidden field, silently return 200
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    // Input Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your full name.' }, { status: 400 });
    }

    if (!restaurantName || typeof restaurantName !== 'string' || restaurantName.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your restaurant name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const cleanData = {
      name: name.trim().slice(0, 100),
      restaurantName: restaurantName.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      phone: typeof phone === 'string' ? phone.trim().slice(0, 30) : '',
      notes: typeof notes === 'string' ? notes.trim().slice(0, 1000) : '',
      source: 'godmoderestaurantbusiness.com',
      status: 'pending_review',
      clientIp: ip,
      createdAtIso: new Date().toISOString(),
      createdAt: FieldValue.serverTimestamp(),
    };

    const db = getAdminFirestore();
    const docRef = await db.collection('godmode_pilot_inquiries').add(cleanData);

    return NextResponse.json({
      success: true,
      inquiryId: docRef.id,
      message: 'Pilot inquiry saved successfully.'
    });
  } catch (error: unknown) {
    console.error('[Pilot API Error]:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        error: 'Unable to save inquiry at this moment. Please email rikki@godmoderestaurantbusiness.com directly.',
        detail: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
