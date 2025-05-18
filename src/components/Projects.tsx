import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

// --- Optira Content Mapping ---

// Placeholder Project data structured like the original projects array
// Renamed variable for clarity in this context, though functionally it's the same data structure
const optiraProjects = [
  {
    id: 1,
    title: "Accelerating FinTech MVP Launch",
    brand: "Early-Stage FinTech Startup", // Using a generic descriptor
    description: "Provided strategic guidance and MVP architecture planning to a FinTech startup, enabling a rapid and successful launch of their core product.",
    tags: ["FinTech", "MVP Planning", "Architecture", "Strategy"],
    imageUrl: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png", // KEEPING ORIGINAL IMAGE SRC
    isFeatured: true, // Keep if featured logic is desired
    link: "/projects/fintech-mvp", // Updated link path convention
    details: `
      Optira partnered with an early-stage FinTech startup facing the challenge of building a robust and scalable Minimum Viable Product under tight deadlines. Our CTO-level guidance helped them define their core feature set, select a resilient technology stack, and design an architecture that facilitated rapid development while ensuring future scalability. This strategic planning was instrumental in accelerating their development cycle and achieving a successful MVP launch, positioning them for their next funding round.
    `
  },
  {
    id: 2,
    title: "Scaling the E-commerce Engineering Team",
    brand: "Growing E-commerce Platform", // Using a generic descriptor
    description: "Developed and implemented a team scaling strategy for a rapidly growing e-commerce platform to build a high-performing engineering organization.",
    tags: ["E-commerce", "Team Scaling", "Hiring", "Growth"],
    imageUrl: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png", // KEEPING ORIGINAL IMAGE SRC
    isFeatured: false,
    link: "/projects/ecommerce-scaling", // Updated link path convention
    details: `
      A successful e-commerce platform was experiencing growing pains, particularly in scaling their engineering team effectively to keep pace with user growth and feature development. Optira provided expert team scaling strategies, including refining their hiring processes, defining new roles and team structures, and implementing best practices for team management. Our guidance helped them attract and onboard key talent efficiently, transforming their engineering capacity and enabling smoother platform scaling.
    `
  },
  {
    id: 3,
    title: "Strategic Roadmap for HealthTech Product",
    brand: "Innovative HealthTech Company", // Using a generic descriptor
    description: "Delivered CTO-level strategic guidance to an innovative HealthTech company, defining their technical roadmap and clarifying key architectural decisions for a new product.",
    tags: ["HealthTech", "Strategy", "Roadmap", "Technical Guidance"],
    imageUrl: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png", // KEEPING ORIGINAL IMAGE SRC
    isFeatured: false,
    link: "/projects/healthtech-roadmap", // Updated link path convention
    details: `
      An innovative HealthTech company was developing a new product but needed senior technical expertise to validate their approach and plan the development roadmap. Optira stepped in to provide strategic CTO guidance. We conducted a thorough technical assessment, advised on potential technology choices considering regulatory requirements, and collaborated with their team to build a clear, actionable technical roadmap. This partnership provided the founders with confidence in their technical direction and a solid plan for bringing their new product to market.
    `
  },
  {
    id: 4,
    title: "Optimizing SaaS Architecture for Scale",
    brand: "B2B SaaS Platform", // Using a generic descriptor
    description: "Assessed existing SaaS architecture and provided recommendations for optimization to ensure scalability and performance for future growth.",
    tags: ["SaaS", "Architecture Review", "Optimization", "Scalability"],
    imageUrl: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png", // KEEPING ORIGINAL IMAGE SRC
    isFeatured: false,
    link: "/projects/saas-optimization", // Updated link path convention
    details: `
      A growing B2B SaaS platform had built a functional product but recognized the need to ensure their underlying architecture could support significant future user and data growth. Optira conducted a detailed review of their existing architecture, identifying potential bottlenecks and areas for improvement. We provided practical, step-by-step recommendations for optimizing their database, services, and infrastructure to enhance performance, improve reliability, and ensure the platform is built for sustainable scale.
    `
  },
   {
    id: 5,
    title: "Planning Mobile-First Strategy for Consumer App",
    brand: "Consumer Mobile App Startup", // Using a generic descriptor
    description: "Helped a consumer app startup define their mobile-first technical strategy and plan the initial development phases.",
    tags: ["Mobile App", "Strategy", "MVP", "Consumer Tech"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png", // KEEPING ORIGINAL IMAGE SRC
    isFeatured: false,
    link: "/projects/mobile-strategy", // Updated link path convention
    details: `
      An innovative consumer app startup needed guidance on the best technical approach for their mobile-first product. Optira provided strategic CTO-level support, helping them evaluate different mobile development frameworks, define the core features for their initial release, and create a phased development plan. This strategic clarity allowed the startup to move forward with development confidently and efficiently.
    `
  },
];

// --- End Optira Content Mapping ---


const ProjectsSection = () => { // Renamed component to ProjectSection
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  // Auto-scroll logic
  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % optiraProjects.length); // Use optiraProjects length
      }, 4000); // Auto-scroll interval
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, optiraProjects.length]); // Added optiraProjects.length dependency

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2 // Trigger when 20% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Touch/Swipe Handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveProject(prev => (prev + 1) % optiraProjects.length); // Use optiraProjects length
    } else if (isRightSwipe) {
      setActiveProject(prev => (prev - 1 + optiraProjects.length) % optiraProjects.length); // Use optiraProjects length
    }
  };

  // Animation class logic for cards
  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    // Calculate indices for the cards next to the active one, handling wrapping
    const nextIndex = (activeProject + 1) % optiraProjects.length;
    const prevIndex = (activeProject - 1 + optiraProjects.length) % optiraProjects.length;

    if (index === nextIndex) return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === prevIndex) return "translate-x-[-40%] scale-95 opacity-60 z-10";

    // Hide other cards
    return "scale-90 opacity-0 absolute"; // Added absolute to take them out of flow
  };

  return (
    // Updated ID to 'projects' or keep 'case-studies' based on desired site structure
    // Keeping 'projects' as per the original component's ID suggestion
    <section id="projects" ref={sectionRef} className="bg-white py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Updated Section Title and Subtitle */}
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Our Work
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Projects That Accelerate Startups
          </h2>
          <p className="text-gray-600">
            Explore some of the technical projects where Optira has partnered with early-stage startups to build, scale, and succeed.
          </p>
          {isMobile && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-blue-500">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">Swipe to explore projects</p> {/* Updated text */}
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>

        {/* Carousel/Slider Section */}
        <div
          className="relative h-[550px] overflow-hidden" // Fixed height for carousel container
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
           {/* Ensure the container for cards is flexible */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {optiraProjects.map((project, index) => ( // Use optiraProjects array
              <div
                key={project.id}
                // Apply animation classes for positioning and visibility
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered entry animation
              >
                <Card className="overflow-hidden h-[500px] border border-gray-100 shadow-sm hover:shadow-md flex flex-col">
                  <div
                    className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                     style={{
                       // KEEPING ORIGINAL IMAGE SRC
                       backgroundImage: `url(${project.imageUrl})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center'
                     }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      {/* Display brand/client name (if using client names) or a project category/type */}
                      <h3 className="text-2xl font-bold text-white mb-2">{project.brand ? project.brand.toUpperCase() : 'PROJECT'}</h3> {/* Added check for brand */}
                      <div className="w-12 h-1 bg-white mb-2"></div>
                       {/* Display project title */}
                      <p className="text-white/90 text-sm text-center">{project.title}</p>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                       {/* Display project title */}
                      <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-gray-500 transition-colors">
                        {project.title}
                      </h3>
                       {/* Display brand/client name or category */}
                      <p className="text-gray-500 text-sm font-medium">{project.brand || 'Startup Project'}</p> {/* Added fallback */}
                    </div>

                    {/* Display project description */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="mt-auto">
                      {/* Display tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => ( // Use project.tags
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs animate-pulse-slow"
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link to individual project details page */}
                      <Link
                        to={project.link} // Use project.link
                         className="text-gray-700 flex items-center hover:underline relative overflow-hidden group" // Adjusted text color
                        onClick={() => {
                          // Scroll to top on navigation
                          if (project.link.startsWith('/')) { // Check if it's an internal link
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">Learn more</span> {/* Text remains 'Learn more' for a project*/}
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span> {/* Adjusted underline color */}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setActiveProject(prev => (prev - 1 + optiraProjects.length) % optiraProjects.length)} // Use optiraProjects length
                aria-label="Previous project" // Updated aria-label
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setActiveProject(prev => (prev + 1) % optiraProjects.length)} // Use optiraProjects length
                aria-label="Next project" // Updated aria-label
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {optiraProjects.map((_, idx) => ( // Use optiraProjects length
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === idx ? 'bg-gray-700 w-5' : 'bg-gray-300 hover:bg-gray-400'}`} // Adjusted colors
                onClick={() => setActiveProject(idx)}
                aria-label={`Go to project ${idx + 1}`} // Updated aria-label
              />
            ))}
          </div>
        </div>

        {/* Optional: Add a main CTA button here if desired, e.g., "View All Projects" */}
        <div className="text-center mt-10">
          <Link
            to="/projects" // Link to a main projects listing page
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all group"
          >
            View All Projects {/* Updated button text */}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;