<template>
    <div :class="['sms-seperator', custom_class]"></div>
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
    }
  }
});

</script>