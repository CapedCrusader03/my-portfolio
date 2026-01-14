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

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/ProfilePic cropped jpeg.jpeg"
                alt="Kshitij Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status Text to the Right */}
            <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2">
              <div className="bg-green-500/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-green-400/30">
                <div className="flex items-center space-x-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2 h-2 bg-green-300 rounded-full"
                  />
                  <span className="text-xs font-medium text-white whitespace-nowrap">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
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
            {/* <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Software Engineer
            </span> */}
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
            href="/Kshitij_Kumar_Resume.pdf"
            download="Kshitij_Kumar_Resume.pdf"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 transition-colors"
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