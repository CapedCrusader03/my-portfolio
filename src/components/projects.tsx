"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/resume";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = DATA.projects;

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-20">
      <div className="w-full max-w-none px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development,
              from concept to deployment.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/30 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous project</span>
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/30 transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next project</span>
              </Button>
            </div>

            {/* Project Display */}
            <div className="overflow-hidden rounded-2xl px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-2xl">
                    <ProjectCard
                      title={currentProject.title}
                      description={currentProject.description}
                      technologies={currentProject.technologies}
                      image={currentProject.image}
                      video={currentProject.video}
                      links={currentProject.links}
                      active={currentProject.active}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-border/50 hover:bg-border"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} of {projects.length}
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}