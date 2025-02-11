<template>
    <div class="sms-scroll--wrapper">
        <div class="sms-textimage--row relative">
            <div class="sms-scroll--textwrapper">
                <h2 class="sms-scroll--headline typography-display-3 uppercase">{{ text?.headline }}</h2>
                <div class="sms-scroll--container">
                    <p class="sms-textimage--copytext sms-copytext sms-mb--2">{{ text?.copytext }}</p>
                </div>
                <div class="sms-scroll--sticky_container">

                    <div :class="images?.img1_class" class="sms-scroll--imagecontainer "
                        :style="{ backgroundImage: `url(${images?.img1_src})` }">
                    </div>


                    <div :class="images?.img2_class" class="sms-scroll--imagecontainer "
                        :style="{ backgroundImage: `url(${images?.img2_src})` }">
                    </div>


                    <div :class="images?.img3_class" class="sms-scroll--imagecontainer"
                        :style="{ backgroundImage: `url(${images?.img3_src})` }">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { HnScrollProps } from './types';



export default defineComponent({
    name: 'HnScrollElement',
    props: {
        text: {
            type: Object as () => HnScrollProps['text'],
            required: false,
            default: () => ({})
        },
        images: {
            type: Object as () => HnScrollProps['imgages'],
            required: false,
            default: () => ({})
        }
    },
    mounted() {
        console.log('mounted');
    }
});

</script>