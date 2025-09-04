"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import { Facebook, Github, Linkedin, Instagram } from "lucide-react";

export default function HomePage() {
	const [isHobbyOpen, setIsHobbyOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	return (
		<section className="h-screen flex items-center bg-white">
			{/* Left Section */}
			<div className="w-1/2 h-full bg-sand flex justify-center items-center p-10">
				<div className="bg-cream shadow-lg rounded-md overflow-hidden w-[22rem] animate-slide-in-left border border-gray-300">
					{/* Profile */}
					<div className="flex flex-col items-center p-8">
						<div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-offwhite">
							<Image
								src="/LinkedinPP.jpg"
								alt="Profile"
								width={176}
								height={176}
								className="object-cover w-full h-full"
							/>
						</div>
						<h2 className="text-2xl font-bold text-gray-800">Lionardus Pranoto</h2>
						<div className="w-14 h-[2px] bg-forest my-4"></div>
						<p className="text-base tracking-widest uppercase text-gray-600">
							Software Engineer
						</p>
					</div>

					{/* Socials */}
					<div className="bg-offwhite flex justify-center space-x-8 py-4">
						<a
							href="https://www.facebook.com/lionardus"
							className="text-black hover:text-forest"
						>
							<Facebook size={20} />
						</a>
						<a
							href="https://github.com/lionardus87"
							className="text-black hover:text-forest"
						>
							<Github size={20} />
						</a>
						<a
							href="https://www.linkedin.com/in/lionardus-pranoto-018961166/"
							className="text-black hover:text-forest"
						>
							<Linkedin size={20} />
						</a>
						<a
							href="https://www.instagram.com/lio_lee_/"
							className="text-black hover:text-forest"
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-1/2 h-full bg-offwhite flex flex-col justify-center px-16">
				<h1 className="text-5xl font-extrabold text-gray-800 mb-4">Hello 👋👋</h1>
				<h2 className="text-xl text-gray-600 mb-6">
					Lets build something amazing together!
				</h2>
				{/* Buttons */}
				<div className="flex space-x-4 mb-6">
					<button
						onClick={() => setIsAboutOpen(true)}
						className="px-6 py-2 bg-forest text-white rounded-full font-medium hover:border hover:border-forest hover:bg-white hover:text-forest transition"
					>
						About Me
					</button>
					<button
						onClick={() => setIsHobbyOpen(true)}
						className="px-6 py-2 border border-forest text-forest bg-white rounded-full font-medium hover:bg-forest hover:text-white transition"
					>
						Hobby
					</button>
				</div>

				{/* Quote */}
				<div className="border border-gray-400 w-[350px] min-h-[100px] rounded-lg p-5 text-gray-800 bg-gray-50 flex flex-col justify-center">
					<h5 className="text-base leading-snug">
						<em>
							"The people who are crazy enough to think they can change the world, are
							the ones who do"
						</em>
					</h5>
					<p className="text-end text-gray-500 mt-2">- Steve Jobs</p>
				</div>
			</div>

			{/* Modals */}
			<Modal
				isOpen={isHobbyOpen}
				onClose={() => setIsHobbyOpen(false)}
				title="Hobbies & Interests"
			>
				<ul className="list-disc pl-5 space-y-2 text-gray-800">
					<li>Passionate about self-directed learning and new technologies...</li>
					<li>Side projects exploring AI, cloud apps, programming fundamentals</li>
					<li>
						Enjoys gym training, brunch weekends with family, connecting with tech
						community
					</li>
					<li>Values continuous improvement and supporting others’ growth</li>
					<li>Australian Permanent Resident, fluent in English</li>
					<li>Enjoy exploring new technologies and staying ahead of trends</li>
				</ul>
			</Modal>

			<Modal
				isOpen={isAboutOpen}
				onClose={() => setIsAboutOpen(false)}
				title="About Me"
			>
				<p className="leading-relaxed text-gray-800">
					Friendly and growth-oriented software engineer with a dynamic leadership
					background and hands-on experience developing secure, expandable
					applications. Skilled in modern JavaScript frameworks, cloud
					infrastructure, and CI/CD pipelines, with a passion for automation and
					digital transformation...
				</p>
			</Modal>
		</section>
	);
}
