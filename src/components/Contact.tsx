import React, { useState } from "react";
import { Mail, Phone, Check, Send, RefreshCw, Layers, ShieldCheck } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Inline SVG components replacing deprecated Lucide brand icons
const LinkedIn: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-yellow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-brand-yellow" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-brand-gray-200 font-normal text-base sm:text-lg leading-relaxed">
            Whether you need a software architect for distributed cloud platforms, technical consultation, or want to explore engineering leadership, select a method below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto text-left">
          
          {/* Left Side: Contact Information & Consulting Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Contact Info */}
            <div className="glass-panel p-6 rounded-2xl border border-brand-gray-850 bg-brand-gray-950/20 space-y-4">
              <h3 className="text-sm font-bold font-display text-white mb-2 uppercase tracking-wider">
                Direct Contact
              </h3>
              
              <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-gray-300">
                <div className="w-9 h-9 rounded-lg border border-brand-gray-850 bg-brand-gray-950 flex items-center justify-center text-brand-orange shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-orange transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-gray-300">
                <div className="w-9 h-9 rounded-lg border border-brand-gray-850 bg-brand-gray-950 flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-brand-yellow transition-colors">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-gray-300">
                <div className="w-9 h-9 rounded-lg border border-brand-gray-850 bg-brand-gray-950 flex items-center justify-center text-brand-green shrink-0">
                  <LinkedIn className="w-4 h-4" />
                </div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors break-all">
                  linkedin.com/in/suneel-kandali
                </a>
              </div>
            </div>

            {/* Architectural Advisory Pillars Card */}
            <div className="glass-panel p-6 rounded-2xl border border-brand-gray-850 bg-brand-gray-950/20 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-brand-gray-850 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-yellow" />
                    <h3 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                      Architectural Advisory
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Consulting
                  </span>
                </div>
                
                <p className="text-xs text-brand-gray-200 font-normal leading-relaxed mb-4">
                  Available for technical advising, scaling audits, and architectural blueprints across cloud-native ecosystems.
                </p>

                <div className="space-y-3.5 text-left">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-brand-gray-950 border border-brand-gray-900 rounded-md text-brand-orange shrink-0 mt-0.5">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">Distributed Audits & Tuning</h4>
                      <p className="text-[10px] text-brand-gray-200 mt-1 leading-normal">Latency bottlenecks mitigation, cache tuning, high-throughput scaling.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-brand-gray-950 border border-brand-gray-900 rounded-md text-brand-yellow shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">OCI Cloud Infrastructure</h4>
                      <p className="text-[10px] text-brand-gray-200 mt-1 leading-normal">Enterprise OCI architecture blueprints, microservices grids, Observability SDKs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-brand-gray-950 border border-brand-gray-900 rounded-md text-brand-green shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">Agentic AI Orchestrations</h4>
                      <p className="text-[10px] text-brand-gray-200 mt-1 leading-normal">Event-driven edge remediation platforms and secure GenAI secure RAG workflows.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-brand-gray-300 uppercase tracking-widest pt-4 border-t border-brand-gray-900/60 mt-4">
                Structured for high-impact advisory delivery
              </div>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-brand-gray-850 bg-black flex flex-col justify-between">
            <form onSubmit={handleFormSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 border-b border-brand-gray-850 pb-3">
                  <Mail className="w-4 h-4 text-brand-yellow" />
                  <h3 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                    Send Brief Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-semibold text-brand-gray-200 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-gray-950 border border-brand-gray-850 focus:border-brand-orange text-white text-xs px-4 py-3 rounded-xl outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-semibold text-brand-gray-200 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-gray-950 border border-brand-gray-850 focus:border-brand-orange text-white text-xs px-4 py-3 rounded-xl outline-none transition-colors"
                      placeholder="johndoe@enterprise.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] font-semibold text-brand-gray-200 uppercase tracking-widest">
                    Subject Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-brand-gray-950 border border-brand-gray-850 focus:border-brand-orange text-white text-xs px-4 py-3 rounded-xl outline-none transition-colors"
                    placeholder="Brief architectural advisory / project role proposal"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] font-semibold text-brand-gray-200 uppercase tracking-widest">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-brand-gray-950 border border-brand-gray-850 focus:border-brand-orange text-white text-xs px-4 py-3 rounded-xl outline-none transition-colors resize-none"
                    placeholder="Hello Suneel, I would like to discuss..."
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-brand-gray-850/60">
                {submitSuccess ? (
                  <div className="p-3.5 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Message received successfully. Suneel will reply shortly!</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-green text-black font-semibold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(251,97,7,0.1)]"
                  >
                    {isSubmitting ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Brief Details
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
