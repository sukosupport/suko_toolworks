import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages（repo配下）での暫定設定。独自ドメインに切替後は '/' に戻す。 // 後で削除予定
  base: '/suko_toolworks/',
})
