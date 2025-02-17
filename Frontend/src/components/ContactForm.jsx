import { useState } from "react";
import { submitMail } from "../provider/dataSlice";
import { useDispatch } from "react-redux";

const ContactForm = ({ setIsOpen, setMailerName }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		if (formData.name === "" || formData.email === "" || formData.message === "") {
			setLoading(false);
			return;
		}

		const formDataObj = new FormData();
		formDataObj.append("access_key", "5fe86d40-e9f2-4a47-ab95-8b90f0e1a20c");
		formDataObj.append("name", formData.name);
		formDataObj.append("email", formData.email);
		formDataObj.append("message", formData.message);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formDataObj,
		}).then((res) => res.json());

		dispatch(submitMail(formData));

		setLoading(false);

		if (res.success) {
			setMailerName(formData.name);
			setIsOpen(true);
			setFormData({ name: "", email: "", message: "" });
		} else {
			console.error("Error:", res);
		}
	};

	return (
		<form className="space-y-4" onSubmit={onSubmit}>
			{["Name", "Email"].map((field) => (
				<div key={field}>
					<label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
						{field}
					</label>
					<input
						type={field === "Email" ? "email" : "text"}
						name={field.toLowerCase()}
						value={formData[field.toLowerCase()]}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
						placeholder={`Your ${field.toLowerCase()}`}
						required
					/>
				</div>
			))}
			<div>
				<label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
					Message
				</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-28 md:h-32 outline-none"
					placeholder="Your message"
					required></textarea>
			</div>
			<button
				type="submit"
				className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap rounded-lg"
				disabled={loading}>
				{loading ? "Sending..." : "Mail"}
			</button>
		</form>
	);
};

export default ContactForm;
