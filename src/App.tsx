import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import EventsPage from "./pages/Events";
import EventsGallery from "./pages/EventsGallery";
import LearningPath from "./pages/LearningPath";
import Career from "./pages/Career";
import Engagements from "./pages/Engagements";
import Workshop from "./pages/Workshop";
import Mentorship from "./pages/Mentorship";
import Projects from "./pages/Projects";
import Hackathons from "./pages/Hackathons";
import PlacementSupport from "./pages/PlacementSupport";
import Research from "./pages/Research";
import CoursesPage from "./pages/Courses";
import AboutPage from "./pages/About";
import GetStarted from "./pages/GetStarted";
import ConnectNow from "./pages/ConnectNow";
import EventRegistration from "./pages/EventRegistration";
import CourseEnrollment from "./pages/CourseEnrollment";
import StudentDashboard from "./pages/StudentDashboard";
import StudentEventDashboard from "./pages/StudentEventDashboard";
import StudentEventDetails from "./pages/StudentEventDetails";
import StudentCoursesDashboard from "./pages/StudentCoursesDashboard";
import StudentCoursePage from "./pages/StudentCoursePage";
import JudgeDashboard from "./pages/JudgeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminTasks from "./pages/admin/AdminTasks";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminChat from "./pages/admin/AdminChat";
import AdminMentorship from "./pages/admin/AdminMentorship";
import AdminLeaderboard from "./pages/admin/AdminLeaderboard";
import AdminCertificates from "./pages/admin/AdminCertificates";
import AdminMedia from "./pages/admin/AdminMedia";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";
import AIDomain from "./pages/domains/AIDomain";
import WebDevDomain from "./pages/domains/WebDevDomain";
import CybersecurityDomain from "./pages/domains/CybersecurityDomain";
import BlockchainDomain from "./pages/domains/BlockchainDomain";
import CloudDomain from "./pages/domains/CloudDomain";
import DataScienceDomain from "./pages/domains/DataScienceDomain";
import MobileDomain from "./pages/domains/MobileDomain";
import DevOpsDomain from "./pages/domains/DevOpsDomain";
import GameDevDomain from "./pages/domains/GameDevDomain";
import IoTDomain from "./pages/domains/IoTDomain";
import UIUXDomain from "./pages/domains/UIUXDomain";
import ARVRDomain from "./pages/domains/ARVRDomain";
import DiscoverYourself from "./pages/DiscoverYourself";
import Vault from "./pages/Vault";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events-gallery" element={<EventsGallery />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/learning-path/ai" element={<AIDomain />} />
          <Route path="/learning-path/webdev" element={<WebDevDomain />} />
          <Route path="/learning-path/cybersecurity" element={<CybersecurityDomain />} />
          <Route path="/learning-path/blockchain" element={<BlockchainDomain />} />
          <Route path="/learning-path/cloud" element={<CloudDomain />} />
          <Route path="/learning-path/datascience" element={<DataScienceDomain />} />
          <Route path="/learning-path/mobile" element={<MobileDomain />} />
          <Route path="/learning-path/devops" element={<DevOpsDomain />} />
          <Route path="/learning-path/gamedev" element={<GameDevDomain />} />
          <Route path="/learning-path/iot" element={<IoTDomain />} />
          <Route path="/learning-path/uiux" element={<UIUXDomain />} />
          <Route path="/learning-path/arvr" element={<ARVRDomain />} />
          <Route path="/career" element={<Career />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/more" element={<Engagements />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/training" element={<CoursesPage />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/placement-support" element={<PlacementSupport />} />
          <Route path="/research" element={<Research />} />
          <Route path="/discover-yourself" element={<DiscoverYourself />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/connect" element={<ConnectNow />} />
          <Route path="/events/register" element={<EventRegistration />} />
          <Route path="/courses/enroll" element={<CourseEnrollment />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/courses" element={<StudentCoursesDashboard />} />
          <Route path="/dashboard/student/course/:courseId" element={<StudentCoursePage />} />
          <Route path="/dashboard/student/event/:eventId" element={<StudentEventDashboard />} />
          <Route path="/dashboard/student/event-details/:eventId" element={<StudentEventDetails />} />
          <Route path="/dashboard/judge" element={<JudgeDashboard />} />
          <Route path="/dashboard/admin-old" element={<AdminDashboard />} />
          <Route path="/dashboard/admin" element={<AdminLayout><AdminOverview /></AdminLayout>} />
          <Route path="/dashboard/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
          <Route path="/dashboard/admin/courses" element={<AdminLayout><AdminCourses /></AdminLayout>} />
          <Route path="/dashboard/admin/tasks" element={<AdminLayout><AdminTasks /></AdminLayout>} />
          <Route path="/dashboard/admin/users" element={<AdminLayout><AdminUsers /></AdminLayout>} />
          <Route path="/dashboard/admin/chat" element={<AdminLayout><AdminChat /></AdminLayout>} />
          <Route path="/dashboard/admin/mentorship" element={<AdminLayout><AdminMentorship /></AdminLayout>} />
          <Route path="/dashboard/admin/leaderboard" element={<AdminLayout><AdminLeaderboard /></AdminLayout>} />
          <Route path="/dashboard/admin/certificates" element={<AdminLayout><AdminCertificates /></AdminLayout>} />
          <Route path="/dashboard/admin/media" element={<AdminLayout><AdminMedia /></AdminLayout>} />
          <Route path="/dashboard/admin/analytics" element={<AdminLayout><AdminAnalytics /></AdminLayout>} />
          <Route path="/dashboard/admin/notifications" element={<AdminLayout><AdminNotifications /></AdminLayout>} />
          <Route path="/dashboard/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
