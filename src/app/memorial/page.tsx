"use client";

import Link from "next/link";
import { useTexts } from "../../hooks/useTexts";
import Image from "next/image";
import {Button} from "../../components/Button";

export default function MemorialPage() {
  const t = useTexts();
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* 移动端：上图下字 */}
      <section className="sm:hidden space-y-4 mb-8">
        <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <Image src="/disease.webp" alt={t.imgDiseaseAlt} width={1400} height={1000} className="w-full h-auto object-cover grayscale" />
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
          <h1 className="text-xl font-bold mb-2">{t.memorialTitle}</h1>
          <p className="text-sm mb-2">{t.memorialP1}</p>
          <p className="text-sm mb-2">{t.memorialP2}</p>
          <p className="text-sm mb-4">{t.memorialP3}</p>
          <div className="flex gap-3">
            <Link href="/" className="px-3 py-1.5 rounded border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5">
              {t.backHome}
            </Link>
            {t.memorialDomain ? (
              <a href={t.memorialDomain} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded bg-foreground text-background">
                {t.visitSite}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* 桌面端：左文右图 */}
      <section className="hidden sm:grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">{t.memorialTitle}</h1>
          <p className="mb-3 text-black/80 dark:text-white/80">{t.memorialP1}</p>
          <p className="mb-3 text-black/80 dark:text-white/80">{t.memorialP2}</p>
          <p className="mb-6 text-black/80 dark:text-white/80">{t.memorialP3}</p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/">{t.backHome}</Link>
            </Button>
            <Button asChild>
              <Link href="/cloud">{t.cloudName}</Link>
            </Button>
            {t.memorialDomain ? (
              <Button asChild>
                <Link href={t.memorialDomain} target="_blank" rel="noopener noreferrer">{t.visitSite}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <Image src="/disease.webp" alt={t.imgDiseaseAlt} width={1400} height={1000} className="w-full h-auto object-cover grayscale" />
        </div>
      </section>
    </main>
  );
}


