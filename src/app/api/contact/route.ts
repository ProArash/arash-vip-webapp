import { NextRequest, NextResponse } from 'next/server';
import connectDb from '@/lib/mongoose';
import Contact, { IContact } from '@/models/Contact';

export async function POST(req: NextRequest) {
	await connectDb();
	const contactDto = (await req.json()) as IContact;
	const contact = await Contact.create(contactDto);
	return NextResponse.json({
		message: contact,
	});
}
