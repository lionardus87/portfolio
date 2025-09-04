"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-coffee shadow-md fixed w-full z-50">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold text-white">
					MyPortfolio
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6">
					<Link href="/" className="text-white hover:text-raffia transition">
						Home
					</Link>
					<Link href="/resume" className="text-white hover:text-raffia transition">
						Profile
					</Link>
					<Link href="/projects" className="text-white hover:text-raffia transition">
						Projects
					</Link>
					<Link href="/contact" className="text-white hover:text-raffia transition">
						Connect
					</Link>
				</div>

				{/* Mobile Button */}
				<button
					className="md:hidden text-gray-200"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-gray-900 shadow-lg px-6 py-4 space-y-4">
					<Link
						href="/"
						onClick={() => setIsOpen(false)}
						className="block text-gray-200 hover:text-white transition"
					>
						Home
					</Link>
					<Link
						href="/resume"
						onClick={() => setIsOpen(false)}
						className="block text-gray-200 hover:text-white transition"
					>
						Profile
					</Link>
					<Link
						href="/projects"
						onClick={() => setIsOpen(false)}
						className="block text-gray-200 hover:text-white transition"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						onClick={() => setIsOpen(false)}
						className="block text-gray-200 hover:text-white transition"
					>
						Connect
					</Link>
				</div>
			)}
		</nav>
	);
}
