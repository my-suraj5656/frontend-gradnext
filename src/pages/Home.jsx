// src/pages/Index.jsx
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmission = (data) => {
    const submissionWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    };
    setSubmissions((prev) => [...prev, submissionWithTimestamp]);

    console.log("New form submission:", submissionWithTimestamp);
    console.log("Total submissions:", submissions.length + 1);
  };

  const handleCTAClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavClick={handleNavClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Features />
      <div id="success-stories">
        <Testimonials />
      </div>
      <CTA onGetStarted={handleCTAClick} />
      <ContactForm onSubmit={handleFormSubmission} />
      <Footer />

      {/* Debug Panel (Only in development mode) */}
      {process.env.NODE_ENV === "development" && submissions.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg p-4 max-w-sm shadow-lg z-50">
          <h4 className="font-semibold text-sm mb-2">
            Form Submissions ({submissions.length})
          </h4>
          <div className="text-xs text-gray-600 max-h-32 overflow-y-auto">
            Latest: {submissions[submissions.length - 1]?.name || "None"} -{" "}
            {submissions[submissions.length - 1]?.program || "No program"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
