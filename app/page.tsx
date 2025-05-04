import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}