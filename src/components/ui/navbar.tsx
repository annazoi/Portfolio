'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'About', href: '#about' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Education', href: '#education' },
	{ name: 'Contact', href: '#contact' },
];

function classNames(...classes: (string | false | null | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			<nav
				className={classNames(
					'sticky top-0 z-50 transition-all duration-500',
					scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent',
				)}
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between transition-all duration-500">
						<div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
							<div className="flex shrink-0 items-center gap-4">
								<a href="/" className="hover:opacity-80 transition-opacity">
									<img alt="Anna Zoi" src="/logo.png" className="h-10 w-auto" />
								</a>
								<a
									href="mailto:anna.zoi@yahoo.com"
									className="hidden lg:block text-slate-400 hover:text-white transition-colors text-sm font-medium"
								>
									<span>anna.zoi@yahoo.com</span>
								</a>
							</div>
							<div className="hidden sm:ml-auto sm:block">
								<div className="flex space-x-2">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 border border-transparent text-slate-300 hover:bg-white/5 hover:text-white ring-1 ring-white/5"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex sm:hidden">
							<button
								onClick={() => setIsOpen(true)}
								className="cursor-pointer group relative inline-flex items-center justify-center p-2 text-white hover:text-white/80 focus:outline-none "
							>
								<span className="sr-only">Open main menu</span>
								<div className="flex flex-col gap-1.5 items-end">
									<span className="h-0.5 w-6 bg-current rounded-full" />
									<span className="h-0.5 w-4 bg-current rounded-full transition-all duration-300 group-hover:w-6" />
									<span className="h-0.5 w-6 bg-current rounded-full" />
								</div>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Premium Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[100] bg-slate-950 flex flex-col sm:hidden"
					>
						{/* Subtle Grid Background */}
						<div className="absolute inset-0 opacity-10 bg-grid pointer-events-none" />

						{/* Menu Header (Matched with Nav positioning) */}
						<div className={classNames('w-full relative z-10')}>
							<div className="mx-auto px-4">
								<div className="flex h-16 items-center justify-between">
									<img alt="Anna Zoi" src="/logo.png" className="h-10 w-auto" />
									<button
										onClick={() => setIsOpen(false)}
										className="group p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white cursor-pointer transition-all active:scale-95"
									>
										<div className="relative size-6 flex items-center justify-center">
											<span className="absolute h-0.5 w-6 bg-current rounded-full rotate-45 transition-transform duration-300 group-hover:rotate-135" />
											<span className="absolute h-0.5 w-6 bg-current rounded-full -rotate-45 transition-transform duration-300 group-hover:-rotate-45" />
										</div>
									</button>
								</div>
							</div>
						</div>

						{/* Menu Content */}
						<div className="flex-1 flex flex-col px-8 pb-8 justify-center relative z-10 mt-5">
							<div className="flex flex-col gap-5">
								{navigation.map((item, idx) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: -30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.05 * idx, duration: 0.5, ease: 'easeOut' }}
										className="group"
									>
										<a
											href={item.href}
											onClick={() => setIsOpen(false)}
											className="flex items-baseline gap-6 py-1"
										>
											<span className="text-slate-700 text-xs font-black tracking-widest italic font-mono opacity-50">
												{(idx + 1).toString().padStart(2, '0')}
											</span>
											<span className="text-2xl xs:text-4xl font-black text-slate-500 group-hover:text-white transition-all duration-500 uppercase italic tracking-tighter group-hover:translate-x-4">
												{item.name}
											</span>
										</a>
									</motion.div>
								))}
							</div>

							{/* Menu Footer */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
								className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4"
							>
								<p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] italic">
									Let&apos;s talk
								</p>
								<a
									href="mailto:anna.zoi@yahoo.com"
									className="text-xl text-white font-bold hover:text-primary transition-colors italic tracking-tight"
								>
									anna.zoi@yahoo.com
								</a>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
