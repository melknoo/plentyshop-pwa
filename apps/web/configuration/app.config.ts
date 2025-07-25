export const metaDefaults = {
  title: process.env.METATITLE || process.env.NUXT_PUBLIC_META_TITLE || 'Suck My Straw',
  description: process.env.METADESC || process.env.NUXT_PUBLIC_META_DESCRIPTION || 'Demo shop for PlentyONE Shop',
  keywords: process.env.METAKEYWORDS || process.env.NUXT_PUBLIC_META_KEYWORDS || 'PlentyONE, plentyshop, pwa',
  robots: process.env.NUXT_PUBLIC_ROBOTS || 'all',
  themeColor: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#062633',
};

export const openGraph = {
  title: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'PlentyONE Shop',
  image: process.env.NUXT_PUBLIC_OG_IMG || process.env.OG_IMG || '/_nuxt-plenty/images/logo.svg',
  type: process.env.NUXT_PUBLIC_OG_TYPE || process.env.OG_TYPE || 'website',
};

export const favicon = {
  icon: process.env.NUXT_PUBLIC_FAVICON || process.env.FAVICON || '/_nuxt-plenty/favicon.ico',
  appleTouchIcon: process.env.NUXT_PUBLIC_FAVICON || process.env.FAVICON || '/_nuxt-plenty/favicon.ico',
};

export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: process.env.DEFAULTLANGUAGE ?? 'en',
    },
    meta: [
      { name: 'description', content: metaDefaults.description },
      { name: 'keywords', content: metaDefaults.keywords },
      { name: 'robots', content: metaDefaults.robots },
      { name: 'theme-color', content: metaDefaults.themeColor },
      { name: 'generator', content: 'plentymarkets' },
      { property: 'og:title', content: openGraph.title },
      { property: 'og:type', content: openGraph.type },
      { property: 'og:image', content: openGraph.image },
      { property: 'og:url', content: process.env.API_ENDPOINT },
    ],
    link: [
      { rel: 'icon', href: favicon.icon },
      { rel: 'apple-touch-icon', href: favicon.appleTouchIcon },
    ],
    title: metaDefaults.title,
  },
};
