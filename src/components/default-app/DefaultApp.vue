<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'VUE PROJECTS TEMPLATE',
  },
  icon: {
    type: String,
    default: 'co-vue-js',
  },
})
</script>

<template>
  <div class="cmp-default">
    <v-icon :name="props.icon" scale="3" />
    <h1>{{ props.title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use './default-app';
</style>
