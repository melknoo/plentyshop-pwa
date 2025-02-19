<template>
    <div :class="['sms-seperator', custom_class]" :style="{ backgroundColor: color }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HnSeperator',
  props: {
    custom_class: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: '#1E1E1E'
    }
  }
});

</script>