import Link from "next/link";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#son-icerikler", label: "Haberler" },
  { href: "/#kategoriler", label: "Kategoriler" },
  { href: "/veri-topla", label: "Veri Topla" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="ToplumPlatformu Haber ana sayfa">
          <span className="flex size-9 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200 ring-1 ring-violet-400/30">
            TP
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">ToplumPlatformu</span>
            <span className="block text-xs font-medium uppercase tracking-[0.28em] text-violet-200/80">Haber</span>
          </span>
        </Link>

        <nav className="flex gap-1 overflow-x-auto text-sm text-neutral-300" aria-label="Ana navigasyon">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
