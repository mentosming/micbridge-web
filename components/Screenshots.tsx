import type { COPY } from "@/lib/copy";
import { Reveal } from "./Reveal";
import { PhoneFrame } from "./PhoneFrame";

const SHOTS = [
  { src: "/screens/ios-sending.png", alt: "Sending a file with an AirDrop-style ring" },
  { src: "/screens/ios-settings.png", alt: "Settings — language, paired device, about" },
  { src: "/screens/ios-help.png", alt: "How to use and privacy" },
];

export default function Screenshots({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{t.shotsTitle}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{t.shotsSub}</h2>
      </Reveal>

      <div className="mt-12 overflow-hidden rounded-4xl border border-ink/[0.06] bg-gradient-to-b from-white/70 to-brand/[0.06] p-8 shadow-soft md:p-14">
        <div className="grid gap-10 sm:grid-cols-3">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.08} className={i === 1 ? "sm:-translate-y-6" : ""}>
              <PhoneFrame src={s.src} alt={s.alt} className="max-w-[220px]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
