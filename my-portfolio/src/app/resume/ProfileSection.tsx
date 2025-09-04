"use client";

import Image from "next/image";
import { MapPin, Mail, Phone, Flag, Linkedin, Github } from "lucide-react";

export default function ProfileSection() {
	return (
		<>
			{/* Personal info */}
			<section>
				<div className="bg-cream mx-auto  shadow-lg overflow-hidden">
					<div className="grid grid-cols-1 sm:grid-cols-3">
						{/* Left column - Photo */}
						<div className="relative h-64 sm:h-auto flex items-center justify-center">
							<div className="relative w-64 h-64 border-2 border-raffia rounded-xl overflow-hidden">
								<Image
									src="/LinkedinPP.jpg"
									alt="Profile"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>

						{/* Right column - Details */}
						<div className="sm:col-span-2 p-8 flex flex-col justify-center">
							<h3 className="text-3xl font-bold text-peru mb-6">Personal Info</h3>
							<div>
								<p className="text leading-relaxed text-gray-700">
									Friendly and growth-oriented software engineer with a dynamic
									leadership background and hands-on experience developing secure,
									expandable applications. Skilled across modern JavaScript frameworks,
									cloud infrastructure, and CI/CD pipelines, with a passion for
									automation and digital transformation. Known for clear communication,
									adaptability, and a continuous learning mindset. Proven experience in
									manual and automated testing, incident management, and streamlining
									operational processes using defect tracking and test management tools.
									Successfully applied business logic to improve system performance and
									enhance decision-making with big data analysis. Writing clear, concise
									documentation has been essential in supporting technical teams and
									improving overall accuracy.
								</p>
							</div>

							<div className="mt-8">
								<h4 className="text-xl font-semibold mb-4 text-peru">Contact</h4>

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm text-gray-800">
									{/* Location */}
									<div className="flex items-center gap-3">
										<MapPin className="text-peru w-5 h-5" />
										<span>Arncliffe, NSW</span>
									</div>

									{/* Email */}
									<div className="flex items-center gap-3">
										<Mail className="text-peru w-5 h-5" />
										<a
											href="mailto:yudhi_lee@hotmail.com"
											className="hover:underline text-peru font-medium"
										>
											yudhi_lee@hotmail.com
										</a>
									</div>

									{/* Phone */}
									<div className="flex items-center gap-3">
										<Phone className="text-peru w-5 h-5" />
										<a
											href="tel:+61481160555"
											className="hover:underline text-peru font-medium"
										>
											(+61) 481-160-555
										</a>
									</div>

									{/* Nationalities */}
									<div className="flex items-center gap-3">
										<Flag className="text-peru w-5 h-5" />
										<span>Australian · Indonesian</span>
									</div>

									{/* Linkedin */}
									<div className="flex items-center gap-3">
										<Linkedin className="text-peru w-5 h-5" />
										<a
											href="https://www.linkedin.com/in/lionardus-pranoto87/"
											className="hover:underline text-peru font-medium"
											target="_blank"
										>
											lionardus-pranoto87
										</a>
									</div>

									{/* Github */}
									<div className="flex items-center gap-3">
										<Github className="text-peru w-5 h-5" />
										<a
											href="https://github.com/lionardus87"
											className="hover:underline text-peru font-medium"
											target="_blank"
										>
											lionardus87
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
