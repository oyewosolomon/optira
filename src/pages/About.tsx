import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout'; // Assuming this component wraps the page content
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Assuming Avatar components are available
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card components are available

// Placeholder data for Optira Team Members - Keeping original image paths as requested
const optiraTeam = [
  {
    name: "Alex Johnson", // Placeholder Name
    role: "Founder & Lead Strategist", // Placeholder Role
    bio: "Passionate about empowering startups with clear technical direction.", // Placeholder Bio
    image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png" // KEEPING ORIGINAL IMAGE SRC
  },
  {
    name: "Maria Garcia", // Placeholder Name
    role: "Head of Engineering Partnerships", // Placeholder Role
    bio: "Specializing in building and scaling high-performing engineering teams.", // Placeholder Bio
    image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png" // KEEPING ORIGINAL IMAGE SRC
  },
  {
    name: "David Kim", // Placeholder Name
    role: "Principal Solutions Architect", // Placeholder Role
    bio: "Expert in designing robust and scalable MVP architectures.", // Placeholder Bio
    image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png" // KEEPING ORIGINAL IMAGE SRC
  },
   {
    name: "Sophia Chen", // Placeholder Name
    role: "Head of Client Success", // Placeholder Role
    bio: "Ensuring our partnerships drive tangible results and accelerate growth.", // Placeholder Bio
    image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png" // KEEPING ORIGINAL IMAGE SRC
  },
  // Add more team members as needed, using existing or new image paths
];


const AboutOptira = () => { // Renamed component
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              About Optira {/* Updated Headline */}
            </motion.h1>

            <div className="prose prose-lg max-w-none">
              {/* Introductory Paragraph */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-12"
              >
                We are a team of experienced technology leaders dedicated to empowering early-stage startups with the strategic technical guidance they need to succeed. {/* Updated Paragraph */}
              </motion.p>

              {/* Mission and Values Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Our Mission */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2> {/* Headline remains appropriate */}
                  <p className="text-gray-600">
                     At Optira, our mission is to empower early-stage startups with the strategic technical leadership they need to thrive. We believe that by providing access to seasoned technical expertise on demand, we can help founders translate their vision into tangible, scalable products. {/* Updated Paragraph */}
                  </p>
                  <p className="text-gray-600">
                     We are committed to being a vital partner in the startup journey, enabling more innovative ideas to overcome technical hurdles and accelerate their path to product-market fit. {/* Updated Paragraph */}
                  </p>
                </motion.div>

                {/* Our Values */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3> {/* Headline remains appropriate */}
                  <ul className="space-y-3">
                    {/* Updated Values List */}
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" /> {/* Icon remains appropriate */}
                      <span><strong>Empowerment:</strong> Enabling founders with the technical knowledge and confidence to make informed decisions.</span> {/* Updated Value */}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" /> {/* Icon remains appropriate */}
                      <span><strong>Collaboration:</strong> Working alongside your team as a trusted and integrated technical partner.</span> {/* Updated Value */}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" /> {/* Icon remains appropriate */}
                      <span><strong>Scalability:</strong> Building solutions and strategies that can grow with your business from day one.</span> {/* Updated Value */}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" /> {/* Icon remains appropriate */}
                      <span><strong>Impact:</strong> Focused on delivering tangible results that accelerate your product development and market fit.</span> {/* Updated Value */}
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Our Story Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2> {/* Headline remains appropriate */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  {/* Updated Story Paragraphs */}
                  <p className="text-gray-600 mb-4">
                     Optira was founded by a team of seasoned technology professionals who recognized a critical gap in the early-stage startup ecosystem. We saw many promising ventures struggle to navigate complex technical decisions, build effective engineering teams, and plan scalable product architectures without dedicated senior technical leadership.
                  </p>
                  <p className="text-gray-600 mb-4">
                     Having experienced these challenges firsthand in our own startup journeys, we envisioned a flexible model where early-stage companies could access high-caliber CTO expertise precisely when they need it, without the significant overhead and long-term commitment of a full-time executive hire.
                  </p>
                  <p className="text-gray-600">
                     This led to the creation of Optira, a partner focused on providing the strategic guidance and hands-on planning necessary to build a strong technical foundation, accelerate development, and achieve product-market fit efficiently. Our story is rooted in the desire to empower founders and contribute to the success of the next wave of innovation.
                  </p>
                </div>
              </motion.div>

              {/* Our Team Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2> {/* Headline remains appropriate */}
                {/* Updated Introductory Paragraph */}
                <p className="text-gray-600 mb-8">
                  Our team comprises experienced technology leaders, architects, and strategists with a proven track record in building and scaling products within startup environments. We bring a diverse range of expertise to guide your technical journey.
                </p>

                {/* Team Member Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {optiraTeam.map((member, i) => ( // Using the Optira team data
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          {/* Team Member Image/Avatar - KEEPING ORIGINAL IMAGE SRC */}
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                             {/* Using Image URL from team data - KEEPING ORIGINAL IMAGE SRC */}
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover filter grayscale" // Keep styles as desired
                            />
                            {/* Consider using Avatar and AvatarFallback for placeholders if images aren't available */}
                            {/* <Avatar className="w-full h-full">
                                <AvatarImage src={member.image} alt={member.name} className="object-cover filter grayscale" />
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar> */}
                          </div>
                          {/* Team Member Name, Role, and Bio */}
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Join Our Team CTA */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                {/* Keep or update link based on whether Optira has a careers page */}
                <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all group"> {/* Styled as primary button */}
                  Explore Career Opportunities {/* Updated text */}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> {/* Icon remains appropriate */}
                </Link>
                 {/* Optional: Add alternative CTA if no careers page, e.g., Contact Us */}
                 {/* <Link to="/contact" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group ml-4">
                     Contact Us About Opportunities
                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutOptira; // Exporting with the new name