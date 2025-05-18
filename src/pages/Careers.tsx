import PageLayout from '@/components/PageLayout'; // Assuming this component wraps the page content
import { ArrowLeft, Mail, Linkedin, Phone, Briefcase } from 'lucide-react'; // Added Briefcase icon
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Assuming PageLayout exists and handles global layout */}
      <PageLayout showContact={false}> {/* Assuming showContact prop controls a contact section in the layout */}
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
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
              >
                Join Our Team {/* Headline remains appropriate */}
              </motion.h1>

              <div className="prose prose-lg max-w-none">
                {/* Updated Introductory Paragraphs */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-4"
                >
                  Are you passionate about empowering early-stage startups to build impactful technology? Join Optira and work alongside experienced leaders to solve critical technical and team-building challenges.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  We're building a team dedicated to providing high-impact technical guidance and strategic partnership to the next wave of innovative companies.
                </motion.p>

                {/* Why Join Optira? Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  {/* Updated Headline */}
                  <h2 className="text-3xl font-bold mb-6">Why Join Optira?</h2>
                  {/* Updated Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Work at the Forefront",
                        description: "Engage with challenging technical strategies, architecture, and team scaling for diverse startups."
                      },
                      {
                        title: "Direct Impact",
                        description: "Directly influence the technical direction and success of innovative early-stage companies."
                      },
                      {
                        title: "Growth with Leaders",
                        description: "Learn and grow alongside seasoned technical founders and partners in a dynamic environment."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                         {/* Optional: Add an icon here if desired, e.g., <Briefcase className="w-6 h-6 text-gray-700 mb-3" /> */}
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Careers Inquiry Contact Block */}
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    {/* Updated Headline */}
                    <h3 className="font-bold text-xl mb-6">Careers Inquiry</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        {/* KEEPING ORIGINAL IMAGE SRC FOR VISUAL CONSISTENCY */}
                        <img
                          src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                          alt="Optira Team Member" // Updated alt text
                          className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale" // Keep styles
                        />
                        {/* Removed specific name/role */}
                        <p className="text-gray-600 mb-4">Interested in joining Optira?</p> {/* Added introductory text */}
                        <div className="flex flex-col space-y-3">
                           {/* Updated Email Link */}
                           {/* Replace with your Optira careers email */}
                          <a href="mailto:careers@optira.com" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Mail className="w-5 h-5 mr-2" />
                            careers@optira.com {/* Updated email address */}
                          </a>
                           {/* Updated LinkedIn Link */}
                           {/* Replace with your Optira LinkedIn profile */}
                          <a
                            href="YOUR_OPTIRA_LINKEDIN_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            Optira on LinkedIn {/* Updated link text */}
                          </a>
                          {/* Phone link removed as per plan */}
                          {/* Optional: Add a link to a specific application form if applicable */}
                          {/* <Link to="/apply" className="flex items-center text-gray-700 hover:text-blue-600">
                             <ArrowRight className="w-5 h-5 mr-2" />
                             View Current Openings
                           </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Optional: Add a section for specific job listings here if available */}
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;