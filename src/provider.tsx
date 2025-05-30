import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children} <ToastProvider />
    </HeroUIProvider>
  );
}
