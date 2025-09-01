import { useState } from 'react'

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
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl"></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"></p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-400">
                お問い合わせ
              </a>
              <a href="#apps" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-600">
                アプリを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="border-t border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">リリース中のアプリ</h2>
          <p className="mt-3 text-slate-300">すこツール工房が提供する iOS / Android アプリ</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[{
              platform: 'iOS アプリ',
              imageAlt: 'iOSアプリの紹介画像',
              imageUrl: '/app-ios.svg',
              link: 'https://apps.apple.com/jp/developer/your-team-id',
            }, {
              platform: 'Android アプリ',
              imageAlt: 'Androidアプリの紹介画像',
              imageUrl: '/app-android.svg',
              link: 'https://play.google.com/store/apps/dev?id=your-developer-id',
            }].map((app) => (
              <a
                key={app.platform}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40 transition hover:border-slate-700 hover:bg-slate-900/60"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={app.imageUrl}
                    alt={app.imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-slate-200">{app.platform}</span>
                  <span className="text-xs text-slate-400">タップでストアへ</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 bg-slate-900/40">
        <ContactSection />
      </section>
    </>
  )
}


function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const isValid = name.trim().length > 0 && message.trim().length > 0

  async function sendFormData(payload: unknown) {
    // ここで後日サーバーのエンドポイントへPOSTする処理に差し替え
    // 現状はローカル保存＆疑似送信
    try {
      const existing = JSON.parse(localStorage.getItem('contact-drafts') || '[]')
      existing.push({ ...payload, createdAt: new Date().toISOString() })
      localStorage.setItem('contact-drafts', JSON.stringify(existing))
      await new Promise((r) => setTimeout(r, 700))
      return { ok: true }
    } catch (e) {
      return { ok: false }
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isValid || status === 'submitting') return
    setStatus('submitting')
    const payload = { name, email, subject, message }
    const res = await sendFormData(payload)
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h2 className="text-xl font-semibold sm:text-2xl">お問い合わせ</h2>
      <p className="mt-3 text-slate-300">お問い合わせはすべて読ませていただきます｡個別にお返事できないことがあります。</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-300">お名前 <span className="text-slate-500">(必須)</span></label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-slate-600"
            placeholder="山田 太郎"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-300">メールアドレス <span className="text-slate-500">(任意)</span></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-slate-600"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-slate-300">件名 <span className="text-slate-500">(任意)</span></label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-slate-600"
            placeholder="お問い合わせの件名"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-300">メッセージ <span className="text-slate-500">(必須)</span></label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-slate-600"
            placeholder="ご用件をご記入ください"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!isValid || status === 'submitting'}
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'submitting' ? '送信中…' : '送信する'}
          </button>
          {status === 'success' && <span className="text-sm text-emerald-400">送信（準備）完了。後日サーバー連携に切り替えます。</span>}
          {status === 'error' && <span className="text-sm text-rose-400">エラーが発生しました。しばらくして再度お試しください。</span>}
        </div>
      </form>
    </div>
  )
}


