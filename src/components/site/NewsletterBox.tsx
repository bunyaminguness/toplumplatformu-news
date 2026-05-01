import Link from "next/link";

export function NewsletterBox() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-6 ring-1 ring-white/10 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-100/80">Beta ve iletişim</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">ToplumPlatformu beta süreci yakında açılacak.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
        İlk sürümde kullanıcı deneyimini şekillendirmek için şehir, mahalle ve gündelik sorunlara dair geri bildirimleri topluyoruz.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/veri-topla"
          className="inline-flex justify-center rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-200"
        >
          Beta için görüş bırak
        </Link>
        <Link
          href="/hakkimizda"
          className="inline-flex justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-violet-300/40 hover:bg-white/5"
        >
          Yayın amacını oku
        </Link>
      </div>
    </section>
  );
}
