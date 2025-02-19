<template>
    <div class="sms-hero--wrapper">
        <div class="sms-hero--row">
            <img class="sms-hero--image" src="https://suckmystraw.com/wp-content/themes/suckmystraw-theme/img/SMS-Logo-onBlackGlow.svg">
        </div>
        <div class="sms-hero--row text-center">
            <!-- <a class="sms-button--primary mx-auto" href="">zum shop</a> -->
        </div>
        <div class="sms-hero--row">
            <div class="sms-hero--textwrapper">
                <div class="sms-hero--container">
                    <h2 class="text-white sms-hero--h2">{{ content?.text1 }}</h2>
                    <div class="sms-hero--sepwrap">
                        <div class="sms-hero--seperator"></div>
                    </div>
                    <h2 class="text-white sms-hero--h2">{{ content?.text2 }}</h2>
                    <div class="sms-hero--sepwrap">
                        <div class="sms-hero--seperator"></div>
                    </div>
                    <h2 class="text-white sms-hero--h2">{{ content?.text3 }}</h2>
                </div>
            </div>
        </div>
        <div class="sms-hero--row sms-hero--bottomspacer">
            
        </div>
        <div class="sms-hero--row">
            <div class="sms-hero--straw sms-asset--straw-1"></div>
            <div class="sms-hero--straw sms-asset--straw-2"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HnHeroProps } from './types';

export default defineComponent({
  name: 'HnHero',
  props: {
    content: {
      type: Object as () => HnHeroProps['content'],
      required: false,
      default: () => ({ text1: '', text2: '', text3: '' })
    },
    button: {
      type: Object as () => HnHeroProps['button'],
      required: false,
      default: () => ({ label: '', link: '', variant: 'primary' })
    }
  }
});

</script>