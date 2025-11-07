import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout';
import Services from '../components/Services';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Bùi Viết Tuấn Bảo</title>
      </Head>

      <MainLayout>
        <div className="min-h-screen py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Title */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Me</h1>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              {/* About Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-semibold">Personal Info</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-base-content/60">First Name:</p>
                      <p className="font-medium">Tuấn Bảo</p>
                    </div>
                    <div>
                      <p className="text-base-content/60">Last Name:</p>
                      <p className="font-medium">Bùi Viết</p>
                    </div>
                    <div>
                      <p className="text-base-content/60">Age:</p>
                      <p className="font-medium">24 Years</p>
                    </div>
                    <div>
                      <p className="text-base-content/60">Nationality:</p>
                      <p className="font-medium">Vietnamese</p>
                    </div>
                    <div>
                      <p className="text-base-content/60">Location:</p>
                      <p className="font-medium">Đà Nẵng, Vietnam</p>
                    </div>
                    <div>
                      <p className="text-base-content/60">Languages:</p>
                      <p className="font-medium">Vietnamese, English</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-semibold">My Expertise</h2>
                  <p className="text-base-content/80 leading-relaxed">
                    Dedicated Full Stack Developer with experience in building responsive web applications
                    and scalable backend systems. Passionate about clean code, user experience, and
                    continuous learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Web Development</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-base-200 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Mobile Development</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-base-200 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <Services />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}