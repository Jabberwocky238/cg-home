"use client";

import Link from "next/link";
import { useTexts } from "../hooks/useTexts";
import Image from "next/image";
import {Button} from "../components/Button";

export default function Home() {
  const t = useTexts();
  return (
    <main className="min-h-[calc(100vh-14rem)]">
      <section className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-7rem)] px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
          {t.heroTitle}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 mb-8 max-w-2xl">
          {t.heroSubtitle}
        </p>
        <Button asChild>
          <Link href="/apply">{t.heroApply}</Link>
        </Button>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-2">{t.sectionProducts}</h2>
        <p className="text-sm text-black/70 dark:text-white/70 mb-6">{t.sectionIntro}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/5 dark:bg-white/5">
            <h3 className="text-lg font-semibold mb-1">{t.memorialName}</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">{t.memorialDesc}</p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/memorial">{t.viewDetails}</Link>
              </Button>
              {t.memorialDomain ? (
                <Button asChild>
                  <Link href={t.memorialDomain} target="_blank" rel="noopener noreferrer">{t.visitSite}</Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/5 dark:bg-white/5">
            <h3 className="text-lg font-semibold mb-1">{t.cloudName}</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">{t.cloudDesc}</p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/cloud">{t.viewDetails}</Link>
              </Button>
              {t.cloudDomain ? (
                <Button asChild>
                  <Link href={t.cloudDomain} target="_blank" rel="noopener noreferrer">{t.visitSite}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-2">{t.galleryTitle}</h2>
        <p className="text-sm text-black/70 dark:text-white/70 mb-6">
          <span className="italic">{t.galleryQuoteEn}</span> —— {t.galleryQuoteZh}
        </p>
        <p className="text-sm text-black/70 dark:text-white/70 mb-10">{t.galleryDesc}</p>

        {/* 左右左 - 1 */}
        <div className="grid gap-6 sm:grid-cols-2 items-center mb-10">
          <div className="order-1 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
            <Image src="/disease.webp" alt={t.imgDiseaseAlt} width={1200} height={900} className="w-full h-auto grayscale" />
          </div>
          <div className="order-2">
            <h3 className="text-lg font-semibold mb-2">{t.imgDiseaseTitle}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t.imgDiseaseText}</p>
          </div>
        </div>

        {/* 左右左 - 2（翻转） */}
        <div className="grid gap-6 sm:grid-cols-2 items-center mb-10">
          <div className="sm:order-2 order-1 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
            <Image src="/warfare.webp" alt={t.imgWarfareAlt} width={1200} height={900} className="w-full h-auto grayscale" />
          </div>
          <div className="sm:order-1 order-2">
            <h3 className="text-lg font-semibold mb-2">{t.imgWarfareTitle}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t.imgWarfareText}</p>
          </div>
        </div>

        {/* 左右左 - 3 */}
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          <div className="order-1 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
            <Image src="/warfare2.webp" alt={t.imgWarfare2Alt} width={1200} height={900} className="w-full h-auto grayscale" />
          </div>
          <div className="order-2">
            <h3 className="text-lg font-semibold mb-2">{t.imgWarfare2Title}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t.imgWarfare2Text}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
