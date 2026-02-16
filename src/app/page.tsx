import Navbar from '@/components/ui/navbar';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Education from '@/components/education';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<About />
				<Projects />
				<Skills />
				<Education></Education>
			</main>

			<footer></footer>
		</div>
	);
}
