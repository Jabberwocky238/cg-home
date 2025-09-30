"use client";

import Link from "next/link";
import { useTexts } from "../../hooks/useTexts";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useMediaQuery } from 'react-responsive'


export default function CloudPage() {
  const t = useTexts();
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* 统一视图：根据媒体查询切换布局与样式，复用同一套 DOM */}
      <section
        className={
          isDesktop
            ? "grid grid-cols-2 gap-8 items-center"
            : "space-y-4 mb-8"
        }
      >
        {/* 图像容器：移动端在上，桌面端在右 */}
        <div
          className={
            isDesktop
              ? "order-2 overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
              : "overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
          }
        >
          <Image src="/warfare2.webp" alt={t.imgWarfare2Alt} width={1400} height={1000} className="w-full h-auto object-cover grayscale" />
        </div>

        {/* 文案容器：移动端在下，桌面端在左 */}
        <div
          className={
            "p-4" +
            isDesktop
              ? "order-1"
              : "rounded-xl"
          }
        >
          <h1 className={isDesktop ? "text-3xl font-bold mb-4" : "text-xl font-bold mb-2"}>{t.cloudTitle}</h1>
          <p className={isDesktop ? "mb-3 text-black/80 dark:text-white/80" : "text-sm mb-2"}>{t.cloudP1}</p>
          <p className={isDesktop ? "mb-3 text-black/80 dark:text-white/80" : "text-sm mb-2"}>{t.cloudP2}</p>
          <p className={isDesktop ? "mb-6 text-black/80 dark:text-white/80" : "text-sm mb-4"}>{t.cloudP3}</p>
          <div className="flex gap-3">
            <Button variant="ghost" className="bg-white/10" asChild>
              <Link href={t.cloudDomain} target="_blank" rel="noopener noreferrer">{t.cloudName}  </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


