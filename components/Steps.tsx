import type { COPY } from "@/lib/copy";
import { Reveal } from "./Reveal";

export default function Steps({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{t.nav.how}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          {t.howTitle}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">{t.howSub}</p>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-ink/[0.06] bg-ink/[0.06] md:grid-cols-3">
        {t.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="flex h-full flex-col bg-white/80 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full brand-gradient font-mono text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink/40">{s.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
