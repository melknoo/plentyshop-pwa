<template>
  <div class="border border-neutral-200 sms-border--pink sms-boxshadow--pink rounded-md flex flex-col" data-testid="product-card"
    :class="{ 'sms-productslider--item': isFromSlider }"
    >
    <div class="relative overflow-hidden bg-white">
      <UiBadges
        :use-tags="useTagsOnCategoryPage"
        :class="['absolute', isFromWishlist ? 'mx-2' : 'm-2']"
        :product="product"
        :use-availability="isFromWishlist"
      />

      <SfLink
        :tag="NuxtLink"
        rel="preload"
        :to="productPath"
        :class="{ 'size-48': isFromSlider }"
        as="image"
        class="flex items-center justify-center"
      >
        <NuxtImg
          :src="imageUrl"
          :alt="imageAlt"
          :title="imageTitle ? imageTitle : null"
          :loading="lazy && !priority ? 'lazy' : 'eager'"
          :fetchpriority="priority ? 'high' : 'auto'"
          :preload="priority || false"
          :width="getWidth()"
          :height="getHeight()"
          class="object-contain rounded-md aspect-square w-full"
          data-testid="image-slot"
        />
      </SfLink>

      <slot name="wishlistButton">
        <WishlistButton
          square
          class="absolute bottom-0 right-0 mr-2 mb-2 sms-button--wishlist neon-hover bg-pink text-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          :product="product"
        />
      </slot>
    </div>
    <div class="p-2 uppercase border-t border-neutral-200 sms-border--pink typography-text-sm flex flex-col flex-auto">
      <SfLink :tag="NuxtLink" :to="productPath" class="no-underline" variant="secondary" data-testid="productcard-name">
        {{ name }}
      </SfLink>
      <p class="normal-case typography-text-sm " data-testid="product-name">
              {{ product.variation.name }}
              {{ product.variation.externalId }}
      </p>
      <div class="flex items-center pt-1 gap-1" :class="{ 'mb-2': !productGetters.getShortDescription(product) }">
        <SfRating class="sms-productcard--rating" size="xs" :half-increment="true" :value="rating ?? 0" :max="5" />
        <SfCounter size="xs">{{ ratingCount }}</SfCounter>
      </div>
      <div
        v-if="productGetters.getShortDescription(product)"
        class="block py-2 font-normal typography-text-xs text-white text-justify whitespace-pre-line break-words"
      >
        <div class="line-clamp-3" v-html="productGetters.getShortDescription(product)" />
      </div>
      <LowestPrice :product="product" />
      <div v-if="showBasePrice" class="mb-2">
        <BasePriceInLine :base-price="basePrice" :unit-content="unitContent" :unit-name="unitName" />
      </div>
      <div class="flex flex-col-reverse items-start md:flex-row md:items-center mt-auto">
        <span class="block pb-2 font-bold typography-text-sm" data-testid="product-card-vertical-price">
          <span v-if="!productGetters.canBeAddedToCartFromCategoryPage(product)" class="mr-1">
            {{ t('account.ordersAndReturns.orderDetails.priceFrom') }}
          </span>
          <span>{{ format(price) }}</span>
          <span>{{ t('asterisk') }} </span>
        </span>
        <span
          v-if="crossedPrice && differentPrices(price, crossedPrice)"
          class="typography-text-sm text-neutral-500 line-through md:ml-3 md:pb-2"
        >
          {{ format(crossedPrice) }}
        </span>
      </div>
      <UiButton
        v-if="productGetters.canBeAddedToCartFromCategoryPage(product)"
        size="sm"
        class="min-w-[80px] w-fit sms-button--primary "
        data-testid="add-to-basket-short"
        :disabled="loading"
        @click="addWithLoader(Number(productGetters.getId(product)))"
      >
        <template v-if="!loading" #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        <SfLoaderCircular v-if="loading" class="flex justify-center items-center" size="sm" />
        <span v-else>
          {{ t('addToCartShort') }}
        </span>
      </UiButton>
      <UiButton v-else type="button" :tag="NuxtLink" :to="productPath" size="sm" class="w-fit sms-button--primary">
        <span>{{ t('showOptions') }}</span>
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productGetters } from '@plentymarkets/shop-api';
import { SfLink, SfIconShoppingCart, SfLoaderCircular, SfRating, SfCounter } from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';
import { defaults } from '~/composables';

const localePath = useLocalePath();
const { format } = usePriceFormatter();
const { t } = useI18n();
const {
  product,
  name,
  imageUrl,
  imageAlt = '',
  imageTitle,
  imageWidth,
  imageHeight,
  rating,
  ratingCount,
  priority,
  lazy = true,
  unitContent,
  unitName,
  basePrice,
  showBasePrice,
  isFromWishlist = false,
  isFromSlider = false,
} = defineProps<ProductCardProps>();

const { openQuickCheckout } = useQuickCheckout();
const { addToCart } = useCart();
const { price, crossedPrice } = useProductPrice(product);
const { send } = useNotification();
const loading = ref(false);
const config = useRuntimeConfig();
const useTagsOnCategoryPage = config.public.useTagsOnCategoryPage;

const variationId = computed(() => productGetters.getVariationId(product));

const productPath = computed(() => {
  const basePath = `/${productGetters.getUrlPath(product)}_${productGetters.getItemId(product)}`;
  const shouldAppendVariation = variationId.value && productGetters.getSalableVariationCount(product) === 1;

  return localePath(shouldAppendVariation ? `${basePath}_${variationId.value}` : basePath);
});

const getWidth = () => {
  if (imageWidth && imageWidth > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageWidth;
  }
  return '';
};
const getHeight = () => {
  if (imageHeight && imageHeight > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageHeight;
  }
  return '';
};

const addWithLoader = async (productId: number, quickCheckout = true) => {
  loading.value = true;

  try {
    await addToCart({
      productId: productId,
      quantity: 1,
    });
    if (quickCheckout) {
      openQuickCheckout(product, 1);
    } else {
      send({ message: t('addedToCart'), type: 'positive' });
    }
  } finally {
    loading.value = false;
  }
};
const differentPrices = (price: number, crossedPrice: number) => {
  return crossedPrice ? Math.round(price * 100) / 100 !== Math.round(crossedPrice * 100) / 100 : false;
};

const NuxtLink = resolveComponent('NuxtLink');
</script>
