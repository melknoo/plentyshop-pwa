// https://nuxt.com/docs/api/configuration/nuxt-config
import { validateApiUrl } from './app/utils/pathHelper';
import { nuxtI18nOptions } from './app/configuration/i18n.config';
import { appConfiguration } from './app/configuration/app.config';
import cookieConfig from './app/configuration/cookie.config';
import { paths } from './app/utils/paths';
import settingsConfig from './app/configuration/settings.config';
import featureFlagsConfig from './app/configuration/feature-flags.config';
import { FailOnLargeChunksPlugin, FailOnForbiddenDataInPublicFolderPlugin } from './app/configuration/vite.config';
import { FailOnUnmarkedBlockOverridesPlugin } from './app/configuration/vite.block-overrides';
import { thirdPartyDeps, localPackageDeps } from './app/configuration/optimize-deps.config';

export default defineNuxtConfig({
  srcDir: 'app/',
  telemetry: false,
  devtools: { enabled: true },
  css: ['~/assets/richtext.css'],
  typescript: {
    typeCheck: false, // type checking runs via `npm run typecheck`, on build, and in CI (fitness-code-quality)
  },
  app: appConfiguration,
  experimental: {
    asyncContext: true,
  },
  appConfig: {
    titleSuffix: process.env.STORENAME || 'Suck My Straw',
    fallbackCurrency: 'GBP',
  },
  imports: {
    dirs: ['~/composables', '~/composables/**', '~/utils/**'],
  },
  vite: {
    server: {
      fs: {
        allow: ['../../..'], // relative to the current nuxt.config.ts
      },
    },
    plugins: [FailOnLargeChunksPlugin, FailOnForbiddenDataInPublicFolderPlugin, FailOnUnmarkedBlockOverridesPlugin],
    optimizeDeps: {
      include: [...thirdPartyDeps, ...localPackageDeps],
    },
    build: {
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('utils/blocks/blocks-imports')) return 'block-registry';
            if (/[/\\]blocks[/\\].+[/\\]defaults\.ts$/.test(id)) return 'block-registry';

            const vendorChunks: Record<string, string[]> = {
              tiptapExtensions: [
                '@tiptap/extension-color',
                '@tiptap/extension-emoji',
                '@tiptap/extension-highlight',
                '@tiptap/extension-placeholder',
                '@tiptap/extension-text-align',
                '@tiptap/extension-text-style',
              ],
              tiptap: ['@tiptap/'],
              vuetify: ['vuetify/', '@mdi/js'],
            };

            for (const [chunk, packages] of Object.entries(vendorChunks)) {
              if (packages.some((pkg) => id.includes(pkg))) return chunk;
            }
          },
        },
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/_nuxt-plenty/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/_nuxt-plenty/favicon.ico': { headers: { 'cache-control': `public, max-age=86400` } },
    '/_nuxt-plenty/images/**': { headers: { 'cache-control': `max-age=604800` } },
    '/favicon.ico': { redirect: { to: '/_nuxt-plenty/favicon.ico', statusCode: 301 } },
  },
  image: {
    provider: 'none',
  },
  pages: true,
  runtimeConfig: {
    public: {
      domain: validateApiUrl(process.env.API_URL) ?? process.env.API_ENDPOINT,
      apiEndpoint: process.env.API_ENDPOINT,
      activeLanguages: process.env.LANGUAGELIST || 'en,de',
      disabledEditorSettings: process.env?.ENABLE_ALL_EDITOR_SETTINGS === '1' ? [] : ['shop-search'],
      cookieGroups: cookieConfig,
      turnstileSiteKey: process.env?.CLOUDFLARETURNSTILEAPISITEKEY ?? '',
      useAvif: process.env?.IMAGEAVIF === 'true' || process.env?.NUXT_PUBLIC_USE_AVIF === 'true',
      useWebp: process.env?.IMAGEWEBP === 'true' || process.env?.NUXT_PUBLIC_USE_WEBP === 'true',
      validateReturnReasons: process.env.VALIDATE_RETURN_REASONS === '1',
      enableQuickCheckoutTimer: process.env.ENABLE_QUICK_CHECKOUT_TIMER === '1',
      useTagsOnCategoryPage: process.env.USE_TAGS_ON_CATEGORY_PAGE === '1',
      isPreview: false,
      showConfigurationDrawer: process.env.SHOW_CONFIGURATION_DRAWER === '1',
      defaultItemsPerPage: Number(process.env.DEFAULT_FEEDBACK_ITEMS_PER_PAGE ?? 10),
      favicon: process.env.NUXT_PUBLIC_FAVICON || '/_nuxt-plenty/favicon.ico',
      ogTitle: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'Suck my Straw - Nachhaltige Trinkhalme',
      ogImg: process.env.NUXT_PUBLIC_OG_IMG || process.env.OG_IMG || '/images/sms-og-shareimg.jpg',
      ogType: process.env.NUXT_PUBLIC_OG_TYPE || process.env.OG_TYPE || 'website',
      metaTitle: process.env.NUXT_PUBLIC_META_TITLE || process.env.METATITLE || 'Suck my Straw - Nachhaltige Trinkhalme',
      metaDescription:
        process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'Umweltfreundliche Alternative zu Plastik - Hält länger als dein Drink!',
      metaKeywords: process.env.NUXT_PUBLIC_META_KEYWORDS || process.env.METAKEYWORDS || 'suck, my, straw, papierstrohhalme, buubletea, cocktails',
      robots: process.env.NUXT_PUBLIC_ROBOTS || 'all',
      contactShopEmail: process.env.NUXT_PUBLIC_CONTACT_SHOP_EMAIL || 'your@email.com',
      robotsHomePage: process.env.NUXT_PUBLIC_ROBOTS_HOME_PAGE || 'all',
      robotsContactPage: process.env.NUXT_PUBLIC_ROBOTS_CONTACT_PAGE || 'all',
      robotsCancellationRights: process.env.NUXT_PUBLIC_ROBOTS_CANCELLATION_RIGHTS || 'all',
      robotsCancellationForm: process.env.NUXT_PUBLIC_ROBOTS_CANCELLATION_FORM || 'all',
      robotsLegalDisclosure: process.env.NUXT_PUBLIC_ROBOTS_LEGAL_DISCOLSURE || 'all',
      robotsPrivacyPolicy: process.env.NUXT_PUBLIC_ROBOTS_PRIVACY_POLICY || 'all',
      robotsTermsAndConditions: process.env.NUXT_PUBLIC_ROBOTS_TERMS_AND_CONDITIONS || 'all',
      robotsSearchResult: process.env.NUXT_PUBLIC_SEARCH_RESULT || 'all',
      robotsAccessibilityDeclaration: process.env.NUXT_PUBLIC_ROBOTS_ACCESSIBILITY_DECLARATION || 'all',
      robotsStopIndexing: process.env.NUXT_PUBLIC_ROBOTS_STOP_INDEXING || '0',
      robotsItemPage: process.env.NUXT_PUBLIC_ROBOTS_ITEM_PAGE || 'ALL',
      robotsUrlWithParameters: process.env.NUXT_PUBLIC_ROBOTS_URL_WITH_PARAMETERS || 'false',
      itemConditionNew: process.env.NUXT_PUBLIC_ITEM_CONDITION_NEW || '',
      itemConditionUsed: process.env.NUXT_PUBLIC_ITEM_CONDITION_USED || '',
      itemConditionNewBox: process.env.NUXT_PUBLIC_ITEM_CONDITION_NEW_BOX || '',
      itemConditionNewLabel: process.env.NUXT_PUBLIC_ITEM_CONDITION_NEW_LABEL || '',
      itemConditionBStock: process.env.NUXT_PUBLIC_ITEM_CONDITION_B_STOCK || '',
      seoAvailability1: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY1 || '',
      seoAvailability2: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY2 || '',
      seoAvailability3: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY3 || '',
      seoAvailability4: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY4 || '',
      seoAvailability5: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY5 || '',
      seoAvailability6: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY6 || '',
      seoAvailability7: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY7 || '',
      seoAvailability8: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY8 || '',
      seoAvailability9: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY9 || '',
      seoAvailability10: process.env.NUXT_PUBLIC_ITEM_SEO_AVAILABILITY10 || '',
      enableGoogleAnalytics: process.env.NUXT_PUBLIC_ENABLE_GOOGLE_ANALITICS || 'false',
      googleAnalyticsTrakingId: process.env.NUXT_PUBLIC_GOOGLE_ANALITICS_TRACKING_ID || '',
      sendGrossPricesToGoogleAnalytics: process.env.NUXT_PUBLIC_SEND_GROSS_PRICES_TO_GOOGLE_ANALITICS || 'false',
      googleAnalyticsCookieGroup: process.env.NUXT_PUBLIC_GOOGLE_ANALITICS_COOKIE_GROUP || 'CookieBar.marketing.label',
      registerCookieAsOptOut: process.env.NUXT_PUBLIC_REGISTER_COOKIE_AS_OPT_OUT || 'false',
      manufacturerExternalName: process.env.NUXT_PUBLIC_MANUFACTURER_EXTERNAL_NAME || '0',
      manufacturerName: process.env.NUXT_PUBLIC_MANUFACTURER_NAME || '0',
      sortingDynamicInherit: process.env.NUXT_PUBLIC_SORTING_DINAMIC_INHERIT || '[]',
      sortingDynamicPrio1: process.env.NUXT_PUBLIC_SORTING_DYNAMIC_PRIO1 || 'filter.prices.price_asc',
      sortingDynamicPrio2: process.env.NUXT_PUBLIC_SORTING_DYNAMIC_PRIO2 || 'filter.prices.price_asc',
      themeColor: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#062633',
      headerLogo:
        process.env.LOGO ||
        process.env.NUXT_PUBLIC_HEADER_LOGO || '/images/logo.svg',
      homepageCategoryId: Number(process.env.HOMEPAGE) ?? null,
      shippingTextCategoryId: Number(process.env.SHIPPINGTEXT) ?? null,
      storename: process.env.STORENAME || 'Suck my Straw',
      noCache: process.env.NO_CACHE || '',
      configId: process.env.CONFIG_ID || '',
      ...settingsConfig,
      ...featureFlagsConfig,
    },
  },
  modules: [
    '@plentymarkets/shop-core',
    '@plentymarkets/shop-module-mollie',
    '@plentymarkets/shop-module-gtag',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/turnstile',
    'nuxt-lazy-hydrate',
    'nuxt-viewport',
    '@vee-validate/nuxt',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
    'nuxt-color-picker',
  ],
  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg',
      },
      theme: {
        defaultTheme: 'light',
      },
    },
  },
  plentySitemap: {
    locales: (process.env.LANGUAGELIST || 'en,de').split(','),
    defaultLocale: nuxtI18nOptions.defaultLocale,
    exclude: [
      '/search',
      '/offline',
      '/my-account**',
      '/readonly-checkout',
      '/set-new-password',
      '/reset-password-success',
      '/cart',
      '/checkout',
      '/confirmation',
      '/wishlist',
      '/login',
      '/register',
      '/reset-password',
      '/favicon.ico',
    ],
  },
  shopCore: {
    apiUrl: validateApiUrl(process.env.API_URL) ?? 'http://localhost:8181',
    apiEndpoint: process.env.API_ENDPOINT,
    configId: Number(process.env.CONFIG_ID) || 1,
    middlewareSSRUrl: 'http://localhost:8181',
  },
  shopModuleMollie: {
    checkoutUrl: paths.checkout,
    liveMode: !process.env.MOLLIE_TEST_MODE,
    confirmationUrl: paths.confirmation,
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      preload: true,
    },
    assets: {
      prefix: '/_nuxt-plenty/fonts/',
    },
  },
  i18n: nuxtI18nOptions,
  tailwindcss: {
    configPath: '~/configuration/tailwind.config.ts',
    exposeConfig: true,
  },
  viewport: {
    breakpoints: {
      xs: 380,
      sm: 640,
      md: 768,
      lg: 1024,
      '4xl': 1920,
    },
    defaultBreakpoints: {
      mobile: 'sm',
      tablet: 'md',
      desktop: 'lg',
      wideScreen: '4xl',
    },
    fallbackBreakpoint: 'lg',
    cookie: {
      expires: 365,
      name: 'plenty-viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true,
    },
  },
  veeValidate: {
    autoImports: false,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  pwa: {
    registerType: 'prompt',
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,json,css,html,ico,svg,png,webp,ico,woff,woff2,ttf,eit,otf}', '_nuxt-plenty/icons/*'],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'plenty-image-cache',
            expiration: {
              maxEntries: 300,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },
    manifest: {
      name: process.env.STORENAME || 'Suck my Straw',
      short_name: 'Suck my Straw',
      theme_color: '#0C7992',
      description: process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'PlentyONE Shop',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: '/_nuxt-plenty/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/_nuxt-plenty/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/_nuxt-plenty/icons/icon-512x512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
  },
});
