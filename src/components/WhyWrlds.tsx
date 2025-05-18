import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
// Import necessary icons, ensuring all used icons are imported
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar, Cpu, MessageSquare, Handshake, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  // Use useInView to trigger animation when the element is visible
  const inView = useInView(countRef, {
    once: true, // Animation triggers only once
    margin: "-100px" // Start animation when 100px is visible
  });

  useEffect(() => {
    if (!inView) return; // Only run effect when in view

    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]); // Dependencies

  // Format the displayed number
  const formattedCount = count.toFixed(decimals);

  return (
    <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

const WhyOptira = () => { // Renamed component to WhyOptira
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Updated to use 'contact' ID for consistency with other components
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };


  // --- Optira Content Mapping ---

  // Placeholder statistics reflecting startup challenges Optira helps overcome
  const startupStats = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-gray-700" />, // Icon for challenges/risk
      end: 70, // Placeholder stat
      suffix: "%",
      decimals: 0,
      title: "Startups Face Technical Hurdles",
      description: "A significant percentage of early-stage companies struggle with technical debt or direction issues."
    },
    {
      icon: <Clock4 className="w-8 h-8 text-gray-700" />, // Icon for time/delays
      end: 40, // Placeholder stat
      suffix: "%",
      decimals: 0,
      title: "Avoid Costly Delays",
      description: "Inefficient planning or execution can add significant time and cost to product development."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-gray-700" />, // Icon for success/growth
      end: 2, // Placeholder stat (e.g., 2X higher chance of success)
      suffix: "X",
      decimals: 0,
      title: "Increase Chances of Success",
      description: "Strategic technical leadership significantly improves the likelihood of achieving product-market fit."
    }
  ];

  // Four key advantages/benefits of partnering with Optira
  const optiraAdvantages = [
    {
      icon: <Cpu className="w-6 h-6 text-gray-700" />, // Icon for Strategic Clarity
      title: "Clear Technical Strategy",
      description: "Gain confident direction for your technology roadmap and critical architectural decisions."
    },
    {
      icon: <Code className="w-6 h-6 text-gray-700" />, // Icon for Scalable Architecture
      title: "Right Architecture from Day 1",
      description: "Plan your MVP and future product iterations on a robust, scalable technical foundation."
    },
    {
      icon: <Layers className="w-6 h-6 text-gray-700" />, // Icon for Team Building
      title: "Build a Strong Team",
      description: "Develop effective strategies to attract, hire, and build a high-performing engineering team."
    },
    {
      icon: <Target className="w-6 h-6 text-gray-700" />, // Icon for Product-Market Fit
      title: "Accelerate Product-Market Fit",
      description: "Bridge technical gaps and accelerate your path to product-market fit with expert guidance."
    }
  ];

  // --- End Optira Content Mapping ---

  return (
    <section id="why-optira" className="relative py-16 md:py-24 bg-white overflow-hidden"> {/* Updated ID */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          {/* Updated Headline */}
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why Partner with Optira?
          </motion.h2>
          {/* Updated Sub-headline */}
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Early-stage startups face unique technical and team-building challenges. Optira provides the seasoned expertise to navigate them successfully.
          </motion.p>
        </motion.div>

        {/* Statistic Blocks - Adapted for startup challenges/impact */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          {startupStats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                {stat.icon} {/* Using appropriate icons */}
              </div>
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
                {/* Using AnimatedCounter for the statistic */}
                <AnimatedCounter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
              </h3>
              {/* Updated Title and Description */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h4>
              <p className="text-gray-700 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Optira Advantages / How We Help You Succeed Section */}
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            {/* Updated Headline */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              The Optira Advantage
            </h3>
            {/* Updated Sub-headline */}
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the targeted expertise that directly addresses your startup's critical technical and team-building needs.
            </p>
          </motion.div>

          {/* Four Benefit Blocks - Adapted for Optira's specific advantages */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optiraAdvantages.map((advantage, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-gray-200 rounded-full p-3 mr-4">
                    {advantage.icon} {/* Using appropriate icons */}
                  </div>
                  <div>
                    {/* Updated Title and Description */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-700">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Call to Action - Updated text and link */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            {/* Link to Contact page or section */}
            <Link
              to="#contact" // Link to the contact section ID
              onClick={scrollToContact} // Use the scrollToContact function
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all group" // Styled as primary button
            >
              Ready to Gain Your Technical Advantage? Let's Talk.
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOptira; 