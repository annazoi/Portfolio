'use client';
import Textarea from '@/components/ui/textarea';
import Input from '@/components/ui/input';
import { motion } from 'framer-motion';
import StatusMessage from '@/components/ui/StatusMessage';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	});
	const [status, setStatus] = useState<Status>('idle');

	const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm((prev) => ({ ...prev, [field]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('sending');
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setStatus('success');
				setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	};

	return (
		<div
			id="contact"
			className="mx-auto max-w-7xl md:pt-0 pt-5 px-4 sm:px-6 lg:px-8 md:mt-32 mt-10 flex flex-col lg:flex-col md:gap-6 gap-1 lg:gap-16 pb-20"
		>
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
				<h3 className="header text-gradient text-center md:text-left">Get In Touch</h3>
			</motion.div>
			<div className="flex flex-col lg:flex-row md:gap-10 gap-6 lg:gap-32">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex-1 flex flex-col md:gap-8 gap-2 text-center lg:text-left"
				>
					<div className="flex flex-col gap-4">
						<h2 className="font-display text-xl lg:text-5xl font-semibold text-foreground tracking-tight">
							Let's build something amazing together.
						</h2>
					</div>
					<p className="text-muted-foreground md:text-lg text-sm leading-relaxed font-normal">
						Whether you have a question or just want to say hi, I'll try my best to get back to you!
					</p>
					<div className="flex flex-col gap-4 mt-4">
						<a
							href="mailto:anna.zoi@yahoo.com"
							className="md:text-xl text-lg font-medium text-foreground hover:text-primary transition-colors"
						>
							anna.zoi@yahoo.com
						</a>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="flex-1 w-full"
				>
					<motion.div
						animate={{ y: [0, -12, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
					>
						<form
							onSubmit={handleSubmit}
							className="glass md:p-8 p-4 lg:p-12 md:rounded-[3rem] rounded-[1rem] shadow-2xl border-white/5 relative overflow-hidden group/form"
						>
							<div className="flex flex-col md:gap-8 gap-4 relative z-10">
								<div className="flex flex-col sm:flex-row md:gap-8 gap-4">
									<Input
										name="First name"
										label="First name *"
										value={form.firstName}
										required
										onChange={handleChange('firstName')}
									/>
									<Input
										name="Last name"
										label="Last name *"
										value={form.lastName}
										required
										onChange={handleChange('lastName')}
									/>
								</div>
								<div className="flex flex-col sm:flex-row md:gap-8 gap-4">
									<Input
										name="Email address"
										label="Email address *"
										type="email"
										value={form.email}
										required
										onChange={handleChange('email')}
									/>
									<Input
										name="Phone number"
										label="Phone number"
										type="tel"
										value={form.phone}
										onChange={handleChange('phone')}
									/>
								</div>
								<div>
									<Textarea
										name="Your message"
										label="Message *"
										value={form.message}
										required
										onChange={handleChange('message')}
									/>
								</div>

								{status === 'success' && (
									<StatusMessage type="success" message="✅ Message sent! I'll get back to you soon." />
								)}
								{status === 'error' && (
									<StatusMessage
										type="error"
										message="❌ Something went wrong. Please try again or email me directly."
									/>
								)}

								<button
									type="submit"
									disabled={status === 'sending'}
									className="cursor-pointer bg-primary md:text-lg text-sm text-primary-foreground font-medium py-2 px-4 md:py-4 md:px-6 rounded-xl md:rounded-2xl hover:bg-foreground/90 transition-all hover:scale-[1.01] active:scale-95 md:mt-4 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
								>
									{status === 'sending' ? 'Sending…' : 'Send Message'}
								</button>
							</div>
							<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity" />
						</form>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
