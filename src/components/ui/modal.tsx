'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalOptions {
	onOpen: boolean;
	onClose: (value: boolean) => void;
	description: string;
	icon: any;
	name: string;
}

export default function Modal({ onOpen, onClose, name, description, icon }: ModalOptions) {
	return (
		<AnimatePresence>
			{onOpen && (
				<Dialog open={onOpen} onClose={() => onClose(false)} className="relative z-50">
					<DialogBackdrop
						as={motion.div}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-background/70 backdrop-blur-sm transition-opacity"
					/>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
							<DialogPanel
								as={motion.div}
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								className="relative transform overflow-hidden rounded-2xl bg-muted backdrop-blur-xl border border-border p-6 text-left shadow-2xl sm:my-8 sm:w-full sm:max-w-md"
							>
								{/* Close Button */}
								<button
									onClick={() => onClose(false)}
									className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
								>
									<XMarkIcon className="size-5" />
								</button>

								<div className="flex flex-col items-center gap-6 mt-4">
									<div className="relative size-20 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center">
										{typeof icon === 'function' ? (
											(() => {
												const IconComponent = icon;
												return <IconComponent className="size-10 text-foreground" />;
											})()
										) : icon ? (
											<Image src={icon} alt={name} fill className="object-contain p-4" />
										) : null}
									</div>

									<div className="text-center">
										<DialogTitle as="h3" className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
											{name}
										</DialogTitle>
										<p className="text-muted-foreground leading-relaxed font-normal">
											{description}
										</p>
									</div>
								</div>

								<div className="mt-8 flex justify-center">
									<button
										type="button"
										onClick={() => onClose(false)}
										className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-foreground/90 hover:scale-[1.01] transition-all"
									>
										Got it!
									</button>
								</div>
							</DialogPanel>
						</div>
					</div>
				</Dialog>
			)}
		</AnimatePresence>
	);
}
