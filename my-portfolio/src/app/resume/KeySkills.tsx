"use client";
export const skills = [
	{
		category: "Front-end",
		items: "HTML, CSS, JavaScript, TypeScript, React.js, Angular",
	},
	{
		category: "Back-end",
		items: "Node.js, Express.js, Java, C# (.NET Core), RESTful APIs",
	},
	{ category: "Database", items: "MongoDB, MySQL, Redis, Oracle" },
	{
		category: "Architecture",
		items:
			"Microservices, API Design, Design Patterns, Software Documentation, SDLC",
	},
	{
		category: "Testing",
		items: "Jest, Thunder Client, Manual Testing, Test Cases",
	},
	{
		category: "Cloud & DevOps",
		items: "AWS, Firebase, CI/CD, Docker, GitHub Actions",
	},
];
export default function KeySkills() {
	return (
		<>
			<section className="py-12 bg-sand">
				<div className="mx-auto px-6">
					<h3 className="text-3xl font-bold text-center text-forest mb-10">
						Key Skills
					</h3>
					<div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
						{skills.map((skill) => (
							<div
								key={skill.category}
								className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition"
							>
								<h4 className="text-lg font-semibold mb-3 text-forest">
									{skill.category}
								</h4>
								<p className="text-sm text-gray-700">{skill.items}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
