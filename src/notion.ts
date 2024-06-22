// import { Client } from "@notionhq/client";
// import type { Meal } from "./meal";
//
// const NotionEnvVarName = "NOTION_API_KEY";
// const notion = new Client({ auth: process.env[NotionEnvVarName] ?? "" });
// const databaseId = "67c59b5dfb424392ba8aa4e9d92a04fa";
//
// export async function insertMealsInNotion  (meal: Meal) : Promise<void> {
//      await notion.pages.create({
//         parent: { database_id: databaseId },
//         properties: {
//             "Dish Name": {
//                 title: [
//                     {
//                         text: {
//                             content: meal.name,
//                         },
//                     },
//                 ],
//             },
//             "Dish Type": {
//                 select: {
//                     name: meal.type,
//                 },
//             },
//         },
//         children: [
//             {
//                 object: "block",
//                 type: "paragraph",
//                 paragraph: {
//                     rich_text: [
//                         {
//                             type: "text",
//                             text: {
//                                 content: meal.recipe,
//                             },
//                         },
//                     ],
//                 },
//             },
//         ],
//     })
// }
//
// // Push grocery list to Notion
// // const weekOfYear = getWeekOfYear(new Date()); // Assume getWeekOfYear is a function to get the current week of the year
//
// // await notion.pages.create({
// // 	parent: { database_id: databaseId },
// // 	properties: {
// // 		"Week of the Year": {
// // 			number: weekOfYear,
// // 		},
// // 	},
// // 	children: [
// // 		{
// // 			object: "block",
// // 			type: "bulleted_list_item",
// // 			bulleted_list_item: {
// // 				text: groceryList.map((item) => ({
// // 					type: "text",
// // 					text: {
// // 						content: item,
// // 					},
// // 				})),
// // 			},
// // 		},
// // 	],
// // });
// // const getWeekOfYear = (date: Date) => {
// // 	const start = new Date(date.getFullYear(), 0, 1);
// // 	const diff =
// // 		(date.getTime() -
// // 			start.getTime() +
// // 			(start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) /
// // 		86400000;
// // 	return Math.floor(diff / 7) + 1;
// // };
