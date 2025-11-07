import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Bùi Viết Tuấn Bảo</title>
      </Head>

      <MainLayout>
        <div className="min-h-screen py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Contact Title */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Me</h1>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-4 space-y-8">
                  <motion.div
                    className="p-6 bg-base-200 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <FaPhoneAlt className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-semibold mb-2">Phone</h3>
                    <p className="text-base-content/70">+84 123 456 789</p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-base-200 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FaEnvelope className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
                    <p className="text-base-content/70">contact@example.com</p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-base-200 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FaMapMarkerAlt className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-semibold mb-2">Location</h3>
                    <p className="text-base-content/70">Đà Nẵng, Vietnam</p>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  className="lg:col-span-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-full sm:w-auto px-8 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <FaPaperPlane className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}