import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "My Portfolio",
	description: "Built with Next.js + Tailwind",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="pt-10">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
