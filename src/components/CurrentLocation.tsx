import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Bucharest",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );

  const LATITUDE = 46.7712;
  const LONGITUDE = 23.6236;
  const CITY = "Cluj-Napoca";
  const COUNTRY = "Romania";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Europe/Bucharest",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="border border-border rounded-lg bg-card/50 p-4 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <MapPin className="w-4 h-4 text-primary" />
        </motion.div>
        Currently Based In
      </h3>

      {/* Map Container with Dark Theme */}
      <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden bg-[#2a2d35]">
        {isLoading ? (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.p
              className="text-sm text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading map...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <iframe
              title="Current Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: 0,
                filter:
                  "invert(1) grayscale(100%) brightness(0.9) contrast(1.3)",
                opacity: 0.85,
              }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                LONGITUDE - 0.05
              },${LATITUDE - 0.05},${LONGITUDE + 0.05},${
                LATITUDE + 0.05
              }&layer=mapnik`}
              allowFullScreen
            />
            {/* City Name Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="text-3xl font-bold text-foreground/70 tracking-wider uppercase drop-shadow-lg"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {CITY.replace("-", " ")}
              </motion.p>
            </motion.div>
            
            {/* Pulsing location dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary/30 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>

      {/* Location Info */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-medium text-foreground">
          {CITY}, {COUNTRY.substring(0, 2).toUpperCase()}
        </p>
        <motion.p
          className="text-xs text-muted-foreground flex items-center gap-1 font-mono"
          key={currentTime}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <span>{currentTime}</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CurrentLocation;
