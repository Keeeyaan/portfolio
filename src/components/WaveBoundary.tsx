"use client";

import { useEffect } from "react";
import Wave from "react-wavify";

import { useThemeStore } from "@/store/theme";

const WaveBoundary = () => {
  const { theme, setWaveTheme } = useThemeStore();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const isSystemPreferDark = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localTheme === "system" || !localTheme) {
      setWaveTheme(isSystemPreferDark ? "dark" : "light");
      return;
    }

    setWaveTheme(localTheme);
  }, [setWaveTheme, theme]);

  return (
    <Wave
      fill={theme === "dark" ? "#040e27" : "#3B82F6"}
      paused={false}
      style={{ lineHeight: 0, display: "flex", marginBottom: -1 }}
      className="mt-10 h-[80px]"
      options={{
        height: 10,
        amplitude: 20,
        speed: 0.3,
        points: 3,
      }}
    />
  );
};

export default WaveBoundary;
