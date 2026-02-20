'use client';

import { useRef } from 'react';
import Image from 'next/image';
import university_logo from '@/assets/elmepa.png';
import { animate } from 'animejs';

const Education = () => {
	const backgroundRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!backgroundRef.current) return;

		const rect = backgroundRef.current.getBoundingClientRect();

		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const percentX = (x / rect.width) * 100;
		const percentY = (y / rect.height) * 100;

		const moveX = 50 + (percentX - 50) / 10;
		const moveY = 100 + (percentY - 50) / 20;

		animate(backgroundRef.current, {
			backgroundPosition: `${moveX}% ${moveY}%`,
			duration: 200,
			easing: 'easeOutQuad',
		});
	};

	const handleMouseLeave = () => {
		if (!backgroundRef.current) return;

		animate(backgroundRef.current, {
			backgroundPosition: '50% 100%',
			duration: 600,
			easing: 'spring(1, 80, 10, 0)',
		});
	};

	return (
		<div
			id="education"
			className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 education flex flex-col gap-5 lg:gap-10"
		>
			<h3 className="header">Education</h3>
			<div
				ref={backgroundRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className="flex justify-between gap-20 bg-[#17182F] rounded-[25px] px-8 py-12 background"
			>
				<div className="m-auto">
					<a href="https://hmu.gr" target="_blank">
						<Image src={university_logo} alt="ELMEPA" />
					</a>
				</div>

				<div className="m-auto flex flex-col gap-7">
					<p className="text-3xl">Master’s Degree</p>
					<p className="text-2xl">in Electrical & Computer Engineering</p>
					<p>Hellenic Mediterranean University</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
