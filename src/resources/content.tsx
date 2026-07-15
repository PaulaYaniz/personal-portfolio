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
        Business Administration and Computer Science student at Washington and Lee University
        with experience leading cross-functional product teams across startup and nonprofit settings.
        Certified in International Trade, I pair user research with hands-on AI work—LLMs, the Claude API,
        and prompt engineering—to build trustworthy, user-centered products across the full product lifecycle.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Develop for Good 501(c)(3)",
        timeframe: "May 2026 - Present",
        role: "Product Manager",
        achievements: [
          <>
            Led a 10-person engineering and design team to launch a website and internal database
            for a nonprofit
          </>,
          <>
            Interviewed nonprofit leaders and IT admins to identify workflow bottlenecks and define
            the first product release
          </>,
          <>Wrote PRDs and coordinated weekly sprints across engineering and design teams</>,
          <>Launched a Supabase/Vercel database and WordPress site serving 40+ customers</>,
        ],
        images: [],
      },
      {
        company: "Washington and Lee University",
        timeframe: "June 2026 - Present",
        role: "AI Research Assistant · Summer Research Scholars",
        achievements: [
          <>
            Analyzed 6,000 Kickstarter campaigns to measure how AI claims affect funding outcomes
          </>,
          <>Built an NLP pipeline to classify AI messaging across campaigns</>,
          <>
            Identified how language around AI moderates customer trust, informing recommendations
            for trustworthy AI communication
          </>,
        ],
        images: [],
      },
      {
        company: "Washington and Lee University",
        timeframe: "Jan. 2026 - Present",
        role: "Teaching Assistant - Computer Science",
        achievements: [
          <>
            Helped 30+ students understand technical concepts by translating complex ideas into clear,
            practical explanations
          </>,
          <>
            Collaborated with faculty to identify recurring learning challenges and improve course
            materials and labs
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
            Bonner & Davis Scholar (full-ride scholarship), GPA: 3.72. Active in AI Club, GenTech,
            Student Consulting, Engineering Community Development, and the Latino Association.
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
            Experienced in Agile/Scrum, roadmap development, PRDs, and translating user needs into
            prioritized product backlogs. Skilled in user research, A/B testing, and KPI definition
            using Figma, Jira, and Notion.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Jira",
            icon: "code",
          },
          {
            name: "User Research",
            icon: "person",
          },
        ],
        images: [],
      },
      {
        title: "AI & Data Analysis",
        description: (
          <>
            Proficient in Claude Code, the Claude API, Python (pandas, Matplotlib), SQL, and ArcGIS for
            data analysis and LLM-based text classification. Experienced with agentic AI tools and
            prompt engineering.
          </>
        ),
        tags: [
          {
            name: "LLMs",
            icon: "code",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Claude API",
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
        title: "Engineering & Design",
        description: (
          <>
            Native iOS development with Swift and SwiftUI (shipped an accessibility-first app), plus
            web development with JavaScript, HTML/CSS, and AWS. UI/UX design with Figma and Adobe
            Illustrator for user flows and prototypes.
          </>
        ),
        tags: [
          {
            name: "Swift",
            icon: "code",
          },
          {
            name: "SwiftUI",
            icon: "code",
          },
          {
            name: "JavaScript",
            icon: "javascript",
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

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product and development projects by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
