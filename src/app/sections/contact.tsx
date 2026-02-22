'use client';
import Textarea from '@/components/ui/textarea';
import Input from '@/components/ui/input';

const Contact = () => {
	return (
		<div id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
			<div className="flex-1 flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h3 className="header text-left">Get In Touch</h3>
					<h2 className="text-4xl lg:text-5xl font-extrabold text-white">Let’s build something <span className="text-gradient">amazing</span> together.</h2>
				</div>
				<p className="text-slate-400 text-lg leading-relaxed">
					Whether you have a question or just want to say hi, I'll try my best to get back to you!
				</p>
				<div className="flex flex-col gap-4 mt-4">
					<a href="mailto:anna.zoi@yahoo.com" className="text-xl font-semibold text-white hover:text-primary transition-colors">anna.zoi@yahoo.com</a>
				</div>
			</div>

			<div className="flex-1 glass p-8 lg:p-12 rounded-[3rem] shadow-2xl border-white/5 relative overflow-hidden group/form">
				<div className="flex flex-col gap-8 relative z-10">
					<div className="flex flex-col sm:flex-row gap-8">
						<Input name="Enter your first name" label="First name" />
						<Input name="Enter your last name" label="Last name" />
					</div>
					<div className="flex flex-col sm:flex-row gap-8">
						<Input name="Enter your Email" label="Email address" />
						<Input name="Enter your phone" label="Phone number" />
					</div>
					<div>
						<Textarea name="Enter your message" label="Message" />
					</div>
					<button className="bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/80 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 mt-4">
						Send Message
					</button>
				</div>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity" />
			</div>
		</div>
	);
};

export default Contact;
