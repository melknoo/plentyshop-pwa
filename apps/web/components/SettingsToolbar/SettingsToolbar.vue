<template>
  <aside
    class="sticky top-[52px] h-[calc(100vh-150px)] bg-white z-[1] md:z-[10] lg:z-[150] mb-3 w-[54px] min-w-[54px] border-r"
    data-testid="edit-mode-side-toolbar"
  >
    <div class="relative flex flex-col px-1 py-1">
      <button
        type="button"
        class="editor-button relative py-2 flex justify-center"
        :class="{ 'bg-editor-button text-white rounded-md': drawerView === 'PagesView' }"
        aria-label="Open pages drawer"
        data-testid="open-pages-drawer"
        @click="toggleDrawerView('PagesView')"
      >
        <NuxtImg v-if="drawerView === 'PagesView'" width="24" height="24" :src="pagesWhite" />
        <NuxtImg v-else width="24" height="24" :src="pagesBlack" />
      </button>

      <component
        :is="trigger.component"
        v-for="trigger in triggersModules"
        :key="trigger.slug"
        :active="activeSetting === trigger.slug"
        @click="setActiveSetting(trigger.slug)"
      />

      <button
        type="button"
        class="editor-button relative py-2 flex justify-center"
        :class="{ 'bg-editor-button text-white rounded-md': drawerView === 'SettingsView' }"
        aria-label="Open settings drawer"
        data-testid="open-settings-drawer"
        @click="toggleDrawerView('SettingsView')"
      >
        <NuxtImg v-if="drawerView === 'SettingsView'" width="24" height="24px" :src="gearWhite" />
        <NuxtImg v-else width="24" height="24px" :src="gearBlack" />
      </button>
      <button
        type="button"
        class="editor-button relative py-2 flex justify-center"
        :class="{ 'bg-editor-button text-white rounded-md': drawerView === 'SeoView' }"
        aria-label="Open SEO settings drawer"
        data-testid="open-seo-drawer"
        @click="toggleDrawerView('SeoView')"
      >
        <SfIconSearch v-if="drawerView === 'SeoView'" class="text-white" />
        <SfIconSearch v-else />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import gearBlack from 'assets/icons/paths/gear-black.svg';
import gearWhite from 'assets/icons/paths/gear-white.svg';

import { SfIconSearch } from '@storefront-ui/vue';
import pagesWhite from 'assets/icons/paths/pages-white.svg';
import pagesBlack from 'assets/icons/paths/pages-black.svg';

const { drawerView, activeSetting, openDrawerWithView, closeDrawer, setActiveSetting } = useSiteConfiguration();

function toggleDrawerView(view: DrawerView) {
  if (drawerView.value === view) {
    closeDrawer();
  } else {
    openDrawerWithView(view);
  }
}
</script>
