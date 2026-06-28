import type { ReactNode } from "react";

/// Lightweight entrance animation via CSS (see `.reveal` in globals.css). Always ends
/// visible — no JS/scroll dependency — so content is never stuck hidden.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
