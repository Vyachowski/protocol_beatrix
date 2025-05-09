<script setup lang="ts">
import { generatedMenu, groceryList } from "@/api";
import HomeView from "@/views/HomeView.vue";

const menu = Object.values(generatedMenu);
</script>

<template>
  <HomeView v-if="menu" :menu="menu" :groceryList="groceryList" />
  <div v-else>Loading...</div>
</template>
