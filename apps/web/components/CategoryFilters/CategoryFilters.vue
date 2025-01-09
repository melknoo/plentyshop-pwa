<template>
  <h6
    class="py-2 text-white px-4 mt-6 mb-4 bg-pink typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md select-none"
    data-testid="category-filters"
  >
    {{ $t('filters') }}
  </h6>
  <div class="flex flex-col gap-2 px-4">
    <CategoryFiltersFilter v-for="facet in facets" :key="facet.id" :facet="facet" class="sms-category_sidebar--filter" />
  </div>
</template>

<script setup lang="ts">
import type { CategoryFiltersProps } from '~/components/CategoryFilters/types';

const props = defineProps<CategoryFiltersProps>();

const { facets } = toRefs(props);
</script>
