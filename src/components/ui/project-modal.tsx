'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Project } from '@/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectModalProps {
	project: Project;
	onOpen: boolean;
	onClose: () => void;
}

export default function ProjectModal({ project, onOpen, onClose }: ProjectModalProps) {
	const photos = project.photos || [project.photo];

	return (
		<Dialog open={onOpen} onClose={onClose} className="relative z-50">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-background/90 backdrop-blur-md transition-opacity duration-300 ease-out data-closed:opacity-0"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-12">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-[2.5rem] bg-muted backdrop-blur-2xl border border-border p-4 text-left shadow-2xl transition-all duration-300 ease-out data-closed:translate-y-4 data-closed:opacity-0 data-closed:scale-95 sm:my-8 sm:w-full max-w-5xl"
					>
						<button
							onClick={onClose}
							className="absolute top-6 right-6 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors z-20"
						>
							<XMarkIcon className="size-6" />
						</button>

						<div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 h-full">
							{/* Left: Image Slider */}
							<div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-secondary border border-border group modal-swiper">
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									spaceBetween={0}
									slidesPerView={1}
									navigation={{
										prevEl: '.modal-prev',
										nextEl: '.modal-next',
									}}
									pagination={{
										clickable: true,
										dynamicBullets: true,
									}}
									autoplay={{ delay: 5000, disableOnInteraction: false }}
									loop={photos.length > 1}
									className="h-full w-full"
								>
									{photos.map((photo, i) => (
										<SwiperSlide key={i}>
											<div className="relative w-full h-full flex items-center justify-center">
												<Image
													src={photo}
													alt={`${project.name} photo ${i + 1}`}
													fill
													className="object-contain p-2"
													priority={i === 0}
												/>
											</div>
										</SwiperSlide>
									))}
								</Swiper>

								{photos.length > 1 && (
									<>
										<button className="modal-prev absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/5 hover:border-white/15">
											<ChevronLeftIcon className="size-5" />
										</button>
										<button className="modal-next absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/5 hover:border-white/15">
											<ChevronRightIcon className="size-5" />
										</button>
									</>
								)}
							</div>

							{/* Right: Project Details */}
							<div className="flex flex-col justify-between py-4 lg:pr-6">
								<div>
									<DialogTitle
										as="h3"
										className="text-2xl font-semibold text-foreground mb-4 tracking-tight"
									>
										{project.name}
									</DialogTitle>
									<p className="text-muted-foreground leading-relaxed text-sm mb-6 font-normal">
										{project.description}
									</p>
								</div>

								<div className="flex flex-col gap-4">
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-center hover:bg-foreground/90 hover:scale-[1.01] active:scale-[0.98] transition-all uppercase tracking-widest text-xs"
									>
										Visit Live Project
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
