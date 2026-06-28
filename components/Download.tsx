import { COPY, DOWNLOADS, VERSION } from "@/lib/copy";
import { Reveal } from "./Reveal";
import { WindowsIcon, AppleIcon, MicIcon, DownloadIcon } from "./Icons";

export default function Download({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <section id="download" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{t.nav.download}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">{t.downloadTitle}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">{t.downloadSub}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {/* Windows */}
        <Reveal>
          <div className="card flex h-full flex-col rounded-4xl p-8">
            <div className="flex items-center gap-3">
              <WindowsIcon className="h-7 w-7 text-brand-600" />
              <h3 className="text-xl font-semibold tracking-tight text-ink">{t.win.name}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{t.win.desc}</p>
            <div className="mt-6 flex flex-col gap-2">
              <a className="dl-primary" href={DOWNLOADS.winX64}>
                <DownloadIcon className="h-4 w-4" /> {t.win.x64}
              </a>
              <a className="dl-ghost" href={DOWNLOADS.winX86}>{t.win.x86}</a>
              <a className="dl-ghost" href={DOWNLOADS.winArm64}>{t.win.arm64}</a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink/40">{t.win.hint}</p>
          </div>
        </Reveal>

        {/* macOS */}
        <Reveal delay={0.06}>
          <div className="card flex h-full flex-col rounded-4xl p-8 ring-1 ring-brand/15">
            <div className="flex items-center gap-3">
              <AppleIcon className="h-7 w-7 text-ink" />
              <h3 className="text-xl font-semibold tracking-tight text-ink">{t.macCard.name}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{t.macCard.desc}</p>
            <div className="mt-6">
              <a className="dl-primary" href={DOWNLOADS.mac}>
                <DownloadIcon className="h-4 w-4" /> {t.macCard.cta}
              </a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink/40">{t.macCard.hint}</p>
          </div>
        </Reveal>

        {/* iPhone */}
        <Reveal delay={0.12}>
          <div className="card flex h-full flex-col rounded-4xl p-8">
            <div className="flex items-center gap-3">
              <MicIcon className="h-7 w-7 text-brand-600" />
              <h3 className="text-xl font-semibold tracking-tight text-ink">{t.ios.name}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{t.ios.desc}</p>
            <div className="mt-6">
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-ink/[0.06] px-5 py-3 text-sm font-medium text-ink/45">
                <AppleIcon className="h-4 w-4" /> {t.ios.cta}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-ink/40">v{VERSION}</p>
    </section>
  );
}
