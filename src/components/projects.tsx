'use client';

import './style.css';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import zivo from '../assets/projects/zivo.png';

type Project = {
	id: number;
	name: string;
	photo: StaticImageData;
	description: string;
	url: string;
};

const Projects = () => {
	const projects: Project[] = [
		{
			id: 1,
			name: 'Zivo',
			photo: zivo,
			description: 'Focused on real-time collaboration, secure messaging, and smart AI assistants.',
			url: 'https://chat-ionic.vercel.app/',
		},
		{
			id: 2,
			name: 'Project 2',
			photo: zivo,
			description: 'Second project description.',
			url: 'https://chat-ionic.vercel.app/',
		},
		{
			id: 3,
			name: 'Project 3',
			photo: zivo,
			description: 'Third project description.',
			url: 'https://chat-ionic.vercel.app/',
		},
		{
			id: 4,
			name: 'Project 4',
			photo: zivo,
			description: 'Fourth project description.',
			url: 'https://chat-ionic.vercel.app/',
		},
	];

	const [visible, setVisible] = useState(3);
	const [index, setIndex] = useState(3);

	// Detect screen size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setVisible(1);
			} else if (window.innerWidth < 1024) {
				setVisible(2);
			} else {
				setVisible(3);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const extendedProjects = [...projects.slice(-visible), ...projects, ...projects.slice(0, visible)];

	const next = () => setIndex((prev) => prev + 1);
	const prev = () => setIndex((prev) => prev - 1);

	return (
		<div className="mx-auto max-w-7xl mt-20 px-4 relative overflow-hidden">
			<h3 className="header text-center mb-10">My Projects</h3>

			<div className="relative overflow-hidden">
				<motion.div
					className="flex"
					animate={{
						x: `-${index * (100 / visible)}%`,
					}}
					transition={{ duration: 0.5 }}
					onAnimationComplete={() => {
						if (index >= projects.length + visible) {
							setIndex(visible);
						}
						if (index < visible) {
							setIndex(projects.length + visible - 1);
						}
					}}
				>
					{extendedProjects.map((project, i) => (
						<div key={i} className="flex-shrink-0 px-3 relative" style={{ width: `${100 / visible}%` }}>
							<a href={project.url} target="_blank">
								<div className="relative overflow-hidden rounded-2xl">
									<Image
										src={project.photo}
										alt={project.name}
										className=" w-full hover:scale-106 transform transition-transform duration-300 object-cover "
									/>
								</div>
								<div className="absolute left-6 top-4  px-1.5 py-0.5 rounded-full bg-[#17182F]">
									{project.name}
								</div>

								<div className="absolute left-0 bottom-4  px-1.5 py-0.5 rounded-[15px] bg-[#17182F]  border-2 ">
									<p className="text-sm p-2">{project.description}</p>
								</div>
							</a>
						</div>
					))}
				</motion.div>

				<button
					onClick={prev}
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
				>
					<ChevronLeftIcon className="h-6 w-6" />
				</button>

				<button
					onClick={next}
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
				>
					<ChevronRightIcon className="h-6 w-6" />
				</button>
			</div>
		</div>
	);
};

export default Projects;
