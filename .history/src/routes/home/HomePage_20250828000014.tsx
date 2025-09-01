export function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_50%_0%,#38bdf850_0%,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
              スマホ / Web アプリ開発
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              ビジネスを前進させる
              <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent"> プロダクト開発</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Suko Toolworks はスマホ/WEBアプリの設計・開発・運用を一気通貫で支援します。小さく作って、素早く学び、確実に伸ばす。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-400">
                まずは相談する
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-600">
                サービスを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">サービス</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: '要件定義・MVP設計', desc: '価値検証を最短で行うための最小構成を設計。' },
              { title: 'UI/UXデザイン', desc: 'ユーザー行動に基づいた情報設計とUI設計。' },
              { title: 'フロントエンド開発', desc: 'React/TypeScriptで安定したUIを構築。' },
              { title: 'モバイルアプリ', desc: 'React Native/ExpoでiOS/Androidを同時に提供。' },
              { title: 'バックエンド/API', desc: 'Supabase/Firebase/Nodeで堅牢なAPIと認証。' },
              { title: '運用・改善', desc: '計測→改善の継続サイクルまで支援。' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
                <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">技術スタック</h2>
          <ul className="mt-6 grid list-disc gap-2 pl-5 sm:grid-cols-2">
            <li>フロント: React, TypeScript, Vite, Tailwind CSS</li>
            <li>モバイル: React Native, Expo</li>
            <li>バックエンド: Node.js, Express, Supabase/Firebase</li>
            <li>その他: GitHub Actions, Vercel/Cloudflare</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">お問い合わせ</h2>
          <p className="mt-3 text-slate-300">ご相談・ご依頼はメールにて承ります。</p>
          <a
            href="mailto:hello@example.com?subject=Suko%20Toolworks%20お問い合わせ"
            className="mt-6 inline-flex rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
          >
            hello@example.com
          </a>
        </div>
      </section>
    </>
  )
}


