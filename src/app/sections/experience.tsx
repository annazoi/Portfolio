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
		<div id="experience" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 flex flex-col gap-16">
			<div className="flex flex-col items-center gap-4">
				<h3 className="header">Experience</h3>
				<p className="text-slate-400 text-center max-w-2xl">A timeline of my professional journey, focusing on delivering high-quality web solutions.</p>
			</div>

			<div className="relative group/carousel">
				<div className="overflow-hidden p-4 -m-4">
					<motion.div
						className="flex"
						animate={{ x: `-${(index / itemsPerSlide) * 100}%` }}
						transition={isAnimating ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
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
						{Array.from({ length: Math.ceil(extendedSites.length / itemsPerSlide) }, (_, i) => {
							const first = extendedSites[i * 2];
							const second = extendedSites[i * 2 + 1];

							return (
								<div key={i} className="min-w-full lg:px-4 flex flex-col gap-12 lg:gap-20">
									{[first, second].filter(Boolean).map((site, idx) => (
										<div
											key={site.id + '-' + i + '-' + idx}
											className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${sites.findIndex((s) => s.id === site.id) % 2 !== 0 ? 'lg:flex-row-reverse' : ''
												} group`}
										>
											<div className="flex-1 flex flex-col gap-6">
												<div className="flex flex-col gap-2">
													<p className="text-primary font-bold tracking-wider uppercase text-xs">Featured Site</p>
													<h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{site.name}</h3>
												</div>

												<div className="bg-black/80 backdrop-blur-lg p-6 rounded-3xl relative z-10 shadow-[0_0_15px_rgba(79,57,246,0.2)] group-hover:shadow-[0_0_25px_rgba(79,57,246,0.4)] border border-primary/30 group-hover:border-primary/60 transition-all duration-500">
													<p className="text-slate-200 leading-relaxed font-medium">{site.description}</p>
												</div>
											</div>

											<div className="flex-1 relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl group-hover:border-primary/50 transition-all duration-500 cursor-pointer">
												<Image
													src={site.photo}
													alt={site.name}
													fill
													className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
												/>
												<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
					className="absolute -left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-white z-10 opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-primary/20 ring-1 ring-white/10"
				>
					<ChevronLeftIcon className="h-6 w-6" />
				</button>

				<button
					onClick={next}
					className="absolute -right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-white z-10 opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-primary/20 ring-1 ring-white/10"
				>
					<ChevronRightIcon className="h-6 w-6" />
				</button>
			</div>
		</div>
	);
};

export default Experience;
