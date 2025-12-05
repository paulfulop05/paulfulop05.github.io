import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RecentCommits from "@/components/RecentCommits";
import CurrentLocation from "@/components/CurrentLocation";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />

      {/* Dashboard / Highlights Section */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Responsive Flex for Cards with Equal Height */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Recent Commits Card - 2/3 width */}
            <div
              className="w-full md:flex-[2] opacity-0 animate-fade-in h-auto md:h-72"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <RecentCommits />
            </div>

            {/* Current Location Card - 1/3 width (square) */}
            <div
              className="w-full md:flex-[1] opacity-0 animate-fade-in aspect-square md:h-72"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <CurrentLocation />
            </div>
          </div>
        </div>
      </section>

      <StatusBar />
    </div>
  );
};

export default Index;
