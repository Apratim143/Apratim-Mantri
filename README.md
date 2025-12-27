# Apratim Mantri - Digital Marketer Portfolio

A high-performance, responsive portfolio website built for **Apratim Mantri (Trending33)**, a certified Digital Marketer and Performance Marketing Specialist.

## 🚀 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **AI Integration**: [Google Gemini API (@google/genai)](https://ai.google.dev/)
- **Icons**: Font Awesome 6
- **Deployment**: Optimized for Vercel / Netlify

## 📁 Project Structure

The project follows a modular React structure for easy maintenance and scalability:

```text
root/
├── public/                 # Static assets (Favicons, images)
├── components/             # Reusable UI components
│   ├── AIChat.tsx          # Gemini-powered assistant section
│   ├── Hero.tsx            # Landing section with typing effect
│   ├── Skills.tsx          # Skill categorization & grid
│   ├── Experience.tsx      # Professional timeline
│   ├── Projects.tsx        # Portfolio highlights
│   ├── Certifications.tsx  # Horizontal scrolling certs
│   └── Education.tsx       # Academic background
├── services/               # External API integrations
│   └── geminiService.ts    # AI prompt engineering & API logic
├── constants.ts            # Central source of truth for all text content
├── types.ts                # TypeScript interfaces for data consistency
├── App.tsx                 # Main layout & Theme management (Dark/Light)
├── index.tsx               # React DOM mounting
├── index.html              # Entry point, GTM, SEO, and Metadata
├── vite.config.ts          # Vite configuration & Env mapping
└── package.json            # Dependencies & scripts
```

## ✨ Key Features

1.  **AI Assistant**: A custom chatbot powered by **Gemini 3 Flash** that answers recruiter questions using Apratim's specific resume data as context.
2.  **Dark Mode**: A sleek "NYC Nightlife" inspired dark theme using Tailwind's `dark:` class system, featuring neon accents and radial gradients.
3.  **SEO Optimized**: Fully configured with Open Graph tags, Twitter cards, and JSON-LD structured data for better search engine visibility.
4.  **Performance Focused**: Hotlinked favicons from Google Drive for faster delivery and minimal local bundle size.
5.  **Responsive Design**: Mobile-first approach with a dedicated hamburger menu and touch-optimized scrolling for certifications.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- A Google Gemini API Key

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add your Gemini API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production-ready bundle:
```bash
npm run build
```

## 📈 Marketing Configurations

- **Google Tag Manager**: Integrated via `index.html` (GTM-K987DJW).
- **Google Ads**: Auto-ad script included.
- **Canonical URLs**: Configured to `https://www.trending33.com/`.

## 📄 License

Created by Apratim Mantri. Content is proprietary. Code is available for personal portfolio use.