import { nanoid } from 'nanoid';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

// HEAD DATA
export const headData = {
  title: 'Ariful Islam Mahin', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ariful Islam Mahin',
  subtitle: "I'm a Front-End Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Me, Ariful Islam Mahin working as a Front-End developer. I have come in the web development world only for my passion. I love creating and developing websites more than any other works.',
  paragraphTwo:
    'I am self-motivated and passionate about web development, I am an enthusiastic and dedicated learner.',
  paragraphThree: 'My core skill is based on JavaScript and React.',
  resume: 'https://drive.google.com/file/d/1lia4FwVRkksaizL1zgJo2q850rdSAZqP/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: project1,
    title: 'Creative Agency',
    info:
      'This is a single page full-stack web application. Clients can order services and see their ordered services.',
    info2:
      'Clients can add review and added review also show on the website. Admin can add new services, make a new admin & see all services at the dashboard.',
    url: 'https://creative-agency0.web.app/',
    repo: 'https://github.com/ariful-islam-mahin/creative-agency-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: project2,
    title: 'Apartment Hunt',
    info:
      'This is a single page full-stack house rental application(Team Project). Users can book apartments and see their booking information at the dashboard.',
    info2: 'Admin can add new apartments & see all bookings information.',
    url: 'https://apartment-hunt0.web.app/',
    repo: 'https://github.com/ariful-islam-mahin/apartment-hunt-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: project3,
    title: 'Volunteer Network',
    info:
      'Volunteer Network is a social volunteering events website. Users can register as a volunteer & check all registered events.',
    info2: 'Admin can add events or delete registered volunteers.',
    url: 'https://volunteer-network00.web.app/',
    repo: 'https://github.com/ariful-islam-mahin/volunteer-network-client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ariful.islam12402@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ariful-islam-mahin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ariful-islam-mahin',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/mahinyayaa/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/mahin_yayaa/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
