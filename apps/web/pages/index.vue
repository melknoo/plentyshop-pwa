<template>
  <div>
    <EmptyBlock v-if="dataIsEmpty" @add-new-block="openBlockList" />
    <div class="content">
      <template v-for="(block, index) in data.blocks" :key="index">
        <PageBlock
          :index="index"
          :block="block"
          :is-preview="isPreview"
          :disable-actions="disableActions"
          :is-clicked="isClicked"
          :clicked-block-index="clickedBlockIndex"
          :is-tablet="isTablet"
          :block-has-data="blockHasData"
          :tablet-edit="tabletEdit"
          :add-new-block="openBlockList"
          :change-block-position="changeBlockPosition"
          :is-last-block="isLastBlock"
          :delete-block="deleteBlock"
        />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import homepageTemplateDataEn from '../composables/useHomepage/homepageTemplateDataEn.json';
import homepageTemplateDataDe from '../composables/useHomepage/homepageTemplateDataDe.json';
// import HnHero  from '~/components/HnHero/HnHero.vue';
// import HnTextImage from '~/components/HnTextImage/HnTextImage.vue';
// import HnCenterTextImage from '~/components/HnCenterTextImage/HnCenterTextImage.vue';
// import HnSeperator from '~/components/HnSeperator/HnSeperator.vue';
// import HnCta from '~/components/HnCta/HnCta.vue';
// import HnScrollElement from '~/components/HnScrollElement/HnScrollElement.vue';

import { watchDebounced } from '@vueuse/core';

const {
  isClicked,
  clickedBlockIndex,
  isTablet,
  isPreview,
  blockHasData,
  tabletEdit,
  deleteBlock,
  changeBlockPosition,
  isLastBlock,
  togglePlaceholder,
} = useBlockManager();

const { settingsIsDirty, openDrawerWithView, updateNewBlockPosition } = useSiteConfiguration();

const { data, fetchPageTemplate, dataIsEmpty, initialBlocks } = useHomepage();

const { isEditingEnabled, disableActions } = useEditor();
const { getRobots, setRobotForStaticPage } = useRobots();

const openBlockList = (index: number, position: number) => {
  const insertIndex = (position === -1 ? index : index + 1) || 0;
  togglePlaceholder(index, position === -1 ? 'top' : 'bottom');
  updateNewBlockPosition(insertIndex);
  openDrawerWithView('blocksList');
};

const getComponent = (name: string) => {
  if (name === 'NewsletterSubscribe') return resolveComponent('NewsletterSubscribe');
  // if (name === 'HnHero') return HnHero;
  // if (name === 'HnTextImage') return HnTextImage;
  // if (name === 'HnCenterTextImage') return HnCenterTextImage;
  // if (name === 'HnSeperator') return HnSeperator;
  // if (name === 'HnScrollElement') return HnScrollElement;
  // if (name === 'HnCta') return HnCta;
};

await getRobots();
setRobotForStaticPage('Homepage');

onMounted(() => {
  isEditingEnabled.value = false;
  window.addEventListener('beforeunload', handleBeforeUnload);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});

const hasUnsavedChanges = () => {
  return !isEditingEnabled.value && !settingsIsDirty.value;
};

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  if (hasUnsavedChanges()) return;
  event.preventDefault();
};

fetchPageTemplate();

watchDebounced(
  () => data.value.blocks,
  (newData) => {
    isEditingEnabled.value = !deepEqual(initialBlocks.value, newData);
  },
  { debounce: 100, deep: true },
);
</script>
