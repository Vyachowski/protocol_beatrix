<script setup lang="ts">
import type { Meal } from "@shared";
import {
	NCard,
	NGrid,
	NGridItem,
	NH1,
	NSpace,
	NTabPane,
	NTabs,
	NText,
} from "naive-ui";

const { menu } = defineProps<{ menu: Meal[] }>();
</script>

<template>
  <main>
    <n-tabs type="segment" animated>
      <n-tab-pane name="menu" tab="Menu">
        <n-space vertical>
          <n-grid x-gap="12" y-gap="12" cols="1 500:2 750:3 1000:4 1250:5">
            <n-grid-item v-for="(meal) in menu">
              <n-card :title="meal?.mealTime">
                <n-space vertical>
                  <n-text>{{ meal?.title }}</n-text>
                </n-space>
              </n-card>
            </n-grid-item>
          </n-grid>
        </n-space>
      </n-tab-pane>

      <n-tab-pane name="grocery-list" tab="Grocery List">
        List:
      </n-tab-pane>
      <n-tab-pane name="preparation" tab="Preparation">
        Cooking
      </n-tab-pane>
    </n-tabs>
  </main>
</template>

<style scoped>
  .select {
    width: 100px;
  }
</style>
