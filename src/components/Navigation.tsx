import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "explore", "features", "events", "courses"];
      const scrollPosition = window.scrollY + 100;
      const currentScrollY = window.scrollY;

      // Section tracking
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Scroll behavior
      // Check if scrolled past 50px to change width and background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check scroll direction and hide/show navbar
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past 200px - hide navbar
        setIsNavbarHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 z-50 w-full left-0 right-0 transition-all duration-300 ease-in-out overflow-x-hidden ${isScrolled ? 'backdrop-blur-md bg-background/80 shadow-lg scale-[0.98]' : 'bg-background shadow-md scale-100'} ${isNavbarHidden ? '-translate-y-full' : 'translate-y-0'}`} style={{
    transformOrigin: 'top center'
  }}>
      <div className="w-full px-4 py-4 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RR</span>
            </div>
            <span className="text-xl font-bold gradient-text">Ravi Rautela</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === "/" ? "text-primary" : "text-foreground/80"}`}>
              <Home size={20} />
            </Link>
            <Link to="/learning-path" className={`hover:text-primary transition-colors ${location.pathname === "/learning-path" || location.pathname.startsWith("/learning-path/") ? "text-primary" : "text-foreground/80"}`}>
              Learning Path
            </Link>
            <Link to="/career" className={`hover:text-primary transition-colors ${location.pathname === "/career" ? "text-primary" : "text-foreground/80"}`}>Internships</Link>
            <Link to="/events" className={`hover:text-primary transition-colors ${location.pathname === "/events" ? "text-primary" : "text-foreground/80"}`}>
              Events
            </Link>
            <Link to="/more" className={`hover:text-primary transition-colors ${location.pathname === "/more" ? "text-primary" : "text-foreground/80"}`}>
              More
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-primary" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link to="/" className={`flex items-center gap-2 hover:text-primary transition-colors ${location.pathname === "/" ? "text-primary" : "text-foreground/80"}`} onClick={() => setIsMenuOpen(false)}>
              <Home size={20} /> Home
            </Link>
            <Link to="/learning-path" className={`block hover:text-primary transition-colors ${location.pathname === "/learning-path" || location.pathname.startsWith("/learning-path/") ? "text-primary" : "text-foreground/80"}`} onClick={() => setIsMenuOpen(false)}>
              Learning Path
            </Link>
            <Link to="/career" className={`block hover:text-primary transition-colors ${location.pathname === "/career" ? "text-primary" : "text-foreground/80"}`} onClick={() => setIsMenuOpen(false)}>
              Career
            </Link>
            <Link to="/events" className={`block hover:text-primary transition-colors ${location.pathname === "/events" ? "text-primary" : "text-foreground/80"}`} onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link to="/more" className={`block hover:text-primary transition-colors ${location.pathname === "/more" ? "text-primary" : "text-foreground/80"}`} onClick={() => setIsMenuOpen(false)}>
              More
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm" onClick={() => {
            setIsMenuOpen(false);
            setIsAuthModalOpen(true);
          }}>
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-primary" asChild>
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>}
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>;
};
export default Navigation;