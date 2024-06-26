import { Moon, Sun } from "phosphor-react";
import React, { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <div className="h-[15rem] bg-base-profile-light dark:bg-base-profile-dark flex justify-between items-center dark: w-full z-10 px-4">
        <div></div> {/* Espaço em branco para o lado esquerdo */}
        <button
          className=" bg-base-button p-4 rounded-3xl
           dark:bg-base-button top-0 right-0 fixed
            m-4 z-10 text-black dark:text-white
             transition-colors duration-300 ease-in-out"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </>
  );
}
