import type { COPY } from "@/lib/copy";
import { Reveal } from "./Reveal";
import { MicIcon, SwapIcon, LockIcon, DevicesIcon } from "./Icons";

const ICONS = { mic: MicIcon, swap: SwapIcon, lock: LockIcon, devices: DevicesIcon };

export default function Features({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
          {t.nav.features}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          {t.featuresTitle}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">{t.featuresSub}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {t.features.map((f, i) => {
          const Icon = ICONS[f.icon as keyof typeof ICONS] ?? MicIcon;
          const big = i === 0 || i === 3;
          return (
            <Reveal key={f.title} delay={i * 0.05} className={big ? "md:col-span-1" : ""}>
              <div className="card group h-full rounded-4xl p-8 transition-colors duration-300 hover:border-brand/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{f.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
