<template>
  <div class="w-full md:max-w-[376px]" data-testid="category-sorting">
    <h6
      class="bg-pink text-white mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest select-none"
    >
      {{ t('sortBy') }}
    </h6>
    <div class="px-4">
      <SfSelect id="sortBy" class="text-white" v-model="selected" :aria-label="t('sortBy')" data-testid="select-sort-by">
        <option class="text-black" v-for="option in options" :key="option" :value="option">
          {{ t(`sortType.${option}`) }}
        </option>
      </SfSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfSelect } from '@storefront-ui/vue';
import { isPageOfType } from '~/utils/pathHelper';

const { updateSorting } = useCategoryFilter();
const { t } = useI18n();
const { getJsonSetting: availableSortingOptions } = useSiteSettings('availableSortingOptions');
const { getSetting: defaultSortingSearch } = useSiteSettings('defaultSortingSearch');
const { getSetting: defaultSortingOption } = useSiteSettings('defaultSortingOption');

const options = computed(() => availableSortingOptions());

const defaultOption = computed(() => (isPageOfType('search') ? defaultSortingSearch() : defaultSortingOption()));

const selected = computed({
  get: () => {
    return (useNuxtApp().$router.currentRoute.value.query.sort || defaultOption.value || options.value[0]) as string;
  },
  set: (selectedOption) => {
    updateSorting(selectedOption);
  },
});
</script>
