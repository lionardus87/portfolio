"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import { Facebook, Github, Linkedin, Instagram } from "lucide-react";

export default function HomePage() {
	const [isHobbyOpen, setIsHobbyOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	return (
		<section className="w-full h-screen flex flex-col lg:flex-row items-center bg-white">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 h-full bg-raffia flex justify-center items-center p-6 lg:p-10">
				<div className="bg-cream shadow-lg rounded-md overflow-hidden w-full max-w-sm lg:max-w-md animate-slide-in-left border border-gray-300">
					{/* Profile */}
					<div className="flex flex-col items-center p-6 lg:p-8">
						<div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden mb-6 border-4 border-offwhite">
							<Image
								src="/LinkedinPP.jpg"
								alt="Profile"
								width={224}
								height={224}
								className="object-cover w-full h-full"
							/>
						</div>
						<h2 className="text-xl lg:text-2xl font-bold text-gray-800 text-center">
							Lionardus Pranoto
						</h2>
						<div className="w-10 lg:w-14 h-[2px] bg-barleycorn my-4"></div>
						<p className="text-sm lg:text-base tracking-widest uppercase text-gray-600 text-center">
							Software Engineer
						</p>
					</div>

					{/* Socials */}
					<div className="bg-offwhite flex justify-center space-x-6 lg:space-x-8 py-4">
						<a
							href="https://www.facebook.com/lionardus"
							className="text-coffee hover:text-barleycorn"
						>
							<Facebook size={20} />
						</a>
						<a
							href="https://github.com/lionardus87"
							className="text-coffee hover:text-barleycorn"
						>
							<Github size={20} />
						</a>
						<a
							href="https://www.linkedin.com/in/lionardus-pranoto-018961166/"
							className="text-coffee hover:text-barleycorn"
						>
							<Linkedin size={20} />
						</a>
						<a
							href="https://www.instagram.com/lio_lee_/"
							className="text-coffee hover:text-barleycorn"
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-full lg:w-1/2 h-full bg-offwhite flex flex-col justify-center px-6 lg:px-16 py-8 lg:py-0">
				<div className="border border-gray-300 rounded-lg shadow-md p-6 lg:p-8 space-y-6">
					<h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 mb-4 text-center lg:text-left">
						Hello 👋👋
					</h1>
					<h2 className="text-lg lg:text-xl text-gray-600 mb-6 text-center lg:text-left">
						Let’s build something amazing together!
					</h2>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start">
						<button
							onClick={() => setIsAboutOpen(true)}
							className="px-6 py-2 bg-peru text-white rounded-full font-medium hover:border hover:border-coffee hover:bg-white hover:text-coffee transition"
						>
							About Me
						</button>
						<button
							onClick={() => setIsHobbyOpen(true)}
							className="px-6 py-2 border border-coffee text-coffee bg-white rounded-full font-medium hover:bg-peru hover:text-white transition"
						>
							Hobby
						</button>
					</div>

					{/* Quote */}
					<div className="border border-gray-400 w-full max-w-lg mx-auto lg:mx-0 min-h-[80px] rounded-lg p-4 lg:p-5 text-gray-800 bg-gray-50 flex flex-col justify-center">
						<h5 className="text-sm lg:text-base leading-snug text-center lg:text-left">
							<em>
								"The people who are crazy enough to think they can change the world, are
								the ones who do"
							</em>
						</h5>
						<p className="text-end text-gray-500 mt-2">- Steve Jobs</p>
					</div>
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
