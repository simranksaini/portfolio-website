import emoji from "react-easy-emoji";
const greeting = {
  /* Your Summary And Greeting Section */
  username: "Gursimran",
  title: "Hello, I'm Gursimran",
  subTitle: emoji(
    "Junior year Computer Science student 💻 | Fledgling full stack developer 👾 | Computer Networks enthusiast 🌐"
  ),
  about: emoji(
    "A computer science undergraduate 👩‍🎓 with strong interests in the field of cybersecurity, web development, and programming. I am a proactive, motivated, and responsible individual seeking a position in the field of Information Technology 🚀 to hone my technical skills and contribute to the community."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tlYMUYn6RHVeKrKt0ukKVlhtPxDD9UFC/view?usp=sharing",

  blogLink: "https://medium.com/@sainigursimrankaur",
};
const socialMediaLinks = {
  github: "https://github.com/simranksaini",
  linkedin: "https://www.linkedin.com/in/gursimran-kaur-saini/",
  gmail: "sainigursimrankaur@gmail.com",
};

const aboutSim = {
  title: "About Me",
  education: [
    {
      name: "Bachelors",
      header: "Bachelor of Engineering",
      illus: require("./illustrations/college.svg"),
      heading: emoji(
        "📚 Computer Engineering student at Thapar Institue of Engineering and Technology, Patiala, Punjab"
      ),
      tenure: "July 2017 - Present",
      cred: "Scored: 9.02 CGPA till semester 5",
      courses: [
        {
          courseName: "Advanced Data Structures and Algorithms-UCS616",
          grade: "A",
        },
        {
          courseName: "Artificial Intelligence-UCS521",
          grade: "B",
        },
        {
          courseName: "Computer Architecture and Organization-UCS507",

          grade: "B",
        },
        {
          courseName: "Computer Networks-UCS520",
          grade: "B",
        },
        {
          courseName: "Computer and Network Security-UCS523",

          grade: "B",
        },
        {
          courseName: "Cyber Forensics-UCS643",

          // grade: "a",
        },
        {
          courseName: "Data Structures and Algorithms-UCS406",

          grade: "A",
        },
        {
          courseName: "Database Management Systems-UCS310",

          grade: "A",
        },
        {
          courseName: "Discrete Mathematical Structures-UCS405",

          grade: "B",
        },
        {
          courseName: "Embedded Systems Design-UCS614",

          // grade: "a",
        },
        {
          courseName: "Image Processing-UCS615",
          // grade: "a",
        },
        {
          courseName: "Introduction to Corporate Finance-UHU008",

          grade: "A-",
        },
        {
          courseName: "Mathematics-I-UMA003",

          grade: "A",
        },
        {
          courseName: "Mathematics-II-UMA004",

          grade: "A-",
        },
        {
          courseName: "Object Oriented Programming-UTA018",

          grade: "A",
        },
        {
          courseName: "Operating Systems-UCS303",

          grade: "B",
        },
        {
          courseName: "Optimization Techniques-UMA031",

          grade: "A-",
        },
        {
          courseName: "Probability and Statistics-UCS408",

          grade: "A-",
        },
        {
          courseName: "Secure Coding-UCS634",

          // grade: "a",
        },
        {
          courseName: "Software Engineering-UCS503",

          grade: "A",
        },
        {
          courseName: "Theory of Computation-UCS701",

          grade: "A",
        },
      ],
      achievements: [
        "Was awarded Merit Scholarship based on the performance of freshmen year 2017-18, waiving off 100% of the tuition fees.",
      ],
    },
    {
      name: "Senior Secondary Education",
      header: "Senior Secondary Education",
      illus: require("./illustrations/senSecEdu.svg"),
      heading: emoji(
        "📚 Was a student on non-medical stream at Shivalik Model Senior Secondary School, Nangal, Punjab"
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
      cred: "ICSE: Scored: 89%",
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
      achievements: ["Was the house captain"],
    },
  ],
  hobbies: [
    {
      name: "Baking",
      header: "Baking",
      illus: require("./illustrations/baking.svg"),
      heading: emoji("At times I'm not coding, you'll find me baking 🥧"),
      tenure: "Nothing says home, like the smell of baking!",
      cred: "",
    },
    // {
    //   name: "Matriculation",
    //   header: "Matriculation",
    //   illus: require("./illustrations/matriculation.svg"),
    //   heading: emoji(
    //     "📚 Studied at Mount Carmel Senior Secondary School, Una, Himachal Pradesh"
    //   ),
    //   tenure: "March 2015",
    //   cred: "ICSE: Scored: 89%",
    //   courses: ["course1", "course2"],
    // },
  ],
  pos: [
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
};

const skillsSection = {
  title: "Things I'm in practice with",
  subTitle: "",
  skills: [
    {
      aboutSkill: emoji("⚡ Web Developement"),
      aboutSub:
        "Following are the technologies in web developement that I'm well versed with; I've worked with all these technologies in several projects.",
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
      ],
    },
    {
      aboutSkill: emoji("⚡ Information and Cyber Security"),
      aboutSub:
        "I'm pursuing a major in Cyber Security and have learnt various skills during the course study.",
    },
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
      "Building an anomaly-based botnet detection model using Machine Learning and Deep Learning Techniques.",
    meta: "Mar 2020 – Present",
  },
  {
    header: "Github User Search",
    description:
      "Built this project using React.js, Semantic UI React, JavaScript, CSS and HTML and AJAX. You can search any github user with its username, all the recent searches will be listed and you can view the user profile. (Click to see repo)",
    meta: "June 2020",
    href: "https://github.com/simranksaini/github-user-search.git",
  },
  {
    header: "Social Media Clone",
    description:
      "Built a basic skeleton of a social media app using Django, javaScript, Python, Bootstrap, HTML, and CSS; where users read posts and register/login to make posts.(Click to see repo)",
    meta: "May 2020",
    href: "https://github.com/simranksaini/social-clone.git",
  },
  {
    header: "Blog Site",
    description:
      "Built a basic blog site using Django Framework, JavaScript, Bootstrap, CSS, and HTML; where a user can read the published blogs and register/login to post a blog.(Click to see repo)",
    meta: "Apr 2020",
    href: "https://github.com/simranksaini/blog-project.git",
  },

  {
    header: "Supermarket Management System",
    description: "Built a supermarket management software using SQL and PL/SQL",
    meta: "May 2019",
  },
];

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  aboutSim,
  skillsSection,
  certificates,
  items,
  contactInfo,
};
