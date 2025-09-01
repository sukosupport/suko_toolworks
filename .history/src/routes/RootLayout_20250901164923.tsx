import { Outlet, NavLink } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink
            to="/"
            className="text-xl font-semibold tracking-tight [font-family:var(--logo-font)]"
            aria-label="すこツール工房 ホーム"
          >
            すこツール工房
          </NavLink>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#apps" className="hover:text-sky-300">アプリ</a>
            <a href="#contact" className="hover:text-sky-300">お問い合わせ</a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Suko Toolworks
        </div>
      </footer>
    </div>
  )
}


