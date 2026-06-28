import type { COPY } from "@/lib/copy";
import { Reveal } from "./Reveal";
import { CheckIcon, LockIcon } from "./Icons";

export default function Privacy({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="overflow-hidden rounded-4xl bg-ink text-white shadow-soft">
        <div className="grid gap-10 p-10 md:grid-cols-5 md:p-16">
          <Reveal className="md:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
              <LockIcon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              {t.privacyTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/55">{t.privacySub}</p>
          </Reveal>

          <ul className="md:col-span-3 md:divide-y md:divide-white/10">
            {t.privacy.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <li className="flex gap-4 py-4 first:pt-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-white">{b.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/55">{b.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
