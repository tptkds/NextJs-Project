"use client";

import { useState, useEffect } from "react";
export default function Home() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  useEffect(() => {
    localStorage.getItem("theme") == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });
  return (
    <div className="justify-center dark:bg-slate-800 h-full">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("theme", isDark ? "dark" : "light");
          }}
          checked={localStorage.getItem("theme") == "dark" ? true : false}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          다크 모드 {localStorage.getItem("theme") == "dark" ? "On" : "Off"}
        </span>
      </label>
      <h1 className="text-3xl font-bold underline dark:text-slate-400">
        테스트
      </h1>
      <p className="dark:text-slate-300">배경과 글의 색상이 변경됩니다.</p>
    </div>
  );
}
