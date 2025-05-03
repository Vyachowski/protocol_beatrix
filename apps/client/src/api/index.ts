export enum MealTime {
	STARTER = "STARTER",
	BREAKFAST = "BREAKFAST",
	BRUNCH = "BRUNCH",
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

const recipes = [
	{
		mealTime: MealTime.STARTER,
		title: "Green Fiber Smoothie",
		ingredients: [
			"2 handfuls of spinach",
			"1/2 cucumber",
			"1/2 green apple",
			"1 tbsp chia seeds",
			"250 ml almond milk",
		],
		preparation: "Blend all ingredients until smooth. Drink immediately.",
	},
	{
		mealTime: MealTime.BREAKFAST,
		title: "Buckwheat Porridge with Berries and Yogurt",
		ingredients: [
			"50 g buckwheat groats",
			"150 ml water or milk",
			"50 g berries (blueberries, raspberries, etc.)",
			"50 g plain yogurt",
			"15 g nuts (walnuts or almonds)",
			"a pinch of cinnamon",
		],
		preparation:
			"Cook the buckwheat. Top with yogurt, berries, chopped nuts, and a sprinkle of cinnamon.",
	},
	{
		mealTime: MealTime.BRUNCH,
		title: "Vegetable Omelet with Quinoa and Side Salad",
		ingredients: [
			"1 egg",
			"2 tbsp water or milk",
			"50 g spinach",
			"1/4 tomato",
			"1/4 bell pepper",
			"1/4 onion",
			"1 tsp olive oil",
			"50–70 g quinoa",
			"1–2 lettuce leaves",
			"1/3 cucumber",
			"1/2 carrot",
			"1 tsp olive oil (for salad)",
			"lemon juice, salt, pepper",
		],
		preparation:
			"Cook quinoa. Sauté vegetables and cook omelet. Serve with fresh salad dressed with olive oil and lemon juice.",
	},
	{
		mealTime: MealTime.LUNCH,
		title: "Grilled Chicken Breast with Steamed Veggies and Brown Rice",
		ingredients: [
			"150 g chicken breast",
			"1 tbsp olive oil",
			"juice of 1/2 lemon",
			"100 g broccoli",
			"100 g carrot",
			"100 g bell pepper",
			"1/2 onion",
			"1–2 garlic cloves",
			"60 g brown rice",
			"salt, pepper, spices",
		],
		preparation:
			"Marinate and grill the chicken. Cook rice. Sauté and steam vegetables. Serve following the Harvard Plate model.",
	},
	{
		mealTime: MealTime.SNACK,
		title: "Greek Yogurt with Berries and Nuts",
		ingredients: [
			"150 g Greek yogurt",
			"100 g berries (fresh or frozen)",
			"10–15 g walnuts",
			"1 tsp honey (optional)",
		],
		preparation:
			"Combine yogurt and berries, top with chopped walnuts and a drizzle of honey if desired.",
	},
	{
		mealTime: MealTime.DINNER,
		title: "Lentil Stew with Vegetables and Buckwheat",
		ingredients: [
			"80–100 g lentils (red or green)",
			"1 tomato or 100 ml tomato juice",
			"1 carrot",
			"1/2 onion",
			"1 celery stalk",
			"1 garlic clove",
			"50 g buckwheat",
			"1 tsp olive oil",
			"salt, pepper, spices",
		],
		preparation:
			"Cook buckwheat separately. Stew lentils with chopped vegetables and tomato until soft. Serve together with herbs on top.",
	},
];

export const generateMenu = () => {
	return {
		[MealTime.STARTER]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.STARTER,
		),
		[MealTime.BREAKFAST]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.BREAKFAST,
		),
		[MealTime.BRUNCH]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.BRUNCH,
		),
		[MealTime.LUNCH]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.LUNCH,
		),
		[MealTime.DINNER]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.DINNER,
		),
		[MealTime.SNACK]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.SNACK,
		),
	};
};

export default recipes;
