"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeStore } from "@/store/theme";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { setWaveTheme } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="focus-visible:ring-transparent"
        >
          <Sun className="size-5 sm:size-6 hover:scale-125 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="size-5 sm:size-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:hover:scale-125" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setWaveTheme("light");
            setTheme("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setWaveTheme("dark");
            setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            const isDark = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches;
            setWaveTheme(isDark ? "dark" : "light");
            setTheme("system");
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
