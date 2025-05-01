<script setup lang="ts">
import { MealTime, WeekDays, generateMenuForWeek } from "@/api";
import { NCard, NCheckbox, NGrid, NGridItem, NH1, NSpace } from "naive-ui";
import { ref, watch } from "vue";

const generatedMenu = generateMenuForWeek();

const onlyWorkingWeek = ref(true);
const weekMenu = ref([...generatedMenu].slice(0, -2));

watch(onlyWorkingWeek, (checked) => {
	weekMenu.value = checked ? generatedMenu.slice(0, -2) : generatedMenu;
});
</script>

<template>
  <main>
    <n-h1>Week Menu</n-h1>
    <n-space>
      <n-checkbox label="only working week" v-model:checked="onlyWorkingWeek"/>
      <n-grid x-gap="12" cols="1 500:2 750:3 1000:4 1250:5">
        <n-grid-item v-for="(meal, index) in weekMenu">
          <n-card :title="WeekDays[index]">
            <n-h2></n-h2>
            {{ meal }}
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-space>
  </main>
</template>
