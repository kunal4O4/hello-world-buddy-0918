import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Code2, Settings, Briefcase, MapPin, Clock, Award, CheckCircle2, Bell, Search, Home, Building2, Cog, Monitor, BarChart3, TrendingUp, ClipboardCheck, Lightbulb, Users, DollarSign, PieChart, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const internships = [{
  id: 1,
  role: "AI / Machine Learning Intern",
  icon: Brain,
  location: "Remote / Hybrid",
  duration: "3–6 Months",
  tag: "AI",
  description: "Work on real-world AI and ML projects under mentorship. Help build intelligent systems, train models, and work with Python, TensorFlow, and real datasets.",
  skills: ["Python", "Pandas", "TensorFlow", "NumPy", "Scikit-learn", "ML basics"],
  responsibilities: ["Assist in AI model development and evaluation", "Work on data cleaning and preprocessing tasks", "Collaborate with mentors for project insights"],
  perks: ["Internship Certificate", "Letter of Recommendation (Performance-Based)", "Mentorship Sessions"]
}, {
  id: 2,
  role: "Full Stack Development Intern",
  icon: Code2,
  location: "Remote / Hybrid",
  duration: "3–6 Months",
  tag: "Development",
  description: "Build and maintain web applications using modern web technologies (MERN Stack). Work with real projects, mentors, and a collaborative tech team.",
  skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git"],
  responsibilities: ["Develop frontend and backend components", "Integrate APIs and databases", "Deploy and maintain applications"],
  perks: ["Certificate of Completion", "Real Project Exposure", "Mentorship Support"]
}, {
  id: 3,
  role: "Google Workspace Admin Intern",
  icon: Settings,
  location: "Remote",
  duration: "3 Months",
  tag: "Admin",
  description: "Assist in managing Google Workspace (Gmail, Drive, Classroom, Admin Console, etc.). Learn about automation, user management, and Workspace integrations.",
  skills: ["Google Admin Console", "Sheets", "GAM commands", "APIs (preferred)", "Basic scripting"],
  responsibilities: ["Manage Workspace users and groups", "Automate workflows using scripts or GAM", "Monitor licenses and reports"],
  perks: ["Certificate + Recommendation", "Hands-on Admin Experience", "Flexible Timings"]
}];
const jobCategories = [{
  icon: Home,
  label: "Remote",
  href: "#"
}, {
  icon: Building2,
  label: "MNC",
  href: "#"
}, {
  icon: Cog,
  label: "Engineering",
  href: "#"
}, {
  icon: Monitor,
  label: "Software & IT",
  href: "#"
}, {
  icon: BarChart3,
  label: "Data Science",
  href: "#"
}, {
  icon: TrendingUp,
  label: "Marketing",
  href: "#"
}, {
  icon: ClipboardCheck,
  label: "Project Mgmt",
  href: "#"
}, {
  icon: Briefcase,
  label: "Internship",
  href: "#"
}, {
  icon: Award,
  label: "Fortune 500",
  href: "#"
}, {
  icon: DollarSign,
  label: "Sales",
  href: "#"
}, {
  icon: PieChart,
  label: "Analytics",
  href: "#"
}];
const Career = () => {
  const {
    toast
  } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedInternship, setSelectedInternship] = useState<typeof internships[0] | null>(null);
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: ""
  });
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = searchQuery === "" || internship.role.toLowerCase().includes(searchQuery.toLowerCase()) || internship.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = locationFilter === "" || internship.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesCategory = selectedCategory === "" || internship.tag.toLowerCase() === selectedCategory.toLowerCase() || selectedCategory === "Remote" && internship.location.includes("Remote") || selectedCategory === "Internship";
    return matchesSearch && matchesLocation && matchesCategory;
  });
  const handleSearch = () => {
    toast({
      title: "Search Applied",
      description: `Found ${filteredInternships.length} matching opportunities`
    });
  };
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted! 🎉",
      description: `Your application for ${selectedInternship?.role} has been received. We'll contact you soon.`
    });
    setIsApplyDialogOpen(false);
    setSelectedInternship(null);
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: ""
    });
  };
  const handleNotifyMe = () => {
    toast({
      title: "Notification Set! 🔔",
      description: "We'll notify you when new internship opportunities are posted."
    });
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Search Hero Section */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Heading */}
            <div className="text-center space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold">Opportunities</h1>
              
            </div>

            {/* Search Form */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="Enter skills / designations / companies" className="pl-10 h-12 border-border" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  </div>
                  
                  <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger className="md:w-[200px] h-12 border-border">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="relative md:w-[200px]">
                    <Input placeholder="Enter location" className="h-12 border-border" value={locationFilter} onChange={e => setLocationFilter(e.target.value)} />
                  </div>

                  <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90" onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {jobCategories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.label;
              return <Button key={index} variant={isSelected ? "default" : "outline"} className="gap-2 h-11 px-4 hover:border-primary hover:text-primary transition-all" onClick={() => handleCategoryClick(category.label)}>
                    <Icon className="w-4 h-4" />
                    {category.label}
                    <ChevronRight className="w-4 h-4" />
                  </Button>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          

          {filteredInternships.length === 0 ? <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No internships match your search criteria</p>
              <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setLocationFilter("");
            setSelectedCategory("");
          }}>
                Clear Filters
              </Button>
            </div> : <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredInternships.map((internship, index) => {
            const Icon = internship.icon;
            const cardColors = [
              { bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800", iconBg: "bg-blue-500" },
              { bg: "bg-pink-50 dark:bg-pink-950/30", border: "border-pink-200 dark:border-pink-800", iconBg: "bg-pink-500" },
              { bg: "bg-cyan-50 dark:bg-cyan-950/30", border: "border-cyan-200 dark:border-cyan-800", iconBg: "bg-cyan-500" }
            ];
            const colorScheme = cardColors[index % 3];
            
            return <Card key={internship.id} className={`${colorScheme.bg} ${colorScheme.border} border-2 overflow-hidden group animate-fade-in-up hover-lift`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${colorScheme.iconBg} w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {internship.id === 1 && "💼"} 
                      {internship.id === 2 && "💻"} 
                      {internship.id === 3 && "⚙️"} 
                      {internship.role}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {internship.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {internship.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{internship.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 gap-2 bg-background hover:bg-background/80"
                        onClick={() => {
                          setSelectedInternship(internship);
                          setIsDetailsDialogOpen(true);
                        }}
                      >
                        Details
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                      <Button 
                        className="flex-1 gap-2 shadow-sm"
                        onClick={() => {
                          setSelectedInternship(internship);
                          setIsApplyDialogOpen(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}
            </div>}

          {/* Details Dialog */}
          <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedInternship?.role}</DialogTitle>
                <DialogDescription>
                  Complete internship details and requirements
                </DialogDescription>
              </DialogHeader>
              
              {selectedInternship && (
                <div className="space-y-6 pt-4">
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{selectedInternship.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{selectedInternship.duration}</span>
                    </div>
                    <Badge variant="secondary">#{selectedInternship.tag}</Badge>
                  </div>

                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedInternship.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-primary" />
                      Skills Required
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInternship.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {selectedInternship.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Perks & Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedInternship.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                          <span className="text-muted-foreground">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        setIsDetailsDialogOpen(false);
                        setIsApplyDialogOpen(true);
                      }}
                    >
                      Apply for this Position
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Apply Dialog */}
          <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Apply for {selectedInternship?.role}</DialogTitle>
                <DialogDescription>
                  Fill out the form below to submit your application
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required value={applicationForm.name} onChange={e => setApplicationForm({
                    ...applicationForm,
                    name: e.target.value
                  })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required value={applicationForm.email} onChange={e => setApplicationForm({
                    ...applicationForm,
                    email: e.target.value
                  })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required value={applicationForm.phone} onChange={e => setApplicationForm({
                    ...applicationForm,
                    phone: e.target.value
                  })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / Portfolio Link *</Label>
                  <Input id="resume" placeholder="https://..." required value={applicationForm.resume} onChange={e => setApplicationForm({
                    ...applicationForm,
                    resume: e.target.value
                  })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Why do you want this internship? *</Label>
                  <Textarea id="coverLetter" rows={4} required value={applicationForm.coverLetter} onChange={e => setApplicationForm({
                    ...applicationForm,
                    coverLetter: e.target.value
                  })} />
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Don't see your ideal role?</CardTitle>
              <CardDescription className="text-base mt-4">
                Stay tuned — more opportunities are coming soon! Get notified when new internships are posted.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Button size="lg" variant="outline" className="gap-2" onClick={handleNotifyMe}>
                <Bell className="w-5 h-5" />
                Notify Me 🔔
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Career;