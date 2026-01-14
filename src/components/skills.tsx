"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BlurFade } from "@/components/blur-fade";
import { skillIcons } from "@/components/skill-icons";
import { DATA } from "@/data/resume";

export function Skills() {
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  // Create 2x arrays for seamless marquee loop
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

  useEffect(() => {
    if (!marqueeRef1.current || !marqueeRef2.current) return;

    // Create smooth marquee animations for desktop
    const tl1 = gsap.timeline({ repeat: -1, paused: false });
    tl1.to(marqueeRef1.current, {
      x: '-50%', // Move through duplicated content
      duration: 15,
      ease: "none",
    });

    const tl2 = gsap.timeline({ repeat: -1, paused: false });
    tl2.fromTo(marqueeRef2.current,
      { x: '-50%' },
      {
        x: '0%',
        duration: 17,
        ease: "none",
      }
    );

    // Cleanup function
    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
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

        {/* Mobile categorized layout - hidden on md and up */}
        <div className="block md:hidden">
          <BlurFade delay={0.1}>
            <div className="space-y-8">
              {/* Languages */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Languages</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend/Distributed Systems */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Backend/Distributed Systems</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Spring Boot", "FastAPI", "Spring Cloud", "Node.js", "Apache Kafka", "RabbitMQ", "Flink", "Hibernate"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index + 6)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/LLM Engineering */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">AI/LLM Engineering</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["LangGraph", "LlamaIndex", "Agentic Workflows", "PgVector", "RAG Pipelines"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index + 14)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["React", "Next.js", "Angular", "HTML", "CSS"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index + 19)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Databases</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["PostgreSQL", "MongoDB", "Redis", "Oracle", "MySQL", "Snowflake", "Elasticsearch"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index + 24)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud/DevOps/Monitoring */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Cloud/DevOps/Monitoring</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["AWS", "Docker", "Kubernetes", "Airflow", "Git", "Apache Tomcat", "NginX", "Maven", "Prometheus", "Grafana"].map((skill, index) => (
                    <span key={skill} className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index + 31)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Desktop marquee - hidden on smaller screens */}
        <div className="hidden md:block space-y-4 sm:space-y-6">
          {/* First marquee - left to right */}
          <BlurFade delay={0.1}>
            <div className="relative overflow-hidden py-3 sm:py-4">
              {/* GSAP marquee container - left to right */}
              <div ref={marqueeRef1} className="flex space-x-2 sm:space-x-3 lg:space-x-4">
                {skillsSet1.map((skill, index) => (
                  <div
                    key={`left-${skill}-${index}`}
                    className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  >
                    <span className={`inline-flex items-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index)}`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Second marquee - right to left */}
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden py-3 sm:py-4">
              {/* GSAP marquee container - right to left */}
              <div ref={marqueeRef2} className="flex space-x-2 sm:space-x-3 lg:space-x-4">
                {skillsSet2.map((skill, index) => (
                  <div
                    key={`right-${skill}-${index}`}
                    className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  >
                    <span className={`inline-flex items-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap border ${getSkillColor(skill, index)}`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}