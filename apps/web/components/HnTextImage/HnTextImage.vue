<template>
    <div class="sms-textimage--wrapper">
        <div class="sms-textimage--row relative overflow-hidden">
            <div class="sms-textimage--textwrapper">
                <h2 class="sms-textimage--headline typography-display-3 uppercase">{{ text?.headline }}</h2>
                <div class="sms-textimage--inner">
                    <p class="sms-textimage--copytext sms-copytext sms-mb--2">{{ text?.copytext }}</p>
                    <div class="sms-textimage--iconcontainer my-5">
                        <div 
                            class="sms-textimage--iconcontainer-icon--1 sms-textimage--iconcontainer-icon" 
                            :style="{ backgroundImage: `url(${text?.fact1_src})` }">
                        </div>
                        <p class="sms-copytext sms-pl--4">{{ text?.fact1 }}</p>
                    </div>
                    <div class="sms-textimage--iconcontainer my-5">
                        <div
                            class="sms-textimage--iconcontainer-icon--2 sms-textimage--iconcontainer-icon"
                            :style="{ backgroundImage: `url(${text?.fact2_src})` }">
                        </div>
                        <p class="sms-copytext sms-pl--4">{{ text?.fact2 }}</p>
                    </div>
                    <div class="sms-textimage--iconcontainer my-5">
                        <div 
                            class="sms-textimage--iconcontainer-icon--3 sms-textimage--iconcontainer-icon"
                            :style="{ backgroundImage: `url(${text?.fact3_src})` }">
                        </div>
                        <p class="sms-copytext sms-pl--4">{{ text?.fact3 }}</p>
                    </div>
                </div>
            </div>
            <div class="sms-asset--straw-3 sms-textimage--straw"></div>
            <div class="sms-asset--straw-4 sms-textimage--straw"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HnTextImageProps } from './type';

export default defineComponent({
    name: 'HnTextImage',
    props: {
        text: {
            type: Object as () => HnTextImageProps['text'],
            required: false,
            default: () => ({})
        },
        images: {
            type: Object as () => HnTextImageProps['imgages'],
            required: false,
            default: () => ({})
        }
    }
});

</script>