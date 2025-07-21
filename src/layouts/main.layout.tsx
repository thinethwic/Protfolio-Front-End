import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/contexts/theme.context";

function MainLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default MainLayout;
