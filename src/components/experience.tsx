"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="w-full max-w-none px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in software engineering.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="max-w-4xl mx-auto">
            {DATA.work.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="relative">
                  {/* Timeline line */}
                  {index !== DATA.work.length - 1 && (
                    <div className="absolute left-8 top-16 w-px h-full bg-border" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {work.title}
                          </h3>
                          <Link
                            href={work.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-primary hover:underline"
                          >
                            {work.company}
                          </Link>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                          <div>{work.location}</div>
                          <div>
                            {work.start} - {work.end}
                          </div>
                        </div>
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="text-muted-foreground leading-relaxed">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: work.description.replace(/\n/g, '<br>')
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}