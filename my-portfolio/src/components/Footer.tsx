export default function Footer() {
	return (
		<footer className="bg-cream py-6">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<p className="text-black text-sm">
					&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
