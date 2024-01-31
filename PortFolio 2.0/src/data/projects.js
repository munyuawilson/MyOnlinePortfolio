// Import images
import WebImage1 from '../images/burger.png';
import WebImage2 from '../images/barcode.png';
import WebImage3 from '../images/pokemon.png';
import WebImage4 from '../images/RecipeProject.png';
import WebImage5 from '../images/map.png';
import MobileImage1 from '../images/space.png';
import MobileImage2 from '../images/barcode.png';
import UIImage1 from '../images/gmail.png';
import UIImage2 from '../images/spotify.png';

export const projectsData = [
	{
		id: 1,
		title: 'Plagiarism Detector',
		category: 'Web Application',
		repoUrl:'https://github.com/munyuawilson/plagiarism_detector',
		img: WebImage2,
		ProjectHeader: {
			title: 'Plagiarism Detector - From Context',
			publishDate: 'May 26, 2023',
			tags: 'Flask',
		},
		
	},
	{
		id: 2,
		title: 'Bar Code Generator',
		category: 'Desktop Application',
		img: MobileImage2,
		repoUrl:'https://github.com/munyuawilson/Bar-Code-Generator-Desktop-Application',
	},
	{
		id: 3,
		title: 'Library Session Management',
		category: 'Desktop Application',
		img: UIImage1,
		repoUrl:'https://github.com/munyuawilson/library-management',
	},
	{
		id: 4,
		title: 'Web scraping',
		category: 'Automation',
		img: UIImage2,
		repoUrl:'https://github.com/munyuawilson/jumiaTvs',
	},
	{
		id: 5,
		title: 'Online Register',
		category: 'Web Application',
		img: MobileImage1,
		repoUrl:'https://github.com/munyuawilson/onlineregister',
	},
	{
		id: 6,
		title: 'Socket Chat Application',
		category: 'CLI Application',
		img: WebImage1,
		repoUrl:'https://github.com/munyuawilson/Socket-Chat-App',
	},
	{
		id: 7,
		title: 'Unmask',
		category: 'Web Application',
		img: WebImage3,
		repoUrl:'https://github.com/munyuawilson/Unmask',
	},
	{
		id: 8,
		title: 'Data science Projects',
		category: 'Data Science',
		img: WebImage4,
		repoUrl:'https://github.com/munyuawilson/Machine-learning-projects',
	},
	{
		id: 9,
		title: 'Santa Year Round',
		category: 'Web Application',
		img: WebImage5,
		repoUrl:'https://github.com/munyuawilson/Santa-year-round',
	},

];
