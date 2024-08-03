const Config = {
  mode: "light", //* Default Mode
  highlightList: [
    //* Write the words you want to emphasize in the description in the About You section using lowercase letters.
    "springboot",
    "java",
      "jpa",
      "hibernate",
      "spring",
      "spring-boot",
      "spring-data-jpa",
      "spring-data-jdbc",
      "spring-jdbc",
      "spring-mvc",
      "spring-web",
    "javascript",
    "reactjs",
    "nextjs",
    "mongodb",
    "html",
    "css",
    "tailwindcss",
    "bootstrap",
    "materialui",
    "nextui",
    "typescript",
    "redux",
    "redux-toolkit",
    "e-commerce",
    "mantin",
    "scss",
  ],
  skills: {
    software: [
      {
        id: 1,
        name: "Typescript",
        icon: "skill-icons:typescript",
      },
      {
        id: 2,
        name: "Javascript",
        icon: "skill-icons:javascript",
      },
      {
        id: 2,
        name: "Java",
        icon: "skill-icons:java",
      },
      {
        id: 3,
        name: "HTML5",
        icon: "skill-icons:html",
      },
      {
        id: 4,
        name: "CSS3",
        icon: "skill-icons:css",
      },
      {
        id: 5,
        name: "ReactJs",
        icon: "skill-icons:react-dark",
      },
      {
        id: 6,
        name: "NextJs",
        icon: "skill-icons:nextjs-dark",
      },
      {
        id: 7,
        name: "NodeJs",
        icon: "skill-icons:nodejs-dark",
      },
      {
        id: 8,
        name: "MongoDB",
        icon: "skill-icons:mongodb",
      },
      {
        id: 9,
        name: "Git",
        icon: "skill-icons:git",
      },
    ],
    ui: [
      {
        id: 1,
        name: "Material UI",
        icon: "skill-icons:materialui-dark",
      },

      {
        id: 2,
        name: "Mantine",
        icon: "logos:mantine-icon",
      },
      {
        id: 3,
        name: "TwilwindCss",
        icon: "skill-icons:tailwindcss-dark",
      },
      {
        id: 4,
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
      },
    ],
    programs: [
      {
        id: 1,
        name: "Figma",
        icon: "skill-icons:figma-dark",
      },
      {
        id: 2,
        name: "Adobe XD",
        icon: "skill-icons:xd",
      },
      {
        id: 3,
        name: "Adobe Illustrator",
        icon: "skill-icons:illustrator",
      },
      {
        id: 4,
        name: "Adobe PhotoShop",
        icon: "skill-icons:photoshop",
      },
    ],
  },
  information: {
    name: "Ramy Oubeid",
    email: "oubeid@infannova.com",
    phone: "+14387222098",
    country: "Canada",
    city: "Montreal",
    degree: "Senior Software Engineer",
    freelance: true,
    remote: true,
    title: "Full-Stack Software Engineer",
  },
  social: [
    {
      id: "github",
      name: "Github",
      icon: "mdi:github",
      url: "https://github.com/ramyoubeid",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://x.com/ROubeid82824",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/ramy-oubeid-085b67132/",
    },
    {
      id: "stackoverflow",
      name: "StackoverFlow",
      icon: "mdi:stackoverflow",
      url: "https://stackoverflow.com/users/10427536/ramy-oubeid",
    },
    // {
    //   id: "codewars",
    //   name: "Codewars",
    //   icon: "cib:codewars",
    //   url: "https://www.codewars.com/users/halituzan",
    // },
  ],
  workHistories: [
    {
      id: 1,
      job: "Senior Quality Assurance Engineer",
      company: "Telus Health",
      url: "https://ca.linkedin.com/company/telus-health",
      companyLocation: "Canada / Montreal",
      workStart: "2018",
      workEnd: "-",
      description: "description1",
      technologies: [
        "Insurance claim processing",
        "Healthcare benefits management",
          "Healthcare EDI standards",
            "Healthcare APIs",
            "Healthcare data exchange",
            "Healthcare data security",
            "Software quality assurance",
        "Agile",

          "Microservices",
        "JAVA",
        "Python",
        "Selenium",
        "BDD",
        "API testing (Postman)",
        "JIRA",
        "Confluence",
        "Jenkins",
        "Git",
        "Newman",
        "Weblogic",
        "Oracle Database"


      ],
      project: [],
    },
    {
      id: 2,
      job: "Software Engineer / System Administrator",
      company: "FYiDoctors",
      url: "https://ca.linkedin.com/company/fyidoctors",
      companyLocation: "Vancouver / Canada",
      workStart: "2016",
      workEnd: "2018",
      description: "description2",
      technologies: [
        " Python",
        " Javascript",
        " Powershell",
        " Bash",
        " NodeJs",
        " ReactJs",
        " NextJs(SSR)",
        " TailwindCss",
        " MaterialUI",
        " Mantine",
        " Micro-Frontend",
      ],
      project: [
        {
          id: 1,
          title: "Spring-boot BDD framework for testing SOAP services",
          technologies: ["Spring-boot", "Spring Cloud", "Cucumber", "Java", "Junit", "Mockito", "Jenkins", "Docker", "GCP", "Maven"],
          icons: [
            "skill-icons:springboot",
            "skill-icons:java",
            "skill-icons:testng",
            "flat-color-icons:template",
          ],
          img: "/projects/tiktak.jpg",
        },
        {
          id: 2,
          title: "GOUP",
          technologies: ["ReactJS", "Bootstrap", "Vuexy Template"],
          icons: [
            "skill-icons:react-dark",
            "skill-icons:bootstrap",
            "flat-color-icons:template",
          ],
          img: "/projects/goup.jpg",
        },
        {
          id: 3,
          title: "Muhakemat",
          technologies: [
            "ReactJS",
            "Mantine",
            "Styled Component",
            "Micro-Frontend",
          ],
          icons: [
            "skill-icons:react-dark",
            "logos:mantine-icon",
            "skill-icons:styledcomponents",
            "carbon:microservices-1",
          ],
          img: "/projects/muhakemat.jpg",
        },
        {
          id: 4,
          title: "School System",
          technologies: ["NextJs(SSR)", "Figma Design", "Tailwindcss"],
          icons: [
            "skill-icons:nextjs-dark",
            "skill-icons:figma-dark",
            "skill-icons:tailwindcss-dark",
          ],
          img: "/projects/talentswide.jpg",
        },
      ],
    },
  ],
  portfolio: [
    {
      id: 1,
      title: "Entegrenity",
      technologies: ["NextJs", "Appachee Karafka", "Spring-boot", "MongoDb"],
      icons: [
        "skill-icons:nextjs-dark",
        "skill-icons:tailwindcss-dark",
        "skill-icons:springboot",
          "skill-icons:kafka",
        "skill-icons:mongodb"
      ],
      url: {
        repo: false,
        live: "https://www.entegrenity.com/",
      },
      description:
        "This is an E-Commerce application that that I developed for an international client. The application is built using NextJs, Spring-boot, and Kafka.",
      img: "/projects/entegrenity.jpg",
    },


    {
      id: 4,
      title: "AI-Selenium",
      technologies: ["Python", "Numpy", "Pandas", "Selenium", "Jupyter Notebook", "openai API"],
      icons: ["skill-icons:python", "skill-icons:github", "skill-icons:docker", "skill-icons:googlecloud", "skill-icons:maven"],
      url: {
        repo: "https://github.com/ramy-oubeid-telus/AI-Selenium",

      },
      description:
        ""
    }
  ],
};
export default Config;
