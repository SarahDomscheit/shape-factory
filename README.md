# Simple Shape Factory

A TypeScript implementation of the **Factory Design Pattern** that demonstrates creating and using different geometric shapes.

---

## Project Overview

This project demonstrates how to use the **Factory Pattern** to create objects of different types without having the client directly instantiate concrete classes.  
All created shapes implement a common interface (`ShapeModel`), allowing the client to work independently of the specific implementation.

---

## Features

- **Common Interface** `ShapeModel`:
  - `type`: string — type of the shape (`circle` or `square`)
  - `describe()`: method that returns a description of the shape
- **Concrete Shapes**:
  - `CircleShape` (radius)
  - `SquareShape` (side length)
- **ShapeFactory**:
  - Static method `createShape(type, size)` to create shapes
  - Uses a switch statement to select the correct shape
- **Decoupled Client**:
  - Client code interacts only through the `ShapeModel` interface, not the concrete classes

---

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:

```sh
npm install
```

---

## Available Scripts

- **`npm run dev`** - Run the project in development mode with auto-reload
- **`npm run build`** - Compile TypeScript to JavaScript
- **`npm start`** - Build and run the compiled project

---

---

## Project Structure

```
├── src/
│   ├── index.ts                          # Main application file
│   └── interface/
│       └── shapeModel.interface.ts       # ShapeModel interface
├── nodemon.json                          # Nodemon configuration
├── package.json                          # Dependencies and scripts
├── tsconfig.json                         # TypeScript configuration
└── README.md                             # Project documentation
```

---

## Design Pattern Benefits

- **Encapsulation**: Object creation logic is centralized
- **Flexibility**: Easy to add new shape types
- **Loose Coupling**: Client code doesn't depend on concrete classes
- **Single Responsibility**: Factory handles object creation

**Note**: This is a learning project for understanding Nunjucks templating with Express.js and TypeScript.
