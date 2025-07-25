<template>
  <div class="p-2 sticky top-[52px] h-[calc(100vh-150px)] overflow-y-auto">
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Pre-title</UiFormLabel>
      <SfInput
        v-model="recommendedBlock.text.pretitle"
        data-testid="recommended-form-pretitle"
        name="preTitle"
        type="text"
        placeholder="PreTitle"
      />
    </div>
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Main Title</UiFormLabel>
      <SfInput
        v-model="recommendedBlock.text.title"
        data-testid="recommended-form-title"
        name="Title"
        type="text"
        placeholder="Title"
      />
    </div>
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Subtitle</UiFormLabel>
      <SfInput
        v-model="recommendedBlock.text.subtitle"
        data-testid="recommended-form-subtitle"
        name="Subtitle"
        type="text"
        placeholder="Subtitle"
      />
    </div>
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Description</UiFormLabel>
      <SfTextarea
        v-model="recommendedBlock.text.htmlDescription"
        name="description"
        type="text"
        class="w-full min-h-[232px]"
        placeholder="Text that supports HTML formatting"
        data-testid="recommended-form-html"
      />
    </div>
    <div class="p-2">
      <UiFormLabel>Category ID</UiFormLabel>
      <SfInput
        :model-value="recommendedBlock.categoryId"
        data-testid="recommended-form-categoryid"
        name="category Id"
        type="text"
        placeholder="Enter Category Id"
        @input="debouncedFn($event)"
      />
    </div>
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Text Color</UiFormLabel>
      <SfInput v-model="recommendedBlock.text.color" type="text" data-testid="recommended-form-color">
        <template #suffix>
          <label
            for="text-color"
            :style="{ backgroundColor: recommendedBlock.text.color }"
            class="border border-[#a0a0a0] rounded-lg cursor-pointer"
          >
            <input id="text-color" v-model="recommendedBlock.text.color" type="color" class="invisible w-8" />
          </label>
        </template>
      </SfInput>
    </div>
    <div v-if="recommendedBlock.text" class="p-2">
      <UiFormLabel>Text alignment</UiFormLabel>
      <div class="w-full inline-flex rounded-lg border border-gray-300 bg-white text-gray-700 overflow-hidden">
        <div
          for="text-align-left"
          class="flex items-center justify-center w-1/3 px-4 py-2 cursor-pointer text-sm border-r"
          :class="{ 'bg-gray-100 text-gray-900 font-semibold': isTextAlignSelected('left') }"
          data-testid="recommended-form-text-align-left"
          @click="recommendedBlock.text.textAlignment = 'left'"
        >
          <SfIconCheck :class="{ invisible: !isTextAlignSelected('left') }" class="mr-1 w-[1.1rem]" />
          Left
        </div>
        <div
          for="text-align-center"
          class="flex items-center justify-center w-1/3 px-4 py-2 cursor-pointer text-sm border-r"
          :class="{ 'bg-gray-100 text-gray-900 font-semibold': isTextAlignSelected('center') }"
          data-testid="recommended-form-text-align-center"
          @click="recommendedBlock.text.textAlignment = 'center'"
        >
          <SfIconCheck :class="{ invisible: !isTextAlignSelected('center') }" class="mr-1 w-[1.1rem]" />
          Center
        </div>
        <div
          for="text-align-right"
          class="flex items-center justify-center w-1/3 px-4 py-2 cursor-pointer text-sm"
          :class="{ 'bg-gray-100 text-gray-900 font-semibold': isTextAlignSelected('right') }"
          data-testid="recommended-form-text-align-right"
          @click="recommendedBlock.text.textAlignment = 'right'"
        >
          <SfIconCheck :class="{ invisible: !isTextAlignSelected('right') }" class="mr-1 w-[1.1rem]" />
          Right
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductRecommendedProductsContent } from '../ProductRecommendedProducts/types';
import { SfInput, SfTextarea, SfIconCheck } from '@storefront-ui/vue';
import { useDebounceFn } from '@vueuse/core';

const { data } = useCategoryTemplate();
const { blockUuid } = useSiteConfiguration();
const { findOrDeleteBlockByUuid } = useBlockManager();

const recommendedBlock = computed(
  () =>
    (findOrDeleteBlockByUuid(data.value, blockUuid.value)?.content || {
      text: {
        pretitle: '',
        title: '',
        subtitle: '',
        htmlDescription: '',
        color: '#000000',
        textAlignment: 'left',
      },
      categoryId: '',
    }) as ProductRecommendedProductsContent,
);

const debouncedFn = useDebounceFn((event: Event) => {
  const target = event.target as HTMLInputElement;

  recommendedBlock.value.categoryId = target.value.toString();
}, 1000);

const isTextAlignSelected = (align: 'left' | 'center' | 'right') => {
  return (recommendedBlock.value.text.textAlignment || 'left') === align;
};
</script>
