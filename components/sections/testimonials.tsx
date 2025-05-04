"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jessica Williams",
    role: "CEO, TechStart",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "Working with PixelPerfect was a game-changer for our business. They completely transformed our website, making it not only visually stunning but also incredibly functional. Our conversions have increased by 40% since the redesign!"
  },
  {
    name: "David Chen",
    role: "Founder, EcoStore",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "The team at PixelPerfect created a beautiful brand identity and e-commerce website for our sustainable products store. They truly understood our vision and translated it into a digital experience that resonates with our customers."
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Bloom Agency",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "I've worked with many web designers in my career, but PixelPerfect stands out for their attention to detail and commitment to quality. They don't just deliver what you ask for—they enhance your vision with their expertise."
  },
  {
    name: "Michael Rodriguez",
    role: "Owner, Artisan Bakery",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "Our bakery's website perfectly captures the artisanal quality of our products. PixelPerfect created a visual feast that makes customers hungry just looking at it! The online ordering system they built works flawlessly."
  },
  {
    name: "Emma Thompson",
    role: "Director, Global Travels",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "The travel blog platform PixelPerfect created for us has received incredible feedback from our community. The design captures the essence of travel and adventure, while the functionality makes sharing stories seamless."
  },
  {
    name: "Robert Chang",
    role: "CTO, FinanceApp",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "We needed a complex financial dashboard that was both powerful and easy to use. PixelPerfect delivered exactly that, with an intuitive interface that our customers love. Their technical expertise is unmatched."
  }
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "h-full border border-border bg-card transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: `${index * 100}ms`, 
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center mt-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}