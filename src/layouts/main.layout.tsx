import AmbientBackground from "@/components/shared/AmbientBackground";
import Footer from "@/components/shared/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import Navigation from "@/components/shared/Navigation";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/contexts/theme.context";
import { usePageTitle } from "@/hooks/usePageTitle";

function MainLayout() {
  usePageTitle();
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <AmbientBackground />
        <ScrollToTop />
        <Navigation />
        <main className="relative z-10 flex-1 pt-28">
          <Outlet />
        </main>
        <FloatingActions />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default MainLayout;
