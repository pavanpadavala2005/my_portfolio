// import { lazy } from "react";
// const PrimaryButton = lazy(() => import("../utils/PrimaryButton"));

const HeroSection = () => {
	const openResume = () => {
		const pdfUrl = "/PAVAN_KUMAR_RESUME.pdf";
		window.open(pdfUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<section
			id="Home"
			className="w-full py-24 md:py-40 px-4 bg-gradient-to-t from-purple-100 via-white to-indigo-100">
			<div className="w-full max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:px-6">
				<div className="flex flex-col w-full md:w-3/5 py-4 md:py-10 gap-5 text-center md:text-left">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4">
						Hi, I'm Pavan
					</h1>
					<span className="block text-xl md:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text tracking-wider font-semibold text-transparent">
						Recent Graduate
					</span>
					<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 lg:mx-0">
						Passionate Computer Science Engineering student. Interested in MERN stack,
						RESTful APIs, and scalable app development. Skilled in problem-solving,
						performance optimization, and innovation-driven learning.
					</p>
					<div className="py-4">
						<button
							className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 md:px-5 py-3 md:py-2 text-lg tracking-wider md:text-base hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-lg"
							onClick={openResume}>
							Resume
						</button>
					</div>
				</div>
				<div className="w-64 md:w-4/12 flex justify-center md:p-4">
					<img
						src="/PAVAN.jpg"
						alt="Pavan's portrait"
						className="w-full object-cover object-center md:aspect-[3/4] rounded-lg shadow-lg brightness-[102%]"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
