'use client';

import './style.css';
import zivo from '../assets/projects/zivo.png';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
	const [isHovered, setIsHovered] = useState(false);

	const projects = [
		{
			id: 1,
			name: 'Zivo',
			photo: zivo,
			description: 'Focused on real-time collaboration, secure messaging, and smart AI assistants.',
			url: 'https://chat-ionic.vercel.app/',
		},
		{
			id: 2,
			name: 'name',
			photo: zivo,
			description: 'desc',
			url: 'https://chat-ionic.vercel.app/',
		},
		{
			id: 3,
			name: 'name',
			photo: zivo,
			description: 'desc',
			url: 'https://chat-ionic.vercel.app/',
		},
	];

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col gap-10 projects">
			<h3 className="header">My Projects</h3>
			<div className="m-auto grid grid-cols-1  lg:grid-cols-2 gap-5 lg:gap-10">
				{projects.map((project: any) => {
					return (
						<motion.div className="project" key={project.id} whileHover="hovered">
							<div>
								<Image src={project.photo} alt={project.name} />
							</div>
							<a href={project.url} target="_blank" rel="noopener noreferrer">
								<motion.div
									className="name absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-[#0b0820] p-5 rounded-lg w-[108%] text-white flex items-center cursor-pointer "
									initial={{ opacity: 0, y: -20 }}
									variants={{
										hovered: { opacity: 1, y: 0 },
										initial: { opacity: 0, y: -20 },
									}}
									transition={{ duration: 0.25 }}
								>
									<div className="flex flex-col gap-4">
										<span className="font-semibold">{project.name}</span>
										<span className="text-sm max-w-100">{project.description}</span>
									</div>

									<ArrowUpRightIcon className="h-5 w-5 mt-2 ml-auto" />
								</motion.div>
							</a>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
