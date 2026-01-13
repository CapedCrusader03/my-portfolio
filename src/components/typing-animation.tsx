"use client";

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  className?: string;
}

export function TypingAnimation({ className }: TypingAnimationProps) {
  return (
    <div className={`font-mono font-bold text-lg md:text-xl lg:text-2xl ${className}`}>
      <TypeAnimation
        sequence={[
          'Distributed Systems',
          2000,
          'Agentic AI & LLMs',
          2000,
          'LangGraph & RAG Pipelines',
          2000,
          'Database Engineering',
          2000,
          'Full-Stack Development',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
      />
    </div>
  );
}