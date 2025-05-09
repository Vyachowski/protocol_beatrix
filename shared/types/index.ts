export enum MealTime {
	STARTER = "STARTER",
	BREAKFAST = "BREAKFAST",
	LUNCH = "LUNCH",
	SNACK = "SNACK",
	DINNER = "DINNER",
}

export enum WeekDays {
	MONDAY = 0,
	TUESDAY = 1,
	WEDNESDAY = 2,
	THURSDAY = 3,
	FRIDAY = 4,
	SATURDAY = 5,
	SUNDAY = 6,
}

export interface Meal {
    mealTime: MealTime;
    title: string;
	calories: number;
    ingredients: string[];
    preparation: string;
}

export type Menu = Record<MealTime, Meal>;