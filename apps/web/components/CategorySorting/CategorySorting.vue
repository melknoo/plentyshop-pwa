<template>
  <div class="w-full md:max-w-[376px]" data-testid="category-sorting">
    <h6
      class="bg-pink text-white mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest select-none"
    >
      {{ $t('sortBy') }}
    </h6>
    <div class="px-4">
      <SfSelect class="text-white" v-model="selected" :aria-label="$t('sortBy')" id="sortBy" @change="sortingChanged">
        <option class="text-black" v-for="{ value, label } in options" :key="value" :value="value">
          {{ $t(`sortType.${label}`) }}
        </option>
      </SfSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { SfSelect } from '@storefront-ui/vue';

const { getFacetsFromURL, updateSorting } = useCategoryFilter();
const route = useRoute();
const options = ref([
  {
    label: 'nameA-Z',
    value: 'texts.name1_asc',
  },
  {
    label: 'nameZ-A',
    value: 'texts.name1_desc',
  },
  {
    label: 'priceUp',
    value: 'sorting.price.avg_asc',
  },
  {
    label: 'priceDown',
    value: 'sorting.price.avg_desc',
  },
  {
    label: 'reviewsUp',
    value: 'item.feedbackDecimal_asc',
  },
  {
    label: 'reviewsDown',
    value: 'item.feedbackDecimal_desc',
  },
]);
const selected = ref(options.value[0].value);

function sortingChanged() {
  updateSorting(selected.value);
}

function sortQueryChanged() {
  const facets = getFacetsFromURL();
  selected.value = facets.sort ?? options.value[0].value;
}

sortQueryChanged();

watch(
  () => route.query.sort,
  () => {
    sortQueryChanged();
  },
);
</script>
