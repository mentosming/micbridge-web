export type Lang = "zh" | "en";

export const GITHUB_REPO = "https://github.com/mentosming/micbridge-web";
const REL = `${GITHUB_REPO}/releases/latest/download`;

export const DOWNLOADS = {
  winX64: `${REL}/MicBridge-x64-folder.zip`,
  winX86: `${REL}/MicBridge-x86-32bit-folder.zip`,
  winArm64: `${REL}/MicBridge-arm64-folder.zip`,
  mac: `${REL}/MicBridge-mac.dmg`,
};

export const VERSION = "1.0.0";

type Feature = { icon: string; title: string; body: string };
type Step = { tag: string; title: string; body: string };
type Bullet = { title: string; body: string };

type Dict = {
  nav: { features: string; how: string; privacy: string; download: string };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    sub: string;
    ctaDownload: string;
    ctaHow: string;
    note: string;
  };
  featuresTitle: string;
  featuresSub: string;
  features: Feature[];
  howTitle: string;
  howSub: string;
  steps: Step[];
  shotsTitle: string;
  shotsSub: string;
  privacyTitle: string;
  privacySub: string;
  privacy: Bullet[];
  downloadTitle: string;
  downloadSub: string;
  win: { name: string; desc: string; x64: string; x86: string; arm64: string; hint: string };
  macCard: { name: string; desc: string; cta: string; hint: string };
  ios: { name: string; desc: string; cta: string };
  footerTagline: string;
  footerRights: string;
};

export const COPY: Record<Lang, Dict> = {
  zh: {
    nav: { features: "功能", how: "點樣用", privacy: "私隱", download: "下載" },
    hero: {
      badge: "iPhone × Mac / Windows · 零帳戶 · 端對端加密",
      title: "用 iPhone 講嘢,",
      titleAccent: "直接打入你部電腦",
      sub: "喺 iPhone 講,文字即刻打入你 Mac 或 Windows 上開緊嗰個程式。仲可以兩邊加密傳相、傳檔 —— 全程喺裝置上處理,唔上雲、唔使開戶口。",
      ctaDownload: "免費下載",
      ctaHow: "睇點樣用",
      note: "經區域網絡端對端 AES-GCM 加密 · 粵語 / 普通話 / 英文",
    },
    featuresTitle: "一個 app,做齊三件事",
    featuresSub: "唔係淨係遙控鍵盤 —— 係語音、打字、傳檔嘅組合,而且跨 Mac 同 Windows。",
    features: [
      { icon: "mic", title: "語音直接打入電腦", body: "iPhone 上做語音辨識,檢查草稿,撳一下就以鍵盤打入你電腦 focus 緊嗰個程式 —— Word、瀏覽器、邊個都得。" },
      { icon: "swap", title: "雙向傳相 / 傳檔", body: "手機 ↔ 電腦互傳。相片自動入電腦剪貼簿可即貼;電腦揀檔傳返手機跳「儲存 / 分享」,大檔都串流唔爆。" },
      { icon: "lock", title: "端對端加密 · 零帳戶", body: "只行你嘅區域網絡,AES-GCM 端對端加密。冇帳戶、冇雲端、冇伺服器、冇分析。配對密鑰存喺裝置。" },
      { icon: "devices", title: "跨 Mac + Windows", body: "一個 iPhone app,通 macOS 同 Windows 兩邊桌面伴侶程式。掃個 QR 即連即用,同一個 Wi-Fi 就得。" },
    ],
    howTitle: "三步上手",
    howSub: "唔使開戶口,唔使裝驅動。掃個 QR 就連到。",
    steps: [
      { tag: "電腦", title: "喺電腦開 MicBridge,撳「配對新裝置」", body: "Mac 右上角 / Windows 右下角會彈出一個 QR code。" },
      { tag: "掃描", title: "iPhone 撳「掃描配對」掃個 QR", body: "兩部機要喺同一個 Wi-Fi。掃完即刻配對,密鑰加密存好。" },
      { tag: "講嘢", title: "講嘢 → 檢查草稿 → 撳「送去〈電腦〉」", body: "文字就打入你電腦使用緊嗰個程式。想傳相 / 檔?撳萬字夾揀就送。" },
    ],
    shotsTitle: "睇下個樣",
    shotsSub: "簡潔、克制、即用。",
    privacyTitle: "私隱,寫得好白",
    privacySub: "因為根本冇收你資料。",
    privacy: [
      { title: "語音全程喺裝置上處理", body: "唔會上傳到任何伺服器。" },
      { title: "只經你嘅區域網絡", body: "文字、相片、檔案都係端對端 AES-GCM 加密,送去你配對嗰部電腦。" },
      { title: "冇帳戶、冇雲端、冇伺服器", body: "唔使登入,亦冇分析追蹤。" },
      { title: "配對密鑰存喺裝置", body: "iOS / Mac 用 Keychain,Windows 用 DPAPI。" },
      { title: "App 唔收集你任何資料", body: "亦唔會分享俾第三方。" },
    ],
    downloadTitle: "下載",
    downloadSub: "iPhone app 要配一個免費桌面伴侶程式。",
    win: {
      name: "Windows",
      desc: "免安裝,解壓即用。揀啱你部機嘅版本。",
      x64: "64-bit (Intel / AMD)",
      x86: "32-bit",
      arm64: "ARM64",
      hint: "解壓後雙擊 MicBridge.exe;第一次彈 SmartScreen → 仍要執行。",
    },
    macCard: { name: "macOS", desc: "macOS 14+ · Apple 公證版即將推出。", cta: "即將推出 · Coming soon", hint: "拖入「應用程式」即用。" },
    ios: { name: "iPhone", desc: "on-device 語音 + 草稿 + 配對。", cta: "即將上架 App Store" },
    footerTagline: "iPhone 講嘢,打入你部 Mac / Windows。",
    footerRights: "保留一切權利。",
  },
  en: {
    nav: { features: "Features", how: "How it works", privacy: "Privacy", download: "Download" },
    hero: {
      badge: "iPhone × Mac / Windows · No account · End-to-end encrypted",
      title: "Speak on iPhone,",
      titleAccent: "type straight into your computer",
      sub: "Dictate on your iPhone and the text is typed into whatever app is focused on your Mac or Windows PC. Send images and files both ways too — all on-device, no cloud, no sign-up.",
      ctaDownload: "Free download",
      ctaHow: "See how it works",
      note: "End-to-end AES-GCM over your LAN · Cantonese / Mandarin / English",
    },
    featuresTitle: "One app, three jobs done",
    featuresSub: "Not just a remote keyboard — voice, typing and file transfer combined, across Mac and Windows.",
    features: [
      { icon: "mic", title: "Voice straight into the computer", body: "Recognised on your iPhone, reviewed as a draft, then typed as keystrokes into the focused app on your computer — Word, a browser, anything." },
      { icon: "swap", title: "Two-way file & photo transfer", body: "Phone ↔ computer. Images land on the computer clipboard ready to paste; send a file back to the phone and it pops a Save/Share sheet. Large files stream without blowing up memory." },
      { icon: "lock", title: "End-to-end encrypted · no account", body: "Runs only on your local network, AES-GCM end-to-end. No accounts, no cloud, no servers, no analytics. Pairing keys stay on the device." },
      { icon: "devices", title: "Works on Mac + Windows", body: "One iPhone app, free desktop companions for both macOS and Windows. Scan a QR on the same Wi-Fi and you're connected." },
    ],
    howTitle: "Up and running in three steps",
    howSub: "No account, no drivers. Just scan a QR.",
    steps: [
      { tag: "Computer", title: "Open MicBridge on the computer, click Pair new device", body: "A QR code appears (top-right on Mac, bottom-right on Windows)." },
      { tag: "Scan", title: "Tap Scan to pair on iPhone and scan the QR", body: "Both devices on the same Wi-Fi. Paired instantly, key stored encrypted." },
      { tag: "Speak", title: "Speak → review → tap Send to <computer>", body: "The text types into your focused app. Want to send a photo or file? Tap the paperclip." },
    ],
    shotsTitle: "Take a look",
    shotsSub: "Clean, restrained, instant.",
    privacyTitle: "Privacy, in plain words",
    privacySub: "Because there's simply nothing collected.",
    privacy: [
      { title: "Speech is processed entirely on-device", body: "It is never uploaded to any server." },
      { title: "Only over your local network", body: "Text, images and files are end-to-end AES-GCM encrypted to the computer you paired with." },
      { title: "No accounts, no cloud, no servers", body: "Nothing to sign into, and no analytics tracking." },
      { title: "Pairing keys stay on the device", body: "Keychain on iOS / Mac, DPAPI on Windows." },
      { title: "The app collects none of your data", body: "And shares nothing with third parties." },
    ],
    downloadTitle: "Download",
    downloadSub: "The iPhone app pairs with a free desktop companion.",
    win: {
      name: "Windows",
      desc: "No installer — unzip and run. Pick the build for your PC.",
      x64: "64-bit (Intel / AMD)",
      x86: "32-bit",
      arm64: "ARM64",
      hint: "Unzip, double-click MicBridge.exe; on the first SmartScreen prompt choose Run anyway.",
    },
    macCard: { name: "macOS", desc: "macOS 14+ · Apple-notarized build coming soon.", cta: "Coming soon", hint: "Drag into Applications and launch." },
    ios: { name: "iPhone", desc: "On-device voice + draft + pairing.", cta: "Coming soon to the App Store" },
    footerTagline: "Speak on iPhone, type into your Mac / Windows.",
    footerRights: "All rights reserved.",
  },
};
