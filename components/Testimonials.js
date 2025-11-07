import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    position: "CEO at TechCorp",
    image: "/images/testimonials/1.jpg",
    text: "Working with Bao was an excellent experience. His technical skills and attention to detail made our project a great success."
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    image: "/images/testimonials/2.jpg",
    text: "Bao is a highly skilled developer who consistently delivers high-quality work. His problem-solving abilities are impressive."
  },
  {
    name: "Mike Johnson",
    position: "Tech Lead",
    image: "/images/testimonials/3.jpg",
    text: "I was impressed by Bao's ability to quickly understand complex requirements and deliver elegant solutions."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            What people say about my work
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-base-100 rounded-lg p-8 shadow-lg"
            >
              <div className="text-primary mb-6">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              
              <p className="text-lg mb-6 italic">
                {testimonials[activeIndex].text}
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-base-content/70">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-base-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}