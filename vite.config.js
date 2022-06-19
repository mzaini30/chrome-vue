import apply from '@unocss/transformer-directives'
import Inspector from "vite-plugin-vue-inspector"
import Layouts from 'vite-plugin-vue-layouts';
import Markdown, {meta} from 'vite-plugin-md'
import pages from 'vite-plugin-pages'
import Prism from 'markdown-it-prism'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import yaml from 'vite-plugin-yaml2'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      host: 'localhost'
    }
  },
  plugins: [
    yaml(),
    unocss({
      transformers: [
        apply()
      ]
    }),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }), 
    pages({
      extensions: ['vue', 'md'],
    }),
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      }
    }),
    Layouts(),
    Inspector()
  ]
})
