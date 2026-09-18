import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Paula",
  lastName: "Yaniz Macia",
  name: `Paula Yaniz Macia`,
  role: "Product Manager · CS & Business Student",
  avatar: "/images/avatar.jpg",
  email: "pyanizmacia@mail.wlu.edu",
  location: "Lexington, VA", // Lexington, VA timezone
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
        Product Manager and Computer Science & Business Administration student at Washington and Lee University
        with experience leading cross-functional teams at nonprofits, startups, and research initiatives.
        I combine user research with technical depth—Python, SQL, LLMs, and AI—to define product strategy and build
        user-centered solutions across the full product lifecycle.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        role: "Product Manager",
        company: "Develop for Good",
        timeframe: "May 2026 – Sep. 2026",
        achievements: [
          <>
            Led a 10-person engineering and design team building an NGO website and internal database
          </>,
          <>
            Interviewed IT leaders to identify workflow bottlenecks, gather requirements, and define MVP scope
          </>,
          <>
            Wrote PRDs, prioritized roadmap features, and ran weekly Agile sprints using Notion, Figma, and GitHub
          </>,
          <>
            Defined data flows and API requirements for a Supabase/SQL backend and Vercel frontend supporting 90+ users
          </>,
        ],
        images: [],
      },
      {
        role: "Computer Science Teaching Assistant",
        company: "Washington and Lee University",
        timeframe: "Jan. 2026 – Present",
        achievements: [
          <>
            Translated complex technical concepts into clear, practical explanations for 50+ students
          </>,
          <>
            Collaborated with faculty to identify recurring learning challenges and improve course materials and labs
          </>,
        ],
        images: [],
      },
      {
        role: "AI Research Assistant",
        company: "Washington and Lee University",
        timeframe: "Jun. 2026 – Aug. 2026",
        achievements: [
          <>
            Analyzed 6,000 Kickstarter campaigns with Stata to measure how AI claims relate to funding outcomes
          </>,
          <>
            Built a 95%-accurate LLM-based NLP pipeline using Python, SQL, and Gemini API to automate AI classification
          </>,
          <>
            Evaluated patterns in AI-related messaging and their relationship to startup and crowdfunding outcomes
          </>,
        ],
        images: [],
      },
      {
        role: "Technology Sector Analyst",
        company: "Diversified Capital Group",
        timeframe: "Jan. 2025 – May 2026",
        achievements: [
          <>
            Conducted competitive analysis of AI and technology companies to inform strategy for a $650k portfolio
          </>,
          <>
            Presented investment recommendations by synthesizing product positioning, market trends, and growth potential
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
            Bachelor of Science in Computer Science and Business Administration, Aug. 2024 – May 2028, Lexington, VA.
            Bonner & Davis Scholar (full-ride scholarship), GPA: 3.72. Relevant Coursework: Data Structures, Software Development, Regression Analysis, Marketing Management.
          </>
        ),
      },
      {
        name: "UWC ISAK Japan",
        description: (
          <>
            International Baccalaureate, Aug. 2022 – May 2024, Karuizawa, Japan.
            Selected as a UWC Spain scholar (3% acceptance rate); received a $70k scholarship.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Product",
        description: (
          <>
            User Research, Experimentation, Prototyping, PRDs, Roadmapping, Product Discovery, Product Analytics
          </>
        ),
        tags: [
          {
            name: "User Research",
            icon: "person",
          },
          {
            name: "PRDs",
            icon: "code",
          },
          {
            name: "Roadmapping",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "Data & AI",
        description: (
          <>
            Python, SQL, Stata, Regression Analysis, LLMs, NLP, Gemini API, Claude Code
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "LLMs",
            icon: "code",
          },
          {
            name: "Claude Code",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "Technical",
        description: (
          <>
            Git/GitHub, C, Java, HTML/CSS, Supabase, Vercel, Figma, Excel
          </>
        ),
        tags: [
          {
            name: "Git/GitHub",
            icon: "github",
          },
          {
            name: "Supabase",
            icon: "code",
          },
          {
            name: "Vercel",
            icon: "code",
          },
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Languages",
        description: (
          <>
            Spanish (Native), English (Fluent)
          </>
        ),
        tags: [
          {
            name: "Spanish",
            icon: "code",
          },
          {
            name: "English",
            icon: "code",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product and development projects by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
