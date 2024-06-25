<script setup lang="ts">

defineProps<{
  menu: {
    link: string,
    title: string
  }
}>()

</script>

<template>
  <RouterLink active-class="underline":to="`/${menu.link}`">{{ menu.title }}</RouterLink>
</template>
