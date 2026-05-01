"use client";

import { FormEvent, useState } from "react";

import { categories } from "@/data/categories";

export function DataCollectionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      city: formData.get("city"),
      district: formData.get("district"),
      categorySlug: formData.get("categorySlug"),
      title: formData.get("title"),
      description: formData.get("description"),
      wantsFollowUp: formData.get("wantsFollowUp") === "on",
    };

    // TODO: Buraya ileride Tally, Airtable, Google Sheets, Supabase veya kendi API endpointimiz bağlanacak.
    console.log("ToplumPlatformu Haber veri toplama formu", payload);
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-neutral-200">
          <span>Ad soyad <span className="text-neutral-500">(opsiyonel)</span></span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
            placeholder="Adınız soyadınız"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-neutral-200">
          <span>E-posta <span className="text-neutral-500">(opsiyonel)</span></span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
            placeholder="ornek@eposta.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-neutral-200">
          <span>Şehir</span>
          <input
            name="city"
            type="text"
            required
            className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
            placeholder="İstanbul"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-neutral-200">
          <span>İlçe</span>
          <input
            name="district"
            type="text"
            required
            className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
            placeholder="Kadıköy"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-neutral-200">
        <span>Konu kategorisi</span>
        <select
          name="categorySlug"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none focus:border-violet-300/60"
        >
          <option value="" disabled>
            Kategori seçin
          </option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2 text-sm font-medium text-neutral-200">
        <span>Başlık</span>
        <input
          name="title"
          type="text"
          required
          className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
          placeholder="Sorunu veya öneriyi kısaca yazın"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-neutral-200">
        <span>Açıklama</span>
        <textarea
          name="description"
          required
          rows={7}
          className="w-full resize-y rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-violet-300/60"
          placeholder="Ne oldu, nerede yaşanıyor, kimleri etkiliyor?"
        />
      </label>

      <label className="flex gap-3 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 text-sm leading-6 text-neutral-300">
        <input name="wantsFollowUp" type="checkbox" className="mt-1 size-4 rounded border-white/20 bg-neutral-950 accent-violet-300" />
        <span>Benzer sorunları takip etmek istiyorum</span>
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-200 sm:w-auto"
      >
        Gönder
      </button>

      {isSubmitted ? (
        <p className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
          Teşekkürler. Bildirimin şimdilik tarayıcı konsoluna yazıldı; ileride gerçek veri hattına bağlanacak.
        </p>
      ) : null}
    </form>
  );
}
