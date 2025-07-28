import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "McKinsey & Company Consultant",
      company: "Previously at Goldman Sachs",
      text: "GradNext's 1:1 coaching program was instrumental in helping me transition from finance to consulting...",
      avatar: "SC",
      rating: 5,
      program: "1:1 Coaching Program",
    },
    {
      name: "Michael Rodriguez",
      role: "BCG Associate",
      company: "MBA from Wharton",
      text: "The Consulting Cohort 101 program connected me with amazing peers...",
      avatar: "MR",
      rating: 5,
      program: "Consulting Cohort 101",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-800 mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Success Stories
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in delay-100" : "opacity-0"
            }`}
          >
            Hear from our alumni who have successfully transitioned into top consulting firms.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200">
                <FaQuoteRight className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>

              {/* Program Badge */}
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {t.program}
              </span>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Success Rate", value: "95%" },
            { label: "Students Placed", value: "500+" },
            { label: "Top Firms", value: "15+" },
            { label: "Average Rating", value: "4.9/5" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${
                isVisible ? "animate-fade-in" : "opacity-0"
              } transition-opacity`}
              style={{ animationDelay: `${900 + index * 150}ms` }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
