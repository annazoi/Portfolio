import Navbar from '@/components/ui/navbar';
import About from '@/app/sections/about';
import Projects from '@/app/sections/projects';
import Skills from '@/app/sections/skills';
import Education from '@/app/sections/education';
import Experience from '@/app/sections/experience';
import Contact from '@/app/sections/contact';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<About />
				<Projects />
				<Skills />
				<Education></Education>
				<Experience></Experience>
				<Contact></Contact>
			</main>

			<footer></footer>
		</div>
	);
}
