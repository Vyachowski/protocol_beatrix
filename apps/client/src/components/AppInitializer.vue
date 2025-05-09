<script setup lang="ts">
import { generatedMenu } from "@/api";
import HomeView from "@/views/HomeView.vue";

const menu = Object.values(generatedMenu);
</script>

<template>
  <HomeView v-if="menu" :menu="menu" />
  <div v-else>Loading...</div>
</template>
