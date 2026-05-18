'use client';

import { Site } from '@/interfaces';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import aveliavilla from '@/assets/sites/aveliavilla.jpg';
import sunterra from '@/assets/sites/sunterra.jpg';
import melba from '@/assets/sites/melba.jpg';
import cretantour from '@/assets/sites/cretantour.jpg';
import diorebeauty from '@/assets/sites/diorebeauty.jpg';
import xylouris from '@/assets/sites/xylouris.jpg';
import transfersheraklion from '@/assets/sites/transfersheraklion.jpg';

function chunkSites<T>(items: T[], size: number): T[][] {
	const chunks: T[][] = [];
	for (let i = 0; i < items.length; i += size) {
		chunks.push(items.slice(i, i + size));
	}
	return chunks;
}

const Experience = () => {
	const sites: Site[] = [
		{
			id: '1',
			name: 'Avelia Villa',
			photo: aveliavilla,
			url: 'https://aveliavilla.gr/',
			description:
				'A vacation villa website that presents photos of the villa and detailed information about its facilities. Visitors can explore activities available in the surrounding area and make a booking directly through the website.',
		},
		{
			id: '4',
			name: 'Melba',
			photo: melba,
			url: 'https://melba.gr/',
			description:
				'A website for a sweets shop, offering visitors information about the menu, products, and store details. Users can explore available treats, learn more about the brand, and easily contact the store for inquiries.',
		},
		{
			id: '2',
			name: 'Sunterra',
			photo: sunterra,
			url: 'https://sunterra.gr/',
			description:
				'A vacation rental website that allows users to browse and book holiday homes. The platform showcases available properties with detailed descriptions and photos, making it simple for visitors to find and reserve accommodations.',
		},
		{
			id: '3',
			name: 'Xylouris',
			photo: xylouris,
			url: 'https://xylouris.gr/',
			description:
				'A traditional restaurant website where visitors can view photos of dishes, explore recipes, and make a table reservation through an easy-to-use interface.',
		},
		{
			id: '5',
			name: 'Cretantour',
			photo: cretantour,
			url: 'https://cretantour.com/',
			description:
				'A tour operator website that presents the excursions organized by the company in Crete. Visitors can browse available tours, create a custom tour based on their preferences, and explore the company’s content and material.',
		},
		{
			id: '6',
			name: 'Diore Beauty',
			photo: diorebeauty,
			url: 'https://diorebeauty.gr/',
			description:
				'A booking website for a beauty salon in Heraklion, allowing customers to schedule appointments for services such as manicure, pedicure, and other beauty treatments through an online reservation system.',
		},
		{
			id: '7',
			name: 'Transfer Heraklion',
			photo: transfersheraklion,
			url: 'https://www.testdomain.gr/transfersheraklion.com/',
			description:
				'A booking website for a beauty salon in Heraklion, allowing customers to schedule appointments for services such as manicure, pedicure, and other beauty treatments through an online reservation system.',
		},
	];

	const [isMd, setIsMd] = useState(false);
	useLayoutEffect(() => {
		const mq = window.matchMedia('(min-width: 768px)');
		const up = () => setIsMd(mq.matches);
		up();
		mq.addEventListener('change', up);
		return () => mq.removeEventListener('change', up);
	}, []);
	const slides = isMd ? chunkSites(sites, 2) : sites.map((s) => [s]);

	return (
		<motion.div
			id="experience"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
			className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-32 mt-10 flex flex-col md:gap-16 gap-5 pt-5 md:pt-0"
		>
			<div className="flex flex-col items-center gap-4">
				<h3 className="header text-gradient">Experience</h3>
				<p className="text-muted-foreground text-center max-w-2xl font-normal">A timeline of my professional journey.</p>
			</div>

			<div className="relative group/carousel experience-swiper">
				<Swiper
					key={isMd ? 'pair' : 'single'}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					slidesPerGroup={1}
					navigation={{
						prevEl: '.experience-prev',
						nextEl: '.experience-next',
					}}
					pagination={{
						clickable: true,
					}}
					autoplay={{ delay: 6000, disableOnInteraction: false }}
					loop={true}
					className="pb-16"
				>
					{slides.map((pair, slideIdx) => (
						<SwiperSlide key={pair.map((s) => s.id).join('-')} className="!h-auto">
							<div className="flex flex-col gap-8 md:gap-16">
								{pair.map((site, iInPair) => {
									const idx = isMd ? slideIdx * 2 + iInPair : slideIdx;
									return (
										<a key={site.id} href={site.url} target="_blank" className="block">
											<div
												className={`hover:bg-white/[0.02] transition-all duration-300 md:p-8 p-5 rounded-3xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16 
													${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} group cursor-pointer`}
											>
												<div className="flex-1 flex flex-col gap-6 w-full">
													<div className="flex flex-col gap-2">
														<p className="text-muted-foreground font-medium tracking-wider uppercase text-xs">
															Featured Site
														</p>
														<h3 className="text-3xl font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight">
															{site.name}
														</h3>
													</div>
													<div className="bg-muted/80 backdrop-blur-lg p-6 rounded-3xl relative z-10 border border-border group-hover:border-white/15 transition-all">
														<p className="text-secondary-foreground leading-relaxed font-normal">{site.description}</p>
													</div>
												</div>

												<div className="flex-1 relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-3xl border border-border shadow-2xl group-hover:border-white/15 transition-all duration-500">
													<Image
														src={site.photo}
														alt={site.name}
														fill
														className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
													/>
												</div>
											</div>
										</a>
									);
								})}
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className="experience-prev absolute md:-left-2 left-2 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-foreground z-10 md:opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-white/5 hover:border-border ring-1 ring-white/5 cursor-pointer">
					<ChevronLeftIcon className="h-6 w-6 " />
				</button>

				<button className="experience-next absolute md:-right-2 right-2 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-foreground z-10 md:opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-white/5 hover:border-border ring-1 ring-white/5 cursor-pointer">
					<ChevronRightIcon className="h-6 w-6 " />
				</button>
			</div>
		</motion.div>
	);
};

export default Experience;
