"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Code, PenTool } from "lucide-react";
import { motion } from "motion/react";
import Services from "./services";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-purple-50/20 dark:from-blue-950/20 dark:to-purple-950/20 -z-10" />

      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Transforming Ideas into Digital Masterpieces
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We craft stunning websites, create memorable logos, and build
            powerful web applications that help businesses thrive in the digital
            world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="#services">
              <Button size="lg" className="text-md gap-2">
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button size="lg" variant="outline" className="text-md">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur-sm shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-14 bg-muted/80 backdrop-blur-sm border-b border-border flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="pt-14 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Monitor size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Web Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Stunning, responsive designs that engage visitors
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <PenTool size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Logo Creation</h3>
                  <p className="text-muted-foreground text-sm">
                    Memorable brand identities that stand out
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                    <Code size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Web Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Custom solutions built with modern technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
