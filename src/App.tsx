// import viteLogo from '/vite.svg'
import React from "react";
import AppRoutes from "./routes";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <ThemeToggle />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
