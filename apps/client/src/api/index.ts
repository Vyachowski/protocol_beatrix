import { MealTime, type Menu } from "@shared";

// export const drafts = [
	// {
	// 	mealTime: MealTime.BREAKFAST,
	// 	title: "Buckwheat Porridge with Berries and Yogurt",
	// 	ingredients: [
	// 		"50 g buckwheat groats",
	// 		"150 ml water or milk",
	// 		"50 g berries (blueberries, raspberries, etc.)",
	// 		"50 g plain yogurt",
	// 		"15 g nuts (walnuts or almonds)",
	// 		"a pinch of cinnamon",
	// 	],
	//  calories: 420,
	// 	preparation:
	// 		"Cook the buckwheat. Top with yogurt, berries, chopped nuts, and a sprinkle of cinnamon.",
	// },
	// {
	// 	mealTime: MealTime.DINNER,
	// 	title: "Lentil Stew with Vegetables and Buckwheat",
	// 	ingredients: [
	// 		"80–100 g lentils (red or green)",
	// 		"1 tomato or 100 ml tomato juice",
	// 		"1 carrot",
	// 		"1/2 onion",
	// 		"1 celery stalk",
	// 		"1 garlic clove",
	// 		"50 g buckwheat",
	// 		"1 tsp olive oil",
	// 		"salt, pepper, spices",
	// 	],
	//  calories: 420,
	// 	preparation:
	// 		"Cook buckwheat separately. Stew lentils with chopped vegetables and tomato until soft. Serve together with herbs on top.",
	// },
// ]

const recipes = [
	{
		mealTime: MealTime.STARTER,
		title: "Nutrient & Fiber-Rich Morning Smoothie",
		ingredients: [
			"1 medium banana",
			"½ cup mixed berries (strawberries, blueberries, raspberries)",
			"1 handful (30 g) fresh spinach",
			"1 Tbsp chia seeds",
			"½ cup (120 g) Greek yogurt",
			"¾ cup (180 ml) unsweetened almond milk",
			"¼ cup (30 g) frozen cauliflower florets",
			"Ice cubes (optional)"
		],
		calories: 350,
		preparation: "Place almond milk in the blender first, then add banana, yogurt, spinach, oats, chia seeds, berries, and cauliflower. Blend starting on low, then high for ~30 s until smooth. Adjust thickness with extra almond milk or ice. Serve immediately."
	},
	{
		mealTime: MealTime.BREAKFAST,
		title: "PB&J Overnight Oats",
		ingredients: [
			"½ cup (40 g) rolled oats",
			"1 Tbsp (12 g) chia seeds",
			"1 Tbsp (16 g) creamy peanut butter",
			"¼ cup (60 g) Greek yogurt",
			"¾ cup (180 ml) milk of choice",
			"2 Tbsp (30 g) strawberry chia jam",
			"¼ cup (40 g) fresh strawberries, sliced",
			"¼ cup (35 g) fresh raspberries",
			"1 Tbsp (10 g) roasted peanuts",
			"1 tsp vanilla extract (optional)"
		],
		calories: 650,
		preparation: "In a jar or bowl, whisk together milk, Greek yogurt, peanut butter, chia seeds, and vanilla until smooth. Stir in oats. Refrigerate overnight (or at least 4 hours). In the morning, swirl in the strawberry chia jam, top with sliced berries and roasted peanuts, and enjoy cold."
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
		calories: 550,
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
		calories: 250,
		preparation:
			"Combine yogurt and berries, top with chopped walnuts and a drizzle of honey if desired.",
	},
	{
		mealTime: MealTime.DINNER,
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
		calories: 420,
		preparation:
			"Cook quinoa. Sauté vegetables and cook omelet. Serve with fresh salad dressed with olive oil and lemon juice.",
	},
];

export const groceryList = [
	{
		department: "Produce",
		items: [
			{ name: "banana", quantity: 5, unit: "pcs" },
			{ name: "mixed berries", quantity: 2.5, unit: "cups" },
			{ name: "fresh spinach", quantity: 150, unit: "g" },
			{ name: "fresh strawberries", quantity: 200, unit: "g" },
			{ name: "fresh raspberries", quantity: 175, unit: "g" },
			{ name: "lemons", quantity: 3, unit: "pcs" },
			{ name: "broccoli", quantity: 500, unit: "g" },
			{ name: "carrot", quantity: 650, unit: "g" },
			{ name: "bell pepper", quantity: 700, unit: "g" },
			{ name: "onion", quantity: 5, unit: "pcs" },
			{ name: "garlic cloves", quantity: 10, unit: "pcs" },
			{ name: "tomato", quantity: 2, unit: "pcs" },
			{ name: "lettuce leaves", quantity: 8, unit: "pcs" },
			{ name: "cucumber", quantity: 2, unit: "pcs" }
		]
	},
	{
		department: "Dairy",
		items: [
			{ name: "Greek yogurt", quantity: 1350, unit: "g" },
			{ name: "milk of choice", quantity: 900, unit: "ml" },
			{ name: "unsweetened almond milk", quantity: 900, unit: "ml" },
			{ name: "eggs", quantity: 5, unit: "pcs" }
		]
	},
	{
		department: "Meat & Seafood",
		items: [
			{ name: "chicken breast", quantity: 750, unit: "g" }
		]
	},
	{
		department: "Pantry",
		items: [
			{ name: "rolled oats", quantity: 200, unit: "g" },
			{ name: "brown rice", quantity: 300, unit: "g" },
			{ name: "quinoa", quantity: 300, unit: "g" },
			{ name: "creamy peanut butter", quantity: 80, unit: "g" },
			{ name: "strawberry chia jam", quantity: 150, unit: "g" },
			{ name: "roasted peanuts", quantity: 50, unit: "g" },
			{ name: "chia seeds", quantity: 5, unit: "Tbsp" },
			{ name: "walnuts", quantity: 70, unit: "g" },
			{ name: "honey", quantity: 5, unit: "tsp" },
			{ name: "salt", quantity: null, unit: "to taste" },
			{ name: "pepper", quantity: null, unit: "to taste" },
			{ name: "spices", quantity: null, unit: "to taste" }
		]
	},
	{
		department: "Oils & Condiments",
		items: [
			{ name: "olive oil", quantity: 10, unit: "Tbsp" }
		]
	}
];

const generateMenu = () => {
	return {
		[MealTime.STARTER]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.STARTER,
		),
		[MealTime.BREAKFAST]: recipes.find(
			(recipe) => recipe.mealTime === MealTime.BREAKFAST,
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

export const generatedMenu = generateMenu() as Menu;
