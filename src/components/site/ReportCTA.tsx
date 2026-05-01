import Link from "next/link";

type ReportCTAProps = {
  title?: string;
  description?: string;
};

export function ReportCTA({
  title = "Bu konuyla ilgili senin çevrende de benzer bir durum var mı?",
  description = "Yaşadığın şehirdeki sorunu, gözlemini veya önerini bizimle paylaş. Bu bildirimler ileride daha anlamlı yerel veri setlerine dönüşebilir.",
}: ReportCTAProps) {
  return (
    <section className="rounded-[2rem] border border-violet-300/20 bg-violet-400/10 p-6 ring-1 ring-white/10 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-100/80">Görüş bildir</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">{description}</p>
      <Link
        href="/veri-topla"
        className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-100"
      >
        Sorun veya görüş bildir
      </Link>
    </section>
  );
}
