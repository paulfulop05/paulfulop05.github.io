export interface CurrentStatus {
  available: boolean; // true = open for work, false = not available
  showAvailability: boolean; // controls whether the availability indicator is shown at all
  currentProject: {
    title: string;
    technologies: string[];
  };
}

export const currentStatus: CurrentStatus = {
  available: true, // flip to true when open for work
  showAvailability: true, // flip to false to hide the indicator entirely
  currentProject: {
    title: "PSH",
    technologies: ["Plain C"],
  },
};

// Derived — don't edit these
export const availabilityText = currentStatus.available
  ? "Available for work"
  : "Not available";
export const availabilityColor = currentStatus.available
  ? "green-500"
  : "red-500";
