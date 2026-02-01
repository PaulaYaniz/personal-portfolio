import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Paula",
  lastName: "Yaniz Macia",
  name: `Paula Yaniz Macia`,
  role: "CS & Business Student",
  avatar: "/images/avatar.jpg",
  email: "pyanizmacia@mail.wlu.edu",
  location: "America/New_York", // Lexington, VA timezone
  languages: ["English", "Spanish"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on projects at the intersection of business and technology</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PaulaYaniz",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/paulaya/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building solutions at the intersection of business and technology</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AV Raval</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/av-raval-digital-voting-system",
  },
  subline: (
    <>
    I'm Paula, a Computer Science and Business Administration student at <Text as="span" size="xl" weight="strong">Washington and Lee University</Text>. I lead cross-functional projects <br /> and translate user needs into technical solutions throughout the full product lifecycle.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Washington and Lee University`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Paula is a Business Administration and Computer Science student at Washington and Lee University 
        with experience leading cross-functional projects across startup and nonprofit settings. Certified 
        in International Trade and skilled in Python, Claude Code, AWS, and Adobe Creative Suite, she 
        translates user needs into technical solutions throughout the full product lifecycle.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Washington and Lee University",
        timeframe: "Jan. 2026 - Present",
        role: "Teaching Assistant - Computer Science",
        achievements: [
          <>
            Helped 20+ students understand technical concepts by translating complex ideas into clear, 
            practical explanations
          </>,
          <>
            Worked closely with the professor to identify common student difficulties and improve 
            assignments and labs
          </>,
        ],
        images: [],
      },
      {
        company: "Diversified Capital Group",
        timeframe: "Jan. 2025 - Present",
        role: "Technology Sector Analyst",
        achievements: [
          <>
            Conducted competitive analysis of AI-driven tech business models to inform product strategy 
            for a $650k portfolio
          </>,
          <>
            Analyzed financial and product metrics (revenue, user growth) to form data-driven investment theses
          </>,
          <>
            Delivered public investment pitches to stakeholders, successfully defending strategic portfolio 
            recommendations
          </>,
        ],
        images: [],
      },
      {
        company: "Jane Goodall Institute",
        timeframe: "May 2025 - Sept. 2025",
        role: "Development Intern",
        achievements: [
          <>
            Evaluated 40+ funding proposals via ROI to align initiatives with strategic goals and 
            cross-functional roadmaps
          </>,
          <>
            Designed data visualizations for 2023–25 Impact Report to communicate project outcomes to 
            global stakeholders
          </>,
        ],
        images: [],
      },
      {
        company: "Project Horizon NGO",
        timeframe: "Oct. 2024 - Present",
        role: "Crisis Operations Lead",
        achievements: [
          <>
            Managed crisis response and resource deployment (medical, legal, shelter) on 24/7 abuse hotline, 
            utilizing rapid risk assessments to optimize shelter operations and ensure safety protocol compliance
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Washington and Lee University",
        description: (
          <>
            Bachelor of Science in Computer Science and Business Administration (2024-2028). 
            Bonner & Davis Scholar (full-ride scholarship), GPA: 3.74. Active in AI Club, GenTech, 
            Student Consulting, and Engineering Community Development.
          </>
        ),
      },
      {
        name: "UWC ISAK Japan",
        description: (
          <>
            International Baccalaureate (2022-2024). $70k scholarship recipient with leadership roles 
            in Outdoor Education, Politics club, and Orientation.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Product Management",
        description: (
          <>
            Experienced in Agile/Scrum methodologies, roadmap development, and translating user needs 
            into technical requirements and prioritized product backlogs.
          </>
        ),
        tags: [
          {
            name: "Agile/Scrum",
            icon: "code",
          },
          {
            name: "User Research",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "AI & Data Analysis",
        description: (
          <>
            Proficient in Claude Code, Python (pandas, Matplotlib), SQL, and ArcGIS for data analysis 
            and visualization. Experience with OpenAI API integration and prompt engineering.
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Claude Code",
            icon: "code",
          },
          {
            name: "SQL",
            icon: "database",
          },
        ],
        images: [],
      },
      {
        title: "Technical & Design",
        description: (
          <>
            Full-stack development with JavaScript, HTML/CSS, and AWS. UI/UX design with Figma and 
            Adobe Illustrator for creating user flows and prototypes.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about product and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
