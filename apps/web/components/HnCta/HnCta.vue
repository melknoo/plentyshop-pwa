<template>
    <div :class="text?.wrapper_class" class="sms-cta--wrapper">
        <div class="sms-cta--row flex">
            <div :class="images?.img1_wrapper_class" class="sms-cta--imgwrapper">
                <img :class="images?.img1_class" class="sms-cta--image" :src="images?.img1_src">
                <img :class="images?.img2_class" class="sms-cta--image" :src="images?.img2_src">
            </div>
            <div :class="text?.copytext_class" class="sms-cta--copytextwrapper">
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
import { HnCtaProps } from '~/components/HnCta/types';

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