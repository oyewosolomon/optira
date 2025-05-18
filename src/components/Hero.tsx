import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact'); // Assuming a contact section with id="contact"
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

    // Assuming a services section with id="services"
    const scrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };


  return <motion.div className="relative mt-16 md:mt-0 w-full max-w-[100vw]" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[700px] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {/* Replace with an image relevant to startup tech, strategy, or teams */}
          <img src="/path-to-your-optira-hero-image.png" alt="Optira - Accelerate Your Startup" className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>

        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              {/* Headline */}
              <motion.h1 className="banner-title text-white text-3xl md:text-5xl lg:text-6xl font-bold" variants={itemVariants}>Build Your Vision. Scale Your Impact. Gain CTO-Level Advantage.</motion.h1>
              {/* Sub-headline */}
              <motion.p className="banner-subtitle text-gray-300 mt-4 md:mt-6 text-sm md:text-base max-w-2xl mx-auto" variants={itemVariants}>
                Optira provides early-stage startups with the strategic technical leadership, team scaling expertise, and MVP architecture planning needed to achieve product-market fit, faster.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center" variants={itemVariants}>
                {/* Primary Call to Action */}
                <button
                  className="px-6 md:px-8 py-2 md:py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm md:text-base"
                   onClick={scrollToServices} // Link to services section
                >
                  Accelerate Your Startup's Tech Journey
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Call to Action */}
                <button
                  className="px-6 md:px-8 py-2 md:py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm md:text-base"
                  onClick={scrollToContact} // Link to contact section
                >
                  Let's Talk
                  <MessageSquare className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Blocks - Mapped to Optira's Core Services */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Adjusting the negative margin top to position the blocks correctly below the banner, might need fine-tuning based on exact design */}
        <motion.div className="mt-[-80px] md:mt-[-100px] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6 // Adjusted delay slightly
      }}>
          {/* Feature Block 1: CTO-Level Strategic Guidance */}
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              {/* Icon for Strategic Guidance - Cpu seems relevant for technical strategy */}
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">CTO-Level Strategic Guidance</h3>
            <p className="text-gray-600 text-xs md:text-sm">Navigate complex technology decisions and define a clear technical roadmap aligned with your business goals.</p>
          </motion.div>

          {/* Feature Block 2: MVP Architecture Planning */}
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              {/* Icon for MVP Architecture - Code seems fitting for planning the technical build */}
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">MVP Architecture Planning</h3>
            <p className="text-gray-600 text-xs md:text-sm">Design and plan a robust, scalable architecture for your Minimum Viable Product that minimizes technical debt.</p>
          </motion.div>

          {/* Feature Block 3: Team Scaling Strategies */}
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              {/* Icon for Team Scaling - Layers could represent building layers of a team or structure */}
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Team Scaling Strategies</h3>
            <p className="text-gray-600 text-xs md:text-sm">Develop effective strategies for attracting, hiring, and building a high-performing engineering team as you grow.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;