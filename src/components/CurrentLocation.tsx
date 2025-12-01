import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(true);

  // You can change these coordinates to your current location
  // Current default: Cluj-Napoca, Romania (46.7712, 23.6236)
  const LATITUDE = 46.7712;
  const LONGITUDE = 23.6236;
  const CITY = "Cluj-Napoca";
  const COUNTRY = "Romania";

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border border-border rounded-lg bg-card/50 p-4 h-full">
      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-primary" />
        Currently Based In 📍
      </h3>

      {/* Map Container with Dark Theme */}
      <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden bg-[#1a1d23]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        ) : (
          <>
            <iframe
              title="Current Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: 0,
                filter: "grayscale(100%) brightness(0.4) contrast(1.2)",
                opacity: 0.8,
              }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                LONGITUDE - 0.05
              },${LATITUDE - 0.05},${LONGITUDE + 0.05},${
                LATITUDE + 0.05
              }&layer=mapnik&marker=${LATITUDE},${LONGITUDE}`}
              allowFullScreen
            />
            {/* City Name Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-2xl font-bold text-gray-400/50 tracking-wider uppercase">
                {CITY.replace("-", " ")}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Location Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">
          {CITY}, {COUNTRY.substring(0, 2).toUpperCase()}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span>
            {new Date().toLocaleTimeString("en-US", {
              timeZone: "Europe/Bucharest",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrentLocation;
