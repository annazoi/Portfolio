'use client';
import Textarea from '@/components/ui/textarea';
import Input from '@/components/ui/input';

const Contact = () => {
	return (
		<div id="contact" className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 flex flex-col gap-20">
			<h3 className="header mt-10">Contact</h3>
			<div className="max-w-xl">
				<h3>Let’s work together!</h3>
				<p></p>
				<div className="flex flex-col gap-10">
					<div className="flex gap-10">
						<Input name="Enter your first name" label="First name"></Input>
						<Input name="Enter your last name" label="Last name"></Input>
					</div>
					<div className="flex gap-10">
						<Input name="Enter your Email" label="Email address"></Input>
						<Input name="Enter your phone" label="Phone number"></Input>
					</div>
					<div>
						<Textarea name="Enter your message" label="Message"></Textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
