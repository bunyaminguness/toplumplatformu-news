# ToplumPlatformu Haber

ToplumPlatformu Haber, asıl ToplumPlatformu uygulamasından bağımsız çalışan haber, içerik ve vatandaş geri bildirimi toplama sitesidir. İlk sürüm statik data ile çalışır; backend, auth, gerçek CMS ve admin panel bu aşamada yoktur.

## Amaç

Site, toplumplatformu.com ana domaininde yayınlanacak sade ve okunabilir bir haber alanı olarak tasarlanır. Şehir yaşamı, toplumsal sorunlar, eğitim, sağlık, teknoloji, gençlik ve ekonomi başlıklarında içerikler sunar. Aynı zamanda ziyaretçilerden sorun, görüş, öneri ve beta süreci için geri bildirim toplamaya hazırlanır.

## Teknoloji

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive, mobil öncelikli tasarım
- Statik TypeScript data dosyaları
- İleride Payload CMS veya başka admin panel bağlanabilecek helper katmanı

## Nasıl çalıştırılır?

Bağımlılıkları kurun:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Varsayılan adres:

```text
http://localhost:3000
```

Kontroller:

```bash
npm run lint
npm run build
```

## Dosya yapısı

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    haber/[slug]/page.tsx
    kategori/[slug]/page.tsx
    hakkimizda/page.tsx
    veri-topla/page.tsx
  components/site/
    Header.tsx
    Footer.tsx
    PostCard.tsx
    FeaturedPost.tsx
    CategoryPill.tsx
    ReportCTA.tsx
    NewsletterBox.tsx
    DataCollectionForm.tsx
  data/
    posts.ts
    categories.ts
  lib/
    slug.ts
    posts.ts
  types/
    post.ts
```

## İçerik nasıl eklenir?

Yeni kategori eklemek için `src/data/categories.ts` dosyasına `Category` tipine uygun kayıt ekleyin.

Yeni haber/yazı eklemek için `src/data/posts.ts` dosyasına `Post` tipine uygun kayıt ekleyin. Yayında görünmesi için `status` alanı `published` olmalıdır. `categorySlug`, `categories.ts` içindeki kategori slug değerlerinden biriyle eşleşmelidir.

Post sorgulama ve filtreleme işleri `src/lib/posts.ts` üzerinden yapılır. CMS entegrasyonu geldiğinde önce bu helper katmanı değiştirilmeli, sayfalar mümkün olduğunca aynı kalmalıdır.

## Veri toplama formu

`src/app/veri-topla/page.tsx` içindeki form şu an yalnızca arayüzdür. Submit işlemi `console.log` yapar. Gerçek kayıt, ileride Tally, Airtable, Google Sheets, Supabase veya özel API endpoint ile bağlanabilir.

## Gelecek CMS planı

İlk sürümde içerikler statik data dosyalarındadır. Gelecekte Payload CMS veya başka bir admin panel eklendiğinde önerilen geçiş yolu:

1. Post ve kategori koleksiyonlarını CMS tarafında `src/types/post.ts` modeline yakın kurmak.
2. `src/lib/posts.ts` içindeki helper fonksiyonlarını CMS/API sorgularıyla değiştirmek.
3. Veri toplama formunu güvenli bir endpoint veya üçüncü parti form servisine bağlamak.
4. Draft/preview iş akışını editoryal süreç için ayrıca eklemek.

## Deployment

Hedef domain `toplumplatformu.com`. Site Vercel veya Next.js destekleyen herhangi bir platforma deploy edilebilir. Deploy öncesi şu komutlar hatasız çalışmalıdır:

```bash
npm run lint
npm run build
```
