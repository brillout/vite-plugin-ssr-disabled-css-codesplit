import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  build: {
    cssCodeSplit: false,
  },
  plugins: [vue(), ssr()],
}

export default config
