import { ArrowLeft, ArrowRight, FileText, Code, Cpu, CheckCircle, Award, Handshake, Rocket, Target, Layers } from 'lucide-react'; // Added necessary icons
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// Assuming ProductPlatform component exists and can be adapted to render relevant visuals for Optira
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout'; // Assuming PageLayout wraps the page content

const TechnicalPhilosophy = () => { // Renamed component
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0); // Keep state, though progress bar is commented

  // Animate progress bar on component mount (Still commented out in JSX)
  useEffect(() => {
    // const timer = setTimeout(() => setProgressValue(100), 100);
    // return () => clearTimeout(timer);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data for the three process phases
  const processPhases = [
    {
      title: "Technical Assessment & Strategy",
      icon: <Cpu className="w-5 h-5 text-gray-700" />, // Using Cpu for strategy/assessment
      description: "We start by deeply understanding your vision, market, and existing technical landscape to define a clear, actionable roadmap."
    },
    {
      title: "Architecture & Planning",
      icon: <Code className="w-5 h-5 text-gray-700" />, // Using Code for architecture/planning
      description: "We design a robust, scalable, and maintainable technical architecture for your MVP and future growth, minimizing technical debt."
    },
    {
      title: "Implementation Support & Refinement",
      icon: <CheckCircle className="w-5 h-5 text-gray-700" />, // Using CheckCircle for completion/refinement
      description: "We provide guidance and support to your team during development, iterating based on feedback to ensure alignment with goals."
    }
  ];

  return (
    <PageLayout> {/* Assuming PageLayout provides consistent page structure */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Back to Home Link */}
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> {/* Icon remains appropriate */}
              Back to Home
            </Link>

            {/* Main Headline */}
            <motion.h1
              initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl sm:text-4xl font-bold mb-6">
              Our Technical Philosophy & Process {/* Updated Headline */}
            </motion.h1>

            <div className="prose prose-lg max-w-none">
              {/* Introductory Paragraph */}
              <motion.p
                initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  duration: 0.5,
                  delay: 0.2
                }} className="text-base sm:text-lg text-gray-600 mb-12">
                At Optira, we partner with early-stage startups to build solid technical foundations, navigate complexity, and accelerate product development with strategic expertise. {/* Updated Paragraph */}
              </motion.p>

              {/* Approach to Scalable Architecture Section (Adapting System Architecture) */}
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6
              }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" /> {/* Using Code icon for architecture */}
                  <h2 className="text-2xl font-bold">Approach to Scalable Architecture</h2> {/* Updated Headline */}
                </div>

                {/* Updated Description */}
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  We guide you in designing a technical architecture that is not only robust for your Minimum Viable Product but also inherently scalable to support future growth and feature expansion without accumulating technical debt.
                </p>

                {/* Progress bar showing flow (Commented out as in original) */}
                {/* <div className="w-full mb-6">
                  // Progress bar component would go here if needed
                </div> */}

                {/* Placeholder for Architecture Diagram/Visual */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    {/*
                      This component should ideally render a diagram or illustration
                      representing Optira's approach to designing scalable startup
                      architectures (e.g., conceptual layers of a tech stack,
                      workflow of architectural planning).
                    */}
                    <ProductPlatform /> {/* Keeping original component reference */}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Our Collaborative Process Section (Adapting Our Approach) */}
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                <div className="flex items-center gap-2 mb-4">
                  <Handshake className="w-5 h-5 text-gray-700" /> {/* Using Handshake icon for collaboration/process */}
                  <h2 className="text-2xl font-bold">Our Collaborative Process</h2> {/* Updated Headline */}
                </div>

                {/* Updated Description */}
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  We work closely with your team through a structured, collaborative process designed to deliver maximum technical impact and align perfectly with your business objectives.
                </p>

                {/* Three Process Phases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {processPhases.map((phase, i) => (
                    <motion.div key={phase.title} initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.1
                    }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Explore Our Process CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              {/* Updated Link Text and Target */}
              <Link to="/how-we-work" className="inline-flex items-center px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all group"> {/* Styled as primary button */}
                Explore Our Process {/* Updated Button Text */}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> {/* Icon remains appropriate */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechnicalPhilosophy; // Exporting with the new name