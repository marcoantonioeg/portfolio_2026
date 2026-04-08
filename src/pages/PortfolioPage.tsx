// PortfolioPage.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";

import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import { AppleHelloEnglishEffect } from "../components/HelloEffects";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import CLIResume from "../components/CLIResume";
import CurvedLoop from "../components/CurvedLoop";
import './PortfolioPage.css'
import Services from '../assets/services.png'
import Gmail from '../assets/gmail.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/insta.png'
import ExperienceTimeline from "../components/ExperienceTimeline";
const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCLI, setShowCLI] = useState(false);
  const [showHello, setShowHello] = useState(true);

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#contact", label: "Contact" },
        ]}
        onTryCLI={() => setShowCLI(true)}
      />
      {/* CLI panel (docked / overlay) */}
      <CLIResume open={showCLI} onClose={() => setShowCLI(false)} />

      {/* About / hero: hidden while hello animation plays */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            key="hello-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppleHelloEnglishEffect
              className="text-white"
              onAnimationComplete={() => setShowHello(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="about"
        className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-0"
        style={{ height: "100vh" }}
        initial={{ opacity: 0, y: 8 }}
        animate={showHello ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 bg-header" style={{ height: "140vh" }}>
         {/**bg */}
        </div>
        <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto py-20 sm:py-24 lg:py-32">
          <div className="grid items-center">
            <About />
          </div>
        </div>
      </motion.section>
      <div className="w-full bg-[var(--background)] pt-8 pb-8 relative z-20">
        <CurvedLoop
          marqueeText={PORTFOLIO_INFO.personal.headline + " · "}
          speed={1}
          className="text-2xl text-[var(--text)] bg-[var(--surface)]"
          curveAmount={400}
          direction="left"
          interactive={true}
        />
      </div>
<div className="">
<div className="bg-header-2 pt-[200px]">
<main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 relative z-20">
        <section>
          <center>
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-8 text-center text-white">Seeking exceptional web design and development?   <br />
          💡💻✨</h2>
       
          <img src={Services} className="rounded-3xl mx-auto services-img" alt="services" />
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white mt-4">Look no further! <br />
As a <span className="coloramarillo">freelance professional</span>, I'm dedicated toturning your ideas into captivating online realities. <br />
With a focus on collaboration, together, <span className="coloramarillo">we'll bring your vision to life.</span> <br />
My commitment includes not just <span className="coloramarillo">impeccable design and development</span> but also fair, <span className="coloramarillo">budget-friendly prices.</span>
Reach out today and let's create something extraordinary together.</p>

<br />
<a href="mailto:marcoestrello.buss@gmail.com">
  <img className="gmail" src={Gmail} alt="gmail"  />
</a>
          </center>
          
        </section>

      

        
      </main>
</div>

<div className="bg-black">

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6  sm:py-20  relative z-20">
     
        <section id="projects" className="py-8">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold  text-white mb-4">Selected projects showcase</h2>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white mb-5">
          Latest business and Professional projects i was involved in. (some projects may no longer be publicly available).
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

      

        
      </main>
</div>
<div className="bg-black">
  <section id="experience">

  <ExperienceTimeline />
  </section>
</div>
<div className="bg-black bg-pic-3 px-4 pt-12 pb-20">

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6  sm:py-20  relative z-20">
     
    <section id="contact">
      <center>
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white">Let's Connect!</h2>
      </center>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
        <img className="w-32 mx-auto mb-4" src={Github} alt="github"  />
          </div>
          <center><a href="https://github.com/marcoantonioeg"  target="_blank"><button className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center bgmorado w-34" type="button">Github<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg></button></a></center>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
        <img className="w-32 mx-auto mb-4" src={Linkedin} alt="github"  />
          </div>
          <center><a href="https://www.linkedin.com/in/marco-antonio-estrello-b6a7b51ab/" target="_blank"><button className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center bgmorado w-34" type="button">LinkedIn<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg></button></a></center>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
        <img className="w-32 mx-auto mb-4" src={Instagram} alt="github"  />
          </div>
          <center><a href="https://www.instagram.com/marcoantonioeg.code/" target="_blank"><button className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center bgmorado w-34" type="button">Instagram<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg></button></a></center>
        </div>
      </div>
    </section>

      

        
      </main>
</div>
</div>

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
