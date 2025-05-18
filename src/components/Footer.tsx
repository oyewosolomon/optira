import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // --- Optira EmailJS Configuration (Update these values for Optira) ---
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const EMAILJS_SERVICE_ID = "YOUR_OPTIRA_EMAILJS_SERVICE_ID";
      const EMAILJS_TEMPLATE_ID = "YOUR_OPTIRA_EMAILJS_TEMPLATE_ID_SUBSCRIPTION"; // Use a specific template for subscriptions
      const EMAILJS_PUBLIC_KEY = "YOUR_OPTIRA_EMAILJS_PUBLIC_KEY";
      // --- End Optira EmailJS Configuration ---

      const templateParams = {
        from_name: "Website Subscriber", // Or "Optira Website Subscriber"
        from_email: email,
        message: `New newsletter subscription request from the website footer. Email: ${email}`, // More specific message
        to_name: 'Optira Team', // Updated recipient name
        reply_to: email
      };

      // Ensure emailjs is properly initialized elsewhere in your app (e.g., index.js or App.js)
      // emailjs.init(EMAILJS_PUBLIC_KEY); // If not initialized globally

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our updates.", // Updated message
        variant: "default"
      });

      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);

      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            {/* KEEPING ORIGINAL IMAGE SRC for the logo */}
            <img
              src="/lovable-uploads/logo.png" // KEEPING ORIGINAL IMAGE SRC
              alt="Optira Logo" // Updated alt text
              className="h-10 w-auto mb-6 invert" // Keep invert class to make logo white on black background
            />
            {/* Updated Company Description */}
            <p className="text-gray-300 mb-6">
              We provide early-stage startups with CTO-level strategic guidance, team scaling strategies, and MVP architecture planning to accelerate product-market fit.
            </p>
            {/* Address - Removed specific street address, keep or remove as needed */}
            {/* <p className="text-gray-300 mb-6">
              [Your City, Country - Optional]<br />
              [Your Postal Code - Optional]
            </p> */}
             {/* Optional: Add email/phone here if desired */}
             {/* <p className="text-gray-300 mb-6">
                 Email: info@optira.com <br/>
                 Phone: +123 456 7890
             </p> */}

            <div className="flex space-x-4">
              {/* Update LinkedIn Link */}
              <a
                href="YOUR_OPTIRA_LINKEDIN_URL" // Replace with your Optira LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                aria-label="Visit Optira on LinkedIn" // Added aria-label
              >
                <Linkedin size={20} />
              </a>
              {/* Add other social media links if applicable */}
            </div>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              {/* Keep Careers link if Optira is hiring */}
              {/* <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li> */}
              {/* Ensure this link exists and is correct */}
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                {/* Optional: Add other key navigation links if needed */}
                {/* <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li> */}
                {/* <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li> {/* Updated from case-studies */}
            </ul>
          </div>

          {/* Get in Touch / Subscription Form */}
          <div>
            {/* Title remains appropriate */}
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            {/* Subscription Form - Keep as is for newsletter signup */}
            <form className="space-y-4" onSubmit={handleSubscribe}>
               {/* Optional: Add a short sentence encouraging subscription */}
               {/* <p className="text-gray-400 text-sm">Subscribe to our newsletter for updates and insights.</p> */}
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus-within:ring-gray-600 text-white placeholder-gray-400" // Adjusted focus style
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  aria-label="Enter your email address" // Added aria-label
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe {/* Button text remains appropriate */}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>

             {/* Optional: Add a direct contact link here */}
             {/* <div className="mt-6">
                 <Link to="/contact" className="inline-flex items-center text-gray-300 hover:text-white transition-colors group">
                     Or Send Us a Message
                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div> */}
          </div>
        </div>

        {/* Bottom Copyright and Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Updated Copyright Text */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Optira. All rights reserved. {/* Updated company name */}
          </p>
          <div className="flex space-x-6">
            {/* Privacy Policy Link - Ensure this link exists and is correct */}
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            {/* Add other bottom links if needed */}
            {/* <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;