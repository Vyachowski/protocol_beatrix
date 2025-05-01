<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import {
	NLayout,
	NLayoutContent,
	NLayoutFooter,
	NLayoutHeader,
	NSpace,
  NText,
  NFlex,
} from "naive-ui";
</script>

<template>
  <n-space vertical size="large">
    <n-layout class="layout" content-style="display: grid; grid-template-rows: auto 1fr auto;">
      <n-layout-header>
        <router-link class="link" :to="{ name: 'home' }">
          <app-logo />
        </router-link>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        
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
  .layout {
    height: 100dvh;
  }

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
