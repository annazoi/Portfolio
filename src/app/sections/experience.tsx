'use client';
import { Site } from '@/interfaces';

const Experience = () => {
	const sites: Site[] = [
		{
			id: '1',
			name: 'Avelia Villa',
			description: '',
		},
		{
			id: '2',
			name: 'Sunterra',
			description: '',
		},
		{
			id: '3',
			name: 'Cretantour',
			description: '',
		},
	];

	return (
		<div id="experience">
			<h3 className="header mt-10">Experience</h3>
		</div>
	);
};

export default Experience;
