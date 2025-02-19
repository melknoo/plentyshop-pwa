<template>
    <div :class="text?.wrapper_class" class="sms-cta--wrapper">
        <div class="sms-cta--row flex sms-mobile--column">
            <div :class="images?.img1_wrapper_class" class="sms-cta--imgwrapper relative">
                <div :class="images?.img1_class" class="sms-cta--image" :style="{ backgroundImage: `url(${images?.img1_src})` }"></div>
                <div :class="images?.img2_class" class="sms-cta--image" :style="{ backgroundImage: `url(${images?.img2_src})` }"></div>
            </div>
            <div :class="text?.copytext_wrapperclass" class="sms-cta--copytextwrapper">
                <h2 :class="text?.headline_class" class="sms-cta--headline">{{ text?.headline }}</h2>
                <h2 :class="text?.subline_class" class="sms-cta--headline">{{ text?.subline }}</h2>
                <p :class="text?.copytext_class" class="sms-cta--copytext">{{ text?.copytext }}</p>
                <a :class="button?.class" class="sms-button--outline" :href="button?.link">{{ button?.label }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HnCtaProps } from './types';

export default defineComponent({
    name: 'HnCta',
    props: {
        text: {
            type: Object as () => HnCtaProps['text'],
            required: false,
            default: () => ({})
        },
        button: {
            type: Object as () => HnCtaProps['button'],
            required: false,
            default: () => ({})
        },
        images: {
            type: Object as () => HnCtaProps['imgages'],
            required: false,
            default: () => ({})
        }
    }
});

</script>