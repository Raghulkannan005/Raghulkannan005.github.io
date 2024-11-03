import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: "htmlImport",
    transform(code, id) {
      if (/^.*\.html$/g.test(id)) {
        code = `export default \`${code}\``
      }
      return { code }
    }
  }]
})