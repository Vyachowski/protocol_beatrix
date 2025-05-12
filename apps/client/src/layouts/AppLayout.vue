<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import {
	NFlex,
	NText,
} from "naive-ui";
</script>

<template>
  <div class="layout">
    <header class="header">
      <router-link class="link" :to="{ name: 'home' }">
        <app-logo />
      </router-link>
    </header>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <n-flex justify="center">
        <n-text class="slogan">Box Bunny: Make your meal prep funny!</n-text>
      </n-flex>
    </footer>
  </div>
</template>

<style scoped>
  .layout {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .link {
    display: block;
    width: 120px;
  }

  .header,
  .footer {
    padding: 24px;
  }

  .slogan {
    text-align: center;
  }
</style>
