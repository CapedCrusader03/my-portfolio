"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/resume";

export function Skills() {
  // Duplicate skills array for seamless infinite scroll
  const duplicatedSkills = [...DATA.skills, ...DATA.skills];

  return (
    <section className="py-20 overflow-hidden">
      <div className="w-full max-w-none px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern, scalable applications.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="relative flex justify-center">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

            {/* Marquee container */}
            <motion.div
              className="flex space-x-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 border-border/50"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}