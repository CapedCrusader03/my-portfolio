"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/typing-animation";
import { SocialLinks } from "@/components/social-links";
import { DATA } from "@/data/resume";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-green-400 rounded-full mr-2"
            />
            Available for Work
          </Badge>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            Based in San Francisco, CA
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Hi, I'm {DATA.name}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: DATA.summary }}
          />
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <TypingAnimation />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-sm font-medium shadow hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
}