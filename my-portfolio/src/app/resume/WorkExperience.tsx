"use client";

import { useState } from "react";

export const education = [
	{
		year: "2025",
		institute: "Institute of Data (University of Technology Sydney, NSW)",
		major: "Bootcamp of Software Engineering",
		achievements:
			"Built full-stack projects using React, Node.js & cloud services. Gained hands-on experience in agile development and DevOps practices.",
	},
	{
		year: "2022 - 2024",
		institute: "TAFE NSW - St. Leonards",
		major: "Diploma of Information Technology",
		achievements:
			"Focused on software development fundamentals, databases, and industry projects with real-world business use cases.",
	},
	{
		year: "2012 - 2013",
		institute: "SWSi TAFE - Padstow",
		major: "Cert. III of Patisserie",
		achievements:
			"Developed precision, teamwork, and attention to detail in a fast-paced hospitality environment.",
	},
	{
		year: "2011 - 2012",
		institute: "TAFE NSW - Ultimo",
		major: "Cert. IV of Commercial Cookery",
		achievements:
			"Strengthened leadership and operations skills while managing diverse kitchen environments.",
	},
	{
		year: "2009 - 2011",
		institute: "The Sydney Business and Travel Academy",
		major: "Advanced Diploma of Hospitality Management",
		achievements:
			"Learned customer experience management, business strategy, and hospitality operations.",
	},
];

export const jobs = [
	{
		year: "2022 - Present",
		company: "Crielle",
		role: "Contract Web Developer",
		jobDescription: `● Delivered 10+ custom websites for SMBs and personal brands, resulting in an average 25% increase in client web traffic within three months of launch.
● Designed visuals and UX, ensuring responsive and accessible products
● Created test cases and manually validated feature deployments before client delivery
● Logged and tracked bugs using GitHub Issues during iterative development
● Managed multiple projects, consistently meeting all deadlines`,
	},
	{
		year: "2025 - Present",
		company: "Catapult Coffee Roasters",
		role: "Coffee Roaster",
		jobDescription: `● Operate and maintain commercial roasting equipment to produce consistent, high-quality coffee across multiple origins and roast profiles 
● Collaborate with sourcing and quality teams to refine roast curves, cupping protocols, and flavor targets based on seasonal beans and customer feedback 
● Monitor batch data using RoastLogger and Cropster, adjusting variables to optimize flavor development and reduce waste 
● Ensure compliance with food safety standards and contribute to continuous improvement in production workflows 
● Support training and onboarding of new staff in roasting fundamentals, sensory evaluation, and equipment handling 
● Participate in product development and limited-release blends, aligning roasting strategy with brand storytelling and customer experience`,
	},
	{
		year: "2022 - 2024",
		company: "Sonoma Bakery",
		role: "Group Head Barista",
		jobDescription: `● Collaborated with technologists and business stakeholders to deliver products that meet customer needs.
● Leading and coaching teams across 3 locations, improving staff retention by 20% through recruitment and training support and mentoring programs.
● Streamlined daily operations, increasing production pace by 15% and customer satisfaction scores.
● Implemented new workflow strategies, resulting in a 10% reduction in operational costs.`,
	},
	{
		year: "2017 - 2022",
		company: "South by Dukes",
		role: "Cafe Manager",
		jobDescription: `● Managed a team of 12+ staff, achieving a 95% customer satisfaction rating based on regular feedback surveys.
● Increased monthly sales revenue by 10% through targeted goals and process improvements.
● Reduced inventory waste by 25% by introducing data-driven stock management practices.`,
	},
	{
		year: "2015 - 2017",
		company: "Steel Espresso",
		role: "Head Barista",
		jobDescription: `● Delivered consistent, high-standard customer service during peak hours
● Balanced shifting priorities to maintain satisfaction and team momentum
● Applied customer insights to improve loyalty and training programs.`,
	},
];

export default function WorkExperience() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-12 bg-sand">
			<div className="max-w-8xl mx-auto px-6">
				<h3 className="text-3xl font-bold text-center text-forest mb-12">
					Education & Experience
				</h3>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - Education */}
					<div>
						<h4 className="text-2xl font-semibold text-forest mb-8 text-center lg:text-left">
							Education
						</h4>
						<div className="relative">
							{/* <div className="absolute left-24 top-0 bottom-0 w-1 bg-forest/20"></div> */}
							<div className="space-y-5">
								{education.map((edu, index) => (
									<div key={index} className="grid grid-cols-12 gap-6 items-start">
										{/* Year */}
										<div className="col-span-2 text-left">
											<span className="inline-block bg-forest text-white text-sm px-3 py-1 rounded-full shadow">
												{edu.year}
											</span>
										</div>
										{/* Content */}
										<div className="col-span-9 bg-cream p-6 rounded-xl shadow-md border border-sand">
											<h6 className="font-semibold text-black">{edu.institute}</h6>
											<p className="text-grey text-sm">{edu.major}</p>
											<p className="text-xs text-gray-600 mt-2">{edu.achievements}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Work Experience */}
					<div>
						<h4 className="text-2xl font-semibold text-forest mb-8 text-center lg:text-left">
							Experience
						</h4>
						<div className="relative">
							{/* <div className="absolute left-24 top-0 bottom-0 w-1 bg-forest/20"></div> */}
							<div className="space-y-5">
								{jobs.map((job, index) => (
									<div key={index} className="grid grid-cols-12 gap-6 items-start">
										{/* Year */}
										<div className="col-span-2 text-left">
											<span className="inline-block bg-forest text-white text-sm px-3 py-1 rounded-full shadow">
												{job.year}
											</span>
										</div>
										{/* Content */}
										<div className="col-span-9 bg-cream p-6 rounded-xl shadow-md border border-sand">
											<h6 className="font-semibold text-black">{job.company}</h6>
											<p className="text-grey text-sm mb-2">{job.role}</p>
											<button
												onClick={() => toggleDescription(index)}
												className="text-forest text-xs underline hover:text-green-700 transition"
											>
												{openIndex === index ? "Hide Details" : "Job Description"}
											</button>
											<div
												className={`mt-2 text-xs text-gray-600 transition-all duration-300 ease-in-out ${
													openIndex === index ? "max-h-[500px]" : "max-h-0 overflow-hidden"
												}`}
											>
												<pre className="whitespace-pre-wrap">{job.jobDescription}</pre>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
