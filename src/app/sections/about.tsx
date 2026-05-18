'use client';

import './style.css';
import photo from '@/assets/about/anna-zoi.jpg';
import github from '@/assets/about/github.png';
import linkedin from '@/assets/about/linkedin.png';
import { ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const CV_URL = '/assets/resume-anna-zoi.pdf';

const About = () => {
	const [cvOpen, setCvOpen] = useState(false);
	const stats = [
		{ value: 10, label: 'Projects Built', suffix: '+' },
		{ value: 14, label: 'Live Websites', suffix: '+' },
		{ value: 5, label: 'Years of Experience', suffix: '+' },
		{ value: 5, label: 'Full-Stack Applications', suffix: '+' },
	];

	return (
		<div
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-20 mt-0 about flex flex-col md:gap-20 gap-12"
			id="about"
		>
			<div className="flex flex-col-reverse items-center lg:flex-row m-auto gap-5 lg:gap-40">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text flex flex-col gap-6 lg:text-left text-center"
				>
					<h3>I am Anna Zoi</h3>
					<h2 className="font-display md:text-3xl text-2xl lg:text-6xl font-semibold tracking-tight text-foreground">
						Full-Stack <br className="hidden lg:block" />
						Developer.
					</h2>
					<p className="md:text-lg text-sm max-w-xl mx-auto lg:mx-0">
						I turn complex ideas into intuitive, high-performing digital products with a focus on user experience
						and performance.
					</p>
					<div className="flex items-center gap-4 lg:flex-row flex-col">
						<button
							type="button"
							className="max-w-fit mx-auto lg:ml-0 md:mt-8 mt-2 link group cursor-pointer"
							onClick={() => setCvOpen(true)}
						>
							<span>Resume</span>
							<ArrowDownTrayIcon className="size-5" />
						</button>
						<Dialog open={cvOpen} onClose={() => setCvOpen(false)} className="relative z-50">
							<DialogBackdrop
								transition
								className="fixed inset-0 bg-background/90 backdrop-blur-md transition-opacity duration-300 ease-out data-closed:opacity-0"
							/>
							<div className="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-8">
								<DialogPanel
									transition
									className="relative flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-muted p-4 shadow-2xl transition-all duration-300 ease-out data-closed:translate-y-4 data-closed:opacity-0 data-closed:scale-95 sm:p-6"
								>
									<button
										type="button"
										onClick={() => setCvOpen(false)}
										className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground z-10"
										aria-label="Close"
									>
										<XMarkIcon className="size-6" />
									</button>
									<iframe title="Resume preview" src={CV_URL} className="h-[70vh] w-full rounded-xl border border-white/10 bg-black/40" />
									<a
										href={CV_URL}
										download="resume-anna-zoi.pdf"
										className="link group mx-auto w-fit cursor-pointer flex tems-center gap-[.5rem]"
										onClick={() => setCvOpen(false)}
									>
										<span>Download PDF</span>
										<ArrowDownTrayIcon className="size-5" />
									</a>
								</DialogPanel>
							</div>
						</Dialog>
						{/* social */}
							<a
								href="https://github.com/annazoi"
								target="_blank"
								className="link group cursor-pointer font-semibold px-4"
							>
								<span>GitHub</span>
								<Image src={github} alt="GitHub" width={20} height={20} />
							</a>

							<a
								href="https://www.linkedin.com/in/anna-zoi/"
								target="_blank"
								className="link group cursor-pointer font-semibold px-4"
							>
								<span>LinkedIn</span>
								<Image src={linkedin} alt="Linkedin" width={20} height={20} />
							</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="photo m-auto md:ml-auto md:max-w-full max-w-[12rem]"
				>
					<Tilt glareEnable={false} glareMaxOpacity={0} scale={1} tiltMaxAngleX={8} tiltMaxAngleY={8}>
						<Image src={photo} alt="Anna Zoi" width={300} height={300} className="rounded-3xl" />
					</Tilt>
				</motion.div>
			</div>
			<div className="statics grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-4">
				{stats.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: -40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true, amount: 0.5 }}
						className="text-center"
					>
						<p className="md:text-3xl text-2xl font-semibold text-foreground tracking-tight">
							<CountUp end={item.value} duration={2.5} enableScrollSpy />
							{item.suffix}
						</p>
						<span className="text-muted-foreground md:text-base text-sm font-medium">{item.label}</span>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default About;
