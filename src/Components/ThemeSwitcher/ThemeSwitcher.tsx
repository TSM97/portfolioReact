import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "../../svgs/index.ts";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onChange={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      classNames={{
        wrapper: "p-1 m-0 h-4 overflow-visible",
      }}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <Sun className="w-full h-full" />
        ) : (
          <Moon className="w-full h-full" />
        )
      }
    />
  );
}
