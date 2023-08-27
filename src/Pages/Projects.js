import React from "react";
import { useEffect, useState } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import { otherNotableProjectDetails } from "../Details";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (!hasAnimated) {
			Aos.init({ duration: 2000 });
			setHasAnimated(true);
		}
	}, [hasAnimated]);

	return (
		<main className="container mx-auto max-width pt-10">
			<section>
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Projects
				</h1>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 pb-10 items-stretch"
					data-aos="fade-up"
					data-aos-once="true"
				>
					{React.Children.toArray(
						projectDetails.map(
							({
								title,
								image,
								description,
								techstack,
								previewLink,
								githubLink,
							}) => (
								<Project
									title={title}
									image={image}
									description={description}
									techstack={techstack}
									previewLink={previewLink}
									githubLink={githubLink}
								/>
							)
						)
					)}
				</div>
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Other Notable Projects
				</h1>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 pb-10 rounded-xl"
					data-aos="fade-up"
					data-aos-once="true"
				>
					{React.Children.toArray(
						otherNotableProjectDetails.map(
							({ title, description, techstack, previewLink, githubLink }) => (
								<Project
									title={title}
									description={description}
									techstack={techstack}
									previewLink={previewLink}
									githubLink={githubLink}
									border_radius={"rounded-t"}
								/>
							)
						)
					)}
				</div>
			</section>
		</main>
	);
}

export default Projects;
