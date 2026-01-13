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

  // Color palette for skills
  const skillColors = [
    "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
    "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
    "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
    "bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
    "bg-pink-500/10 text-pink-600 border-pink-500/20 hover:bg-pink-500/20",
    "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 hover:bg-indigo-500/20",
    "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20",
    "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20",
    "bg-teal-500/10 text-teal-600 border-teal-500/20 hover:bg-teal-500/20",
    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 hover:bg-cyan-500/20",
    "bg-lime-500/10 text-lime-600 border-lime-500/20 hover:bg-lime-500/20",
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
    "bg-violet-500/10 text-violet-600 border-violet-500/20 hover:bg-violet-500/20",
    "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20 hover:bg-fuchsia-500/20",
    "bg-rose-500/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20",
  ];

  const getSkillColor = (skill: string, index: number) => {
    // Use a combination of skill name and index for consistent coloring
    const skillIndex = skill.length + index;
    return skillColors[skillIndex % skillColors.length];
  };

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
            <div className="relative overflow-hidden rounded-xl bg-secondary/20 border border-border/20 p-6">
              {/* Gradient masks for fade effect */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent" />

              {/* Marquee container - left to right */}
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
                {skillsSet1.map((skill, index) => (
                  <motion.div
                    key={`left-${skill}-${index}`}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index)}`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </BlurFade>

          {/* Second marquee - right to left */}
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden rounded-xl bg-secondary/20 border border-border/20 p-6">
              {/* Gradient masks for fade effect */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent" />

              {/* Marquee container - right to left */}
              <motion.div
                className="flex space-x-4"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsSet2.map((skill, index) => (
                  <motion.div
                    key={`right-${skill}-${index}`}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index)}`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}