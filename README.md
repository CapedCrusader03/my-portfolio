# Developer Portfolio

A modern, pixel-perfect developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions and scroll reveals
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Dual Theme Support**: Light and dark modes with system preference detection
- **Interactive Components**: Hover effects, GSAP marquee animations, 3-project carousel with navigation arrows, typing animation, toast notifications, uniform card dimensions, and structured bullet-point descriptions
- **GSAP Marquees**: Ultra-smooth, infinite dual marquees with extended content for seamless loops
- **Social Integration**: GitHub, LinkedIn, and X (Twitter) links with hover animations
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Built with modern web standards

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion, React Type Animation
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Shadcn UI (Radix UI)
- **Icons**: Lucide React
- **Theme**: Next Themes (Light/Dark mode)
- **Fonts**: Geist Sans (Google Fonts)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with dark theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── navbar.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills marquee
│   ├── contact.tsx       # Contact section
│   └── footer.tsx        # Site footer
├── data/                 # Static data
│   └── resume.tsx        # Portfolio data
└── lib/                  # Utilities
    └── utils.ts          # Tailwind utility functions
```

## Customization

1. **Update Personal Information**: Edit `src/data/resume.tsx`
2. **Add Projects**: Update the `projects` array in the data file
3. **Customize Styling**: Modify `src/app/globals.css`
4. **Add Images**: Place images in the `public/` directory

## Deployment

This portfolio is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

## Contact Form Setup

The contact form currently uses a `mailto:` link to open the user's email client. For production use, consider integrating with:

- **EmailJS**: Client-side email sending
- **Formspree**: Simple form handling service
- **Netlify Forms**: If deploying on Netlify
- **Vercel Functions**: Serverless email sending

To integrate with EmailJS:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your service ID, template ID, and public key
3. Update the contact form to use EmailJS instead of mailto

Example integration:
```typescript
import emailjs from '@emailjs/browser';

// In the onSubmit function
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## License

Built for portfolio purposes. Feel free to use as inspiration for your own projects.