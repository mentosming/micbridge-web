import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · 私隱政策 — MicBridge",
  description: "MicBridge privacy policy. On-device, no cloud, no account, no data collection.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/" className="font-mono text-xs text-brand-600 hover:underline">← MicBridge</Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">私隱政策 · Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/50">最後更新 · Last updated: 2026-06-28</p>

      <div className="prose-content mt-10 space-y-8 text-[15px] leading-relaxed text-ink/75">
        <section>
          <p className="text-lg font-medium text-ink">
            一句講晒:MicBridge 唔收集你任何資料。冇帳戶、冇雲端、冇伺服器、冇分析。<br />
            In short: MicBridge collects none of your data. No accounts, no cloud, no servers, no analytics.
          </p>
        </section>

        <section>
          <h2>語音 · Voice</h2>
          <p>語音辨識全程喺你部裝置上處理,唔會上傳到任何伺服器。</p>
          <p>Speech recognition runs entirely on your device and is never uploaded.</p>
        </section>

        <section>
          <h2>文字、相片同檔案 · Text, photos &amp; files</h2>
          <p>你送出嘅文字、相片同檔案只會經你嘅區域網絡(Wi-Fi),以端對端 AES-GCM 加密,直接傳去你配對嗰部電腦。資料唔會經過我哋或任何第三方伺服器。</p>
          <p>Text, photos and files you send travel only over your local network (Wi-Fi), end-to-end encrypted with AES-GCM, directly to the computer you paired with. They never pass through our servers or any third party.</p>
        </section>

        <section>
          <h2>配對密鑰 · Pairing keys</h2>
          <p>配對密鑰只儲存喺你部裝置:iOS / Mac 用 Keychain,Windows 用 DPAPI。</p>
          <p>Pairing keys are stored only on your device — Keychain on iOS / Mac, DPAPI on Windows.</p>
        </section>

        <section>
          <h2>購買 · Purchases</h2>
          <p>訂閱同購買由 <strong>Apple</strong> 透過 App Store 處理。我哋睇唔到你嘅付款資料;我哋只會喺裝置本機向 Apple 查詢你嘅購買狀態以解鎖功能。</p>
          <p>Subscriptions and purchases are handled by <strong>Apple</strong> via the App Store. We never see your payment details; the app only checks your purchase status with Apple, on-device, to unlock features.</p>
        </section>

        <section>
          <h2>日誌 · Logs</h2>
          <p>桌面程式可能會喺本機記錄連線 / 握手事件以方便除錯,呢啲紀錄唔會離開你部電腦。</p>
          <p>The desktop apps may record connection / handshake events locally for debugging; these never leave your computer.</p>
        </section>

        <section>
          <h2>兒童 · Children</h2>
          <p>本 App 唔針對 13 歲以下兒童,亦唔會有意收集佢哋嘅資料(因為本 App 根本唔收集任何個人資料)。</p>
        </section>

        <section>
          <h2>聯絡 · Contact</h2>
          <p>查詢請經 <a href="https://github.com/mentosming/micbridge-web/issues">GitHub Issues</a> 聯絡我哋。</p>
        </section>
      </div>
    </main>
  );
}
