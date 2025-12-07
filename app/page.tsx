import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col mx-auto overflow-clip">
      <FloatingNav navItems={navItems} />
      <Hero />
      <div className="flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <About />
          <Skills />
          <Experience />
          <RecentProjects />
          <Certifications />
          <Approach />
          <Footer />
        </div>
      </div>
    </main>
  );
}
