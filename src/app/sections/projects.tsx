'use client';

import './style.css';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import svyazLogin from '@/assets/projects/svyaz/login.jpg';
import svyazChats from '@/assets/projects/svyaz/chats.jpg';
import svyazChat from '@/assets/projects/svyaz/chat.jpg';
import svyazAi from '@/assets/projects/svyaz/ai.jpg';
import svyazAiProgressing from '@/assets/projects/svyaz/ai-1.jpg';
import svyazSummary from '@/assets/projects/svyaz/ai-2.jpg';
import svyazSentimentAnlysis from '@/assets/projects/svyaz/ai-3.jpg';
import svyazCall from '@/assets/projects/svyaz/call.jpg';
import svyazCreateChat from '@/assets/projects/svyaz/create-chat.jpg';
import habitryLanding from '@/assets/projects/habitry/landing.jpg';
import habitryDashboard from '@/assets/projects/habitry/dashboard.jpg';
import habitryAddActivity from '@/assets/projects/habitry/addActivity.jpg';
import habitryCalendar from '@/assets/projects/habitry/calendar.jpg';
import habitryLogin from '@/assets/projects/habitry/login.jpg';
import drobeLogin from '@/assets/projects/drobe/login.jpg';
import drobeHome from '@/assets/projects/drobe/home.jpg';
import drobeStudio from '@/assets/projects/drobe/studio.jpg';
import drobeOutfits from '@/assets/projects/drobe/outfits.jpg';
import drobeAddPhoto from '@/assets/projects/drobe/add_photo.jpg';
import drobeClothingCutout from '@/assets/projects/drobe/clothing_cutout.jpg';
import drobeSaveClothingItem from '@/assets/projects/drobe/save_clothing_item.jpg';
import drobeArchives from '@/assets/projects/drobe/archives.jpg';
import drobeClothingOverview from '@/assets/projects/drobe/clothing_overview.jpg';
import drobeCreatedClothingItem from '@/assets/projects/drobe/created_clothing_item.jpg';
import relayLanding from '@/assets/projects/relay/landing.png';

import latherLabHome from '@/assets/projects/latherlab/home.png'
import latherLabCollection from '@/assets/projects/latherlab/collection.jpg'
import latherLabProduct from '@/assets/projects/latherlab/product.jpg'
import latherLabCart from '@/assets/projects/latherlab/cart.jpg'
import latherLabCheckout from '@/assets/projects/latherlab/checkout.jpg'
import latherLabDashboard from '@/assets/projects/latherlab/dashboard.jpg'
import latherLabProducts from '@/assets/projects/latherlab/products.jpg'
import latherLabContact from '@/assets/projects/latherlab/contact.jpg'

import { Project } from '../../interfaces';
import ProjectModal from '@/components/ui/project-modal';
import { motion } from 'framer-motion';

const Projects = () => {
	const projects: Project[] = [
		{
			id: '1',
			name: 'Svyaz',
			photo: svyazChat,
			photos: [
				svyazLogin,
				svyazChats,
				svyazChat,
				svyazAi,
				svyazAiProgressing,
				svyazSummary,
				svyazSentimentAnlysis,
				svyazCall,
				svyazCreateChat,
			],
			description: 'Focused on real-time collaboration, secure messaging, and smart AI assistants.',
			url: 'https://svyaz.annazoi.dev/',
		},
		{
			id: '2',
			name: 'Habitry',
			photo: habitryLanding,
			photos: [habitryLanding, habitryLogin, habitryDashboard, habitryAddActivity, habitryCalendar],
			description:
				'A modern, AI-powered habit tracking application designed to help users build positive habits and achieve their goals through intelligent insights and personalized guidance.',
			url: 'https://habitry.annazoi.dev/',
		},
		{
			id: '3',
			name: 'Drobe',
			photo: drobeHome,
			photos: [
				drobeHome,
				drobeLogin,
				drobeStudio,
				drobeOutfits,
				drobeAddPhoto,
				drobeClothingCutout,
				drobeCreatedClothingItem,
				drobeSaveClothingItem,
				drobeArchives,
				drobeClothingOverview,
			],
			description:
				'A modern digital wardrobe app that lets users organize their clothes with smart background removal for clean, ready-to-use photos. Users can mix and match items on an easy-to-use canvas to plan outfits and share their style with others. Built with React and NestJS, Drobe combines AI-powered image processing with a fast, scalable, and cross-platform-ready design.',
			url: 'https://drobe.annazoi.dev/',
		},

		{
			id: '4',
			name: 'Lather Shop',
			photo: latherLabHome,
			photos: [latherLabHome, latherLabCollection, latherLabProduct, latherLabCart, latherLabCheckout, latherLabDashboard, latherLabProducts, latherLabContact],
			description:
				'Handmade soap e-commerce platform with product browsing and secure checkout.',
			url: 'https://latherlab.annazoi.dev/',
		},
		// {
		// 	id: '5',
		// 	name: 'Relay',
		// 	photo: relayLanding,
		// 	photos: [relayLanding],
		// 	description:
		// 		'A high-performance communication and data transfer platform designed for seamless real-time connectivity. Relay provides robust infrastructure for secure, scalable, and instant messaging systems across global networks.',
		// 	url: 'https://relay.annazoi.dev/',
		// },
	];

	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	return (
		<motion.div
			id="projects"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
			className="mx-auto md:mt-32 mt-0 px-4 relative overflow-hidden max-w-7xl"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="flex flex-col items-center gap-4 md:mb-16 mb-5"
			>
				<h3 className="header text-gradient">Featured Projects</h3>
				<p className="text-muted-foreground text-center max-w-2xl text-sm md:text-lg font-normal">
					A selection of my recent work, ranging from real-time collaboration tools to complex full-stack
					applications.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="relative group/carousel projects-swiper"
			>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={0}
					slidesPerView={1}
					navigation={{
						prevEl: '.projects-prev',
						nextEl: '.projects-next',
					}}
					autoplay={{ delay: 6000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						768: {
							slidesPerView: 1,
						},
						1024: {
							slidesPerView: 2,
						},
					}}
					className="pb-16"
				>
					{projects.map((project) => (
						<SwiperSlide key={project.id} className="px-4">
							<div
								onClick={() => handleProjectClick(project)}
								className="block relative h-full cursor-pointer group"
							>
								{/* Animated Border Wrapper */}
								<div className="relative p-[1px] rounded-[2rem] overflow-hidden bg-border group-hover:bg-transparent transition-colors duration-500">
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-border-flow transition-opacity duration-500" />

									<div className="relative overflow-hidden rounded-[calc(2rem-1px)] aspect-[16/10] bg-muted border border-border shadow-2xl flex items-center justify-center">
										{project.photo && (
											<Image
												src={project.photo}
												alt={project.name}
												className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-60 rounded-2xl scale-105 h-full"
											/>
										)}

										<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />

										{/* Cyber Tag */}
										<div className="absolute top-6 left-6 flex items-center gap-2 scale-90 opacity-100 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 origin-top-left">
											<div className="bg-foreground/10 backdrop-blur-sm border border-border px-5 py-2 rounded-full">
												<p className="text-[10px] font-medium tracking-[0.15em] text-foreground uppercase">
													{project.name}
												</p>
											</div>
										</div>

										{/* Immersive Reveal */}
										<div className="absolute inset-0 flex flex-col justify-center p-6 scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
											<div className="bg-background/80 backdrop-blur-2xl p-6 rounded-3xl border border-border flex flex-col gap-4">
												<div className="flex justify-between items-start">
													<h4 className="text-2xl font-semibold text-foreground tracking-tight">{project.name}</h4>
													<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-border">
														<div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
													</div>
												</div>
												<p className="text-sm text-secondary-foreground leading-relaxed font-normal line-clamp-3">
													{project.description}
												</p>
												<div className="flex items-center gap-2 text-muted-foreground font-medium text-xs uppercase tracking-widest mt-2 group/btn cursor-pointer">
													<span>View Details</span>
													<div className="w-8 h-px bg-border group-hover/btn:w-12 transition-all duration-300" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className="projects-prev absolute md:-left-2 left-2 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-foreground z-10 md:opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-white/5 hover:border-border ring-1 ring-white/5 cursor-pointer">
					<ChevronLeftIcon className="h-6 w-6 " />
				</button>

				<button className="projects-next absolute md:-right-2 right-2 top-1/2 -translate-y-1/2 glass p-3 rounded-full text-foreground z-10 md:opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-white/5 hover:border-border ring-1 ring-white/5 cursor-pointer">
					<ChevronRightIcon className="h-6 w-6 " />
				</button>
			</motion.div>

			{selectedProject && (
				<ProjectModal project={selectedProject} onOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			)}
		</motion.div>
	);
};

export default Projects;
