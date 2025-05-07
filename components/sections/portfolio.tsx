"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Web Design",
  "Logo Design",
  "Web Development",
  "E-commerce",
];

const projects = [
  {
    title: "Modern Tech Dashboard",
    category: "Web Design",
    description:
      "A responsive dashboard design for a SaaS platform with data visualization.",
    image:
      "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "Dashboard", "React"],
  },
  {
    title: "Eco Store Branding",
    category: "Logo Design",
    description: "Complete brand identity for an eco-friendly online store.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Branding", "Identity", "Sustainable"],
  },
  {
    title: "Financial App",
    category: "Web Development",
    description:
      "Mobile-first web application for personal finance management.",
    image:
      "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Fintech"],
  },
  {
    title: "Artisan Bakery Site",
    category: "Web Design",
    description:
      "Elegant website for a premium artisan bakery showcasing their products.",
    image:
      "https://images.pexels.com/photos/5077068/pexels-photo-5077068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Web Design", "Food", "E-commerce"],
  },
  {
    title: "Urban Clothing Store",
    category: "E-commerce",
    description: "Full-featured online store for an urban fashion brand.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-commerce", "Fashion", "Next.js"],
  },
  {
    title: "Travel Blog Platform",
    category: "Web Development",
    description:
      "Custom blog platform designed for travel enthusiasts and photographers.",
    image:
      "https://images.pexels.com/photos/3757148/pexels-photo-3757148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Blog", "Travel", "CMS"],
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of beautiful designs and powerful web
            applications that have helped our clients succeed.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-flow-col auto-cols-max gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-6">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div ref={ref}>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(
                      (project) =>
                        category === "All" || project.category === category
                    )
                    .map((project, index) => (
                      <Card
                        key={index}
                        className={cn(
                          "overflow-hidden transition-all duration-500 hover:shadow-xl",
                          isInView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        )}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                          opacity: isInView ? 1 : 0,
                          transform: isInView
                            ? "translateY(0)"
                            : "translateY(40px)",
                        }}
                      >
                        <div className="overflow-hidden">
                          <AspectRatio ratio={16 / 10}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </AspectRatio>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          {/* <Button
                            variant="ghost"
                            className="justify-start pl-0"
                            size="sm"
                          >
                            View case study{" "}
                            <ArrowRight size={14} className="ml-2" />
                          </Button> */}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* <div className="flex justify-center mt-12">
          <Button>
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
