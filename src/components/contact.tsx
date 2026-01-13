"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BlurFade } from "@/components/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { DATA } from "@/data/resume";

export function Contact() {
  const [isCopying, setIsCopying] = useState(false);

  const copyEmail = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(DATA.contact.email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email");
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="w-full max-w-none px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Let's build something extraordinary together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Fill out the form below or reach out directly.
            </p>
          </div>
        </BlurFade>

        {/* Contact Form */}
        <ContactForm />

        {/* Alternative Contact Methods */}
        <BlurFade delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Or reach out directly:</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={copyEmail}
                disabled={isCopying}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>{isCopying ? "Copying..." : "Copy Email"}</span>
              </Button>

              <Button variant="outline" asChild className="flex items-center space-x-2">
                <a href={`tel:${DATA.contact.tel}`}>
                  <Phone className="h-4 w-4" />
                  <span>Schedule Call</span>
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{DATA.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{DATA.contact.tel}</span>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}