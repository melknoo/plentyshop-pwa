export const metaDefaults = {
  title: process.env.METATITLE || process.env.NUXT_PUBLIC_META_TITLE || 'Suck My Straw',
  description: process.env.METADESC || process.env.NUXT_PUBLIC_META_DESCRIPTION || 'Umweltfreundliche Alternative zu Plastik',
  keywords: process.env.METAKEYWORDS || process.env.NUXT_PUBLIC_META_KEYWORDS || 'wiederverwendbar, nachhaltig, umweltfreundlich',
  robots: process.env.NUXT_PUBLIC_ROBOTS || 'all',
  themeColor: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#062633',
};

export const openGraph = {
  title: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'Suck My Straw',
  image: process.env.NUXT_PUBLIC_OG_IMG || process.env.OG_IMG || '/_nuxt-plenty/images/logo.svg',
  type: process.env.NUXT_PUBLIC_OG_TYPE || process.env.OG_TYPE || 'website',
};

export const favicon = {
  appleTouchIcon: process.env.NUXT_PUBLIC_FAVICON || process.env.FAVICON || '/_nuxt-plenty/favicon.ico',
};

export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: process.env.DEFAULTLANGUAGE ?? 'en',
    },
    meta: [
      { property: 'og:type', content: openGraph.type },
      { property: 'og:url', content: process.env.API_ENDPOINT },
    ],
  },
};
