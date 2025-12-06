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
  fullDescription?: string;
  tags: ProjectTag[];
  link: string;
  previewImage?: string;
  previewGif?: string;
}

export const projects: Project[] = [
  {
    id: "eco_rewards",
    title: "Eco Rewards",
    description:
      "A mobile app that uses AI to help you make sustainable fashion choices. Assess clothing quality, donate responsibly, and earn discounts from eco-friendly brands.",
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
  },
];

export const getFeaturedProjects = () => projects.slice(0, 2);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
