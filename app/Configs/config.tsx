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
      job: "Software Engineer in Test",
      company: "Telus Health",
      url: "https://ca.linkedin.com/company/telus-health",
      companyLocation: "Canada / Montreal",
      workStart: "2018",
      workEnd: "-",
      description: "description1",
      technologies: [
        "Javascript",
          "Microservices",
        "JAVA",
        "Python",
        "Selenium",
        "spring-boot",
        "NodeJs",
        "Weblogic",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "OCP",
          "GCP",
          "AWS"

      ],
      project: [],
    },
    {
      id: 2,
      job: "Software Engineer",
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
          title: "Tiktak",
          technologies: ["NextJs", "MaterialUI", "Vuexy Template"],
          icons: [
            "skill-icons:nextjs-dark",
            "skill-icons:materialui-dark",
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
          title: "Talentswide",
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
      technologies: ["NextJs", "Tailwindcss", "Javascript", "MongoDb"],
      icons: [
        "skill-icons:nextjs-dark",
        "skill-icons:tailwindcss-dark",
        "skill-icons:javascript",
        "skill-icons:mongodb",
      ],
      url: {
        repo: false,
        live: "https://www.entegrenity.com/",
      },
      description:
        "Pazaryerleri API servislerini kullanarak e-ticaret işletmelerinin ürün yönetimini kolaylaştıran IMS sistemidir. Bu yazılımın amacı, eticaret işletmelerinin ürünlerini gruplayarak tek bir platformdan tüm ürünlerinin stok ve fiyat bilgilerini günvellemesidir.",
      img: "/projects/entegrenity.jpg",
    },


    {
      id: 4,
      title: "TDK All API Package",
      technologies: ["NPM", "Javascript"],
      icons: ["skill-icons:npm-dark", "skill-icons:javascript"],
      url: {
        repo: "https://github.com/halituzan/tdk-all-api",
        live: "https://www.npmjs.com/package/tdk-all-api",
      },
      description:
        "Türk Dil Kurumu API larını kullanarak istenilen kelimenin anlamlarını JSON response olarak getiren bir npm paketi.",
      img: "/projects/tdk.jpg",
    }
  ],
};
export default Config;
