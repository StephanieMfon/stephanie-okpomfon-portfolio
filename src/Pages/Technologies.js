import React from "react";
import { techStackDetails } from "../Details";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Technologies() {
	const {
		html,
		css,
		js,
		react,
		redux,
		tailwind,
		bootstrap,
		sass,
		vscode,
		git,
		github,
		npm,
		postman,
		figma,
		firebase,
		nodeJs,
		mongoDb,
		typescript,
		nextjs,
	} = techStackDetails;

	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (!hasAnimated) {
			Aos.init({ duration: 2000 });
			setHasAnimated(true);
		}
	}, [hasAnimated]);
	return (
		<main className="container mx-auto max-width pt-10 pb-20 ">
			<section>
				<h1
					className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
					data-aos="fade-up"
					data-aos-once="true"
				>
					Tech Stack
				</h1>
				<p className="text-content py-2 lg:max-w-3xl" data-aos="fade-up">
					Technologies I've been working with recently
				</p>
			</section>
			<section
				className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 technologies"
				data-aos="fade-up"
				data-aos-once="true"
			>
				<img
					src={typescript}
					title="Typescript"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={nextjs}
					title="Nextjs"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={html}
					title="html"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={css}
					title="CSS"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={js}
					title="JavaScript"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={nodeJs}
					title="NodeJs"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={firebase}
					title="Firebase"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={mongoDb}
					title="MongoDb"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={react}
					title="React"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={bootstrap}
					title="Bootstrap"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
				<img
					src={tailwind}
					title="Tailwind"
					alt=""
					className="transform hover:scale-150 duration-500 ease-in-out"
				/>
			</section>
			<section data-aos="fade-up" data-aos-once="true">
				<h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Tools
				</h1>
			</section>
			<section
				className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 tools"
				data-aos="fade-up"
				data-aos-once="true"
			>
				<img src={vscode} title="Visual Studio Code" alt="" />
				<img src={git} title="Git" alt="Git" />
				<img src={github} title="Github" alt="Github" />
				<img src={npm} title="NPM" alt="NPM" />
				<img src={postman} title="Postman" alt="Postman" />
			</section>
		</main>
	);
}

export default Technologies;
