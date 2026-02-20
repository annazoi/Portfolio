'use client';

import { Site } from '@/interfaces';
import Image from 'next/image';
import zivo from '@/assets/projects/zivo.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
	const sites: Site[] = [
		{
			id: '1',
			name: 'Avelia Villa',
			photo: zivo,
			description:
				'A vacation villa website that presents photos of the villa and information about its facilities. Visitors can explore activities available in the surrounding area and make a booking for the villa.',
		},
		{
			id: '2',
			name: 'Sunterra',
			photo: zivo,
			description:
				'A vacation villa website that presents photos of the villa and information about its facilities. Visitors can explore activities available in the surrounding area and make a booking for the villa.',
		},
		{
			id: '3',
			name: 'Cretantour',
			photo: zivo,
			description:
				'A vacation villa website that presents photos of the villa and information about its facilities. Visitors can explore activities available in the surrounding area and make a booking for the villa.',
		},
		{
			id: '4',
			name: 'Another Project',
			photo: zivo,
			description:
				'A vacation villa website that presents photos of the villa and information about its facilities. Visitors can explore activities available in the surrounding area and make a booking for the villa.',
		},
	];

	const itemsPerSlide = 2;

	const extendedSites = [...sites.slice(-itemsPerSlide), ...sites, ...sites.slice(0, itemsPerSlide)];

	const [index, setIndex] = useState(itemsPerSlide);
	const [isAnimating, setIsAnimating] = useState(true);

	const next = () => {
		setIndex((prev) => prev + itemsPerSlide);
	};

	const prev = () => {
		setIndex((prev) => prev - itemsPerSlide);
	};

	return (
		<div id="experience" className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 flex flex-col gap-20">
			<h3 className="header mt-10">Work Experience</h3>

			<div className="overflow-hidden">
				<motion.div
					className="flex"
					animate={{ x: `-${(index / itemsPerSlide) * 100}%` }}
					transition={isAnimating ? { duration: 0.5 } : { duration: 0 }}
					onAnimationComplete={() => {
						if (index >= sites.length + itemsPerSlide) {
							setIsAnimating(false);
							setIndex(itemsPerSlide);
						}

						if (index < itemsPerSlide) {
							setIsAnimating(false);
							setIndex(sites.length);
						}

						setTimeout(() => setIsAnimating(true), 0);
					}}
				>
					{Array.from({ length: extendedSites.length / itemsPerSlide }, (_, i) => {
						const first = extendedSites[i * 2];
						const second = extendedSites[i * 2 + 1];

						return (
							<div key={i} className="min-w-full flex flex-col gap-20">
								{[first, second].map((site) => (
									<div
										key={site.id + i}
										className={`flex ${
											sites.findIndex((s) => s.id === site.id) % 2 !== 0 ? 'flex-row-reverse' : ''
										} experience`}
									>
										<div className="flex flex-col gap-4 m-auto">
											<h3 className="font-bold text-lg name">{site.name}</h3>

											<div className="max-w-[50rem] p-5 rounded-xl bg-white/10 backdrop-blur-xl h-fit z-1">
												<p className="text-sm">{site.description}</p>
											</div>
										</div>

										<div className="border-l-[2rem] border-t-[1.2rem] border-[#17182f] -ml-[4rem] rounded-tl-xl rounded-tr-xl bg-[#17182f] transition duration-500 overflow-hidden photo cursor-pointer">
											<Image
												src={site.photo}
												alt={site.name}
												width={500}
												className="rounded-tl-xl rounded-br-xl hover:scale-110 transition duration-500 ease-in-out"
											/>
										</div>
									</div>
								))}
							</div>
						);
					})}
				</motion.div>
			</div>

			<button
				onClick={prev}
				className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
			>
				<ChevronLeftIcon className="h-6 w-6" />
			</button>

			<button
				onClick={next}
				className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
			>
				<ChevronRightIcon className="h-6 w-6" />
			</button>
		</div>
	);
};

export default Experience;
