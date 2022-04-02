const portfolio = {
  // Resume : Contain Information Regarding Resume Page, all the static reside here, modification here will reflect on the website
  resume: {
    projects: {
      title: "PROJECTS",
      list: [      
      ],
    },
    info: {
      list: [
      ],
    },
    education: {
      list: [
        {
        },
      ],
    },
    experience: {
      title: "EXPERIENCE",
      list: [
        {
          range: "",
          company: "",
          title: "",
          description: ``,
        },
        {
          range: " ",
          company: "",
          title: "",
          description: ` `,
        },
      ],
    },
    bio: {
      title: "BIO",
      description: `
      `,
    },
    skills: {
      title: "SKILLS",
      list: [
        "C#",
      ],
    },
    title: "Javascript Full-Stack SSE @Atompoint",
  },
  // Layout : Contain Information Regarding Layout of the Pages, all the static reside here, modification here will reflect on the website
  layout: {
    right: [
      {
        url: "https://drive.google.com/file/d/1pToYvn9GSWlTPdeS1-IEGbN8qMc472RJ/view",
        label: "Resume",
        link: false,
      },
      {
        url: "mailto:emil.tsikhanovich@gmail.com",
        label: "Email",
        link: false,
      },
      {
        url: "https://emilt.xyz/quartz/",
        label: "Blogs",
      },
      {
        url: "https://github.com/emiltsi",
        label: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/emil-tsikhanovich-8654031b0/",
        label: "LinkedIn",
      },
    ],
    left: [
      {
        url: "/about-me",
        label: "About",
      },
      {
        url: "/contact-me",
        label: "Contact",
      },
      {
        url: "/projects",
        label: "Projects",
      },
      {
        url: "/",
        label: "Home",
      },
    ],
  },
  // Contact : Contain Information Regarding Contact Page, all the static reside here, modification here will reflect on the website
  contact: {
    helmet: {
      title: "Emil Tsikhanovich - Contact Me",
    },
    title: "GET IN TOUCH",
    description:
      "Feel free to contact me below.",
    btn: {
      label: "emil.tsikhanovich@gmail.com",
      url: "https://discordapp.com/users/emil_t/",
    },
    ending: "or visit the side links.",
  },
  // About : Contain Information Regarding About Page, all the static reside here, modification here will reflect on the website
  About: {
    helmet: {
      title: "Emil Tsikhanovich - About Me",
    },
    title: "BIO",
    social: {
      label: "🏃 Follow me on ",
      links: [
        { label: "Linkedin", url: "https://www.linkedin.com/in/emil-tsikhanovich-8654031b0/" },
        { label: "GitHub", url: "https://github.com/emiltsi" },
      ],
    },
    description: [
      `Hello. My name is Emil. I am currently studying MEng Mechanical Engineering at the University of Warwick. I've always had an interest in cars, and I'd like to eventually work in the automotive industry for design and development.`,
      `I have a proven track record of leadership and practical skills, from both University and other projects.`,

      `Please follow the links on the sidebars for more information.`,
    ],
  },
  // Home : Contain Information Regarding Home Page, all the static reside here, modification here will reflect on the website
  home: {
    showModel: true,
    helmet: {
      title: "Emil Tsikhanovich - Welcome to my portfolio",
    },
    title: ["Emil Tsikhanovich"],
    subTitle: "MEng Engineering Student",
    description: ``,
  },
  // Projects : Contain Information Regarding Projects Page, all the static reside here, modification here will reflect on the website
  projects: [
    {
      technology: ["HTML", "CSS", "Javascript"],
      slug: "projects/wooshop",
      title: "Original Portfolio",
      description:
        "My first portfolio website, created with elements of HTML, CSS and JS.",
      image: "https://i.imgur.com/3rRxfN6.png",
      link: [
        {
          text: "Github",
          url: "https://github.com/emiltsi/emiltsi.github.io",
        },
      ],
    },
    {
      technology: ["Fusion 360", "CAD/CAE"],
      slug: "projects/easy-woo-card-wordpress-plugin",
      title: "Warwick Term 1 Portfolio",
      description:
        "Term 1 Portfolio project completed for Warwick's Engineering course. Tasks included desigining and abrasive helmet, as well as modelling a piston in Fusion 360.",
      image: "https://i.imgur.com/IjIrDr6.png",
      link: [
        {
          url: "https://drive.google.com/file/d/1q3OHb3iRaVgP2CH5vufLrA1xu6w19clD/view?usp=sharing",
          text: "Overview",
        },
      ],
    },
    {
      technology: ["Fusion 360", "Ultimaker Cura"],
      slug: "projects/super-simple-browser",

      title: "Term 2 Group Project",
      description:
        "Dragster project, completed as part of Warwick's Engineering Design Module. Limited set of materials were provided for this group project.",
      image: "https://i.imgur.com/R3PoEOA.png",
      link: [
        {
          url: "https://a360.co/3N5El6o",
          text: "3D Model",
        },
      ],
    },
  ],
};
export default portfolio;
