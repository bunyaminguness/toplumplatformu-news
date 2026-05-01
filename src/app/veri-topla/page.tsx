import type { Metadata } from "next";

import { DataCollectionForm } from "@/components/site/DataCollectionForm";

export const metadata: Metadata = {
  title: "Veri Topla",
  description: "Şehrindeki sorunları, görüşleri ve önerileri ToplumPlatformu Haber ile paylaş.",
};

export default function DataCollectionPage() {
  return (
    <div className="bg-neutral-950">
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Veri toplama</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Sorun, görüş veya önerini paylaş.</h1>
          <p className="mt-5 text-base leading-8 text-neutral-300">
            Bu form ilk sürümde yalnızca arayüz olarak çalışır. Gönderilen bilgiler şimdilik tarayıcı konsoluna yazılır; ileride güvenli bir veri toplama hattına bağlanacaktır.
          </p>
        </div>

        <div className="mt-10">
          <DataCollectionForm />
        </div>
      </section>
    </div>
  );
}
