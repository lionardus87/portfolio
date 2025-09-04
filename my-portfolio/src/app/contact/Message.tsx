"use client";

import { useState } from "react";

export default function MailMessage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("Sending...");

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			setStatus("✅ Message sent!");
			setFormData({ name: "", email: "", message: "" });
		} else {
			setStatus("❌ Failed to send, try again.");
		}
	};

	return (
		<section className="py-12 bg-cream">
			<div className="max-w-4xl mx-auto px-6 py-6 bg-raffia rounded-xl shadow-md">
				<h3 className="text-3xl font-bold text-center text-peru mb-8">
					Keep In Touch
				</h3>
				<form
					onSubmit={handleSubmit}
					className="space-y-4 bg-cream p-6 rounded-xl shadow"
				>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full p-3 border rounded-md"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full p-3 border rounded-md"
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full p-3 border rounded-md h-32"
					/>
					<button
						type="submit"
						className="w-full bg-peru text-white py-3 rounded-md hover:bg-green-700 transition"
					>
						Send
					</button>
				</form>
				{status && <p className="mt-4 text-center">{status}</p>}

				<div className="flex space-x-4 align-center justify-center mt-8">
					<a
						href="/Lionardus_Pranoto-Resume.pdf"
						download
						className="px-6 py-2 bg-peru text-white rounded-full hover:bg-white hover:text-peru hover:border hover:border-peru transition"
					>
						Download Resume
					</a>
					<a
						href="/Lionardus_Pranoto-Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 bg-peru text-white rounded-full hover:bg-white hover:text-peru hover:border hover:border-peru transition"
					>
						View Resume
					</a>
				</div>
			</div>
		</section>
	);
}
