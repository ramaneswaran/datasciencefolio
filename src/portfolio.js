const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ramaneswaran   | Portfolio",
  description:
    "Aspiring Data Scientist with a passion for problem solving. I work on all things machine learning",
  og: {
    title: "Ramaneswaran",
    type: "website",
    url: "http://ramaneswaran.me/",
  },
};

//Home Page
const greeting = {
  title: "Hey!",
  sub: "Raman",
  logo_name: "Raman",
  resumeLink:
    "https://drive.google.com/file/d/1m6AqAnMc8Hsd2g_xyGXHeMrXvEsSV0cH/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/ramaneswaran",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ramaneswaran",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/ramaneswaran/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed various models for deep learning and statistical use-cases",
        "⚡ Experience in working with Computer Vision and NLP",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Plotly",
        "⚡ Experience with Deep learning libraries like PyTorch and Keras",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in building scalable application backend using FastAPI, Sprint Boot, Node.js",
        "⚡ Hands on experience with deploying application backend to Cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:FastAPI",
          style: {
            color: "#FF282D",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:Flask",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Most of my projects are applications or tools that involve a machine learning component. All the projects are open sourced on GitHub",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Argos",
      img_path: "project-06.png",
      description: "Telegram bot to identify all important messages",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Telegram Bot API",
          color: "#820032",
        },
        {
          lang: "PyTorch",
          color: "#00a100",
        },
        {
          lang: "sPacy",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/GDGVIT/Priority-Msg-Bot",
      linkcolor: "white",
    },

    {
      title: "Quicktext",
      img_path: "voice.gif",
      description: "Toolkit For Text Classification",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "PyTorch",
          color: "#c47206",
        },
        {
          lang: "pytorch-lightning",
          color: "#4257f5",
        },
        {
          lang: "sPacy",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "https://github.com/GDGVIT/quicktext",
      linkcolor: "white",
    },
    {
      title: "Picturate",
      img_path: "neural.gif",
      description: "Text to image synthesis engine",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "PyTorch",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/picturate/picturate",
      linkcolor: "white",
    },
    {
      title: "Perception",
      img_path: "project-03.png",
      description: "Image search engine using CV and Faiss",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "PyTorch",
          color: "#8700b0",
        },
        {
          lang: "FastAPI",
          color: "#ff4b4b",
        },
        {
          lang: "Faiss",
          color: "#c47206",
        },
      ],
      link: "",
      code: "https://github.com/ramaneswaran/perception",
      linkcolor: "white",
    },
    {
      title: "PaperStock",
      img_path: "black-bg.jpg",
      description: "Question paper sharing website for VIT",
      tags: [
        {
          lang: "Node.js",
          color: "#004782",
        },
        {
          lang: "Javascript",
          color: "#8700b0",
        },
        {
          lang: "MongoDB",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "https://github.com/ramaneswaran/paperstock",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "SDE Intern",
        subtitle: "Flipkart",
        date: "May 2021 - Jul 2021",
        content: [
          "Developed REST APIs to power dashboard for Funnel View Dashboard for warehouse activities",
          "The developed dashboard reduced on-call issue diagnosis time to under 1 min",
        ],
      },
      {
        title: "Research Intern",
        subtitle: "Samsung R&D",
        date: "Nov 2020 - Mar 2021",
        content: [
          "Developed ML models for multi-domain dialog state tracking",
          "Trained transformer models for intent classification and slot tracking",
          "Proposed method had intent classification accuracy of 87% and slot tracking accuracy of 95%",
        ],
      },
      {
        title: "Machine Learning Intern",
        subtitle: "Omdena",
        date: "Aug 2020 - Oct 2020",
        content: [
          "Collected and annotated data for predatory conversations",
          "Developed risk predictor model for online conversations",
          "Developed neural search engine for CSAM research papers using Haystack",
        ],
      },
      {
        title: "Backend and Machine Learning Intern",
        subtitle: "SeaPort AI",
        date: "Apr 2020 - Jun 2020",
        content: [
          "Developed a zonal OCR engine for invoice bills",
          "Developed backend APIs for the OCR application using Flask",
          "Deployed the dockerized API on heroku",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Technology in Information Technology",
          subtitle: "Vellore Institute of Technology, Vellore",
          date: "2018 - 2022",
          content: ["CGPA: 9.00/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Don Bosco Alaknanda, New Delhi",
          date: "2016 - 2018",
          content: ["Precentage: 95.8%"],
        },
      ],
    },
    {
      title: ["Achievements"],
      data: [
        {
          title: "Achievements",
          content: [
            "Winner of VIT Hack - Open Innovation Track",
            "Winner of VIT Hack - AWS Educate Track",
            "#19/200 in Cascade Data Analytics Competition",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Sequences, Time Series and Prediction",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/X6L5EY4Y5NYT?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Data Science Methodology",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8CXFAZLUM6Q9",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/FXRN6M6AGLXJ",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Sequence Models",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/KLF5EL4HNJV3",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QXJMF3HKNK3G",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Y4CSSR94NV2F",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XM2KW2QA8QW6",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VLH3R9LH4FWS",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/H4E62J4LE2J5",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Introduction To R",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/0f949d37b520eb8111c32c0c7fcc2144751c11bf",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "You can contact me on linkedin or send me a mail, I will reply withing 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bharat Nagar, New Delhi-110025",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9821944298",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://www.linkedin.com/in/ramaneswaran/",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ramaneswaran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:s.ramaneswaran2000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
