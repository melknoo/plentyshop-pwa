# Changelog PlentyONE Shop

For changelogs of newer versions, refer to the [Releases](https://github.com/plentymarkets/plentyshop-pwa/releases) page.

# v1.xx.xx (xxxx-xx-xx) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.15.0...v1.x.x" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- (dev) Added pages entry on the left side menu, where users can manage their pages.
- (dev) Add design for adding a new page.
- (dev) Added design for category settings.
- (dev) Added form for general settings
- (dev) Added form for SEO settings
- (dev) Added view for global SEO settings
- (dev) Updated general settings and seo settings to get data dynamically
- (dev) Added form for delete page
- (dev) Fix correct children data for Seo settings
- (dev) Added manange pages button in editor toolbar.
- (dev) State management and save for edit categories toolbar
- (dev) Added editable page for category
- (dev) Added delete category logic
- (dev) Added delete category logic
- (dev) Replace data structures for left navigation and individual categories
- (dev) Add isLinkedToWebstore property for categories
- (dev) Close drawer on second click
- (dev) Add Settings View
- (dev) Changed design for settings drawer
- (dev) Logo preview

### 👷 Changed

### 🩹 Fixed

- (dev) Fix Page Selector state.
- (dev) Fix Page Selector closes when clicking outside the box.
- (dev) Fix Page Selector closes on second button click.
- (dev) Fix styling of editor actions on content pages.
- (dev) Fix notification and modal closing of delete category

# v1.15.0 (2025-05-06) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.14.0...v1.15.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added aria label to custom button component.
- Added information about selected "DHL Preferred Delivery Services" to order confirmation.
- Enabled caching for turbo builds.

### 👷 Changed

- Cookies consent prompt is shown again if consent config changes (via hash check).
- Use preview text for bundle items on item page instead of item description.
- Updated instances of old branding and product names.
- Order confirmation soft login shows a warning instead of an error message now.
- Moved the "Login instead" button below the email input field in the contact information section during checkout.
- Changed the button icon and label for exiting the editor.

### 🩹 Fixed

- Checkout improvements related to payment methods surcharge and required amounts for availability.
- Fixed cookie bar hydration error in `@plentymarkets/shop-module-gtag@1.1.2`.
- The CSS for drag-and-drop is now only loaded in the editor, not the live shop.
- Removed lagacy JavaScript for drag-and-drop.

### 💻 Developer notes

- Added application health check endpoint `/healthz`.

# v1.14.0 (2025-04-17) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.13.2...v1.14.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added Mollie payment methods in the checkout.
- Added a new legal page for the declaration on accessibility.
- Drag-and-drop functionality has been integrated for blocks and block settings.

### 👷 Changed

- Unified some terms in German and English
- Filtering not integrated PayPal payment methods out of the checkout process.

### 🩹 Fixed

- Fixed the PayPal Express flow, requires PayPal Plugin version >= 6.5.11
- Fixed the redirect in the quick checkout to the guest login instead of the checkout page when you are not logged in.

# v1.13.2 (2025-04-14) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.13.1...v1.13.2" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 👷 Changed

- Appended variation ID to product urls in category page for LTS compatibility.

### 🩹 Fixed

- Fix an error while attempting to login from guest.
- Changed the category menu markup by removing an invalid button element nested within an anchor tag.
- Fixed nuxt runtime error.
- Turnstile validation error in the contact form if turnstile is not configured.
- It's no longer possible to enter values outside the quantity limits in the quantity selector. The quantity will be set to 1 or the maximum value instead.

### 🏡 Chore

- Add validator package to nuxt optimizeDeps.

### 💻 Developer notes

- Implemented `'frontend:productLoaded': { product: Product };` event which is triggered when a product gets loaded on the product page.
- Updated `frontend:removeFromCart` event to include deleted cartItem.

# v1.13.1 (2025-04-07) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.13.0...v1.13.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🩹 Fixed

- A bug which crashed the build process.

# v1.13.0 (2025-04-07)<a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.12.1...v1.13.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added the possibility to toggle the visibility of tags on the category page based on an environment variable (USE_TAGS_ON_CATEGORY_PAGE=1).
- DHL Preferred Delivery has been added as a shipping method.
- A default image is now displayed for items without an item image.

### 👷 Changed

- Item tags have been removed from the category page.
- Image optimisation has been disabled in the local development environment.
- Price calculation updated: If graduated prices are not available, the default price is used.
- All Mollie Klarna payment methods are filtered out as they are not yet supported.
- Demo cookie has been removed from the cookie bar.
- Item preview texts now support HTML formatting.

### 🩹 Fixed

- Fixed broken category filters and navigation.
- Fixed a broken item link from category page.
- Fixed a typescript build error during shop deployment.
- Fixed a toolbar arrow.
- Fixed the left side menu navigation in the German version.
- Fixed an overlap in the item page image gallery.

# v1.12.1 (2025-03-24)<a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.12.0...v1.12.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 👷 Changed

- `useSdk` and sdk setup are now maintained and exported from `@plentymarkets/shop-core`. With this change we also removed `@vue-storefront/nuxt`. There are no breaking changes.

### 🩹 Fixed

- Fix displayment of large number of categories in navigation bar.
- Fix checkout email validation.
- Fix my orders page shipping date's missing locale.
- Fix build error during shop deployment. [#1151](https://github.com/plentymarkets/plentyshop-pwa/pull/1151)

# v1.12.0 (2025-03-19)<a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.11.1...v1.12.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added site settings toolbar.
- Added a legal hint in the checkout for "local VAT, costs of customs clearance and customs duties" if necessary.
- Added the legal disclosure to the cookie bar description.x

### 👷 Changed

- Auto-save implemented for email address in the guest checkout flow.
- Assets in the `apps/web/public` directory have been moved to a new `_nuxt-plenty/` subdirectory. Additionally, the [@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org/) module has been replaced with the [@nuxt/fonts](https://fonts.nuxt.com/) module, which is similar in functionality, but provides more configuration options. Both of these changes make it easier to apply network routing rules on the back end.
- Renamed block sections for editor.

### 🩹 Fixed

- Fixed that the preview mode could not be exited.
- Fixed scroll to block after changing block position.
- Fixed toolbar language switch.
- Fixed side toolbar visibility.
- Category middleware refactored to use the rights from the category tree.
- Fixed the app storing and using the wrong configuration keys for color and font settings.

# v1.11.1 (2025-02-28) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.11.0...v1.11.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 👷 Changed

- The address saving buttons have been relocated to the bottom of the form to enhance the user experience.
- Reduced chunck size by moving heavy files to public folder fetching the data instead of importing it
- Reduced chunk size by removing the lodash library completely and using custom js functions

### 🩹 Fixed

- Fixed an issue where deleting the checkout address as a guest triggered an unknown error.
- Fixed site settings not persisting on rebuild.

# v1.11.0 (2025-02-25) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.10.1...v1.11.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added success and error notifications when saving changes in the editor.
- Added block structures and refactored the editor to support them, including adding api endpoint communication.

### 🩹 Fixed

- Fixed displayed the recommended items on item pages.
- Fixed the save button not being re-enabled on subsequent edits.
- Fixed an issue where an empty initial category template couldn't get edited.
- Fixed an issue that recommended items blocks would fetch the wrong data in the editor when a new one got added.

# v1.10.1 (2025-02-20) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.10.0...v1.10.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### Fixed

- Fixed an issue of the build trying to write language files to the wrong path.

# v1.10.0 (2025-02-20) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.9.1...v1.10.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

#### Editor

- The homepage now supports improved block management. Users can add blocks via the side navigation while a new placeholder component indicates the future block position.
- On the technical side, block editing has been enhanced through dynamic block registration.
- Editing blocks now uses a forms. This means users no longer have to manipulate the underlying data structure directly.

#### Modules

- The project now features the newly integrated `shop-core` module, which enhances our system by enabling the seamless pushing of API events directly into the Core Module. This change enables communication between the base application and module extensions.
- The shop now integrates the Google Analytics module, `shop-module-gtag`, to enhance tracking capabilities. Additionally, users can opt out of non-essential cookies directly from the cookie bar, and the system now automatically removes cookies once consent is revoked.

#### Misc

- Added robots for static pages.
- Added a fallback text to the shipping page if none is configured.

### 👷 Changed

#### Package manager

We've switched our package manager from Yarn to NPM. There are two main reasons for this change:

1. NPM has better tools to audit and fix security vulnerabilities in the dependency tree than Yarn does.
2. NPM provides better tools for version management via [nvm](https://github.com/nvm-sh/nvm). This matters because it allows us to consolidate apps created by different providers more easily.

**_IMPORTANT_**

- `yarn` commands have been replaced by their `npm` equivalent. For example, `yarn build` is now `npm run build`.
- Double check `.env.example` for updates. In particular, make sure to set a `DEFAULTLANGUAGE` in your environment.

#### Checkout

- The `Saved addresses` listing option is no longer available in the guest checkout flow.
- Incomplete PayPal setup will no longer throw an alert in the ui. The error is suppressed and only logged in the browser console.

#### Misc

- The build script now reads the configuration from the environment instead of fetching it from the remote system.
- The shop's color palette now gets generated at runtime instead of build time.

### 🩹 Fixed

- Fixed an issue where page elements changed during navigation.
- Fixed an issue where the site settings view was only displayed on the second click.
- Fixed an issue where the new block placeholder got displayed when editing the site settings.
- Fixed an issue where multiple sliders placed in one page ware not controlled independently via control arrows.
- Fixed slider navigation bullet points.
- Fixed accessibility errors in edit mode.
- Fixed default editor colors.
- Fixed the image-to-text ratio in the Image Text block, so that both now take up 50% of the available space.
- Fixed an index error on adding the first block.
- The first block on the page is now always displayed as an `h1` and all other blocks are displayed as `h2`.

## v1.9.1 (2025-01-29) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.9.0...v1.9.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 📙 Todo

- We moved our packages `shop-api` and `tailwind-colors` from GitHub's registry to npm's registry.
  We no longer require a GitHub token to access these packages.
  - Run `yarn setup:unix` or `yarn setup:windows` and press y to remove the `.yarnrc.yml`.
  - Remove `NPM_AUTH_TOKEN` from your `apps/web/.env` file.

### 🚀 New

- Added ability to change primary and secondary colors from Site Configuration Drawer.
- Added site configuration drawer.
- Added blocks drawer.
- Added multiselect component that allows searching through the options.
- Added preview functionality for block sizes.
- If there are unsaved changes in the editor and the user tries to close or reload the page, the browser will now display a warning and ask for confirmation.
- Adding saving functionality for site settings.

### 👷 Changed

- Changed footer background for automatic coloring.
- Changed editor save button disable logic to account for changes in the settings.

### 🩹 Fixed

- Fixed a hydration error when fetching recommended items on the homepage.
- Fixed an issue that disabled the save button even though the user has edited the homepage template.
- Removed the `nuxt-security` module for now due to issues with PayPal.
- Fixed an issue with PayPal Express Checkout where it would require you to reauthorize the payment.
- Fixed an accesibility issue on banner.

## v1.9.0 (2025-01-23) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.8.0...v1.9.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- The [Nuxt security module](https://nuxt-security.vercel.app/) has been added to the web app.
- The web app is now equipped to [render components from a module](https://pwa-docs.plentymarkets.com/guide/how-to/module/inject-components) in designated areas of the shop.
- The shop now has a dedicated legal information page for shipping information. You can link a category inside the Online Store Section of the Shops Configuration. The template configured on that category is used for the pages content. The URL for the page is /shipping.
- In the checkout, shipping providers now include expected delivery dates.
- The configured robots value on a category in the Terra back end, is now used for the robots meta tag of that category in the front end.
- Item pages now contain canonical URLs.
- The recommended items block now optionally includes a pretitle, title, subtitle, and description.

### 👷 Changed

- The `UiHeroCarousel` template now displays the provided image as a banner across the width of the page. The component now also contains additional settings.
  - _Experimental_: The carousel can now use [Blaze Slider](https://blaze-slider.dev/) instead of [SwiperJS](https://swiperjs.com/). This may have an impact on performance and Core Web Vitals. We're still evaluation which library to prefer. At the moment, it's possible to toggle between them with a runtime configuration.
- The `UiMediaCard` component has been renamed to `UiImageText`. The template has been updated to always reserve space for an image. The text-only variation has been extracted to `UiTextCard`.
- The Newsletter now uses the template JSON for configuration instead of the runtime configuration.
- The save button in the editor is now disabled if no changes have been made to the template or if the template is invalid.
- Updated cookie handling for PayPal: PayPal functionality now relies on an essential cookie, removing the need for user consent to enable it.

### 🩹 Fixed

- Prices now always displays an asterisk to refer to additional VAT and shipping information
- Fixed the direction of accordion arrows on item pages.
- Fixed an issue where the required attributes notification blocked the cart.
- Fixed a visual inconsistency in the category filters sidebar.
- Fixed an accesibility error caused by missing label on clear filters.
- Fixed a warning about using the same text in alt and title on the category page.
- Fixed the number of max visible pages on mobile pagination.
- Fixed the item gallery thumbnail image alternate text.
- The homepage now displays recommended items on initial load.
- Fixed an issue where only the first template block selected in the editor is editable.
- Fixed an issue where the editor's language selector displayed an inverted data template.
- When the multilingualism configuration of the remote shop doesn't include English or German, the corresponding language file is now removed at build time. As a result, the language isn't displayed in the language selector.
- Fixed an issue where calling `useRoute` within middleware could lead to misleading results.

## v1.8.0 (2024-12-13) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.7.0...v1.8.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Users can now edit the homepage from within the shop. This includes adding, editing and deleting individual blocks. Supported block types include Hero Slider, Media Card, Recommended Item gallery, and Newsletter.
- Categories with visibility "After login" now redirect to the login when accessed by a guest user.
- Category pages now support filtering items by rating.
- Users can now zoom in on item images by hovering over them. Double-tapping and pinch zooming are supported on mobile.
- The legal details drawer now includes more manufacturer information.
- Additional settings from the SEO configuration are now supported in the app. This includes dynamic structured data and robots settings.
- The offer page now displays the date until when the offer is valid if it has been set.
- The checkout now displays a warning if no payment or shipping methods are available.
- Restricting guest user access to pages is now handled via a middleware.
- The PWA cookie hash has been added to the SDK client.
- When navigating between pages, an animation now indicates the loading progress.
- New styles for toolbar
- New styles for blocks actions
- Users can now move a block up or down in the block list.
- Added a new placeholder block component to showcase to the user where his block will go
- Added a text card form for edit settings

### 👷 Changed

- Cookie handling for PayPal now relies on a functional cookie requiring user consent ([see docs for details](https://pwa-docs.plentymarkets.com/guide/how-to/cookie#read-and-react-to-a-registered-cookie)). Users will see a message prompting consent when functionality is unavailable due to missing consent.
- When a user changes their cookie consent settings, the page now only reloads if a cookie has been revoked.
- The user session is now the source for `showNetPrices`.
- When subscribing to the newsletter, users now have to confirm the subscription via email.
- The address preview details now include the country name.
- The size of the quantity labels in the quick checkout has been adjusted on desktop to improve accessibility.
- The order of attribute select and order properties on item pages have been switched to better reflect the user flow.
- The values of attributes are now sorted in descending order by position, then by ID and then alphabetically.
- The cookie bar has been adjusted to provide a better user experience.

#### GitHub Action: Lighthouse CI

- Lighthouse CI now runs for both mobile and desktop.
- The lighthouse rules for CLS and DOM size have been updated.

#### GitHub Action: Upload

The **Upload** action now supports deploying the PWA to different environments:

- Production: triggered manually or when creating a GitHub release
- Staging: triggered manually or when pushing a change to the `main` branch

Each client supports two PWA instances. With this change, you can designate the live instance as the production environment and the preview instance as the staging environment. The production environment uses the GitHub Actions Secret `URL_ENDPOINT_TOKEN`; the staging environment uses the GitHub Actions Secret `URL_ENDPOINT_TOKEN_STAGING`.

### NPM Authentication Token

Instead of creating a `.yarnrc.yml` file manually, you can now use one of the following scripts depending on your operating system:

- Linux/MacOS: `yarn.sh` | `npm run setup:unix`
- Windows: `yarn.ps1` | `npm run setup:windows`

To run the script, you have to add your GitHub Token with `read:packages` permissions to the environment.

```properties
# apps/web/.env

NPM_AUTH_TOKEN="<TOKEN>"
```

### 🩹 Fixed

- Redirect on hidden category after user was logged in.
- Fixed an unhandled scenario where a blocked payment method remained available during the checkout process
- Fixed the styling of HTML entered in a PlentyONE system's editor by adding a `no-preflight` CSS class that accounts for Tailwind's preflight configuration.
- Fixed the checkout layout for tablet screen sizes.
- Fixed the image quality in the quick checkout by using the middle-size image and adjusting the quantity position.
- Fixed filter translation on category pages when switching language.
- Fixed an issue where the shipping costs were not updated during guest checkout process.
- Fixed an issue causing the login modal to be unresponsive in the user interface.
- Fixed a misalignment of the sign-up incentives on the registration page.
- Fixed an issue where the checkout layout button was overlapping the adjacent text.
- Added a missing href attribute to the cookie bar anchor.
- Fixed cookie bar usability in landscape mode.
- Fixed the position of the order property tooltip.
- Fixed the images sizes loaded on item page.
- Fixed an issue where the customer class didn't affect prices and categories after login by reloading the page.
- Fixed when the empty cart notification gets displayed.
- Fixed an issue where the Hero slider buttons didn't link to the provided target.
- Fixed an issue where the Buy button could be clicked after the order was finished and the redirect to the confirmation was in progress.
- Fixed GPSR drawer responsiveness.
- Fixed accessibility issues by adding the store name to the alt text for the logo.
- The hero image now uses the alt text specified in the homepage template.
- The recommended items section on the homepage now uses the category ID from the homepage template.
- The recommended items section on the homepage is now displayed multiple times if specified.
- Category items can now be fetched multiple times on the same page.
- Fixed an issue where review modal was unscrollable on smaller screens.
- The error message provided has been improved when adding items to the cart that are not available or can't be added for other reasons.
- Fixed an issue with the PayPal button not being displayed on the checkout.
- Fixed multiple issues in the PayPal readonly checkout process.
- Fixed a issue where PayPal payments were stored as "Cash in Advance".
- The language selector is no longer displayed if only one language is configured.
- Fixed an issue with category item prices not being updated on page change.
- Fixed loading times on the homepage by adding SSR.
- CSS for the Swiper library is now only loaded on pages that use the `HeroCarousel` component.
- The `HeroCarousel` no longer overlaps the navigation menu on mobile devices.
- Fixed the height of the hero skeleton to improve CLS.
- `createOrder` now handles errors more reliably and resets the buy button if an error occurs.

## v1.7.0 (2024-11-06) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.6.0...v1.7.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- User can now modify shipping address during the read-only checkout process.
- Google Pay and Apple Pay are now available as payment methods in the checkout.
- Clicking the **Buy** button with an unsaved address now displays a notification.
- To ensure compliance with geo-blocking regulations, selecting an EU country as the shipping country now makes all EU countries available as billing options.
- The item title display now supports custom titles. You can set the custom title on the item. If no custom title is set, the default "Item name | Company name" is used.
- Added tax and shipping note to the wishlist page.
- Added a new request header for the `configId`.
- Added the environment variable `NO_CACHE` for disabling caching.
- The hero banner and media card now support alt text properties for images.
- Enabled font color customization for the hero banner via a template property.
- Added a new carousel compoment.
- Added an edit mode toolbar and JSON editor for the front end. Note that this is a preparatory step. Further functionality will be added in an upcoming version.
- Added the image count to the item sitemaps.

### 🩹 Fixed

- Addressed an unhandled scenario in which a guest user attempts to modify their billing address while using the same address for shipping.
- Fixed an issue where increasing the quantity beyond maximum stock would clear the cart.
- Removed the "Add to Cart" notification from item and category pages when the quick checkout modal is not present.
- Improved accessibility for the cart and wishlist pages by increasing the font size.
- Fixed an issue where the item path was not reactive when the category was changed.
- The build now automatically generates a language file for every active language, not just the default language.
- Resolved an issue where the soft login was still shown after successful authentication on the order confirmation page.
- Corrected manufacturer data to use `externalName` instead of `name` in structured data.
- Updated headlines to use the configured font.
- Fixed layout shift on the category page.
- Resolved build script failure on Windows due to file name pattern incompatibilities.
- The build script now adds the `API_URL` to the environment if it exists.

### 👷 Changed

- Implemented a new notification design.
- Increased default notification timeout from 3 to 5 seconds.
- The `height` and `width` attributes set in Terra UI are now used only for full-size images of an item.
- Moved the generation of missing language files based on the environment's language configuration to the build script. The locale configuration is now based on the language files in the `lang` directory.
- Started unifying SDK/API error handling. Errors now return keys that can be translated in the frontend.
- Improved manufacturer visuals.
- Updated manufacturer translation text.
- Added support for a second argument to the payment status on an order. This allows you to define custom translations for different payment states.
- When trying to access the checkout with an empty cart, or if the user empties the cart during the checkout process, the user is now redirected to the cart.
- The logo container is now more flexible and adapts to the dimensions of the provided logo.

## v1.6.0 (2024-10-10) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.5.0...v1.6.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### TODO 📙 Migration guide

- Because Vue components now use different color weights (see **New** section for details), you have to update your color palettes as follows:
  - `900` -> `700`
  - `800` -> `600`
  - `700` -> `500`
  - `600` -> `400`
  - `500` -> `300`
  - `400` -> `200`
  - `300` -> `100`
  - `200` -> `50`
  - `100` -> `50`
- Replace all instances of `SfButton` with `UiButton`.
- Update the variable name `NEWSLETTER_FORM_SHOW_NAMES` to `NEWSLETTERFORMNAMES` in your environment.
- Update the variable name `USE_AVIF` to `IMAGEAVIF` in your environment.
- Update the variable name `USE_WEBP` to `IMAGEWEBP` in your environment.

### 🚀 New

#### Functionality

- A new page was added to the webshop for presenting offers. Users can accept or reject offers directly on this page, and upon acceptance, an order is automatically created.
- Item pages now display the EU responsible person of the manufacturer.
- The app now takes into consideration the referrer ID to display the correct price.
- Reorders now support order properties.
- Reorders now check for available stock.

#### Dev tools

- For debugging, you can now disable API caching with the query param `noCache=1`.

#### Payment

- PayPal's Pay Later banner is now displayed on item pages, the cart, checkout and quick checkout.
- Updated the PayPal form for credit card information.
- The quick checkout now displays variation properties.
- The order confirmation page now displays bank details if the payment method is cash in advance.

#### Configuration

- The app can now fetch the Favicon from the PlentyONE system.
- The app can now fetch the logo from the PlentyONE system.
- The app now reads which Google Fonts to use from the environment.
- The app can now generate a complete Tailwind color palette from a single main color. To use this functionality, enable the `build:before` hook's `generateScssVariables` method and set the environment variables `PRIMARY` and `SECONDARY`. These variables represent the center color of the Tailwind palette, weight `500`. As part of this update, all instances of `SfButton` have been replaced with a new `UiButton` component. Functionally, `UiButton` is identical to `SfButton`, but some color weights were adjusted to work with the generated palettes. ESLint now reports an `error` for `SfButton`. You can disable this rule in `apps/web/eslintrc.cjs`.
- The app now reads the internationalisation configuration from the environment. This includes the available languages and the default language.
- The app now reads whether to display the newsletter signup form on the homepage from the environment.
- The homepage template can now be configured via a category template.
- The footer and `shop-name` meta field now use the shop name.

#### SEO

- The app now reads the head title and title suffix from the environment.
- The app now reads metadata for items and categories, from the environment.
- The app now reads title and alternate for item images, from the environment.
- The app now reads metadata, such as description and keywords, from the environment.
- The app now reads the minimum required Open Graph data, that is the title, image, and endpoint, from the environment.
- Added canonical meta tags to item items.

#### Page speed

- Added cache-control for all static images to improve caching policy.
- Shop logo is now preloaded.

#### Accessibility Improvements

- Added table header in the MyAccount.
- Changed contrast for `Verfied purchase` text in feedback to increase accessibility.
- Added label tags for inputs in `NewsletterSubscribe.vue` component.
- Added labels for both min and max price filters.
- Increased size of wishlist and cart icon counter.
- Changed size for the cookie bar elements to increase accessibility.

### 🩹 Fixed

- Fixed `withDefaults() is unnecessary when using destructure with defineProps()` terminal error.
- Fixed the REST call to fetch the remote configuration in the build process.
- Fixed middleware calls being stuck in an infinite loop.
- Fixed tailwind css double import.
- Fixed a deadspot in the viewport for the navigation bar.
- Added link color on item variation properties.
- Fixed pagination issues with reactivity.
- Fixed wrongful display of base prices.
- Fixed setting the vsf-locale cookie on ssr.
- The side navigation of the automatically generated composables documentation now contains the correct links.
- Fixed editing author name on reviews and replies with added e2e.
- Fixed the issue with the plentyID-cookie in the PWA live preview.
- Fixed that the PayPal Express button on the item page is only displayed if the item is available for purchase.
- Fixed that when fetching configurations from PlentyONE, the build would only apply updates on the second run.
- Fixed orphaned form label on item page attributes.
- Fixed cookie bar privacy link not working properly.
- Fixed minor styling issues in the credit card form in the checkout and the rating form on the item page.
- Fixed DE translation regarding VAT.
- Fixed wrong price issues.
- Base price display on minimum order quantity.
- Display fonts now use the configured font family.
- Incorrect display of the PayPal loader
- Fixed my orders actions paddings and cookie bar link sizes.
- Fixed basket accesibilty issues.
- Fixed broken aria reference in cournty select and login modal.
- Fixed addtobasket overlay accesibilty issues.
- Fixed login page accesibilty issues.

### 👷 Changed

- Addresses: Enhanced `Address` interaction with a new, streamlined design, improved UX, and a more intuitive structure.
- Addresses in read-only checkout are now displayed as non-editable and appear disabled.
- Unify html nodes on category page to use `h6` node.
- Added display of file properties with download links for items.
- Ensure the design of order properties and variation properties is consistent.
- Cookiebar icon has been replaced.
- Checkout address buttons in the mobile view have been adjusted.
- The configuration files for app, cookie, interntaionlisation, and Tailwind settings have been moved to the `apps/web/configuration` folder.
- Changes to item reviews logic in order to use the new feedback API.
- The order confirmation page url from `.../thank-you?[...]` to `.../confirmation/orderId/accessKey`.
- Remove cookie browser language detect.
- Set page `title` for items and categories instead of `meta-title`.
- Refactor of reviews functionality for better performance and maintainability.
- Change the file item property color to blue in the quick checkout.
- Changed the name of the Cloudflare Turnstile Sitekey environment variable to make it compatible with the system configuration.
- Eliminate the separate review average fetch by retrieving data directly from the reviews request.
- Resize demo favicon to 3 kb.
- The whole application uses the same font family now.
- Change the mobile design of the cookie bar layout.
- Modified manufacturer data appearance.

### 🏡 Chore

- Removed unnecessary Vue imports
- Updated Nuxt to 3.13.1 (includes Vue 3.5.0) for increased performance and stability.

## v1.5.0 (2024-07-19) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.4.1...v1.5.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### TODO 📙 Migration guide

- The package `@plentymarkets/shop-sdk` was migrated to the new `@vue-storefront/nuxt` middleware module structure.
- The package `@plentymarkets/shop-sdk` was removed and all its functionality was moved into `@plentymarkets/shop-api`
- All `@plentymarkets/shop-sdk` imports have to be renamed to `@plentymarkets/shop-api`
- useSdk() is now automatically imported and can no longer be imported. Remove all `import { useSdk } from '~/sdk';` imports.

[Full SDK migration changelog](https://github.com/plentymarkets/plentyshop-pwa/pull/452/files)

### 🚀 New

- Variation properties can be displayed in the store
- Demo for changing app settings at runtime
- Uploaded files as a item attribute can now be downloaded
- Hook to load system configuration
- Reorder previous purchases from 'My Account' and order confirmation pages using the 'Buy Again' feature.

### 🩹 Fixed

- Recursive calls found under catch-all `category/item` routes
- Multiple hydration errors
- A problem with the image loading status for items on category pages
- Webmanifest 404 error
- Checkout console error
- Item attributes empty list rendering
- Canonical links are now correctly set
- Missing translation in country select
- Missing item short description
- Wrong link on the order confirmation page
- Bundle items links missing image
- Badges elements rendering
- Wishlist button aria label
- Reserve place for PayPal in express checkout if paypal is not configured
- Item image size in item list
- Layout shift on "add to cart" button
- Wishlist button not toggling between filled/empty heart icon
- Addresses not being displayed in checkout after creation
- No redirect occurred when using the login on the header while on the guest login page
- Cross price display on small screen sizes
- Language selector on small screen sizes
- The scroll towards reviews on small screen sizes
- Fetch system configuration script not using the FETCH_REMOTE_CONFIG from .env
- Review overview design
- Guest wishlist functionality

### 👷 Changed

- Changed shortDescription to return empty string
- Improved display of reviews rating average
- Removed unnecessary hover state from cart items
- The mobile navigation bar at the bottom of the screen and the navigation/settings buttons in the checkout have been removed
- Added placeholder text for missing addresses
- Removed custom header in the myAccount
- Added tooltip for item attributes image component
- The token in the release workflow now uses a supplier secret
- Registration without cloudflare turnstile configuration is now possible

### 🏡 Chore

- Upgraded Nuxt and package dependencies
- Moved Lighthouse Test into its own GitHub action
- Moved paypal credit card test into quarantine folder

## v1.4.1 (2024-06-05) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.4.0...v1.4.1" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Pagination for review items has been added.
- Custom SVG icons are now supported.
- Images outside the visible area are now lazy loaded.
- The login dialogue before checkout has been added.
- The Selection of saved addresses in the checkout has been added.
- Images in category and item views now have width and height attributes.
- Item pages can now display reviews.
- “Item added to shopping cart” dialogue has been added.

### Fixed

- Fixed recommended item text overflow.
- Fixed too many reviews error case.
- Language select not closing when clicking outside the modal
- The display of coupons in the order confirmation was not working properly. This has been fixed.
- Some issues related to the display of item reviews have been fixed.
- Missing details have been added to the order confirmation.
- Interacting with the wishlist was not working as intended. This has been fixed.
- A "defineExpose" compiler error has been fixed.
- A random "Nuxt instance unavailable" error has been fixed.
- Hydration and intlify warnings have been fixed.
- Slashes at the end of the API_URL are now removed.
- The quality of images in the category view has been improved.
- The facet filtering on category pages has been corrected.
- A random login error has been fixed.
- When adding an item to the shopping cart that is already in the shopping cart, the item's quantity is now increased.
- Components of item bundles without an item URL no longer lead to a 404 page.
- Components of item bundles without a name now display the placeholder "Item Information Missing" in place of the name
- Filters on the category view could lead to a server-side rendering error. This has been fixed.
- The login button is now acessible.
- The middleware now supporty IPv6 addresses.
- The PayPal express button on the item page now handles the click event correctly.
- Fixed a lighthouse error regarding the wishlist button size.
- The returns image has been removed.
- The cookie bar mobile view has been improved.
- The wishlist close button margins have been corrected.
- A cart loader layout shift issue has been fixed.
- An empty wishlist image has been removed.
- Images of the attributes in the item view are now displayed correctly.
- An error regarding external cookie script loading has been fixed.
- The missing translations in the cookie bar have been added.

### Changed

- Demo images on the homepage have been converted to AVIF format.
- The styling of notifications has been adjusted.
- The customer registration form has been improved.
- Reviews in category and item views are now accessible.
- Demo images now have different sizes, based on the user's viewport.
- The design of the sitemap has been adjusted.
- Mark optional and required form fields.
- Structure of the useProduct composable
- Value proposition elements have been updated to receive indication if the image should be on the left or right.
- Value proposition allows now for multiple entries.

## v1.4.0 (2024-04-15) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.3.0...v1.4.0" target="_blank" rel="noopener">

### Migration guide

- The upload action was changed [.github/workflows/upload.yml](https://github.com/plentymarkets/plentyshop-pwa/compare/v1.3.0...v1.4.0#diff-8cf0b5fae548aab9bd49f5020da9c0e35d281984b82b8a5358ffb1c1ae5bec13L5) update the file to make use of the [config feature](https://pwa-docs.plentymarkets.com/guide/setup/deployment#config)
- We now require an API Security Token to make requests to the PlentyONE API. [setup guide](https://pwa-docs.plentymarkets.com/guide/how-to/middleware#api-security-token)
- Category routing has been updated, and the /c prefix has been removed. Please verify that no static URLs in your application still include /c.
  - To accommodate the /c routing change, the [category page](https://github.com/plentymarkets/plentyshop-pwa/compare/v1.3.0...v1.4.0#diff-2f61484eb978aa090fc50dcba90bc44813b45081f25dbff295434cdf6bf219a4) was moved from apps/web/pages/category/[slug].vue to apps/web/pages/[...slug].vue.

### 🚀 New

- Added scroll to top for review pagination.
- a ‘Previous’ button to the return form for easier navigation.
- Added tag display on single item and category views.
- a box component for selecting item attributes, enhancing user interaction
- an image component for selecting item attributes, enhancing user interaction
- possibility to mark a primary address for improved address management
- item availability display to provide inventory status.
- sitemap generation feature for static content.
- display for bundle items in item, cart, checkout, and order summary
- performance optimisation for wishlist calls.
- ‘config’ repository variable to the upload action.
- unified address handling in a single component.
- support for the modern image format (AVIF).
- search by tags.
- order return confirmation page.

### Changed

- Removed unnecessary HTML nodes to reduce DOM size.
- Changed filenames of legal pages.
- Optimized i18n imports.
- Performed an Nuxt upgrade to version 3.11.1.
- Unified the design of 'Remove' buttons.
- Changed the return layout from a popup to its own page.
- Removed ‘…/c/…’ as category URL identifier for cleaner URLs.
- Modified the order of address format.
- Updated the styling of the order confirmation page.
- Implemented different imagesize URLs for different viewport sizes.
- Moved the ‘delete from wishlist’ button to the top right.
- Updated the upload action.

### Fixed

- Improved the image quality on the wishlist.
- added validation for return quantity and reason during return creation.
- Updated the order quantity after making a return.
- Fixed the styling of the attribute select arrow.
- Fixed the styling of price buttons filter.
- Adjusted the return form for mobile return orders.
- Fixed the behavior and name of the ‘Back to Shopping’ button.
- Fixed a bug where an email address was added to the searchbar via autocomplete.
- Unified the styling of input heights.
- Unified the styling of order properties.
- Fixed styling issues on radio buttons and adjusted spacing on checkboxes and coupons.
- Fixed the styling and wording on the new return page.
- Excluded certain pages from the sitemap.
- Fixed the function of the 'Item' button in the navbar for mobile device.
- Canonical URL includes currently selected language path.
- Fixed the format of legal text on small display sizes.
- Fixed the header color on mobile devices, to have a unified look and feel.
- Ensured the cart does not clear after a failed order process.
- Fixed homepage layout shifts and deliver fixed image sizes.
- Added missing translations on the homepage.
- Fixed the issue where a hard load after language switch leads to a 404 error.
- Added the missing wishlist navigation button on mobile devices.
- Fixed the link to the contribution guidelines in the documentation.
- Refactored index.vue and created a new composable for the blocks

## New Contributors

- @N-Feist made their first contribution in https://github.com/plentymarkets/plentyshop-pwa/pull/334
- @dependabot made their first contribution in https://github.com/plentymarkets/plentyshop-pwa/pull/389

**Full Changelog**: https://github.com/plentymarkets/plentyshop-pwa/compare/v1.3.0...v1.4.0

## v1.3.0 (2024-02-06) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.2.0...v1.3.0" target="_blank" rel="noopener">

### 🚀 New

- Added order properties on item pages, in the cart, and on the order summary.
- Added coupons.
- Added PayPal's **Pay Later** option for payments.
- Added returns, including return reasons.
- Added wishlist functionality, including the ability to add items to the cart directly from the wishlist.
- Added item ratings to category pages.
- Added configuration (`cookie-scripts.config.ts`) to determine which scripts to load when a user accepts a consent cookie.
- Added Cloudflare Turnstile to protect forms against bots. For further information on how to configure Turnstile, refer [to the documentation](https://pwa-docs.plentymarkets.com/guide/how-to/bot-protection).
- Added form validation with vee-validate. The following forms have validation:
  - Registering a new account
  - Signing up for the newsletter
  - Add a item with order properties to the cart
  - Parts of the checkout; full coverage of the checkout will be added in the future
- Added a way to exit preview mode on live domains.

### Changed

- Deployments now use a unified endpoint. This means the secret `URL_ENDPOINT` is obsolete.

### Fixed

- Removed demo how-to-buy section from footer.
- Fixed Order properties responsiveness bug
- Addresses in the checkout now update properly.
- The PayPal buttons now show the correct text depending on the location of the button.
- The mega menu no longer displays categories without a label.
- The cookie consent bar is now translated in English and German.
- The lifespan of the `vsf-locale` cookie has been fixed. The lifespan is now 100 days.
- Fixed Cumulative Layout Shifts caused by the language picker.
- Added missing aria labels to the category pagination.
- Added missing aria labels to the cookie bar.
- Improved the clickable area on the logo for better accessibility on mobile.
- When navigating back from the registration modal on mobile, the modal now closes and you no longer return to the previous URL.

## v1.2.0 (2023-11-28) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.1.0...v1.2.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### 🚀 New

- Added getters to show variation properties.
- Added a frontend toggle to disable the pwa preview mode.
- Added structured data for ratings (reviews).
- Added item images on the order confirmation (thank you) page.
- Added protection against CSRF attacks.

### Changed

- Reworked logic of cookie bar.
- Added ARIA label translations for cookie bar buttons.
- The language select has been refactored and is now showing country flags.
- Refactored the checkout page to load less data.

### Fixed

- CancellationForm page not loading.
- Failing minimum buy price setting was not shown as error.
- Notifications were causing a layout shift for the user, this has been fixed.
- Categories loading in the wrong language when the site was rendered with SSR for the first time.
- The variation select didn't remove the variation from the URL when the base variation was selected.
- Items on the order confirmation didn't link to the correct item.

## v1.1.0 (2023-11-03) <a href="https://github.com/plentymarkets/plentyshop-pwa/compare/v1.0.0...v1.1.0" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### TODO

- [Middleware](./docs/config/middleware.md) `API_ENDPOINT` now has to be maintained via an `.env` file under `apps/server`.

### 🚀 New

- Added PayPal Express Checkout
- Added PayPal payment option for credit cards
- PayPal: The `integration.config` file is no longer required
- MyAccount: The creation and editing of shipping and billing addresses is now possible
- MyAccount: The order history shows the latest orders of the logged-in customer
- MyAccount: The return history shows the latest returns of the logged-in customer
- The order confirmation now shows all relevant data of the order
- The order confirmation now displays buttons to download order documents
- The order confirmation can now be accessed via a link after authentication
- The order confirmation is now also accessible via the order history
- None saleable items are marked as such
- Added display of bulk and graduated prices on item pages
- Display of net/gross prices depending on the configuration
- Added menu to header to switch between different language versions of the PWA
- Multilingual URLs are now used for different language versions of the PWA
- Added structured data for breadcrumbs, categories, items and logo
- Added composable that sets canonical url metadata for static pages.
- Added more default notifications for a variaty of interactions in the PWA
- Added loading animations where applicable
- Added empty block component for when there is no data in the json
- Added a new text component for the homepage

### Changed

- Reworked logic of items with multiple attributes
- Current bulk price is now marked on item pages
- For items with different prices, the cheapest price is displayed as "from price" on the category page
- Updated URL structure to be more similar to plentyShop LTS
- Changed position of notifications
- New checkout layout - same address checkbox functionality

### Fixed

- After login the user was wrongfully forwared to the homepage. The user now stays on the current page.
- Added reviews and AggregateRating to seo structured data
- Filtering: No longer available filters are removed from the URL

## v1.0.0 (28.09.2023) First release
