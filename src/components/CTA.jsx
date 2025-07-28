import { useEffect, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUsers,
  FaAward,
  FaRegClock
} from 'react-icons/fa';

const CTA = ({ onGetStarted }) => {
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

  const quickActions = [
    {
      icon: FaCalendarAlt,
      title: "Book a 45-min Session",
      description: "Get personalized advice and program recommendations",
      action: "Schedule Now",
      popular: true
    },
    {
      icon: FaUsers,
      title: "Join Cohort 101",
      description: "Start with our foundational consulting program",
      action: "Join Cohort"
    },
    {
      icon: FaAward,
      title: "1:1 Coaching",
      description: "Work directly with experienced consultants",
      action: "Get Matched"
    }
  ];

  const stats = [
    { icon: FaUsers, value: "500+", label: "Successful Candidates" },
    { icon: FaAward, value: "95%", label: "Success Rate" },
    { icon: FaCalendarAlt, value: "50+", label: "Partner Companies" },
    { icon: FaRegClock, value: "24h", label: "Response Time" }
  ];

  return (
    <section id="cta" className="py-20 bg-white text-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Ready to Start Your Consulting Journey?
          </h2>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-100`}>
            Join hundreds of successful candidates who have landed offers at top consulting firms. Your dream career is just one step away.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-200`}>
            <button
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center transition-all"
            >
              Get Started Today
              <FaArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                className={`bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all relative ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                {action.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {action.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm">
                  {action.description}
                </p>

                <button
                  onClick={onGetStarted}
                  className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-medium transition"
                >
                  {action.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 6) * 200}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTA;
