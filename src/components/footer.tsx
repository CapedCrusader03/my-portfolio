import Link from "next/link";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 w-full max-w-none px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Next.js
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Vercel
            </Link>
            .
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}