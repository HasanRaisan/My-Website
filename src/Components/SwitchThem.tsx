import { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
      onClick={toggleDark}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
