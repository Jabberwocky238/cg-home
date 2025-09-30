"use client";

import Link from "next/link";
import { useTexts } from "../../hooks/useTexts";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function MemorialPage() {
  const t = useTexts();
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* 统一视图：根据媒体查询切换布局与样式，复用同一套 DOM */}
      <section
        className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center"
      >
        {/* 文案容器：移动端在下，桌面端在左 */}
        <div className="order-1 p-4">
          <h1 className="text-3xl font-bold mb-4">{t.memorialTitle}</h1>
          <p className="mb-3">{t.memorialP1}</p>
          <p className="mb-3">{t.memorialP2}</p>
          <p className="mb-6">{t.memorialP3}</p>
          <div className="flex gap-3">
            <Button variant="ghost" className="bg-white/10" asChild>
              <Link href={t.memorialDomain} target="_blank" rel="noopener noreferrer">{t.memorialName}</Link>
            </Button>
          </div>
        </div>

        {/* 图像容器：移动端在上，桌面端在右 */}
        <div className="md:order-1 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <Image
            src="/yunjidian.webp"
            alt={t.imgDiseaseAlt}
            width={1400}
            height={1000}
            className="w-full h-auto object-cover grayscale"
          />
        </div>
      </section>
    </main>
  );
}


