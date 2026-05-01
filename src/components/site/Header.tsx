import Link from "next/link";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#son-icerikler", label: "Haberler" },
  { href: "/#kategoriler", label: "Kategoriler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="ToplumPlatformu Haber ana sayfa">
            <span className="flex size-9 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200 ring-1 ring-violet-400/30">
              TP
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-wide text-white">ToplumPlatformu</span>
              <span className="block text-xs font-medium uppercase tracking-[0.28em] text-violet-200/80">Haber</span>
            </span>
          </Link>

          <Link
            href="/veri-topla"
            className="hidden rounded-full bg-violet-300 px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-violet-200 sm:inline-flex"
          >
            Sorun Bildir
          </Link>
        </div>

        <nav className="flex gap-1 overflow-x-auto text-sm text-neutral-300 sm:items-center sm:justify-end" aria-label="Ana navigasyon">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/veri-topla"
            className="whitespace-nowrap rounded-full bg-violet-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-violet-200 sm:hidden"
          >
            Veri Topla
          </Link>
        </nav>
      </div>
    </header>
  );
}
