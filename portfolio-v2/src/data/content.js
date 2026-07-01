export const heroData = {
  greeting: "Hi, I'm Peter",
  intro: 'Building scalable systems across industries',
};

export const projectsData = [
  {
    id: 1,
    title: 'Switch',
    description:
      'A DeFi application on the Ethereum Sepolia Testnet. It allows users to cryptographically lock Sepolia (ETH) for a fixed duration.',
    tech: [
      'React',
      'TypeScript',
      'Ether.js',
      'Web3.js',
      'Zustand',
      'Python',
      'FastAPI',
      'Docker',
      'PostgreSQL',
    ],
    github: 'https://github.com/aluyapeter/switch-smart-vault',
    live: 'https://switch-smart-vault.vercel.app',
  },
  {
    id: 2,
    title: 'Wallet Service',
    description:
      'A high-performance, async fintech backend that acts as a "Mini-Bank" core, featuring secure authentication, Step-Up security, real-time deposits, wallet to wallet transfer, and professional database migrations.',
    tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/aluyapeter/wallet_service',
    live: null,
  },
  {
    id: 3,
    title: 'FinFind',
    description:
      'An AI agent built to integrate with the Telex.im platform that functions as an "AI Coworker" that can provide a brief history and a list of the top 5 fintech startups for any given country.',
    tech: ['Python', 'FastAPI', 'Groq'],
    github: 'https://github.com/aluyapeter/finfind-a2a',
    live: null,
  },
];

export const experienceData = [
  {
    id: 1,
    role: 'Freelance Full-Stack Developer (Contract)',
    company: 'ACEVirtual-SupportServices',
    date: 'May 2026 - Jun 2026',
    description: [
      'Built and deployed a full-stack brand and blog platform (Next.js on Vercel, FastAPI on Render, PostgreSQL) for an external client, owning architecture end-to-end.',
      
      'Designed a custom backend admin dashboard giving the client full control over blog content, media, and site configuration, including a TipTap rich-text editor with slash commands and a content archive system.',

      "Integrated Cloudinary for media handling (with a custom loader bypassing Next.js's image optimizer) and Resend for transactional email."
    ]
  },
  {
    id: 2,
    role: 'Intern',
    company: 'HNG Tech',
    date: 'Oct 2025 - Dec 2025',
    description: [
      'Built secure backend systems featuring AI integration, Paystack payment integration, and atomic PostgreSQL transactions, with automated containerized deployments.',

      'Developed high-performance RESTful APIs (including a String Logic Analyser), prioritising clean architecture, strict typing, and scalable code structure.',

      'Delivered functional code against ticket-based requirements in a fast-paced Agile environment under strict deadlines.'
    ]
  },
];

export const articlesData = [
  {
    id: 1,
    title: 'Reading inputs in Go',
    url: 'https://bufiopackage.hashnode.dev/reading-input-in-go-using-bufionewscanner-and-bufionewreader-effectively',
    date: 'May 2025',
  },
  {
    id: 2,
    title: 'Building a simple CLI tool in Go using Cobra',
    url: 'https://cobragopackage.hashnode.dev/building-a-simple-cli-tool-in-go-using-cobra',
    date: 'May 2025',
  },
  {
    id: 3,
    title:
      'Building an AI Agent for Country History and Fintech Startup Insights: A Complete Guide',
    url: 'https://cobragopackage.hashnode.dev/building-an-ai-agent-for-country-history-and-fintech-startup-insights-a-complete-guide',
    date: 'Nov 2025',
  },
  {
    id: 4,
    title:
      'How I Prevented Double-Crediting in My Fintech Wallet (Webhook Idempotency Explained)',
    url: 'https://webhook-idempotency-explained.hashnode.dev/how-i-prevented-double-crediting-in-my-fintech-wallet-webhook-idempotency-explained',
    date: 'Jan 2026',
  },
];
