import emoji from "react-easy-emoji";
const greeting = {
  username: "Gursimran",
  title: "Hello, I'm Gursimran",
  // subTitle: emoji(
  //   "Software Engineer 💻 | Full Stack Developer 👩‍💻 | Computer Science Graduate 🎓"
  // ),
  about: emoji(
    "I'm a Software Engineer 🖥️. I stand for quality, innovation and building products to elevate the community. I am a proactive, confident, and communicatively strong person, always looking ahead in the future."
  ),
  about2: emoji(
    "I am currently working as a Software Engineer at inFeedo where I use node.js to convert ideas into reality and thereby make life of numerous employees better 💥. I also have experience in working with Java, Spring, and Angular to name a few. I am always looking forward to opportunities where I can learn, grow and create an impact 🌱."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/17yjRj6UxX2lk9mlmlmeAIJu7Z_U_ulKE?usp=sharing",
  blogLink: "",
};
const socialMediaLinks = {
  github: "https://github.com/simranksaini",
  linkedin: "https://www.linkedin.com/in/gursimran-kaur-saini/",
  gmail: "sainigursimrank@gmail.com",
};

const aboutSim = {
  title: "About Me",
  aboutMeDescription:
    "I am a passionate, open-minded and adaptable individual. I am a quick learner and have experience with working on new codebase with minimal KT. I strive for writing clean, reusable, and thoroughly tested code. I have quick turnaround time for the feedback I receive. I enjoy using my obsessive attention to detail for making things better.",
  workExperience: [
    {
      name: "inFeedo",
      header: "inFeedo",
      illus: require("./illustrations/ccs.svg"),
      about: "",
      href: "https://infeedo.com/",
      resp: [
        {
          head: "Software Engineer",
          tenure: "Sep 2021 – Present",
          lis: [
            "I convert ideas into code to make Amber (the smart artificial intelligence enabled chatbot) smarter everyday.",
          ],
        },
      ],
    },
    {
      name: "BlackRock",
      header: "BlackRock",
      illus: require("./illustrations/tff.svg"),
      about: "",
      href: "https://www.blackrock.com/corporate",
      resp: [
        {
          head: "Software Engineering Analyst",
          tenure: "July 2021 – Sep 2021",
          lis: [
            "Worked as a Full Stack developer with BlackRock's Site Reliability Engineering team",
            "Improved and revamped an in-house performance testing tool",
            "Worked with: Java-Spring framework, Angular, Jest, Grafana, Azure DevOps, and BlackRock's internal libraries",
          ],
        },
        {
          head: "Intern",
          tenure: "Jan 2021 – July 2021",
          lis: [
            "Conceptualized, and developed a Distributed Transaction Management System prototype using Akka",
            "Developed and proposed a BlackRock specific social media app for employees to encourage and appreciate colleagues; during an internal Hackathon",
            "Learned working in an agile development environment, and writing reusable, easy-to-maintain code",
          ],
        },
      ],
    },
  ],
  education: [
    {
      name: "Bachelors",
      header: "Bachelor of Engineering",
      illus: require("./illustrations/college.svg"),
      heading: emoji(
        "📚 Computer Engineering graduate from Thapar Institute of Engineering and Technology, Patiala, Punjab"
      ),
      tenure: "July 2017 - June 2021",
      cred: "Scored: 9.08 CGPA",
      courses: [
        {
          courseName: "Advanced Data Structures and Algorithms",
          grade: "A",
        },
        {
          courseName: "Artificial Intelligence",
          grade: "B",
        },
        {
          courseName: "Database Management Systems",

          grade: "A",
        },
        {
          courseName: "Probability and Statistics",

          grade: "A-",
        },
        {
          courseName: "Advanced Computer Networks",

          grade: "B",
        },
        // {
        //   courseName: "Secure Coding",

        //   grade: "A",
        // },
        // {
        //   courseName: "Computer Architecture and Organization",

        //   grade: "B",
        // },
        // {
        //   courseName: "Computer Networks",
        //   grade: "B",
        // },
        // {
        //   courseName: "Computer and Network Security",

        //   grade: "B",
        // },
        // {
        //   courseName: "Cyber Forensics",

        //   grade: "A",
        // },
        // {
        //   courseName: "Data Structures and Algorithms",

        //   grade: "A",
        // },
        // {
        //   courseName: "Discrete Mathematical Structures",

        //   grade: "B",
        // },
        // {
        //   courseName: "Embedded Systems Design",

        //   grade: "A",
        // },
        // {
        //   courseName: "Image Processing",
        //   grade: "A",
        // },
        // {
        //   courseName: "Introduction to Corporate Finance",

        //   grade: "A-",
        // },
        // {
        //   courseName: "Mathematics-I",

        //   grade: "A",
        // },
        // {
        //   courseName: "Mathematics-II",

        //   grade: "A-",
        // },
        // {
        //   courseName: "Object Oriented Programming",

        //   grade: "A",
        // },
        // {
        //   courseName: "Operating Systems",

        //   grade: "B",
        // },
        // {
        //   courseName: "Optimization Techniques",

        //   grade: "A-",
        // },
        {
          courseName: "Software Engineering",

          grade: "A",
        },
        // {
        //   courseName: "Theory of Computation",

        //   grade: "A",
        // },
      ],
      achievements: [
        "Received Merit Scholarship based on the performance of freshmen year 2017-18, waiving off 100% of the tuition fees.",
      ],
      extraCurriculum: [
        {
          name: "Thapar Food Festival",
          header: "Thapar Food Festival",
          illus: require("./illustrations/tff.svg"),
          about:
            "Thapar Food Festival (TFF) is the first food festival of its kind to be organized by an Indian college.",
          resp: [
            {
              head: "Executive Board Member",
              tenure: "Feb 2019 – Feb 2020",
              lis: [
                "Initiated an Exchange for a Change campaign in the Patiala city to recycle and reduce plastic waste, and to educate the city about problems associated with 'single-use' plastic",
                "Responsible for handling the written content used in marketing, publicity,captions,other formal and informal write-ups.",
                "Responsible for public relations and handling social media pages, planning, and executing contests and campaigns to maintain the reach of the handles.",
                "Planning and executing logistics for the events and ensuring a smooth delivery of the event.",
              ],
            },
            {
              head: "Core Member",
              tenure: "Mar 2018 – Feb 2019",
              lis: [
                "Organized, conceptualized, and managed a Guinness World Record attempt of opening the maximum number of beverage cans simultaneously.",
                "Worked as a content writer in various departments and handled the social media pages.",
              ],
            },
          ],
        },
        {
          name: "Creative Computing Society",
          header: "Creative Computing Society",
          illus: require("./illustrations/ccs.svg"),
          about:
            "Creative Computing Society is one of the most elite technical societies of Thapar.",
          resp: [
            {
              head: "Core Member",
              tenure: "May 2018 – Aug 2018",
              lis: [
                " Led a team of 70 students to plan and execute various tech events.",
                "Handled the written content on behalf of society.",
                "Handled the social media pages for the society.",
                "Organized Google IO Extended 2018 in collaboration with Google Developers' Group Jalandhar.",
              ],
            },
            {
              head: "Team Member",
              tenure: "Sep 2017 – May 2018",
              lis: [
                "Worked with a team of 70+ members and hosted 2 intra-college technical fests; Chakravyuh in October and Helix in February.",
                "Actively wrote all types of formal and informal content.",
              ],
            },
          ],
        },
      ],
    },
    {
      name: "SSE",
      header: "Senior Secondary Education",
      illus: require("./illustrations/senSecEdu.svg"),
      heading: emoji(
        "📚 Studied at Shivalik Model Senior Secondary School, Nangal, Punjab"
      ),
      tenure: "May 2017",
      cred: "CBSE: Scored: 89%",
      courses: [
        {
          courseName: "Mathematics",
          score: "95/100",
        },
        {
          courseName: "Physics",
          score: "95/100",
        },
        {
          courseName: "Chemistry",
          score: "95/100",
        },
      ],
      achievements: ["Stood third in overall 12th board results"],
    },
    {
      name: "Matriculation",
      header: "Matriculation",
      illus: require("./illustrations/matriculation.svg"),
      heading: emoji(
        "📚 Studied at Mount Carmel Senior Secondary School, Una, Himachal Pradesh"
      ),
      tenure: "March 2015",
      cred: "ICSE: Scored: 95.8%",
      courses: [
        {
          courseName: "Mathematics",
          score: "97/100",
        },
        {
          courseName: "Science",
          score: "94/100",
        },
        {
          courseName: "Computer Applications(and Java with BlueJ)",
          score: "97/100",
        },
      ],
      // TODO Shift to extra curricular
      achievements: ["Was the house captain"],
    },
  ],
  hobbies: [
    // TODO Reintroduce this if and when have more content wrt baking
    // {
    //   name: "Baking",
    //   header: "Baking",
    //   illus: require("./illustrations/baking.svg"),
    //   heading: emoji("At times I'm not coding, you'll find me baking 🥧"),
    //   tenure: "Nothing says home, like the smell of baking!",
    //   cred: "",
    // },
  ],
};

const skillsSection = {
  title: "Things I'm in practice with",
  subTitle: "",
  skills: [
    {
      aboutSkill: emoji("⚡ Software Engineering"),
      aboutSub: "Following are the technologies I've hands-on experience of:",
      // add link ICONNN
      softwareIcons: [
        {
          skillName: "html-5",
          icon: "logos:html-5",
        },
        {
          skillName: "css3",
          icon: "logos:css-3",
        },
        {
          skillName: "Bootstrap",
          icon: "logos:bootstrap",
        },

        {
          skillName: "SemanticUI",
          icon: "logos:semantic-ui",
        },
        {
          skillName: "JavaScript",
          icon: "logos:javascript",
        },
        {
          skillName: "reactjs",
          icon: "logos:react",
        },
        {
          skillName: "Angular",
          icon: "logos:angular-icon",
        },
        {
          skillName: "python",
          icon: "logos:python",
        },
        {
          skillName: "django",
          icon: "logos-django",
        },
        {
          skillName: "flask",
          icon: "simple-icons:flask",
        },
        {
          skillName: "sql-database",
          icon: "logos:mysql",
        },
        {
          skillName: "mongoDB",
          icon: "logos:mongodb",
        },
        {
          skillName: "Cassandra",
          icon: "logos:cassandra",
        },
        {
          skillName: "Java",
          icon: "logos:java",
        },
        {
          skillName: "Spring",
          icon: "logos:spring-icon",
        },
        {
          skillName: "node.js",
          icon: "logos:nodejs",
        },
        {
          skillName: "Jest",
          icon: "logos:jest",
        },
        {
          skillName: "Grafana",
          icon: "logos:grafana",
        },
      ],
    },
    // {
    //   aboutSkill: emoji("⚡ Information and Cyber Security"),
    //   aboutSub:
    //     "I'm pursuing a major in Cyber Security and have learnt various skills during the course study.",
    // },
  ],
};

const certificates = {
  title: "Certifications",
  certis: [
    {
      certiName: "Advanced Data Structures",
      certificate: require("./certificates/ADS(COC).pdf"),
    },
    {
      certiName: "Flask",
      certificate: require("./certificates/Flask(COC).pdf"),
    },
    {
      certiName: "International Cyber Conflicts",
      certificate: require("./certificates/International Cyber Conflicts (COC).pdf"),
    },
    {
      certiName: "Machine Learning Basics",
      certificate: require("./certificates/MLBasics(COC).pdf"),
    },
    {
      certiName: "MongoDB",
      certificate: require("./certificates/MongoDB(COC).pdf"),
    },
    {
      certiName: "React.js",
      certificate: require("./certificates/React(COC).pdf"),
    },
    {
      certiName: "SQL",
      certificate: require("./certificates/SQL(COC).pdf"),
    },
  ],
};

const items = [
  {
    header: "Botnet Detection Model",
    description:
      "Built an anomaly-based botnet detection model using Machine Learning and Deep Learning Techniques.",
    // meta: "Mar 2020 – Nov 2020",
  },
  {
    header: "Converse App",
    description:
      "Built an audio-only iOS app to enhance the e-learning experience for students using Java SpringBoot for backend",
    href: "https://github.com/ConvoCrew/Converse-RestApi",
    // meta: "Mar 2020 – Nov 2020",
  },
  {
    header: "Distributed Transaction Management Using Akka",
    description:
      "Built an application using Akka and Java 8 to handle distributed transactions.",
    // meta: "Mar 2020 – Nov 2020",
  },
  {
    header: "iSupport",
    description:
      "Built an iOS social media app for people to appreciate and see the good in others using Java SpringBoot.",
    // meta: "Mar 2020 – Nov 2020",
  },
  {
    header: "Github User Search",
    description:
      "Built this project using React.js, Semantic UI React, JavaScript, CSS and HTML and AJAX. You can search any github user with its username, all the recent searches will be listed and you can view the user profile. (Click to see repo)",
    // meta: "June 2020",
    href: "https://simranksaini.github.io/github-user-search/",
  },
  {
    header: "Social Media Clone",
    description:
      "Built a basic skeleton of a social media app using Django, javaScript, Python, Bootstrap, HTML, and CSS; where users read posts and register/login to make posts.(Click to see repo)",
    // meta: "May 2020",
    href: "https://github.com/simranksaini/social-clone.git",
  },
  {
    header: "Chatroom in Python",
    description:
      "Built a chatroom in python using socket programming and multi-threading",
    href: "https://github.com/simranksaini/python-chatroom",
  },
  {
    header: "Diabetes Predictor",
    description:
      "Built a basic diabetes predictor model using machine learning.",
    meta: "May 2020",
  },
  {
    header: "Blog Site",
    description:
      "Built a basic blog site using Django Framework, JavaScript, Bootstrap, CSS, and HTML; where a user can read the published blogs and register/login to post a blog.(Click to see repo)",
    // meta: "Apr 2020",
    href: "https://github.com/simranksaini/blog-project.git",
  },
  {
    header: "Plot4 game",
    description: "Built a plot 4 game using vanilla JavaScript.",
    // meta: "Jun 2019",
    href: "https://simranksaini.github.io/Connect4/",
  },
  {
    header: "Supermarket Management System",
    description: "Built a supermarket management software using SQL and PL/SQL",
    // meta: "May 2019",
  },
];

export {
  greeting,
  socialMediaLinks,
  aboutSim,
  skillsSection,
  certificates,
  items,
};
