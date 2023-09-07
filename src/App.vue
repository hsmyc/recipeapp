<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StyledButton from '@/components/Styled/StyledButton.vue'
import homeicon from '@/components/icons/homeicon.svg'
</script>

<template>
  <StyledButton :icon-url="homeicon" width="150px" height="60px" type="outlined">
    <RouterLink to="/">Home</RouterLink>
  </StyledButton>
  <RouterView />
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
