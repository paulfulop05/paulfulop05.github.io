import { TechType } from "@/lib/techColors";
import chess_gif from "@/assets/project_data/chess.gif";
import chess_preview from "@/assets/project_data/chess_preview.png";
import obstruction_gif from "@/assets/project_data/obstruction.gif";
import obstruction_preview from "@/assets/project_data/obstruction_preview.png";
import lee_gif from "@/assets/project_data/lee.gif";
import lee_preview from "@/assets/project_data/lee_preview.png";
import snake_gif from "@/assets/project_data/snake.gif";
import snake_preview from "@/assets/project_data/snake_preview.png";
import eco_rewards_gif from "@/assets/project_data/eco_rewards.gif";
import eco_rewards_preview from "@/assets/project_data/eco_rewards_preview.jpg";

export interface ProjectTag {
  name: string;
  type: TechType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  link: string;
  previewImage?: string;
  previewGif?: string;
  overview?: string;
  features?: string[];
  technicalStack?: string;
  implementation?: string;
}

export const projects: Project[] = [
  {
    id: "eco_rewards",
    title: "Eco Rewards",
    description:
      "Award-Winning hackathon project. A mobile app that uses AI to help you make sustainable fashion choices. Assess clothing quality, donate responsibly, and earn discounts from eco-friendly brands.",
    tags: [
      { name: "React-Native", type: "framework" },
      { name: "Express", type: "framework" },
      { name: "Node.js", type: "tool" },
      { name: "firebase", type: "tool" },
      { name: "TypeScript", type: "language" },
      { name: "API", type: "concept" },
    ],
    link: "https://github.com/Alex-Clau/Hackathon",
    previewImage: eco_rewards_preview,
    previewGif: eco_rewards_gif,
    overview:
      "Eco Rewards is a mobile application designed to promote sustainable fashion choices through AI-powered clothing assessment.",
    features: [
      "AI-powered clothing quality assessment",
      "Responsible donation recommendations",
      "Eco-friendly brand discounts and rewards",
      "Sustainability tracking dashboard",
    ],
    technicalStack:
      "Built with React Native for cross-platform mobile development, Express.js backend, Firebase for real-time data and authentication, and TypeScript for type safety.",
    implementation:
      "The app uses machine learning models to analyze clothing images and provide quality assessments. The backend handles user authentication, donation tracking, and reward distribution.",
  },
  {
    id: "chess",
    title: "Chess Game",
    description:
      "A simple chess game with appealing GUI and sound effects, made with C#, using .NET framework.",
    tags: [
      { name: "C#", type: "language" },
      { name: ".NET", type: "framework" },
      { name: "Object-Oriented Programming", type: "concept" },
    ],
    link: "https://github.com/paulfulop05/Chess-Game",
    previewImage: chess_preview,
    previewGif: chess_gif,
    overview:
      "A fully functional chess game with a polished graphical user interface and immersive sound effects.",
    features: [
      "Complete chess rule implementation",
      "Appealing graphical user interface",
      "Sound effects for moves and captures",
      "Move validation and check detection",
    ],
    technicalStack:
      "Developed using C# with the .NET framework, leveraging Windows Forms for the GUI components.",
    implementation:
      "The game follows object-oriented design principles with separate classes for pieces, board state, and game logic. Each piece type inherits from a base piece class with polymorphic move validation.",
  },
  {
    id: "obstruction",
    title: "Obstruction Game",
    description:
      "A board game implementation of the obliteration gamee in python (using pygame but also works in the terminal).",
    tags: [
      { name: "Python", type: "language" },
      { name: "pygame", type: "tool" },
      { name: "Object-Oriented Programming", type: "concept" },
    ],
    link: "https://github.com/paulfulop05/Obstruction-Game",
    previewImage: obstruction_preview,
    previewGif: obstruction_gif,
    overview:
      "An implementation of the Obstruction board game with both graphical and terminal-based interfaces.",
    features: [
      "Dual interface: GUI with pygame and terminal mode",
      "Two-player gameplay support",
      "Visual move highlighting",
      "Game state tracking",
    ],
    technicalStack:
      "Built with Python using pygame for the graphical interface, with a fallback terminal-based UI for systems without graphical capabilities.",
    implementation:
      "The game uses a modular architecture separating game logic from presentation, allowing the same core rules to work with both graphical and text-based interfaces.",
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "Simple snake game with GUI, made in QtCreator, using C++.",
    tags: [
      { name: "C++", type: "language" },
      { name: "Qt", type: "tool" },
    ],
    link: "https://github.com/paulfulop05/QT-Snake-Game",
    previewImage: snake_preview,
    previewGif: snake_gif,
    overview:
      "A classic snake game implementation with a clean graphical interface built using the Qt framework.",
    features: [
      "Smooth snake movement and controls",
      "Score tracking system",
      "Collision detection",
      "Clean Qt-based GUI",
    ],
    technicalStack:
      "Developed in C++ using Qt Creator IDE and the Qt framework for cross-platform GUI development.",
    implementation:
      "The game uses Qt's graphics framework for rendering and event handling. Game state updates are managed through Qt's timer system for consistent frame rates.",
  },
  {
    id: "lee",
    title: "Lee's algorithm illustration",
    description: "Illustrating how Lee's algorithm works in C#.",
    tags: [
      { name: "C#", type: "language" },
      { name: ".NET", type: "framework" },
      { name: "Object-Oriented Programming", type: "concept" },
    ],
    link: "https://github.com/paulfulop05/Lee-s-algorithm-illustration",
    previewImage: lee_preview,
    previewGif: lee_gif,
    overview:
      "An educational visualization tool that demonstrates how Lee's pathfinding algorithm works step by step.",
    features: [
      "Step-by-step algorithm visualization",
      "Interactive grid for obstacle placement",
      "Path highlighting and animation",
      "Educational annotations",
    ],
    technicalStack:
      "Built with C# and .NET framework using Windows Forms for the visualization components.",
    implementation:
      "The visualization shows the BFS-based wave propagation of Lee's algorithm, highlighting each cell as it's explored and backtracking to show the optimal path.",
  },
];

export const getFeaturedProjects = () => projects.slice(0, 2);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
