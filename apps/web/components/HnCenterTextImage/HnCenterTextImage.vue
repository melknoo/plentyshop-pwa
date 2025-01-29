<template>
    <div :class="text?.wrapper_class" class="sms-centerimage--wrapper">
        <div class="sms-textimage--row relative">
            <div class="sms-centerimage--textwrapper">
                <h2 class="sms-centerimage--headline typography-display-3 uppercase">{{ text?.headline }}</h2>
                <div class="sms-centerimage--strawwrapper">
                    <img class="sms-centerimage--strawimage" :src="images?.img1_src">

                </div>
                <div class="sms-centerimage--inner text-left">
                    <p class="sms-textimage--copytext sms-copytext sms-mb--2">{{ text?.copytext }}</p>
                    <div class="sms-centerimage--iconcontainer my-5">
                        <div class="sms-centerimage--iconcontainer-icon--1 sms-centerimage--iconcontainer-icon" :style="{ backgroundImage: `url(${text?.fact1_src})` }" ></div>
                        <p class="sms-copytext sms-pl--4">{{ text?.fact1 }}</p>
                    </div>
                    <div class="sms-centerimage--iconcontainer my-5">
                        <div class="sms-centerimage--iconcontainer-icon--2 sms-centerimage--iconcontainer-icon" :style="{ backgroundImage: `url(${text?.fact2_src})` }" ></div>
                        <p :class="text?.fact2_class" class="sms-copytext sms-pl--4">{{ text?.fact2 }}</p>
                    </div>
                    <img class="sms-centerimage--niceimage" :src="images?.img2_src">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HnCenterTextImageProps } from './types';

export default defineComponent({
    name: 'HnCenterTextImage',
    props: {
        text: {
            type: Object as () => HnCenterTextImageProps['text'],
            required: false,
            default: () => ({})
        },
        images: {
            type: Object as () => HnCenterTextImageProps['imgages'],
            required: false,
            default: () => ({})
        }
    }
});

</script>