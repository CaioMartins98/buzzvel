type Category = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export const categories: Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    accent: "#e2e8ff",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    accent: "#ffcb9f",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    accent: "#ffee7e",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    accent: "#fff1c2",
  },
];

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const steps: Step[] = [
  {
    number: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    image: "/images/step1.svg",
  },
  {
    number: "Step 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who actually use these skills.",
    image: "/images/step2.svg",
  },
  {
    number: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    image: "/images/step3.svg",
  },
];

type Stat = {
  value: string;
  label: string;
};

export const learningStats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

type FooterColumn = {
  title: string;
  links: string[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: ["Courses", "Categories", "Instructors", "For Teams"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Journal"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Terms", "Privacy"],
  },
];

export const navLinks = [
  { label: "Courses", href: "#skills" },
  { label: "For Teams", href: "#how" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export const trustedAvatars = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
];

