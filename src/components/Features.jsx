import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaGlobe,
  FaBookOpen,
  FaBullseye,
  FaBolt,
  FaAward,
} from "react-icons/fa";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const mainPrograms = [
    {
      icon: FaUsers,
      title: "1:1 Coaching Program",
      description:
        "Tailored 1:1 program for personalised preparation with expert consultants from top firms.",
      features: [
        "Personalized coaching sessions",
        "Mock interviews with real consultants",
        "Custom case preparation",
        "Resume and cover letter review",
      ],
      highlight: "Most Popular",
    },
    {
      icon: FaGlobe,
      title: "Consulting Cohort 101",
      description:
        "Consulting foundations with global like-minded peers to build your network and skills.",
      features: [
        "Weekly live sessions",
        "Peer-to-peer case practice",
        "Global networking opportunities",
        "Industry insights and trends",
      ],
      highlight: "New",
    },
    {
      icon: FaBookOpen,
      title: "CaseBuddy",
      description:
        "Self practice cases at your own pace with comprehensive frameworks and solutions.",
      features: [
        "100+ practice cases",
        "Interactive case solving",
        "Progress tracking",
        "Mobile-friendly platform",
      ],
      highlight: "Free Trial",
    },
  ];

  const additionalFeatures = [
    {
      icon: FaBullseye,
      title: "Precision Targeting",
      description:
        "Focus on your target firms with specialized preparation strategies",
    },
    {
      icon: FaBolt,
      title: "Fast-Track Programs",
      description: "Accelerated learning for time-sensitive recruitment cycles",
    },
    {
      icon: FaAward,
      title: "Success Guarantee",
      description:
        "95% of our students receive offers from target consulting firms",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-white transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-800 mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Our Programs
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in delay-100" : "opacity-0"
            }`}
          >
            Choose from our comprehensive suite of consulting preparation programs designed to accelerate your success.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {program.highlight && (
                  <span className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {program.highlight}
                  </span>
                )}
                <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{program.description}</p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`text-center p-6 rounded-xl bg-gray-100 border border-gray-200 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 3) * 200}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
