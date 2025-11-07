import Head from 'next/head'
import { useEffect } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home() {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bùi Viết Tuấn Bảo - Portfolio</title>
      </Head>

      <MainLayout>
        <div className="w-full">
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="bg-base-200/50">
            <Services />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience" className="bg-base-200/50">
            <Timeline />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="testimonials" className="bg-base-200/50">
            <Testimonials />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </MainLayout>
    </>
  );
}
