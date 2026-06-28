"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COPY, type Lang } from "@/lib/copy";
import Features from "./Features";
import Steps from "./Steps";
import Screenshots from "./Screenshots";
import Privacy from "./Privacy";
import Download from "./Download";
import Footer from "./Footer";
import { PhoneFrame } from "./PhoneFrame";
import { DownloadIcon } from "./Icons";

export default function Landing() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = COPY[lang];

  return (
    <main className="relative">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-[var(--bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/icon.png" alt="MicBridge" className="h-8 w-8 rounded-[9px] shadow-soft" />
            <span className="font-semibold tracking-tight text-ink">MicBridge</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-ink/60 md:flex">
            <a href="#features" className="transition hover:text-ink">{t.nav.features}</a>
            <a href="#how" className="transition hover:text-ink">{t.nav.how}</a>
            <a href="#privacy" className="transition hover:text-ink">{t.nav.privacy}</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="rounded-full border border-ink/10 px-3 py-1.5 font-mono text-xs font-medium text-ink/70 transition hover:border-brand/30 hover:text-ink"
              aria-label="Toggle language"
            >
              {lang === "zh" ? "EN" : "中"}
            </button>
            <a href="#download" className="hidden rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition hover:bg-ink-soft sm:inline-block">
              {t.nav.download}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-600">
              {t.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl text-balance">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#download" className="dl-primary px-6 py-3.5 text-base">
                <DownloadIcon className="h-5 w-5" /> {t.hero.ctaDownload}
              </a>
              <a href="#how" className="rounded-full border border-ink/10 bg-white/60 px-6 py-3.5 text-base font-medium text-ink/80 transition hover:border-brand/30 hover:text-ink">
                {t.hero.ctaHow}
              </a>
            </div>
            <p className="mt-6 font-mono text-xs text-ink/40">{t.hero.note}</p>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
        >
          <div className="absolute inset-0 -z-10 mx-auto max-w-[320px] rounded-[3rem] bg-brand/15 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneFrame src="/screens/ios-main.png" alt="MicBridge on iPhone — paired, dictating to a Mac" />
          </motion.div>
        </motion.div>
      </section>

      <Features t={t} />
      <Screenshots t={t} />
      <Steps t={t} />
      <Privacy t={t} />
      <Download t={t} />
      <Footer t={t} />
    </main>
  );
}
