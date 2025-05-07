"use client";

import { useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-20 overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 relative transition-all duration-1000",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800" />

          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative py-16 px-8 md:py-20 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-12">
              Let's work together to create a stunning website that captures
              your brand's essence and drives results. Our team is ready to
              bring your vision to life.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Our Portfolio
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
