"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/blur-fade";
import { skillIcons } from "@/components/skill-icons";
import { DATA } from "@/data/resume";

export function Skills() {
  // Create two sets of skills for the two marquees
  const skillsSet1 = [...DATA.skills, ...DATA.skills];
  const skillsSet2 = [...DATA.skills.slice().reverse(), ...DATA.skills.slice().reverse()];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container max-w-6xl px-4 mx-auto">
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

        <div className="space-y-8">
          {/* First marquee - left to right */}
          <BlurFade delay={0.1}>
            <div className="relative overflow-hidden rounded-xl bg-secondary/20 border border-border/20 p-8">
              {/* Gradient masks for fade effect */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent" />

              {/* Marquee container - left to right */}
              <motion.div
                className="flex space-x-8"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsSet1.map((skill, index) => {
                  const skillData = skillIcons[skill];
                  const IconComponent = skillData?.icon;

                  return (
                    <motion.div
                      key={`left-${skill}-${index}`}
                      className="flex-shrink-0 group relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-xl bg-background/80 border border-border/30 hover:bg-background hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-sm"
                        style={{ color: skillData?.color || "#6b7280" }}
                      >
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>

                      {/* Tooltip - positioned below the icon */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-background border border-border rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20 shadow-md">
                        {skill}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-l-3 border-r-3 border-b-3 border-transparent border-b-background"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </BlurFade>

          {/* Second marquee - right to left */}
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden rounded-xl bg-secondary/20 border border-border/20 p-8">
              {/* Gradient masks for fade effect */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent" />

              {/* Marquee container - right to left */}
              <motion.div
                className="flex space-x-8"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsSet2.map((skill, index) => {
                  const skillData = skillIcons[skill];
                  const IconComponent = skillData?.icon;

                  return (
                    <motion.div
                      key={`right-${skill}-${index}`}
                      className="flex-shrink-0 group relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-xl bg-background/80 border border-border/30 hover:bg-background hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-sm"
                        style={{ color: skillData?.color || "#6b7280" }}
                      >
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>

                      {/* Tooltip - positioned below the icon */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-background border border-border rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20 shadow-md">
                        {skill}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-l-3 border-r-3 border-b-3 border-transparent border-b-background"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}