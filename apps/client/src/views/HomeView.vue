<script setup lang="ts">
import { MealTime, WeekDays, generateMenuForWeek } from "@/api";
import { NCard, NCheckbox, NGrid, NFlex, NGridItem, NH1, NH4, NText,  NSpace, NSelect } from "naive-ui";
import { ref, watch } from "vue";

const generatedMenu = generateMenuForWeek();

const onlyWorkingWeek = ref(true);
const selectedSessions = ref(1);
const cookingSessionsPerWeek = [
  {
    label: 'Only one',
    value: 1,
  },
  {
    label: '3 times',
    value: 3,
  }, 
  {
    label: '5 times',
    value: 5,
  }, 
];

const weekMenu = ref([...generatedMenu].slice(0, -2));

watch(onlyWorkingWeek, (checked) => {
	weekMenu.value = checked ? generatedMenu.slice(0, -2) : generatedMenu;
});
</script>

<template>
  <main>
    <n-h1>Week Menu</n-h1>
    <n-space vertical>
      <n-flex align="center">
        <n-select class="select" placeholder="Cooking sessions" :options="cookingSessionsPerWeek" :v-model:value="selectedSessions" />
        <n-checkbox class="checkbox" label="only working week" v-model:checked="onlyWorkingWeek"/>
      </n-flex>

      <n-grid x-gap="12" y-gap="12" cols="1 500:2 750:3 1000:4 1250:5">
        <n-grid-item v-for="(meal, index) in weekMenu">
          <n-card :title="WeekDays[index]">
            <n-space vertical>
              <n-h4>{{ meal[MealTime.STARTER]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.STARTER]?.title }}</n-text>

              <n-h4>{{ meal[MealTime.BREAKFAST]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.BREAKFAST]?.title }}</n-text>

              <n-h4>{{ meal[MealTime.BRUNCH]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.BRUNCH]?.title }}</n-text>

              <n-h4>{{ meal[MealTime.LUNCH]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.LUNCH]?.title }}</n-text>

              <n-h4>{{ meal[MealTime.SNACK]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.SNACK]?.title }}</n-text>

              <n-h4>{{ meal[MealTime.DINNER]?.mealTime }}</n-h4>
              <n-text>{{ meal[MealTime.DINNER]?.title }}</n-text>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-space>
  </main>
</template>

<style scoped>
  .select {
    width: 100px;
  }
</style>
