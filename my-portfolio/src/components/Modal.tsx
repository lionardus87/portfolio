import React from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export default function Modal({
	isOpen,
	onClose,
	title,
	children,
}: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
			<div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fade-in">
				{/* Close Button */}
				<button
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
					onClick={onClose}
				>
					✕
				</button>

				{/* Title */}
				<h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>

				{/* Body */}
				<div className="text-gray-700">{children}</div>
			</div>
		</div>
	);
}
