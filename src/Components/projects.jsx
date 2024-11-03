import {projects} from './constants.js';

const Projects = () => {
return (
	<div className="w-full min-h-screen p-8 pt-24 bg-gradient-to-b from-[#014449] to-[#0a192f]" id="projects">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold text-center text-white mb-4">PROJECTS</h2>
			<p className="text-gray-300 text-xl text-center mb-8">
				Here are some of the projects Ive worked on. Click on the images to view the project.
			</p>
			<div className="flex flex-wrap justify-center gap-6">
				{projects.map((project, index) => (
					<div key={index} className="bg-gray-800 rounded-lg overflow-hidden w-full max-w-[400px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
						<a href={project.link} target="_blank" className="block" rel="noopener noreferrer" aria-label={`View ${project.name} project`}>
							<img src={project.image} alt={project.alt} className="w-full h-48 object-cover" />
						</a>
						<div className="p-4">
							<h3 className="text-white text-lg font-semibold">{project.name}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)
};

export default Projects;