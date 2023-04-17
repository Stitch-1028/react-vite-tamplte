import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import scssVariables from './src/assets/style/variables.scss.js'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: Object.keys(scssVariables)
            .map((k) => `$${k}: ${scssVariables[k]};`)
            .join('\n'),
        },
      },
    },
    esbuild: {
      pure: ['console.log'],
      minify: true,
    },
    server: {
      host: '0.0.0.0',
    },
  }
})
