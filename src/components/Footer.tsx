"use client";

import { useState } from "react";
import { useTexts } from "../hooks/useTexts";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./Drawer";
import { Button } from "./Button";
import { misc } from "../lib/misc";

function FooterItem({ title, body }: { title: string; body: ReadonlyArray<string> }) {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full justify-start">{title}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-3 text-sm text-black/80 dark:text-white/80">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default function Footer() {
  const t = useTexts();
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FooterItem title={misc.termsTitle} body={misc.termsBody} />
        <FooterItem title={misc.privacyTitle} body={misc.privacyBody} />
        <FooterItem title={misc.howItWorksTitle} body={misc.howItWorksBody} />
      </div>
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-center text-sm text-black/60 dark:text-white/60">
        {t.footerCopyright}
      </div>
    </footer>
  );
}


