import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const enumerationBase = '/enumeration/'

const enumerationNoTrailingSlash = () => ({
  name: 'enumeration-no-trailing-slash',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url ?? ''

      if (url === '/enumeration' || url.startsWith('/enumeration?')) {
        req.url = url.replace('/enumeration', enumerationBase)
      }

      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), enumerationNoTrailingSlash()],
  base: enumerationBase,
  test: {
    environment: 'jsdom',
  },
})
