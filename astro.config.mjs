import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import fs from "node:fs";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig(
    {
      i18n: {
          defaultLocale: "en",
          locales: ["en"],
      },

      site: "https://c3-lang.org",

      redirects: {
		  '/docs': '/getting-started',
          '/guide': '/getting-started',
          '/introduction': '/getting-started',

          '/guide/basic-types-and-values': '/language-fundamentals/basic-types-and-values',

          '/guide/my-first-hello-world': '/getting-started/hello-world',
          '/guide/my-first-project': '/getting-started/projects',
          '/references/development': '/get-involved',

          '/references': '/getting-started/design-goals',
          '/introduction/design-goals': '/getting-started/design-goals',

          '/references/getting-started/prebuilt-binaries': '/getting-started/prebuilt-binaries',
          '/install-c3/prebuilt-binaries': '/getting-started/prebuilt-binaries',

          '/references/getting-started/setup': '/getting-started/compile',
          '/install-c3/compile': '/getting-started/compile',

          '/references/docs/examples': '/language-overview/examples',
          '/references/getting-started/primer': '/language-overview/primer',


          '/references/getting-started/allfeatures': '/faq/allfeatures',
          '/introduction/roadmap': '/getting-started/roadmap',
          '/compare': '/faq/compare-languages',
          '/references/docs/compare': '/faq/compare-languages'

      },

      integrations: [
          starlight(
              {
                  favicon: "/ico.svg",
                  title: "C3",
                  customCss: ["./src/content/docs.css"],
                  expressiveCode: {
                      shiki: {
                          langs: [JSON.parse(fs.readFileSync("./c3-grammar.json", "utf-8"))],
						  themes: {
							  light: 'github-light',
							  dark: 'github-dark',
						  },
                      },
                  },
              }),
      ],

      vite: {
          plugins: [tailwindcss()]
      }
})