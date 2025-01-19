import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
	name: "Bobby Galli",
	title: "Hi 👋, I'm Bobby",
	description: "A friendly, hard-working, curious, and entrepreneurial minded individual trying to leave the world a little better than I found it.",
	resumeLink: "https://github.com/bobbyg603",
};

export const openSource = {
	githubUserName: "bobbyg603",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://workingdevshero.com/',
  facebook: "https://www.facebook.com/bobbyg603/",
  instagram: "https://www.instagram.com/bobbyg603/",
  twitter: "https://x.com/bobbyg603",
  github: "https://github.com/bobbyg603",
  linkedin: "https://www.linkedin.com/in/bobby-galli-55b91128/",
};

export const skillsSection: SkillsSectionType = {
    title: "What I do",
    subTitle:"Saving the world a pull request at a time",
    data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
		emoji("⚡ Develop highly testable web applications for collaborative environments"),
		emoji("⚡ Manage remote software development teams to ensure timely feature completion"),
		emoji("⚡ Interact with customers and designers to build features that provide tangible value")
	  ],
	  softwareSkills: [
		{
			skillName: "html-5",
			iconifyTag: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			iconifyTag: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			iconifyTag: "logos:sass",
		},
		{
			skillName: "JavaScript",
			iconifyTag: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			iconifyTag: "logos:typescript-icon",
		},
		{
			skillName: "Angular",
			iconifyTag: "vscode-icons:file-type-angular"
		},
		{
			skillName: "nodejs",
			iconifyTag: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			iconifyTag: "vscode-icons:file-type-npm",
		},
		{
			skillName: "c",
			iconifyTag: "logos:c",
		},
		{
			skillName: "c-plusplus",
			iconifyTag: "logos:c-plusplus",
		},
		{
			skillName: "c-sharp",
			iconifyTag: "logos:c-sharp",
		},
		{
			skillName: "python",
			iconifyTag: "logos:python",
		},
		{
			skillName: "git",
			iconifyTag: "logos:git-icon",
		},
		{
			skillName: "aws",
			iconifyTag: "logos:aws",
		},
	  ],
	},
  ],
};

export const SkillBars: SkillBarsType[] = [
	{
		Stack: "Frontend / Design",
		progressPercentage: "95",
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Database",
		progressPercentage: "85",
	},
];

export const educationInfo: EducationType[] = [
	{
		schoolName: "University of New Hampshire",
		subHeader: "Bachelors of Electrical Engineering",
		duration: "September 2011 - May 2014",
		desc: "Award of Excellence and Best Presentation 2014 URC",
		descBullets: [
			"Lead Software Engineer UNH Goddard Project",
		],
	}
];

export const experience: ExperienceType[] = [
	{
		role: "Principal Software Engineer",
		company: "BugSplat",
		companyLogo: "/img/icons/common/bugsplat.png",
		date: "April 2017 - Present",
		desc: "BugSplat is a bootstrapped software business that builds tools for developers obsessed with application performance.",
		descBullets: [
			"Manages team of remote contract developers",
			"Develops Angular client web-application",
			"Creates SDKs for various platforms"
		],
	},
	{
		role: "Quality Engineer",
		company: "Newforma",
		companyLogo: "/img/icons/common/newforma.svg",
		date: "June 2014 - April 2017",
		desc: "Newforma is the leader in Project Information Management software for the AECO industry.",
		descBullets: [
			"Worked with scrum teams to develop automated testing strategies",
			"Reviewed and approve pull request",
			"Collaborated with customer and product management to develop features"
		],
	},
	{
		role: "QA Intern",
		company: "Newforma",
		companyLogo: "/img/icons/common/newforma.svg",
		date: "April 2007 - March 2014",
		desc: "Newforma is the leader in Project Information Management software for the AECO industry.",
		descBullets: [
			"Developed testing strategies for Enterprise software",
			"Assisted EVP of Engineering with development of his ping-pong skills",
		],
	}
];

export const projects: ProjectType[] = [
	{
		name: "Working Dev's Hero",
		desc: "How To Become Highly Effective and Cultivate Meaning in Your Work",
		link: "https://workingdevshero.com/",
	},
	{
		name: "Angular Super Forms: Password Confirmation",
		desc: "Epic Angular Form Validation Made Easy",
		link: "https://itnext.io/angular-super-forms-password-confirmation-bd95906f220f",
	},
	{
		name: "Angular Testing Tips: NgMocks",
		desc: "Write Better Tests Faster With Ng-Mocks and Jasmine-Auto-Spies",
		link: "https://itnext.io/angular-testing-tips-ng-mocks-7d9300443a9c",
	},
	{
		name: "How to Build a Custom Angular Form Control",
		desc: "Create Masterful Angular Forms with ControlValueAccessor",
		link: "https://javascript.plainenglish.io/how-to-build-a-custom-angular-formcontrol-12c92620790",
	},
	{
		name: "How to Build a Strongly Typed Angular Super Form",
		desc: "How to create strongly typed forms in Angular 14+",
		link: "https://betterprogramming.pub/how-to-build-a-strongly-typed-angular-14-super-form-86837965a0e5",
	},
	{
		name: "RxJS in the Wild: How to Create Pop-up Alerts",
		desc: "How to build Bootstrap pop-up alerts with Angular and RxJS",
		link: "https://javascript.plainenglish.io/rxjs-in-the-wild-how-to-create-pop-up-alerts-69134162c8b2",
	},
	{
		name: "File Uploads with Angular and RxJS",
		desc: "How to build a file upload client with Angular and RxJS",
		link: "https://betterprogramming.pub/file-uploads-with-angular-and-rxjs-34262b3450ae",
	},
	{
		name: "CI/CD for Angular Developers",
		desc: "Automate your releases with GitHub Actions",
		link: "https://betterprogramming.pub/ci-cd-for-angular-developers-be9a1485d22b",
	},
	{
		name: "GitHub Status Checks and Branch Protection Made Easy",
		desc: "Use branch protection rules to ensure quality contributions to your repos",
		link: "https://betterprogramming.pub/github-status-checks-and-branch-protection-made-easy-b70d6d9ffc76",
	},
	{
		name: "Getting Started With Unit Testing Software",
		desc: "Develop top-notch software at ludicrous speeds",
		link: "https://betterprogramming.pub/unit-testing-software-in-2022-b3ac00962c65",
	},
	{
		name: "How to Customize your Unreal Engine Crash Report Client",
		desc: "How to modify the crash reporter dialog in Unreal Engine projects",
		link: "https://blog.bugsplat.com/customizing-the-unreal-engine-crash-report-client/"
	},
	{
		name: "How to Build Crashpad",
		desc: "Crashpad is a cross-platform system for end-to-end crash reporting.",
		link: "https://docs.bugsplat.com/introduction/getting-started/integrations/cross-platform/crashpad/how-to-build-google-crashpad"
	},
	{
		name: "bugsplat-ng",
		desc: "BugSplat error handling for Angular",
		github: "https://github.com/BugSplat-Git/bugsplat-ng",
		link: "https://bugsplat-git.github.io/my-angular-crasher/"
	},
	{
		name: "bugsplat-js",
		desc: "BugSplat error reporting for modern browsers",
		github: "https://github.com/BugSplat-Git/bugsplat-js",
	},
	{
		name: "bugsplat-net-standard",
		desc: "BugSplat integration for .NET Standard 2.0",
		github: "https://github.com/BugSplat-Git/bugsplat-net-standard",
	},
	{
		name: "bugsplat-unreal",
		desc: "BugSplat plug-in for Unreal Engine",
		github: "https://github.com/BugSplat-Git/bugsplat-unreal",
	},
	{
		name: "bugsplat-unity",
		desc: "BugSplat integration for Unity games",
		github: "https://github.com/BugSplat-Git/bugsplat-unity",
	},
	{
		name: "ngb-filterable-dropdown",
		desc: "Powerful dropdown control for complicated filtering.",
		github: "https://github.com/BugSplat-Git/ngb-filterable-dropdown",
		link: "https://bugsplat-git.github.io/ngb-filterable-dropdown-example/"
	},
	{
		name: "ngx-animated-counter",
		desc: "Angular counting animations made as easy as 1, 2, 3",
		github: "https://github.com/BugSplat-Git/ngx-animated-counter",
		link: "https://bugsplat-git.github.io/ngx-animated-counter-example"
	},
	{
		name: "ngx-toggle",
		desc: "Beautiful iOS style toggle switch for Angular",
		github: "https://github.com/bobbyg603/ngx-toggle",
		link: "https://bobbyg603.github.io/ngx-toggle/"
	},
	{
		name: "my-qt-crasher",
		desc: "Example MacOS, Windows, and Linux Qt application integrated with Crashpad.",
		github: "https://github.com/BugSplat-Git/my-qt-crasher",
	},
	{
		name: "my-electron-crasher",
		desc: "Sample Electron TypeScript application integrated with BugSplat for crash reporting",
		github: "https://github.com/BugSplat-Git/my-electron-crasher",
	},
	{
		name: "my-android-crasher",
		desc: "Android NDK application integrated with Crashpad",
		github: "https://github.com/BugSplat-Git/my-android-crasher",
	},
];

export const feedbacks: FeedbackType[] = [
	{
		name: "Doug D.",
		feedback: "Smart, clear thinking, creative and enthusiastic describe Bobby. He brings a smile and energy to his tasks. He has a broad experience in testing and development. He is an asset to his scrum team.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false; // TODO BG

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
	title: "Bobby Galli",
	author: "Bobby Galli",
	description: "A friendly, hard-working, curious, and entrepreneurial minded individual trying to leave the world a little better than I found it.",
	image: "https://avatars.githubusercontent.com/u/2646053?v=4",
	url: "https://bobbyg603.com",
	keywords: [
		"Bobby",
		"Bobby Galli",
		"@bobbyg603",
		"bobbyg603",
		"Portfolio",
		"Bobby Portfolio",
		"Bobby Galli Portfolio",
		"web developer",
		"full stack",
		"full stack web developer",
		"desktop app developer",
		"mobile app developer",
		"angular developer",
		"typescript developer",
		"crash reporting",
		"bugsplat"
	],
};
