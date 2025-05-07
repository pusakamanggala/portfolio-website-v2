import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/project";

export default function Home() {
  return (
    <main className="container mx-auto px-5 max-w-[1200px]">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="lg:sticky lg:top-0 lg:h-screen">
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
