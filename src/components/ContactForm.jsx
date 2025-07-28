import { useState } from 'react';
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
  FaBriefcase,
} from 'react-icons/fa';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    background: '',
    timeline: '',
    experience: '',
    targetFirms: [],
    message: '',
    preferredContact: 'email',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [activeTab, setActiveTab] = useState('info');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('✅ Thank you for your application! We’ll get in touch shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        background: '',
        timeline: '',
        experience: '',
        targetFirms: [],
        message: '',
        preferredContact: 'email',
        availability: ''
      });

      if (typeof onSubmit === 'function') onSubmit(formData);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-4">Start Your Consulting Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book a free 45-minute consultation to discuss your goals and get personalized recommendations for your consulting preparation.
          </p>
        </div>

        {submitMessage && (
          <div className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${
            submitMessage.includes('Thank') 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {submitMessage.includes('Thank') ? (
              <FaCheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <FaExclamationCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="text-sm">{submitMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* TABS */}
          <div className="flex gap-1 mb-8 p-1 bg-gray-100 rounded-lg">
            {[
              { id: 'info', label: 'Basic Info', icon: <FaUser className="w-4 h-4 mr-2" /> },
              { id: 'goals', label: 'Goals & Background', icon: <FaBriefcase className="w-4 h-4 mr-2" /> },
              { id: 'preferences', label: 'Preferences', icon: <FaCalendarAlt className="w-4 h-4 mr-2" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium flex justify-center items-center transition ${
                  activeTab === tab.id
                    ? 'bg-white text-[#0D1B2A] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB: INFO */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
          )}

          {/* TAB: GOALS */}
          {activeTab === 'goals' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What program are you interested in?</label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="e.g., 1:1 Coaching, Cohort"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your background</label>
                <textarea
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Share your academic or professional background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline & Experience</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="When do you plan to apply or start?"
                />
              </div>
            </div>
          )}

          {/* TAB: PREFERENCES */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred contact method *
                </label>
                <div className="space-y-2">
                  {['email', 'phone'].map((method) => (
                    <label key={method} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      {method === 'email' ? (
                        <FaEnvelope className="w-4 h-4 text-gray-500" />
                      ) : (
                        <FaPhone className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-sm text-gray-700 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Tell us more about your goals, questions, or specific areas you'd like to focus on..."
                />
              </div>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => {
                if (activeTab === 'goals') setActiveTab('info');
                if (activeTab === 'preferences') setActiveTab('goals');
              }}
              disabled={activeTab === 'info'}
              className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
              Previous
            </button>

            {activeTab !== 'preferences' ? (
              <button
                type="button"
                onClick={() => {
                  if (activeTab === 'info') setActiveTab('goals');
                  if (activeTab === 'goals') setActiveTab('preferences');
                }}
                className="px-6 py-2 text-sm font-medium bg-[#0057FF] text-white rounded-lg hover:bg-[#0048d4]"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 text-sm font-medium bg-[#0057FF] text-white rounded-lg hover:bg-[#0048d4] flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
