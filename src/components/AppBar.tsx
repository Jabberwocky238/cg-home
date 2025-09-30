"use client";

import Link from "next/link";
import { useTexts } from "../hooks/useTexts";
import {Button} from "./Button";

export default function AppBar() {
  const t = useTexts();
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold hover:opacity-90">{t.appName}</Link>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/memorial">{t.navMemorial}</Link>
          </Button>
          <Button asChild>
            <Link href="/cloud">{t.navCloud}</Link>
          </Button>
          <Button asChild>
            <Link href="/apply">{t.navApply}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}


