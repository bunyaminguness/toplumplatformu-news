import Link from "next/link";

import { CategoryPill } from "@/components/site/CategoryPill";
import { FeaturedPost } from "@/components/site/FeaturedPost";
import { NewsletterBox } from "@/components/site/NewsletterBox";
import { PostCard } from "@/components/site/PostCard";
import { ReportCTA } from "@/components/site/ReportCTA";
import { categories } from "@/data/categories";
import { getFeaturedPost, getRecentPosts } from "@/lib/posts";

export default function HomePage() {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(7)
    .filter((post) => post.slug !== featuredPost?.slug)
    .slice(0, 6);

  return (
    <div className="bg-neutral-950">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.18fr_0.82fr] md:py-24 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Bağımsız yayın alanı</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Toplumun gündemini birlikte görünür kılalım.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg sm:leading-9">
              ToplumPlatformu Haber; şehir yaşamı, toplumsal sorunlar, eğitim, sağlık, teknoloji ve yerel gündeme dair içerikleri bir araya getirirken vatandaşlardan görüş ve sorun bildirimi toplamayı amaçlayan bağımsız bir yayın alanıdır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#son-icerikler"
                className="inline-flex justify-center rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-200"
              >
                Son içerikleri oku
              </Link>
              <Link
                href="/veri-topla"
                className="inline-flex justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-violet-300/40 hover:bg-white/5"
              >
                Sorun veya görüş bildir
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-7">
            <p className="text-sm font-semibold text-white">Editoryal not</p>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              İlk sürüm statik içerikle çalışır. Haberler, kategoriler ve geri bildirim akışı ileride CMS veya admin panel ile yönetilebilir hale getirilecektir.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-3xl font-semibold text-white">7</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Kategori</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-white">8+</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">İçerik</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-violet-300/20 bg-violet-400/10 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-100/80">Hızlı katkı</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Çevrendeki bir sorunu görünür kılmak 2 dakika sürer.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
                Kaldırım, ulaşım, okul çevresi, sağlık erişimi veya mahalle ekonomisiyle ilgili gözlemini paylaş; bu yayın alanının hangi başlıklara odaklanacağını birlikte şekillendirelim.
              </p>
            </div>
            <Link
              href="/veri-topla"
              className="inline-flex shrink-0 justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-100"
            >
              Hemen bildir
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {featuredPost ? <FeaturedPost post={featuredPost} /> : null}
      </section>

      <section id="son-icerikler" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Son içerikler</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Gündeme dair okunabilir notlar</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Kısa, anlaşılır ve kategori bazlı içerikler; yerel sorunları takip etmeyi kolaylaştırmak için düzenlendi.
            </p>
          </div>
          <Link href="/veri-topla" className="text-sm font-semibold text-violet-200 hover:text-violet-100">
            Kendi gözlemini paylaş
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section id="kategoriler" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Kategoriler</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Yerel gündemi başlıklara ayıralım</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            İçerikler şehir yaşamı, eğitim, sağlık, teknoloji ve ekonomi gibi kategorilerle düzenlenir; böylece hem okuma hem ileride veri analizi kolaylaşır.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryPill key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ReportCTA />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </section>
    </div>
  );
}
