import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use · 使用條款 — MicBridge",
  description: "MicBridge Terms of Use, including subscription and purchase terms.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/" className="font-mono text-xs text-brand-600 hover:underline">← MicBridge</Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">使用條款 · Terms of Use</h1>
      <p className="mt-2 text-sm text-ink/50">最後更新 · Last updated: 2026-06-28</p>

      <div className="prose-content mt-10 space-y-8 text-[15px] leading-relaxed text-ink/75">
        <section>
          <h2>1. 接受條款 · Acceptance</h2>
          <p>使用 MicBridge(「本 App」)即表示你同意本使用條款。如不同意,請勿使用。</p>
          <p>By using MicBridge (the “App”) you agree to these Terms of Use. If you do not agree, do not use the App.</p>
        </section>

        <section>
          <h2>2. 授權 · Licence</h2>
          <p>我哋授予你個人、非專屬、不可轉讓嘅授權,喺你擁有或控制嘅裝置上使用本 App 作個人用途。</p>
          <p>You are granted a personal, non-exclusive, non-transferable licence to use the App on devices you own or control, for personal use.</p>
        </section>

        <section>
          <h2>3. 訂閱同購買 · Subscriptions &amp; Purchases</h2>
          <ul>
            <li><strong>MicBridge Pro(每月訂閱):</strong>提供 <strong>14 日免費試用</strong>(每個 Apple ID 一次,由 Apple 管理),試用後按你地區價格(例如 HK$15 / 約 US$1.99)每月自動續期。</li>
            <li><strong>一次買斷(Lifetime):</strong>一次性購買,永久解鎖,冇經常性收費。</li>
            <li>訂閱會喺每個週期結束前自動續期,除非你喺結束前至少 24 小時取消。</li>
            <li>可隨時喺裝置「設定 › Apple ID › 訂閱」管理或取消訂閱。</li>
            <li>所有付款由 <strong>Apple</strong> 透過你嘅 App Store 帳戶處理;退款受 Apple 政策約束。</li>
          </ul>
          <p className="text-ink/60">
            <strong>Pro (monthly subscription):</strong> includes a <strong>14-day free trial</strong> (once per Apple ID, managed by Apple); after the trial it auto-renews monthly at your regional price (e.g. HK$15 / ~US$1.99). <strong>Lifetime:</strong> a one-time purchase, no recurring charge. Subscriptions auto-renew unless cancelled at least 24 hours before the period ends; manage or cancel anytime in Settings › Apple ID › Subscriptions. Payments are processed by Apple; refunds follow Apple’s policy.
          </p>
        </section>

        <section>
          <h2>4. 可接受使用 · Acceptable Use</h2>
          <p>你同意唔會將本 App 用於任何非法用途,或干擾本 App 嘅正常運作。本 App 透過你嘅區域網絡傳輸資料;你須對你所傳輸嘅內容負責。</p>
          <p>You agree not to use the App for any unlawful purpose or to interfere with its operation. You are responsible for the content you transmit over your local network.</p>
        </section>

        <section>
          <h2>5. 免責聲明 · Disclaimer</h2>
          <p>本 App 按「現狀」提供,不附帶任何明示或暗示嘅保證。在法律允許嘅最大範圍內,我哋不就任何間接或後果性損失負責。</p>
          <p>The App is provided “as is” without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect or consequential loss.</p>
        </section>

        <section>
          <h2>6. 修改 · Changes</h2>
          <p>我哋可能會不時更新本條款,更新會喺本頁公佈。</p>
          <p>We may update these Terms from time to time; changes are posted on this page.</p>
        </section>

        <section>
          <h2>7. 聯絡 · Contact</h2>
          <p>查詢請經 <a href="https://github.com/mentosming/micbridge-web/issues">GitHub Issues</a> 聯絡我哋。</p>
        </section>
      </div>
    </main>
  );
}
