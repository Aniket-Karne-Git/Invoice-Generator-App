import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, invoiceUrl } = await request.json();
    console.log(email, invoiceUrl);
    return NextResponse.json(email);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
