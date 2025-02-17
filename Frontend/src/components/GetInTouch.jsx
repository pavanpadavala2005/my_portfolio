import { Mail, MapPin, Phone } from "lucide-react";
import { lazy, useState } from "react";
const ContactForm = lazy(() => import("./ContactForm"));
const SuccessPop = lazy(() => import("./SuccessPop"));
const GetInTouch = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mailerName, setMailerName] = useState("");
	return (
		<section
			id="Hire_Me"
			className="w-full py-20 max-w-screen-2xl mx-auto bg-gradient-to-b from-indigo-100 via-white to-violet-100">
			<div className="w-full max-w-screen-lg mx-auto px-8">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
					Mail Me
				</h2>
				<div className="grid md:grid-cols-9 gap-10">
					<div className="col-span-4 space-y-3 md:space-y-8">
						<h3 className="text-xl md:text-2xl font-semibold text-gray-900">
							Let's Connect
						</h3>
						<p className="text-gray-600">
							I'm always interested in hearing about new projects and opportunities.
							Feel free to reach out!
						</p>
						<div className="space-y-5 md:space-y-6">
							{[
								{
									icon: Mail,
									label: "Email",
									value: "pavankumarpadavala123@gmail.com",
								},
								{ icon: Phone, label: "Phone", value: "+91 93982 17226" },
								{
									icon: MapPin,
									label: "Location",
									value: "Chirala, Andhra Pradesh",
								},
							].map(({ icon: Icon, label, value }) => (
								<div key={label} className="flex items-center space-x-4">
									<div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200">
										<Icon className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 hover:scale-[115%] duration-200" />
									</div>
									<div>
										<h4 className="font-medium text-gray-900">{label}</h4>
										<p className="text-indigo-600">{value}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full flex items-center justify-center md:col-span-1">
						<p className="font-bold text-lg">Or</p>
					</div>

					<div className="col-span-4 bg-white p-6 md:p-8 rounded-lg shadow-lg">
						<ContactForm setIsOpen={setIsOpen} setMailerName={setMailerName} />
					</div>
				</div>
			</div>
			{isOpen && (
				<SuccessPop
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					name={mailerName}
					setMailerName={setMailerName}
				/>
			)}
		</section>
	);
};

export default GetInTouch;
