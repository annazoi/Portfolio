'use client';

import './style.css';
import photo from '../assets/photo.png';
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
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col gap-20" id="about">
			<div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
				<div className="text flex flex-col gap-8">
					<h3>I am Anna Zoi</h3>
					<h2>Full-Stack Developer.</h2>
					<p>I turn complex ideas into intuitive, high-performing digital products.</p>
					<div>
						<div className="max-w-fit m-auto lg:ml-0 mt-6 link ">
							<button>Download CV</button>
							<ArrowDownTrayIcon className="size-4 m-auto" />
						</div>
						{/* social */}
						<div></div>
					</div>
				</div>
				<div className="photo m-auto md:ml-auto">
					<Tilt glareEnable={false} glareMaxOpacity={0} scale={1} tiltMaxAngleX={8} tiltMaxAngleY={8}>
						<Image src={photo} alt="Anna Zoi" />
					</Tilt>
				</div>
			</div>
			<div className="statics grid grid-cols-2 md:grid-cols-4 gap-8">
				{stats.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: -40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true, amount: 0.5 }}
						className="text-center"
					>
						<p className="text-3xl font-bold text-[#5f6396]">
							<CountUp end={item.value} duration={2.5} enableScrollSpy />
							{item.suffix}
						</p>
						<span className="text-gray-500">{item.label}</span>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default About;
