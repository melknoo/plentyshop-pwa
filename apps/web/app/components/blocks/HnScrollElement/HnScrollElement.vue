<template>
    <div ref="track" class="sms-scroll--track">
        <div class="sms-scroll--wrapper">
            <div class="sms-scroll--textwrapper">
                <h2 class="sms-scroll--headline typography-display-3 uppercase" :class="headlineClass">{{ text?.headline }}</h2>
                <div class="sms-scroll--container">
                    <p class="sms-textimage--copytext sms-scroll--copytext sms-copytext sms-mb--2">{{ text?.copytext }}</p>
                </div>
            </div>
            <div class="sms-scroll--sticky_container">
                <div
                    v-for="(image, i) in imageList"
                    :key="i"
                    :class="image.class"
                    class="sms-scroll--imagecontainer"
                    :style="{ backgroundImage: `url(${image.src})`, opacity: activeIndex === i ? 1 : 0 }"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { HnScrollProps } from './types';

// Reihenfolge entspricht img1..img3 (pink → blau → grün)
const COLORS = ['pink', 'blue', 'green'] as const;

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
    data() {
        return {
            activeIndex: 0,
            frame: 0
        };
    },
    computed: {
        imageList() {
            return [
                { src: this.images?.img1_src, class: this.images?.img1_class },
                { src: this.images?.img2_src, class: this.images?.img2_class },
                { src: this.images?.img3_src, class: this.images?.img3_class }
            ];
        },
        headlineClass() {
            const color = COLORS[this.activeIndex];
            return [`sms-color--${color}`, `sms-textshadow--${color}`];
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onScroll, { passive: true });
        this.update();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onScroll);
        cancelAnimationFrame(this.frame);
    },
    methods: {
        onScroll() {
            cancelAnimationFrame(this.frame);
            this.frame = requestAnimationFrame(this.update);
        },
        // Fortschritt der Sticky-Phase (0..1): Track-Oberkante erreicht Viewport-Oberkante → Track-Unterkante erreicht Viewport-Unterkante
        update() {
            const track = this.$refs.track as HTMLElement | undefined;
            if (!track) return;
            const rect = track.getBoundingClientRect();
            const distance = rect.height - window.innerHeight;
            const progress = distance > 0 ? Math.min(Math.max(-rect.top / distance, 0), 1) : 0;
            this.activeIndex = Math.min(Math.floor(progress * COLORS.length), COLORS.length - 1);
        }
    }
});

</script>
