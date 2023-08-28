// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo2.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/hero-image.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github-light-2.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodeJs from "./assets/techstack/node-js-light.svg";
import mongoDb from "./assets/techstack/mongo2.png";
import firebase from "./assets/techstack/firebase.png";
import typescript from "./assets/techstack/typescript-icon.png";
import nextjs from "./assets/techstack/nextjs-icon.png";

// Porject Images
import projectImage1 from "./assets/projects/no-debt-app.png";
import projectImage2 from "./assets/projects/atu3.jpg";
import projectImage3 from "./assets/projects/udemy-clone1.png";
import projectImage4 from "./assets/projects/instagram-page-clone.png";
import projectImage5 from "./assets/projects/google-homepage-clone.png";
import projectImage6 from "./assets/projects/netflix-page.png";

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: "Pavan MG",
	tagline: "Web Developer",
	img: profile,
	about: `Hello, I'm Stephanie C. Okpo-mfon, a passionate web developer on a mission to make a positive impact in the tech industry. With a strong enthusiasm for growth and a desire to see more women thrive in the tech workspace, I'm dedicated to breaking down barriers and inspiring others to pursue their passions.
  As a web developer, I love diving into the intricate workings of systems and crafting robust, scalable solutions. I find joy in tackling complex problems, architecting efficient code, and optimizing performance. Building reliable and secure code infrastructure is not just a job for me; it's a creative outlet that allows me to bring ideas to life and contribute to meaningful projects.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: "https://www.linkedin.com/in/stephanie-okpomfon/",
	github: "https://github.com/StephanieMfon",
	twitter: "https://twitter.com/Steph_Crispin",
	instagram: "https://www.instagram.com/stephaniecrispin/",
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: "Internship",
		Company: `Stutern`,
		Location: "Nigeria",
		Type: "Internship",
		Duration: "May 2023 - July 2023",
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: "Backend Development",
		Company: "Stutern",
		Location: "Online",
		Type: "Full Time",
		Duration: "september 2022 - Present",
	},
	{
		Position: "Software Engineering",
		Company: `ALX`,
		Location: "Online",
		Type: "Full Time",
		Duration: "June 2023 - Present",
	},
];

// Tech Stack and Tools
export const techStackDetails = {
	html: html,
	css: css,
	js: js,
	react: react,
	sass: sass,
	tailwind: tailwind,
	bootstrap: bootstrap,
	bootstrap: bootstrap,
	vscode: vscode,
	postman: postman,
	npm: npm,
	git: git,
	github: github,
	nodeJs: nodeJs,
	mongoDb: mongoDb,
	firebase: firebase,
	typescript: typescript,
	nextjs: nextjs,
};

// Enter your Project Details here
export const projectDetails = [
	{
		title: "Omega, Application",
		image: projectImage1,
		description: `This is a full-stack application implemented with the MVC architecture. It utilises machine learning for predicting the eligibility of loan applicants.`,
		techstack: "React, Node.js, Mongo.db, Socket.io, AWS, JWT",
		previewLink: "https://omega-prediction-app.netlify.app/",
		githubLink:
			"https://github.com/NoDebt-App-Backend/Loan_Prediction_App/tree/dev/src",
	},
	{
		title: "Above the universe, API service",
		image: projectImage2,
		description: `This educational API service is an optimized API proxy server that integrates third party API's fron NASA and spaceEx.`,
		techstack: "Node.js, Axios, Node-cache",
		previewLink: "https://github.com/Above-The-Universe/atu-backend-api",
		githubLink: "https://github.com/Above-The-Universe/atu-backend-api",
	},
	{
		title: "Udemy-clone, Web-development",
		image: projectImage3,
		description: `This is a clone of Udemy's Landing Page. It shows a detailed representation of each section`,
		techstack: "HTML/CSS, JavaScript",
		previewLink: "https://module-6-clone-assignment.netlify.app/",
		githubLink: "https://github.com",
	},
	{
		title: "Instagram-Clone, Web-development",
		image: projectImage4,
		description: `This is a clone of Instagram's Landing Page`,
		techstack: "HTML/CSS, JavaScript",
		previewLink: "https://lucent-sprite-a9f729.netlify.app/",
		githubLink: "https://github.com/StephanieMfon/Module-7-Insta-Assignment",
	},
	{
		title: "Google-Clone, Web-development",
		image: projectImage5,
		description: `This is a clone of Google's Landing Page`,
		techstack: "HTML/CSS, JavaScript",
		previewLink: "https://google.com",
		githubLink: "https://github.com",
	},
	{
		title: "Netflix-clone, Web-development",
		image: projectImage6,
		description: `This is a clone of Netflix's Landing Page`,
		techstack: "HTML/CSS, JavaScript",
		previewLink: "https://project1-cloneapp.netlify.app/",
		githubLink: "https://github.com/StephanieMfon/NETFLIX-LANDING-PAGE",
	},
];

export const otherNotableProjectDetails = [
	{
		title: "URL shortener app",
		description: `Built a simple URL shortener API that allows users to create customised shorter URL's for personal use.    `,
		techstack: "Typescript , Docker, AWS",
		previewLink: "https://github.com/StephanieMfon/URL-shortener",
		githubLink: "https://github.com/StephanieMfon/URL-shortener",
	},
	{
		title: "Stutern Movies App",
		// image: projectImage5,
		description: `Built a simple server-side RESTFUL API that allows users to search for genres of movies, update and delete movies.`,
		techstack: "JOI mongoDB Bcrypt & JWT postman",
		previewLink: "https://github.com/StephanieMfon/Movie-store-app-assignment",
		githubLink: "https://github.com/StephanieMfon/Movie-store-app-assignment",
	},
	{
		title: "Stutern TODO-APP",
		// image: projectImage6,
		description: `Built a simple todo application that allows users to track thier pending engagements and priorities with edit and delete functionalities.`,
		techstack: "HTML5 CSS3 Vanilla JS",
		previewLink: "https://candid-syrniki-460d39.netlify.app/",
		githubLink: "https://github.com/StephanieMfon/Todo-App",
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "okpomfonstephanie@gmail.com",
	phone: "+234 916 342 6103",
};
