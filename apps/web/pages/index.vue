<template>
  <div>
    <EditablePage :identifier="'index'" :type="'immutable'" />
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
const { t } = useI18n();
const { setPageMeta } = usePageMeta();
const icon = 'home';
setPageMeta(t('homepage.title'), icon);

const { getRobots, setRobotForStaticPage } = useRobots();
getRobots();
setRobotForStaticPage('Homepage');
</script>
