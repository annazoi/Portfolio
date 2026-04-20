'use client';

import './style.css';
import photo from '@/assets/about/photo.png';
import github from '@/assets/about/github.png';
import linkedin from '@/assets/about/linkedin.png';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const About = () => {
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
					<h3 className="text-primary font-semibold tracking-wide md:text-sm text-lg">I am Anna Zoi</h3>
					<h2 className="md:text-3xl text-2xl lg:text-7xl font-extrabold tracking-tight text-white">
						Full-Stack <br className="hidden lg:block" />
						<span className="text-gradient">Developer.</span>
					</h2>
					<p className="md:text-lg text-sm text-slate-400 max-w-xl mx-auto lg:mx-0">
						I turn complex ideas into intuitive, high-performing digital products with a focus on user experience
						and performance.
					</p>
					<div className="flex items-center gap-4 lg:flex-row flex-col">
						<a
							className="max-w-fit mx-auto lg:ml-0 md:mt-8 mt-2 link group cursor-pointer"
							href="/assets/resume.pdf"
							download="Anna_Zoi_Resume.pdf"
						>
							<span>Download CV</span>
							<ArrowDownTrayIcon className="size-5" />
						</a>
						{/* social */}
						<div className="flex items-center gap-4">
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
						<p className="md:text-3xl text-2xl font-bold text-[#5f6396]">
							<CountUp end={item.value} duration={2.5} enableScrollSpy />
							{item.suffix}
						</p>
						<span className="text-gray-500 md:text-lg text-sm">{item.label}</span>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default About;
