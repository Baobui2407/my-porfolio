import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layout/MainLayout'
import TabLayout from '../components/layout/TabLayout'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'
import Services from '../components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bùi Viết Tuấn Bảo - Portfolio</title>
      </Head>

      <MainLayout>
        <TabLayout>
          {{
            // About Me Tab
            about: (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-yellow-500">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Hello! I'm Bùi Viết Tuấn Bảo, a passionate Full Stack Developer based in Vietnam. 
                      I enjoy creating beautiful and functional web applications that solve real-world problems.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400">Name:</p>
                        <p className="text-white">Bùi Viết Tuấn Bảo</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Email:</p>
                        <p className="text-white">contact@example.com</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Location:</p>
                        <p className="text-white">Vietnam</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Role:</p>
                        <p className="text-white">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Bùi Viết Tuấn Bảo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <Services />
              </div>
            ),

            // Resume Tab
            resume: (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6">Skills & Experience</h2>
                  <Skills />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6">Timeline</h2>
                  <Timeline />
                </div>
              </div>
            ),

            // Portfolio Tab
            portfolio: (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-6">My Projects</h2>
                <Projects />
              </div>
            ),

            // Contact Tab
            contact: (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-6">Get in Touch</h2>
                <Contact />
              </div>
            ),
          }}
        </TabLayout>
      </MainLayout>
    </>
  );
}
