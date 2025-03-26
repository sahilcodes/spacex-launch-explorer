// import viteLogo from '/vite.svg'
import React from "react";
import AppRoutes from "./routes";
import ThemeToggle from "./components/ThemeToggle";


const App: React.FC = () => {
  return (
    <>
      <ThemeToggle />
      <AppRoutes />
    </>
  )
}

export default App;
