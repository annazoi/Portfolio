import Navbar from '@/components/ui/navbar';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

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
