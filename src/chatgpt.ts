// import { OpenAI } from "openai";
// import type { Meal } from "./meal";
//
// const chatGPTEnvVarName = "OPENAI_API_KEY";
// const openai = new OpenAI({
// 	apiKey: process.env[chatGPTEnvVarName],
// });
//
// export async function generateMenu(): Promise<Meal[]> {
//     const myAssistant = await openai.beta.assistants.retrieve("asst_E29tTJzDfTjKAKnLcjFTFeFY");
//
//
//     const thread = await openai.beta.threads.create({
//         messages: [
//             {
//                 role: "user",
//                 content: ""
//             },
//             {
//                 role: "user",
//                 content:
//                     "Create a balanced, low-carbon 5 days menu including lunch and dinner." +
//                     "Dishes must be seasonal, take less than 15 minutes to prepare and not include appetizers or desserts. Answers in French." +
//                     "Output must be a valid JSON with no prose having the following scheme:" +
//                     '{"menu": [{"date": "2024-04-10 12:00:00","type": "lunch","name": "Example de recette"}]}',
//             },
//         ]
//     });
//
//     console.log(thread)
//
//     console.log(completion.choices[0]?.message.content)
// 	const menu = completion.choices[0]?.message.content
// 		? JSON.parse(completion.choices[0].message.content)
// 		: {};
//
// 	return menu.menu
// 		? menu.menu.map(
// 				(menuItem: {
// 					date: string;
// 					name: string;
// 					type: "lunch" | "diner";
// 				}): Meal => ({
// 					date: new Date(menuItem.date),
// 					ingredient: [],
// 					name: menuItem.name,
// 					recipe: "",
// 					type: menuItem.type,
// 				}),
// 			)
// 		: [];
// }
