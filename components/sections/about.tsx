"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { Check, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: <Users className="h-6 w-6" />, value: "150+", label: "Happy Clients" },
  { icon: <Award className="h-6 w-6" />, value: "200+", label: "Projects Completed" },
  { icon: <Clock className="h-6 w-6" />, value: "10+", label: "Years Experience" },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Kim",
    role: "Senior Developer",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily Johnson",
    role: "UX Specialist",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const values = [
  "Exceptional Quality",
  "Client-Centered Focus",
  "Innovative Solutions",
  "Transparent Communication",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div 
            ref={ref}
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Turn Ideas Into Exceptional Digital Experiences</h2>
            <p className="text-muted-foreground text-lg mb-8">
              PixelPerfect is a leading web design and development agency, dedicated to crafting beautiful, functional websites and applications that help businesses succeed in the digital world.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team of passionate designers and developers combine creativity with technical expertise to deliver solutions that not only look stunning but also perform exceptionally well. We believe that great design should be accessible to everyone, which is why we work closely with our clients to understand their unique needs and challenges.
            </p>
            
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div
            className={cn(
              "relative transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Accent elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70 -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10" />
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Our talented team of designers and developers are passionate about creating exceptional digital experiences.
          </p>
        </div>
        
        <div 
          ref={teamRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300",
                teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: teamInView ? 1 : 0,
                transform: teamInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}