import { Link } from "@heroui/link";

import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col">
      <div className="pl-5 pt-3">
        {" "}
        <ThemeSwitch />{" "}
      </div>
      <main className="container mx-auto max-w-7xl flex-grow px-6">{children}</main>
      <footer className="flex w-full items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
