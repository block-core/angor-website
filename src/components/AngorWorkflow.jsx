import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const slides = [
  {
    title: "Meet Alice & Bob",
    content: "Alice is an entrepreneur with an innovative idea but needs capital to execute it. Bob is a Bitcoiner looking for transparent, secure, and decentralized investment opportunities.",
    icon: "👩‍💻👨‍💼",
    details: [
      "Alice has a groundbreaking project idea",
      "She needs funding to bring her vision to life", 
      "Bob seeks trustworthy investment opportunities",
      "He wants transparency without intermediaries"
    ]
  },
  {
    title: "Project Creation",
    content: "Alice enters Angor and registers her project. She must define project implementation stages (milestones), target Bitcoin investment amount, and penalty duration.",
    icon: "📝",
    details: [
      "Define project milestones and implementation stages",
      "Set target Bitcoin investment amount",
      "Specify penalty duration to prevent sudden investor withdrawals",
      "Create transparent project documentation"
    ]
  },
  {
    title: "Discovery",
    content: "Bob discovers Alice's project while browsing Angor Hub. He can transparently see all project details, goals, and milestones, then decides to invest.",
    icon: "🔍",
    details: [
      "Browse projects on Angor Hub",
      "Review detailed project information",
      "Examine milestones and funding goals",
      "Make informed investment decisions"
    ]
  },
  {
    title: "Funding Goal",
    content: "Two scenarios exist: If the project reaches its target BTC amount within the specified time → project activates. If not → BTC is automatically returned to investors.",
    icon: "🎯",
    details: [
      "Project reaches target amount → Activation",
      "Project fails to reach target → Automatic refund",
      "Time-bound funding periods",
      "Transparent funding progress tracking"
    ]
  },
  {
    title: "Milestones",
    content: "The project is divided into smaller phases (M1, M2, M3, etc.). Each milestone represents a specific commitment that Alice must complete.",
    icon: "⏳",
    details: [
      "Project broken into manageable phases",
      "Clear deliverables for each milestone",
      "Progressive fund release structure",
      "Accountability through staged development"
    ]
  },
  {
    title: "BTC Claiming by Founder",
    content: "When Alice completes a milestone, she can unlock and receive the Bitcoin allocated to that phase. Bob is assured funds are only released based on actual project progress.",
    icon: "💰",
    details: [
      "Complete milestone requirements",
      "Unlock corresponding Bitcoin allocation",
      "Funds released based on actual progress",
      "Transparent milestone verification"
    ]
  },
  {
    title: "Investor Withdrawal",
    content: "If Bob wants to withdraw his investment before milestone completion, he can do so, but his BTC will be time-locked for the penalty duration to maintain project stability.",
    icon: "🔒",
    details: [
      "Withdrawal option available anytime",
      "Time-lock penalty for early withdrawal",
      "Protects project stability",
      "Balanced investor-founder interests"
    ]
  },
  {
    title: "Successful Completion",
    content: "When Alice completes all milestones, the project is considered fully successful. Alice receives her funding stage by stage, and Bob invests with complete transparency without trusting third parties.",
    icon: "🏆",
    details: [
      "All milestones successfully completed",
      "Stage-by-stage fund release to founder",
      "Transparent investment process",
      "No third-party trust required"
    ]
  }
];

const AngorWorkflow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo(slideRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.3"
      );
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-bgDark2 to-bgDark1 rounded-2xl p-8 lg:p-12 border border-mainBorder">
        <div className="min-h-[500px] flex flex-col justify-between">
 

          {/* Current Slide Content */}
          <div ref={slideRef} className="flex-1 text-center mb-8">
            <div className="text-6xl lg:text-7xl mb-6">{slides[currentSlide].icon}</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-primaryText mb-6">
              {slides[currentSlide].title}
            </h3>
            <div ref={contentRef} className="text-secondaryText text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              {slides[currentSlide].content}
            </div>

            {/* Details List */}
            <div className="bg-bgDark3 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-primaryText mb-4">Key Points:</h4>
              <ul className="space-y-3 text-left">
                {slides[currentSlide].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondaryColor rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primaryText text-sm lg:text-base">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="px-6 py-3 bg-secondaryColor text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondaryColor/80 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              ← Previous
            </button>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-secondaryColor w-8'
                      : 'bg-bgDark3 w-3 hover:bg-mainBorder'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-3 bg-secondaryColor text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondaryColor/80 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              Next →
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AngorWorkflow;
