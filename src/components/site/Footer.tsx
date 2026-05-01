import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#son-icerikler", label: "Haberler" },
  { href: "/#kategoriler", label: "Kategoriler" },
  { href: "/veri-topla", label: "Veri Topla" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-[1.2fr_0.8fr] sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">ToplumPlatformu Haber</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
            Toplumsal sorunlar, şehir yaşamı ve vatandaş geri bildirimleri için bağımsız bir içerik alanı.
          </p>
          <p className="mt-4 inline-flex rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-100">
            ToplumPlatformu uygulaması yakında beta sürecine açılacaktır.
          </p>
        </div>

        <nav className="flex flex-wrap gap-2 text-sm" aria-label="Footer navigasyon">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-3 py-2 text-neutral-300 hover:border-violet-300/40 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
