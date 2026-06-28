export function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[280px] ${className ?? ""}`}>
      <div className="rounded-[2.9rem] bg-gradient-to-b from-zinc-800 to-zinc-950 p-[10px] shadow-[0_40px_70px_-30px_rgba(10,30,80,0.5)] ring-1 ring-black/40">
        <div className="overflow-hidden rounded-[2.35rem] bg-black ring-1 ring-white/5">
          <img src={src} alt={alt} className="block w-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
