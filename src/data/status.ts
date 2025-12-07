export interface CurrentStatus {
  available: boolean;
  availabilityText: string; // e.g., "Available for work", "Not available", "Open to opportunities"
  availabilityColor: string; // Tailwind color class e.g., "green-500", "red-500", "yellow-500"
  currentProject: {
    title: string;
    technologies: string[];
  };
}

export const currentStatus: CurrentStatus = {
  available: true,
  availabilityText: "Available for work",
  availabilityColor: "green-500", // Change to "red-500" when not available, or "yellow-500" for limited availability
  currentProject: {
    title: "Toy Language Interpreter",
    technologies: ["Java", "JavaFx"],
  },
};
