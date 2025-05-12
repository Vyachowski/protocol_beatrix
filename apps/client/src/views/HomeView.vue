<script setup lang="ts">
import type { Meal } from "@shared";
import {
	NCard,
	NGrid,
	NGridItem,
	NSpace,
	NTabPane,
	NTabs,
	NText,
  NList,
  NListItem,
  NThing,
} from "naive-ui";

const { menu, groceryList } = defineProps<{ menu: Meal[], groceryList: any[] }>();
</script>

<template>
  <main class="content">
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
         <n-space vertical>
          <n-list>
            <n-list-item v-for="item in groceryList">
              <n-thing :title="item.department">
                <n-text v-for="position in item.items">{{ position.name }} {{ `${position.quantity} ${position.unit}` }}<br></n-text>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-space>
      </n-tab-pane>

      <n-tab-pane name="preparation" tab="Preparation">
        <n-space vertical>
          <n-grid x-gap="12" y-gap="12" cols="1 500:2 750:3 1000:4 1250:5">
            <n-grid-item v-for="(meal) in menu">
              <n-card :title="meal.mealTime">
                <n-space vertical>
                  <n-text>{{ meal.preparation }}</n-text>
                </n-space>
              </n-card>
            </n-grid-item>
          </n-grid>
        </n-space>
      </n-tab-pane>
    </n-tabs>
  </main>
</template>

<style scoped>
  .content {
    padding: 24px;
    /* max-width: 1024px; */
    margin: 0 auto;
  }
</style>
