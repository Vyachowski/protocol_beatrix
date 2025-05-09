<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import {
	NFlex,
	NLayout,
	NLayoutContent,
	NLayoutFooter,
	NLayoutHeader,
	NSpace,
	NText,
} from "naive-ui";
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <router-link class="link" :to="{ name: 'home' }">
          <app-logo />
        </router-link>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
      <n-layout-footer>
        <n-flex justify="center">
          <n-text class="slogan"> 
            Box Bunny: Make your meal prep funny!
          </n-text>
        </n-flex>
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style scoped>
  .link {
    display: block;
    width: 120px;
  }

  .n-layout-header,
  .n-layout-footer {
    padding: 24px;
  }

  .slogan {
    text-align: center;
  }
</style>
