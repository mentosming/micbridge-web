import { COPY, GITHUB_REPO, VERSION } from "@/lib/copy";
import { GithubIcon } from "./Icons";

export default function Footer({ t }: { t: (typeof COPY)["en"] }) {
  return (
    <footer className="border-t border-ink/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="MicBridge" className="h-9 w-9 rounded-[10px] shadow-soft" />
          <div>
            <p className="font-semibold tracking-tight text-ink">MicBridge</p>
            <p className="text-sm text-ink/50">{t.footerTagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-ink/55">
          <a className="transition hover:text-ink" href="#download">{t.nav.download}</a>
          <a className="transition hover:text-ink" href="#privacy">{t.nav.privacy}</a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-ink"
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-10">
        <p className="font-mono text-xs text-ink/35">
          © {new Date().getFullYear()} MicBridge · v{VERSION} · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
