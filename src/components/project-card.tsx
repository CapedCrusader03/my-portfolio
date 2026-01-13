"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  links: Array<{
    type: string;
    href: string;
    icon: any;
  }>;
  active?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  video,
  links,
  active = true,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="group h-full min-h-[550px] overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex flex-col">
        {/* Project Image/Video */}
        {(image || video) && (
          <div className="relative aspect-video overflow-hidden">
            {video ? (
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        )}

        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <div className="flex space-x-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.type}</span>
                </Link>
              ))}
            </div>
          </div>
          <CardDescription
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-end">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}