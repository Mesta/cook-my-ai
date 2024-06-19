import { Client } from "@notionhq/client";
import type { Meal } from "./meal";

const notion = new Client({ auth: "your_notion_integration_token" });

const databaseId = "your_database_id";

export const insertMealsInNotion = async (meal: Meal) => {
	// Push dishes to Notion
	for (const dish of dishes) {
		await notion.pages.create({
			parent: { database_id: databaseId },
			properties: {
				"Dish Name": {
					title: [
						{
							text: {
								content: dish.name,
							},
						},
					],
				},
				"Dish Type": {
					select: {
						name: dish.type,
					},
				},
				Calories: {
					number: dish.calories,
				},
				"Nutritional Intake": {
					rich_text: [
						{
							text: {
								content: dish.nutritionalIntake,
							},
						},
					],
				},
			},
			children: [
				{
					object: "block",
					type: "paragraph",
					paragraph: {
						text: [
							{
								type: "text",
								text: {
									content: dish.recipe,
								},
							},
						],
					},
				},
			],
		});
	}

	// Push grocery list to Notion
	const weekOfYear = getWeekOfYear(new Date()); // Assume getWeekOfYear is a function to get the current week of the year

	await notion.pages.create({
		parent: { database_id: databaseId },
		properties: {
			"Week of the Year": {
				number: weekOfYear,
			},
		},
		children: [
			{
				object: "block",
				type: "bulleted_list_item",
				bulleted_list_item: {
					text: groceryList.map((item) => ({
						type: "text",
						text: {
							content: item,
						},
					})),
				},
			},
		],
	});
};

const parseMenu = (menu: string) => {
	// Implement parsing logic
};

const generateGroceryList = (dishes: any[]) => {
	// Implement grocery list generation logic
};

const getWeekOfYear = (date: Date) => {
	const start = new Date(date.getFullYear(), 0, 1);
	const diff =
		(date.getTime() -
			start.getTime() +
			(start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) /
		86400000;
	return Math.floor(diff / 7) + 1;
};
