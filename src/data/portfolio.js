export const navItems = [
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

export const projects = [
	{
		title: "MEOWMAZING",
		description:
			"An all-encompassing platform for cat lovers with breed info, care tips, an e-commerce shop, and a vibrant community.",
		image: "/images/meowmazing.png",
		tags: ["Node.js", "MongoDB", "Community"],
		links: [
			{
				label: "Live site",
				href: "https://meowmazing.onrender.com",
				type: "live",
			},
		],
	},
	{
		title: "Country Data Generator",
		description:
			"A responsive API-powered webpage that generates selected country details using HTML, CSS, and JavaScript.",
		image: "/images/CDG.png",
		tags: ["API", "JavaScript", "Vercel"],
		links: [
			{
				label: "Live site",
				href: "https://get-counrty-data.vercel.app/",
				type: "live",
			},
			{
				label: "Source code",
				href: "https://github.com/Soumyarnpr/CounrtyDataGenerator/tree/bb379bf3be184ab1291c42c9c63231234a476e63/Project_CDG",
				type: "github",
			},
		],
	},
	{
		title: "Stop Watch",
		description:
			"A stopwatch tool with resume, pause, lap, and reset interactions built with HTML, CSS, and JavaScript.",
		image: "/images/stopwatch.png",
		tags: ["JavaScript", "Tool", "UI"],
		links: [
			{
				label: "Live site",
				href: "https://stopwatch-tool.vercel.app/",
				type: "live",
			},
			{
				label: "Source code",
				href: "https://github.com/Soumyarnpr/Stopwatch",
				type: "github",
			},
		],
	},
	{
		title: "Tic Tac Toe Game",
		description:
			"A fully functional tic-tac-toe game built with HTML, CSS, and JavaScript.",
		image: "/images/tic-tac-toe.png",
		tags: ["Game", "JavaScript", "Logic"],
		links: [
			{
				label: "Live site",
				href: "https://tic-tac-toe-soumya.vercel.app/",
				type: "live",
			},
			{
				label: "Source code",
				href: "https://github.com/Soumyarnpr/Tic-Tac-Toe/tree/645f44a5fdacfc14989fbfb4c36c99bc23d464fb/Project_TicTacToe",
				type: "github",
			},
		],
	},
	{
		title: "Random Joke Generator",
		description:
			"A lightweight API project that generates random jokes through a simple JavaScript interface.",
		image: "/images/jokes.png",
		tags: ["API", "JavaScript", "Fun"],
		links: [
			{
				label: "Source code",
				href: "https://github.com/Soumyarnpr/myJokes/blob/94fa10950f8b82975953f55acc805b708f5adb26/jokes.html",
				type: "github",
			},
		],
	},
	{
		title: "Shopping Website",
		description:
			"A static shopping website developed with HTML, CSS, and JavaScript.",
		image: "/images/shoping-website.png",
		tags: ["Static site", "CSS", "JavaScript"],
		links: [],
	},
];

export const skillGroups = [
	{
		title: "Programming Languages",
		skills: ["C", "C++", "Java", "Python"],
	},
	{
		title: "Databases",
		skills: ["SQL/MySQL", "MongoDB"],
	},
	{
		title: "Web Technologies",
		skills: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS"],
	},
];

export const contactLinks = [
	{
		label: "Instagram",
		handle: "@soumya_rn_",
		href: "https://www.instagram.com/soumya_rn_/",
		icon: "instagram",
		color: "#C13584",
	},
	{
		label: "Email",
		handle: "soumyarnpr@gmail.com",
		href: "mailto:soumyarnpr@gmail.com",
		icon: "mail",
		color: "#bb001b",
	},
	{
		label: "GitHub",
		handle: "@Soumyarnpr",
		href: "https://github.com/Soumyarnpr",
		icon: "github",
		color: "#6cc644",
	},
	{
		label: "LinkedIn",
		handle: "@soumyarnpr",
		href: "https://www.linkedin.com/in/soumyarmpr/",
		icon: "linkedin",
		color: "#0077b5",
	},
	{
		label: "Resume",
		handle: "Download resume",
		href: "/images/resume.pdf",
		icon: "file",
		color: "#ff9f1c",
		download: true,
	},
];

export const profile = {
	name: "Soumya Ranjan Parida",
	greeting: "Hi, I am Soumya Ranjan Parida.",
	heroLead:
		"I build clean, responsive web projects with practical code, expressive interfaces, and a student mindset that keeps learning in motion.",
	roleWords: ["developer", "programmer", "student"],
	photo: "/images/soumya-p.jpg",
	resume: "/images/resume.pdf",
	email: "soumyarnpr@gmail.com",
	stats: [
		{ value: projects.length, label: "Projects" },
		{ value: skillGroups.length, label: "Skill groups" },
		{ value: contactLinks.length, label: "Contact paths" },
	],
};
