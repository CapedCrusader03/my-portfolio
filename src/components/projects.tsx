"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/resume";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(3);
  const projects = DATA.projects;

  useEffect(() => {
    const updateProjectsPerView = () => {
      const newProjectsPerView = window.innerWidth < 1200 ? 1 : 3;
      setProjectsPerView(newProjectsPerView);
      // Reset currentIndex when switching between mobile and desktop
      setCurrentIndex(0);
    };

    updateProjectsPerView();
    window.addEventListener('resize', updateProjectsPerView);

    return () => window.removeEventListener('resize', updateProjectsPerView);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - projectsPerView ? 0 : prevIndex + projectsPerView
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, projects.length - projectsPerView) : Math.max(0, prevIndex - projectsPerView)
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

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
          <div className="relative max-w-7xl mx-auto">
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
            <div className="overflow-hidden rounded-2xl px-12">
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
                  className={`grid gap-6 ${projectsPerView === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
                >
                  {visibleProjects.map((project, index) => (
                    <motion.div
                      key={`${project.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                        active={project.active}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Page Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(projects.length / projectsPerView) }, (_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentIndex(pageIndex * projectsPerView)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / projectsPerView) === pageIndex
                      ? "bg-primary scale-125"
                      : "bg-border/50 hover:bg-border"
                  }`}
                  aria-label={`Go to project page ${pageIndex + 1}`}
                />
              ))}
            </div>

            {/* Project Range Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {Math.min(currentIndex + 1, projects.length)} - {Math.min(currentIndex + projectsPerView, projects.length)} of {projects.length}
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}