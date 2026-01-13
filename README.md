# Developer Portfolio

A modern, pixel-perfect developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions and scroll reveals
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Dual Theme Support**: Light and dark modes with system preference detection
- **Interactive Components**: Hover effects, marquee animations, and toast notifications
- **Performance Optimized**: Built with modern web standards

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI (Radix UI)
- **Icons**: Lucide React
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


## License

Built for portfolio purposes. Feel free to use as inspiration for your own projects.