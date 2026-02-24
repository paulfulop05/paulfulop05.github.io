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
import tli_preview from "@/assets/project_data/tli_preview.png";
import tli_gif from "@/assets/project_data/tli.gif";
import psh_preview from "@/assets/project_data/psh_preview.png";
import psh_gif from "@/assets/project_data/psh.gif";

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
    id: "tli",
    title: "Toy Language Interpreter",
    description:
      "A multi-threaded toy programming language interpreter with a JavaFX GUI, built as part of the Advanced Programming Methods course at UBB. Supports a custom imperative language with types, expressions, concurrency primitives, file I/O, and garbage collection.",
    tags: [
      { name: "Java", type: "language" },
      { name: "javafx", type: "framework" },
      { name: "Object-Oriented Programming", type: "concept" },
      { name: "MVC", type: "concept" },
    ],
    link: "https://github.com/paulfulop05/Toy_Language_Interpreter",
    previewImage: tli_preview,
    previewGif: tli_gif,
    overview:
      "A fully functional interpreter for a custom imperative toy language, built in Java following the MVC architectural pattern. The language supports int, bool, string, and Ref<T> types, a rich expression and statement set, concurrent execution via forked threads, heap memory with garbage collection, and file I/O — all visualized through a two-window JavaFX GUI with real-time state inspection.",
    features: [
      "Rich type system: int, bool, string, and nestable Ref<T> heap references",
      "Comprehensive statements: conditionals, while/for/repeat-until loops, heap ops (new, wH, rH), file I/O, and concurrency (fork, locks, semaphores, barriers, latches)",
      "Static type checking pass before any program is allowed to execute",
      "Automatic mark-and-sweep garbage collection after every execution step",
      "Concurrent execution of forked threads via a fixed-size ExecutorService thread pool",
      "JavaFX two-window GUI with real-time display of execution stack, symbol table, heap, file table, output, and all synchronization tables",
      "One Step and Run All execution modes, plus a CLI text menu for quick testing",
      "20 built-in example programs covering the full feature set",
    ],
    technicalStack:
      "Built entirely in Java (JDK 21+) using the MVC architectural pattern. The GUI is implemented with JavaFX and FXML. The project is structured in IntelliJ IDEA with JavaFX SDK configured as a module-path dependency.",
    implementation:
      "The interpreter is driven by a ProgramService execution engine that advances all live threads one step at a time or runs to completion. Each ProgramState holds its own execution stack, symbol table, output list, and shares a heap table and file table with sibling threads. A GarbageCollector performs mark-and-sweep after every step, retaining only heap addresses reachable from any live symbol table. Synchronization primitives (locks, semaphores, barriers, latches) are stored as shared interpreter-level tables. The JavaFX controllers bind directly to these observable data structures, refreshing the UI after each step.",
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
    id: "psh",
    title: "psh",
    description:
      "A minimal shell written in C for Windows. Runs external programs and supports a small set of built-in commands like cd, help, and exit.",
    tags: [{ name: "C", type: "language" }],
    link: "https://github.com/paulfulop05/psh",
    previewImage: psh_preview,
    previewGif: psh_gif,
    overview:
      "A simple command-line shell for Windows built as a learning project in C. It presents an interactive prompt, tokenizes user input, and either handles built-in commands directly or launches external programs through the Win32 API.",
    features: [
      "Interactive prompt with a read-eval-print loop",
      "Input tokenizer that handles spaces, tabs, and newlines",
      "External program execution via the Win32 CreateProcess API",
      "Built-in commands: cd (with ~ support), help, and exit",
    ],
    technicalStack:
      "Written in C, targeting Windows and using the Win32 API for process creation.",
    implementation:
      "The shell reads a line of input, splits it into tokens, and checks if the first token matches a built-in command. If it does, the command is handled directly; otherwise, CreateProcess is called to launch the program and the shell waits for it to finish before showing the prompt again.",
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
      "Play against an AI with selectable difficulty.",
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
      { name: "Qt", type: "framework" },
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

export const getFeaturedProjects = () => projects.slice(0, 3);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
