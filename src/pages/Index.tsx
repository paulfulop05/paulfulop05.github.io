import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RecentCommits from "@/components/RecentCommits";
import CurrentLocation from "@/components/CurrentLocation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />

      {/* Dashboard / Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Responsive Grid for Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Commits Card */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <RecentCommits />
            </div>

            {/* Current Location Card */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <CurrentLocation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
