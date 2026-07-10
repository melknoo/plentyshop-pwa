<template>
    <div :class="['sms-seperator', custom_class]" :style="{ backgroundColor: color }"/>
</template>

<script lang="ts">
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