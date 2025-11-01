import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { useToast } from "@/hooks/use-toast";
import eventHackathon from "@/assets/event-hackathon.jpg";
import eventDesign from "@/assets/event-design.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventStartup from "@/assets/event-startup.jpg";
import eventAI from "@/assets/event-ai.jpg";
import eventContent from "@/assets/event-content.jpg";
import eventSkyhigh from "@/assets/event-skyhigh.jpg";
const events = [{
  title: "Sky High Tower Making Challenge",
  description: "Part of PRAYUKTI 2025. Defy Gravity. Design Brilliance. Build the tallest tower and compete for ₹10,000/- prize. A structural engineering challenge testing creativity, balance, and innovation.",
  date: "Nov 13 & 14, 2025",
  location: "Basket Ball Court, Graphic Era Hill University, Bhimtal Campus",
  participants: 150,
  duration: "2 days",
  status: "upcoming" as const,
  image: eventSkyhigh
}, {
  title: "Innovation Hackathon 25",
  description: "Build innovative solutions to real-world problems in 48 hours with your team.",
  date: "March 15-17, 25",
  location: "Online",
  participants: 250,
  duration: "48 hours",
  status: "upcoming" as const,
  image: eventHackathon
}, {
  title: "Design Sprint Challenge",
  description: "Create stunning UI/UX designs for mobile apps and compete with designers worldwide.",
  date: "March 20-22, 25",
  location: "Hybrid",
  participants: 180,
  duration: "3 days",
  status: "upcoming" as const,
  image: eventDesign
}, {
  title: "Code & Create Workshop",
  description: "Learn full-stack development while building real projects with expert mentorship.",
  date: "In Progress",
  location: "Online",
  participants: 320,
  duration: "5 days",
  status: "ongoing" as const,
  image: eventWorkshop
}, {
  title: "Startup Pitch Competition",
  description: "Present your startup ideas to industry experts and win exciting prizes.",
  date: "February 28, 25",
  location: "Mumbai",
  participants: 150,
  duration: "1 day",
  status: "completed" as const,
  image: eventStartup
}, {
  title: "AI & ML Bootcamp",
  description: "Dive deep into artificial intelligence and machine learning with hands-on projects.",
  date: "April 5-10, 25",
  location: "Online",
  participants: 400,
  duration: "6 days",
  status: "upcoming" as const,
  image: eventAI
}, {
  title: "Creative Content Marathon",
  description: "Create engaging content across multiple platforms and master digital storytelling.",
  date: "April 15-17, 25",
  location: "Online",
  participants: 200,
  duration: "3 days",
  status: "upcoming" as const,
  image: eventContent
}];
const Events = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);
  const handleEventAction = (eventTitle: string) => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    navigate("/event-registration");
  };
  return <section id="events" className="py-10 bg-background">
      {/* Internship Opportunities Section */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Internship </span>
            <span className="text-foreground">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Gain real-world experience and kickstart your career with our internship programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {/* AI-ML Internship */}
          <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl opacity-30">🤖</div>
              </div>
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Open
              </Badge>
            </div>
            
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                AI-ML Internship
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Work on cutting-edge machine learning projects, develop AI models, and gain hands-on experience with modern ML frameworks and tools.
              </p>

              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Duration: 3-6 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Remote/Hybrid</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Full-time</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto" size="sm" onClick={() => handleEventAction("AI-ML Internship")}>
                Apply Now
              </Button>
            </div>
          </div>

          {/* Full Stack Dev Internship */}
          <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl opacity-30">💻</div>
              </div>
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Open
              </Badge>
            </div>
            
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Full Stack Developer
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Build end-to-end web applications using modern technologies. Work with React, Node.js, databases, and cloud platforms.
              </p>

              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Duration: 3-6 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Remote/Hybrid</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Full-time</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto" size="sm" onClick={() => handleEventAction("Full Stack Developer Internship")}>
                Apply Now
              </Button>
            </div>
          </div>

          {/* Google Workspace Internship */}
          <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl opacity-30">📊</div>
              </div>
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Open
              </Badge>
            </div>
            
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Google Workspace Specialist
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Master Google Workspace tools, automation, and integrations. Help organizations optimize their productivity workflows.
              </p>

              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Duration: 3-6 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Remote/Hybrid</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Full-time</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto" size="sm" onClick={() => handleEventAction("Google Workspace Specialist Internship")}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center flex justify-center mb-24">
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all" asChild>
            <Link to="/career">
              View All Internships
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Let's Connect </span>
            <span className="text-primary">Over Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join exciting events designed to challenge your creativity and build your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {events.map((event, index) => <div key={index} className="group h-[280px] [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] pointer-events-none">
                  {event.image && <div className="absolute inset-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>}
                  
                  <Badge className={`absolute top-4 right-4 z-10 ${event.status === "upcoming" ? "bg-primary/90 text-primary-foreground backdrop-blur-sm" : event.status === "ongoing" ? "bg-accent/90 text-accent-foreground backdrop-blur-sm" : "bg-muted/90 text-muted-foreground backdrop-blur-sm"}`}>
                    {event.status}
                  </Badge>

                  <div className="absolute inset-x-0 bottom-0 p-4 z-10">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-card border border-border [backface-visibility:hidden] [transform:rotateY(180deg)] pointer-events-auto">
                  <div className="h-full p-4 flex flex-col justify-between pointer-events-auto">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{event.participants} participants</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{event.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pointer-events-auto" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventAction(event.title);
                      }}
                    >
                      {event.status === "upcoming" ? "Register Now" : event.status === "ongoing" ? "Join Event" : "View Details"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center flex justify-center">
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all" asChild>
            <Link to="/events">
              View All Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => {
      setIsAuthModalOpen(false);
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    }} />
    </section>;
};
export default Events;