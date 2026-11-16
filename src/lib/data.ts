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

export const content = {
  header: {
    login: "Log in",
    signup: "Start learning",
  },
  hero: {
    eyebrow: "Learn at your own pace",
    title: "Build skills that actually move you forward.",
    description:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
    primaryCta: { label: "Explore courses", href: "#skills" },
    secondaryCta: { label: "See how it works", href: "#how" },
    trust: "Trusted by 24,000+",
    trustSuffix: "learners",
    rating: "4.9 avg rating",
    badgeValue: "120+",
    badgeLabel: "expert-led courses",
  },
  skills: {
    eyebrow: "Find your next skill",
    title: "Learn something worth knowing.",
    description:
      "Short, practical courses designed around skills you can put to work immediately.",
    explore: "Explore",
  },
  featuredCourse: {
    badge: "FEATURED COURSE",
    kicker: "Most popular this month",
    title: "Designing products people understand.",
    description:
      "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
    instructor: "with Maya Chen · Senior Product Designer",
    meta: ["8 lessons", "2h 40min", "Intermediate"],
    cta: { label: "View course", href: "#contact" },
    browse: { label: "Browse all courses", href: "#skills" },
  },
  howItWorks: {
    eyebrow: "How Luma works",
    title: "Less browsing. More learning.",
  },
  testimonial: {
    quote:
      "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
    author: "Alex Morgan",
    role: "Product Manager",
  },
  people: {
    eyebrow: "the people",
    title: "Meet international students & teachers",
    description:
      "Learning is better together. Meet a global community of students and teachers — instructors who do the work every day, and curious learners from every corner of the world. Wherever you're starting from, you'll find your people here.",
    cta: { label: "Explore teachers and students", href: "#contact" },
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Get in touch",
    description:
      "Have a question? We're here to help. Whether you're looking for the right course, learning with your team or interested in teaching with Luma, we'd love to hear from you.",
    emailLabel: "Email",
    email: "contact@luma.com",
    responseTimeLabel: "Response Time",
    responseTime: "Up to 24 hours on business days",
    formHeading: "Contact us",
    formSubtitle: "Fill out the fields and we will get in touch.",
    success: "Thanks! Your message has been sent — we'll be in touch shortly.",
    form: {
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "youremail@example.com",
      questionLabel: "Your question",
      questionPlaceholder: "Tell us how we can help...",
      submit: "Send message",
    },
  },
  cta: {
    title: "What will you learn next?",
    description: "Start with one course. Build from there.",
    primaryCta: { label: "Explore all courses", href: "#skills" },
    joinCta: { label: "Join Luma", href: "/signup" },
    continueCta: { label: "Continue learning", href: "#skills" },
  },
  footer: {
    tagline: "Practical learning for curious people.",
    copyright: "© 2026 Luma Learning",
  },
};

