<template>
    <div :class="['sms-seperator', custom_class]" :style="{ backgroundColor: color }"/>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HnSeperator',
  props: {
    // eslint-disable-next-line vue/prop-name-casing -- Key kommt 1:1 aus dem Homepage-Block-JSON
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