import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare, Cpu, Layers } from "lucide-react"; // Added Cpu, Layers
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3; // Assuming 3 sprints for the animation cycle
  const isMobile = useIsMobile();

  // Updated to use 'contact' ID for consistency with Hero component
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  // Animation for the progress bar
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      // Simulate progress increase
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Wait a moment, then reset for the next sprint cycle
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress(); // Start animation for the next sprint
            }, 500);
            return 100;
          }
          // Increase progress faster for demonstration, adjust as needed
          return prev + 5; // Increased speed for demo
        });
      }, 50); // Faster interval

    };

    // Start the animation when the component mounts
    animateProgress();

    // Cleanup on unmount
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSprint, totalSprints]); // Restart animation for each new sprint

  // --- Optira Content Mapping ---

  // Four key pillars/benefits of Optira's approach
  const features = [{
    icon: <Cpu className="w-10 h-10 text-white transition-transform duration-300 transform" />, // Icon for Strategic Guidance
    title: "Strategic Clarity",
    description: "Gain confident direction for your technology roadmap and critical architectural decisions.",
    image: "/lovable-uploads/14820.jpg" // Placeholder image
  }, {
    icon: <Code className="w-10 h-10 text-white transition-transform duration-300 transform" />, // Icon for Architecture
    title: "Scalable Architecture",
    description: "Plan your MVP and future product iterations on a robust, scalable technical foundation.",
    image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png" // Placeholder image
  }, {
    icon: <Layers className="w-10 h-10 text-white transition-transform duration-300 transform" />, // Icon for Team Scaling
    title: "High-Impact Teams",
    description: "Develop effective strategies to build and scale a high-performing engineering team.",
    image: "/lovable-uploads/2150690153.jpg" // Placeholder image
  }, {
    icon: <Rocket className="w-10 h-10 text-white transition-transform duration-300 transform" />, // Icon for Accelerated Growth
    title: "Accelerated Growth",
    description: "Bridge technical gaps and accelerate your path to product-market fit with expert guidance.",
    image: "/lovable-uploads/2150690153.jpg" // Placeholder image
  }];

  // Examples of scenarios where Optira provides value (replacing sensor case studies)
  const caseStudiesOrScenarios = [{
    image: "/path-to-scenario-image-1.png", // Placeholder image
    title: "Defining Your Tech Stack",
    description: "Choosing the right technologies early on is crucial. We help you select a stack that fits your needs and scales with you."
  }, {
    image: "/path-to-scenario-image-2.png", // Placeholder image
    title: "Building Your Founding Team",
    description: "From identifying key roles to optimizing hiring, we guide you in building your initial engineering team."
  }, {
    image: "/path-to-scenario-image-3.png", // Placeholder image
    title: "Planning the First Product Iteration",
    description: "Ensure your MVP is built efficiently with a clear plan for future features and scalability."
  }];

  // Simplified 3-step process (replacing stepFlowItems)
  const simplifiedProcessSteps = [{
    icon: <Handshake className="h-10 w-10 text-gray-700" />, // Icon for Understanding & Planning
    title: "Understand & Plan",
    description: "We align with your vision and define a tailored technical strategy and roadmap.",
    hoverDetail: "Our process begins with a deep dive into your business goals, market, and existing technical landscape to create a customized plan."
  }, {
    icon: <Code className="h-10 w-10 text-gray-700" />, // Icon for Architecting & Building
    title: "Architect & Build",
    description: "We provide guidance on architecture design and support your team in building the product.",
    hoverDetail: "We help design a scalable architecture and offer hands-on support to your team during the development phase."
  }, {
    icon: <CheckCircle className="h-10 w-10 text-gray-700" />, // Icon for Refine & Scale
    title: "Refine & Scale",
    description: "We iterate based on feedback and plan for scaling your technology and team.",
    hoverDetail: "We integrate market feedback into the development cycle and strategize for future technical and team scaling."
  }];

  // Phases for the iterative development block (Keeping standard agile phases)
  const sprintPhases = [{
    name: "Planning",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Development",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Testing",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Review",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  // --- End Optira Content Mapping ---


  return (
    <>
      {/* Section 1: Key Pillars/Benefits (Adapting the original 'Features' grid) */}
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Our Approach & Benefits
            </div>
            {/* Updated Title and Description */}
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Strategic Technical Partnership for Startups</h2>
            <p className="text-gray-600 mt-4">
              Optira provides the critical technical expertise and strategic guidance early-stage startups need to navigate challenges and build for sustainable growth.
            </p>
          </div>

          {/* Grid of Four Key Pillars/Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="feature-item rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-[280px] relative shadow-lg" style={{
                transitionDelay: `${index * 100}ms`
              }} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
                <div className="absolute inset-0 w-full h-full">
                  {/* Placeholder Image */}
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover grayscale" />
                  <div className={cn("absolute inset-0 bg-black/60 transition-opacity duration-300", hoveredFeature === index ? "opacity-50" : "opacity-70")}></div>
                </div>

                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4 inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110">
                      <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                  <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Real-World Scenarios/Case Studies (Adapting the original 'Real-World Use Cases' carousel) */}
          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Startup Challenges We Solve
              </div>
              {/* Updated Title and Description */}
              <h3 className="text-2xl font-bold">Scenarios Where Optira Delivers Value</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                See how Optira provides essential technical guidance and planning in common early-stage startup situations.
                <span className="block text-sm mt-1 text-blue-500">Scroll horizontally to see examples →</span>
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {caseStudiesOrScenarios.map((study, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-full">
                            {/* Placeholder Image */}
                            <img src={study.image} alt={study.title} className="w-full h-auto object-contain" /> {/* Consider using object-cover if images are consistent aspect ratio */}
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <div className="text-center mt-6 text-sm text-gray-600">
                {/* Updated Caption */}
                <p className="font-medium">These are just a few examples of how Optira empowers startups through strategic technical partnership.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Initial CTAs - Adjusted text */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Discuss Your Startup's Needs
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>

          {/* Updated link text */}
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Learn More About Our Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Section 3: How We Work (Adapting 'Our Approach' and 'Adaptation Project') */}
      {/* Updated ID to match 'How We Work' section in content plan */}
      <section id="how-we-work" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Our Process
            </div>
            {/* Updated Title and Description */}
            <h2 className="text-3xl font-bold mb-4">A Collaborative Approach to Your Technical Success</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We integrate seamlessly with your team to provide actionable technical guidance and planning that adapts to your startup's pace.
            </p>
          </div>

          {/* Simplified 3-Step Process */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {simplifiedProcessSteps.map((item, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  {/* Using the hoverDetail from the simplifiedProcessSteps data */}
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.hoverDetail}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            {/* Arrows/Separators */}
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Iterative Development Block (Adapting 'Adaptation Project') */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    {/* Updated Title */}
                    <h3 className="text-xl font-bold">Iterative Partnership for Growth</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Continuous Adaptation</span> {/* Updated label */}
                    <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                  </div>
                </div>

                {/* Updated Description */}
                <p className="text-gray-600 mb-4">Working collaboratively and iteratively to refine solutions and adapt to market needs.</p>

                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>

                {/* Sprint Phases (Kept as is, standard agile concept) */}
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => (
                    <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    {/* Updated text */}
                    <span className="text-sm text-gray-600">Feedback and insights integrated continuously</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    {/* Updated text */}
                    <span className="mr-2">Driving towards product-market fit</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* Arrows/Separators */}
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Final Stage Block (Adapting 'Hitting the Market') */}
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div> {/* Keep animation */}
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" /> {/* Rocket icon fits well */}
                </div>
              </div>
              {/* Updated Title and Description */}
              <h3 className="text-xl font-bold mb-2">Achieving Product-Market Fit</h3>
              <p className="text-gray-700">Building a strong technical foundation for successful launch and scaling</p> {/* Updated text */}
              <div className="flex justify-center mt-4 space-x-2"> {/* Keep animation */}
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>

          {/* Final CTAs - Adjusted text */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               {/* Updated link text and target section */}
               <Link to="#how-we-work" onClick={(e) => {e.preventDefault(); document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });}} className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                 Explore Our Process
                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>

              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Get Started with Optira
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;