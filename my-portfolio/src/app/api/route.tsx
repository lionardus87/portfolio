import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: email,
			to: process.env.GMAIL_USER,
			subject: `New message from ${name}`,
			text: message,
			html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
