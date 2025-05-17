import { useRef, useEffect } from "react";
import { useTheme } from "@heroui/use-theme";
import { Button } from "@heroui/react";

import { Icon } from "@/components/icons";

function ThemeSwitch() {
  const firstRender = useRef(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => (firstRender.current = false), 1);
  }, []);

  if (!theme) return null;
  const startIcon = theme === "dark" ? "line-md:moon-filled-loop" : "line-md:sunny-filled-loop";
  const transitionIcon =
    theme === "light"
      ? "line-md:moon-filled-to-sunny-filled-loop-transition"
      : "line-md:sunny-filled-loop-to-moon-filled-loop-transition";

  const handleClick = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      isIconOnly
      className="text-lg"
      radius="full"
      size="sm"
      variant="light"
      onPress={handleClick}
    >
      <Icon key={theme} icon={firstRender.current ? startIcon : transitionIcon} />
    </Button>
  );
}

export default ThemeSwitch;
