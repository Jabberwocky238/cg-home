"use client";

import { ReactNode } from "react";

type CardProps = {
  title: string;
  href?: string;
  action?: ReactNode;
  children?: ReactNode;
};

export function Card({ title, href, action, children }: CardProps) {
  return (
    <div className={`rounded-xl p-6 bg-white/10 dark:bg-white/10 flex flex-col ${href ? "hover:cursor-pointer" : ""}`}
      onClick={() => {
        if (href) {
          window.location.href = href;
        }
      }}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {children ? (
        <div className="text-sm flex-grow mb-4">{children}</div>
      ) : null}
      {action ? <div className="flex gap-3">{action}</div> : null}
    </div>
  );
}


