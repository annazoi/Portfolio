'use client';
import { Site } from '@/interfaces';
import Image from 'next/image';
import zivo from '@/assets/projects/zivo.png';

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
			name: 'Cretantour',
			photo: zivo,
			description:
				'A vacation villa website that presents photos of the villa and information about its facilities. Visitors can explore activities available in the surrounding area and make a booking for the villa.',
		},
	];

	return (
		<div id="experience" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 flex flex-col gap-20">
			<h3 className="header mt-10">Work Experience</h3>
			<div className="flex flex-col m-auto gap-30">
				{sites.map((site: Site) => (
					<div className="flex even:flex-row-reverse experience" key={site.id}>
						<div className="flex flex-col gap-4 m-auto">
							<h3 className="font-bold text-lg name">{site.name}</h3>
							<div className="max-w-[50rem] p-5 rounded-xl bg-white/10 backdrop-blur-xl h-fit z-1">
								<p className="text-sm">{site.description}</p>
							</div>
						</div>
						<div className="border-l-[2rem] border-t-[1.2rem] border-[#17182f] -ml-[4rem] rounded-tl-xl rounded-tr-xl bg-[#17182f] transition duration-500 overflow-hidden photo">
							<Image
								src={site.photo}
								alt={site.name}
								width={500}
								className="rounded-tl-xl rounded-br-xl hover:scale-110 transition duration-500 ease-in-out delay-100"
							></Image>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
