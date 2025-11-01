import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import skyHighPoster from "@/assets/event-skyhigh-poster.jpg";
import eventBanner from "@/assets/event-prayukti-banner.png";

const EventsGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const eventCategories = [
    { label: "All", count: 0 },
    { label: "Competitions", count: 0 },
    { label: "Hackathons", count: 0 },
    { label: "Cultural", count: 0 },
    { label: "Photography", count: 0 },
    { label: "Gaming", count: 0 },
    { label: "Workshops", count: 0 },
  ];

  const galleryEvents = [
    {
      id: 1,
      title: "Sky High Tower Challenge",
      date: "Nov 13, 2025",
      time: "11:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 45,
      prize: "₹75,000",
      image: skyHighPoster,
    },
    {
      id: 2,
      title: "Robo Car Race Championship",
      date: "Nov 13, 2025",
      time: "1:30 PM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 38,
      prize: "₹60,000",
      image: "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?w=400&q=80",
    },
    {
      id: 3,
      title: "Code Relay Marathon",
      date: "Nov 13, 2025",
      time: "3:00 PM",
      location: "GEHU Bhimtal Campus",
      category: "Hackathons",
      participants: 52,
      prize: "₹50,000",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    },
    {
      id: 4,
      title: "Photography Contest 2025",
      date: "Nov 13, 2025",
      time: "5:00 PM",
      location: "GEHU Bhimtal Campus",
      category: "Photography",
      participants: 67,
      prize: "₹30,000",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80",
    },
    {
      id: 5,
      title: "Robo War Battle Arena",
      date: "Nov 14, 2025",
      time: "9:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 42,
      prize: "₹80,000",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    },
    {
      id: 6,
      title: "Echoes of Intellect Quiz",
      date: "Nov 14, 2025",
      time: "11:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 78,
      prize: "₹40,000",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    },
    {
      id: 7,
      title: "AI & ML Workshop",
      date: "Nov 15, 2025",
      time: "10:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 95,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    },
    {
      id: 8,
      title: "Web Development Bootcamp",
      date: "Nov 16, 2025",
      time: "9:00 AM",
      location: "Online & Offline",
      category: "Workshops",
      participants: 120,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    },
    {
      id: 9,
      title: "Gaming Tournament 2025",
      date: "Nov 17, 2025",
      time: "2:00 PM",
      location: "GEHU Bhimtal Campus",
      category: "Gaming",
      participants: 88,
      prize: "₹45,000",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80",
    },
    {
      id: 10,
      title: "Startup Pitch Competition",
      date: "Nov 18, 2025",
      time: "10:30 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 32,
      prize: "₹1,00,000",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    },
    {
      id: 11,
      title: "Cultural Night Fest",
      date: "Nov 19, 2025",
      time: "6:00 PM",
      location: "Open Air Theatre, GEHU",
      category: "Cultural",
      participants: 156,
      prize: "₹55,000",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
    },
    {
      id: 12,
      title: "Dance Battle Championship",
      date: "Nov 20, 2025",
      time: "5:00 PM",
      location: "GEHU Bhimtal Campus",
      category: "Cultural",
      participants: 64,
      prize: "₹35,000",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80",
    },
    {
      id: 13,
      title: "Design Thinking Workshop",
      date: "Nov 21, 2025",
      time: "11:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 72,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    },
    {
      id: 14,
      title: "Blockchain Hackathon",
      date: "Nov 22, 2025",
      time: "9:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Hackathons",
      participants: 48,
      prize: "₹90,000",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80",
    },
    {
      id: 15,
      title: "IoT Innovation Challenge",
      date: "Nov 23, 2025",
      time: "10:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 41,
      prize: "₹70,000",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&q=80",
    },
    {
      id: 16,
      title: "Cybersecurity Summit",
      date: "Nov 24, 2025",
      time: "9:30 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 108,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      id: 17,
      title: "Mobile App Development Sprint",
      date: "Nov 25, 2025",
      time: "10:00 AM",
      location: "Online",
      category: "Hackathons",
      participants: 85,
      prize: "₹55,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    },
    {
      id: 18,
      title: "Poetry & Spoken Word Night",
      date: "Nov 26, 2025",
      time: "7:00 PM",
      location: "GEHU Bhimtal Campus",
      category: "Cultural",
      participants: 93,
      prize: "₹25,000",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80",
    },
    {
      id: 19,
      title: "Data Science Workshop",
      date: "Nov 27, 2025",
      time: "11:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 98,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      id: 20,
      title: "E-Sports Championship",
      date: "Nov 28, 2025",
      time: "1:00 PM",
      location: "GEHU Gaming Arena",
      category: "Gaming",
      participants: 112,
      prize: "₹65,000",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
    },
    {
      id: 21,
      title: "Fashion Show Extravaganza",
      date: "Nov 29, 2025",
      time: "6:30 PM",
      location: "GEHU Bhimtal Campus",
      category: "Cultural",
      participants: 76,
      prize: "₹42,000",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=400&q=80",
    },
    {
      id: 22,
      title: "Cloud Computing Workshop",
      date: "Nov 30, 2025",
      time: "10:00 AM",
      location: "Online",
      category: "Workshops",
      participants: 134,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    },
    {
      id: 23,
      title: "AR/VR Experience Zone",
      date: "Dec 1, 2025",
      time: "11:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 56,
      prize: "₹48,000",
      image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=400&q=80",
    },
    {
      id: 24,
      title: "Stand-Up Comedy Night",
      date: "Dec 2, 2025",
      time: "8:00 PM",
      location: "GEHU Auditorium",
      category: "Cultural",
      participants: 145,
      prize: "₹30,000",
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&q=80",
    },
    {
      id: 25,
      title: "DevOps Masterclass",
      date: "Dec 3, 2025",
      time: "9:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 87,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80",
    },
    {
      id: 26,
      title: "3D Printing Competition",
      date: "Dec 4, 2025",
      time: "10:30 AM",
      location: "GEHU Bhimtal Campus",
      category: "Competitions",
      participants: 39,
      prize: "₹52,000",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
    },
    {
      id: 27,
      title: "Music Production Workshop",
      date: "Dec 5, 2025",
      time: "2:00 PM",
      location: "GEHU Music Lab",
      category: "Workshops",
      participants: 62,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400&q=80",
    },
    {
      id: 28,
      title: "Open Source Contribution Drive",
      date: "Dec 6, 2025",
      time: "11:00 AM",
      location: "Online",
      category: "Hackathons",
      participants: 103,
      prize: "Recognition",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80",
    },
    {
      id: 29,
      title: "Film Making Workshop",
      date: "Dec 7, 2025",
      time: "10:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Photography",
      participants: 71,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
    },
    {
      id: 30,
      title: "Quantum Computing Seminar",
      date: "Dec 8, 2025",
      time: "9:00 AM",
      location: "GEHU Bhimtal Campus",
      category: "Workshops",
      participants: 114,
      prize: "Certificate",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    },
  ];

  // Calculate category counts
  const categoriesWithCounts = eventCategories.map(cat => {
    if (cat.label === "All") {
      return { ...cat, count: galleryEvents.length };
    }
    return {
      ...cat,
      count: galleryEvents.filter(event => event.category === cat.label).length
    };
  });

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All" 
    ? galleryEvents 
    : galleryEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={eventBanner} 
            alt="Graphic Era Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="container relative z-10 px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Graphic Era <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Where Innovation meets Excellence — Join us for the most exciting technical festival showcasing cutting-edge technology, brilliant minds, and groundbreaking ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-primary text-lg px-8"
              onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🎯 Explore Events
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-2"
              onClick={() => navigate('/events')}
            >
              Register
            </Button>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="events-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="gradient-text">Details</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore exciting competitions and challenges across all categories. Showcase your skills and compete for amazing prizes!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categoriesWithCounts.map((category, index) => (
            <Badge 
              key={index}
              variant={selectedCategory === category.label ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all ${
                selectedCategory === category.label 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category.label)}
            >
              {category.label} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Status Bar */}
        <div className="text-center mb-8 text-sm text-muted-foreground">
          Selected: <span className="font-semibold text-foreground">{selectedCategory}</span> | 
          Total Events: <span className="font-semibold text-foreground">{galleryEvents.length}</span> | 
          Filtered: <span className="font-semibold text-foreground">{filteredEvents.length}</span>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsGallery;
