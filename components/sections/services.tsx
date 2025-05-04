"use client";

import { useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowRight, Monitor, Code, PenTool, Smartphone, Palette, Globe, ShoppingCart, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Monitor className="h-10 w-10" />,
    title: "Website Design",
    description: "Beautiful, responsive websites that engage visitors and convert them into customers.",
    color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Logo Creation",
    description: "Memorable brand identities that capture your brand's essence and stand out in the market.",
    color: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400"
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom web applications and websites built with modern technologies and best practices.",
    color: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile-First Design",
    description: "Optimized experiences for all devices, ensuring your site looks great everywhere.",
    color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400"
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, enjoyable experiences for your customers.",
    color: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "SEO Optimization",
    description: "Improved visibility and ranking in search engines to drive organic traffic to your site.",
    color: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400"
  },
  {
    icon: <ShoppingCart className="h-10 w-10" />,
    title: "E-commerce Solutions",
    description: "Robust online stores that provide seamless shopping experiences and drive sales.",
    color: "bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400"
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing services to grow your online presence and reach more customers.",
    color: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400"
  }
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of design and development services to bring your digital vision to life.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "border border-border overflow-hidden bg-card hover:shadow-lg transition-all duration-300 h-full",
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-4", service.color)}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button variant="ghost" className="justify-start pl-0 w-fit" size="sm">
                  Learn more <ArrowRight size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}