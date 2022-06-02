import generateSitemap from 'vite-plugin-pages-sitemap'
import Inspector from "vite-plugin-vue-inspector"
import Layouts from 'vite-plugin-vue-layouts';
import legacy from "@vitejs/plugin-legacy"
import Markdown, {meta} from 'vite-plugin-md'
import pages from 'vite-plugin-pages'
import Prism from 'markdown-it-prism'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import yaml from 'vite-plugin-yaml2'
import { defineConfig } from 'vite'
import apply from '@unocss/transformer-directives'

const hostname = 'http://localhost:3000/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    yaml(),
    unocss({
      transformers: [
        apply()
      ]
    }),
    legacy(),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }), 
    pages({
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname })),
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
