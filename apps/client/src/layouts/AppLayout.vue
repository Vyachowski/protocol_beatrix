<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import {
	NLayout,
	NLayoutContent,
	NLayoutFooter,
	NLayoutHeader,
	NSpace,
} from "naive-ui";
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <router-link class="logo-link" :to="{ name: 'home' }">
          <app-logo />
        </router-link>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        
      </n-layout-content>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style scoped>
  .logo-link {
    display: block;
    width: 120px;
  }

  .n-layout-header,
  .n-layout-footer {
    padding: 24px;
  }
</style>
