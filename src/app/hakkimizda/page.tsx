import type { Metadata } from "next";

import { ReportCTA } from "@/components/site/ReportCTA";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "ToplumPlatformu Haber'in bağımsız yayın alanı ve kamu yararı odağı hakkında bilgi alın.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-950">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Hakkımızda</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">ToplumPlatformu Haber nedir?</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            ToplumPlatformu Haber, toplumsal sorunları ve yerel gündemi daha görünür kılmak için tasarlanan bağımsız bir içerik alanıdır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 text-base leading-8 text-neutral-300">
          <p>
            Bu site, asıl ToplumPlatformu uygulamasından bağımsız olarak yayına hazırlanır. Haber sitesi gibi okunabilir ve sade bir deneyim sunarken, vatandaşlardan sorun, görüş, öneri ve beta süreci için geri bildirim toplamayı amaçlar.
          </p>
          <p>
            İlk sürümde backend, auth, CMS veya admin panel bulunmaz. İçerikler statik data dosyalarıyla yönetilir. Buna rağmen veri modeli ve klasör yapısı ileride Payload CMS ya da başka bir yönetim paneli bağlanabilecek şekilde düzenlenmiştir.
          </p>
          <p>
            Odak noktamız kamu yararıdır: mahallede, okul çevresinde, toplu taşımada veya dijital hizmetlerde yaşanan sorunları anlaşılır biçimde anlatmak ve bu konuların daha düzenli takip edilebilmesini sağlamaktır.
          </p>
        </div>

        <div className="mt-12">
          <ReportCTA
            title="Senin gözlemin de bu yayın alanının parçası olabilir."
            description="ToplumPlatformu Haber, yurttaşlardan gelen bildirimlerle hangi başlıkların daha görünür olması gerektiğini anlamayı hedefler."
          />
        </div>
      </section>
    </div>
  );
}
