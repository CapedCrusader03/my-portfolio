"use client";

import { ProjectCard } from "@/components/project-card";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/resume";

export function Projects() {
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {DATA.projects.map((project, index) => (
              <BlurFade key={project.title} delay={0.1 + index * 0.1}>
                <div className="w-full max-w-md">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                    active={project.active}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}