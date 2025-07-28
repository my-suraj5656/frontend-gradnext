import { useEffect, useState } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const Hero = ({ onCTAClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e40af] text-white overflow-hidden pt-20"
    >
      {/* Background Blur Circles */}
      <div className="absolute inset-0-z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div
        className={`text-center transition-all duration-1000 max-w-6xl py-12 px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Making your consulting dream possible.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Elevate your{" "}
          <span className="bg-white/20 px-2 py-1 rounded-md">consulting</span>{" "}
          preparation. Learn from McKinsey, BCG and Bain consultants to set you
          on the path to success.
        </p>

        {/* Company Chips */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["McKinsey & Company", "BCG", "Bain & Company"].map((company, i) => (
            <div
              key={i}
              className="bg-white/10 px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm"
            >
              {company}
            </div>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: "👥",
              title: "1:1 Coaching Program",
              desc: "Tailored 1:1 program for personalized preparation",
            },
            {
              icon: "🌍",
              title: "Consulting Cohort 101",
              desc: "Consulting foundations with global like-minded peers",
            },
            {
              icon: "📚",
              title: "CaseBuddy",
              desc: "Self-practice cases at your own pace",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transition hover:shadow-xl hover:bg-white/20"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={onCTAClick}
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-md transition"
          >
            Start Your Journey
            <FaArrowRight />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("success-stories");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white/90 hover:text-white flex items-center transition"
          >
            <span className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-full mr-3 hover:bg-white/30 transition">
              <FaPlay />
            </span>
            Watch Success Stories
          </button>
        </div>

        {/* Partner Logos */}
        <h3 className="text-white/80 text-sm sm:text-base mb-4">
          Our clients have received offers from:
        </h3>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-white/80">
          {[
            "McKinsey & Company",
            "BCG",
            "Bain & Company",
            "Kearney",
            "Accenture",
            "EY Parthenon",
            "Arthur D. Little",
          ].map((company) => (
            <div
              key={company}
              className="bg-white/10 px-3 py-2 rounded-md backdrop-blur-sm"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
