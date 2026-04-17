import Navbar from '@/components/ui/navbar';
import About from '@/app/sections/about';
import Projects from '@/app/sections/projects';
import Skills from '@/app/sections/skills';
import Education from '@/app/sections/education';
import Experience from '@/app/sections/experience';
import Contact from '@/app/sections/contact';

export default function Home() {
	return (
		<div className="bg-background min-h-screen">
			<Navbar />
			<main>
				<section id="about" className="bg-background">
					<About />
				</section>

				<section id="experience" className="bg-slate-900/30 md:bg-transparent">
					<Experience />
				</section>

				<section id="projects" className="bg-background pt-5 md:pt-0">
					<Projects />
				</section>

				<section id="skills" className="bg-slate-900/30 md:bg-transparent">
					<Skills />
				</section>

				<section id="education" className="bg-background">
					<Education />
				</section>

				<section id="contact" className="bg-slate-950 md:bg-transparent">
					<Contact />
				</section>
			</main>

			<footer></footer>
		</div>
	);
}
