# My Tech Stack - React App 🚀

My first React application built while following [The Odin Project](https://www.theodinproject.com/)'s React section! This project showcases the technologies I've learned in a clean, interactive UI.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?logo=tailwind-css)

## 📖 Table of Contents

- [What This Project Does](#what-this-project-does)
- [What I Learned](#what-i-learned)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)

## 🎯 What This Project Does

This app displays my tech stack organized into different categories:

- **Web Technologies** (HTML, CSS, JavaScript, React, etc.)
- **Embedded Programming** (Arduino, ESP32, Raspberry Pi, etc.)
- **Backend/Core Technologies** (Python, Java)
- **IDEs** (VS Code, PyCharm, IntelliJ IDEA)

Each technology is displayed as a card that has a nice hover effect!

## 🧠 What I Learned

While building this project, I practiced:

### React Fundamentals

- ✅ **Components**: Creating reusable UI pieces (`Technology` component)
- ✅ **Props**: Passing data from parent to child components
- ✅ **JSX**: Writing HTML-like syntax in JavaScript
- ✅ **Array Methods**: Using `.map()` and `.filter()` to render lists
- ✅ **Keys**: Understanding why React needs unique keys when rendering lists

### JavaScript Skills

- ✅ **Array manipulation**: Filtering and mapping data
- ✅ **Spread operator**: Using `...` to copy objects
- ✅ **Crypto API**: Generating unique IDs with `crypto.randomUUID()`

### Modern Development Tools

- ✅ **Vite**: Fast build tool and development server
- ✅ **TailwindCSS**: Utility-first CSS framework
- ✅ **ESLint**: Code quality and consistency

## 🛠️ Technologies Used

| Technology      | Purpose                 | Version |
| --------------- | ----------------------- | ------- |
| **React**       | UI Library              | 19.1.1  |
| **Vite**        | Build Tool & Dev Server | 7.1.7   |
| **TailwindCSS** | Styling                 | 4.1.14  |
| **ESLint**      | Code Linting            | 9.36.0  |

## 📁 Project Structure

```
my-first-react-app/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   └── Technology.jsx    # Reusable card component
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

### Important Files Explained:

- **`src/main.jsx`**: The entry point where React connects to the HTML
- **`src/App.jsx`**: The main component that organizes all the content
- **`src/components/Technology.jsx`**: A reusable component for each tech card
- **`index.html`**: The single HTML page (React is a Single Page Application!)

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your computer. You can check by running:

```cmd
node --version
```

### Installation

1. **Clone or download this repository**

2. **Navigate to the project folder**:

   ```cmd
   cd my-first-react-app
   ```

3. **Install dependencies**:

   ```cmd
   npm install
   ```

   This downloads all the packages listed in `package.json`

4. **Start the development server**:

   ```cmd
   npm run dev
   ```

5. **Open your browser** and go to the URL shown in the terminal (usually `http://localhost:5173`)

6. **See your app running!** 🎉

## 🎓 Learning Resources

- [The Odin Project - React](https://www.theodinproject.com/paths/full-stack-javascript/courses/react)
- [React Official Docs](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

## 🙏 Acknowledgments

- **The Odin Project** for the amazing free curriculum
- The React community for excellent documentation

---

**Built with ❤️ while learning React**
