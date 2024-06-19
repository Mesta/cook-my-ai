import { generateMenu } from "./chatgpt";
import { insertMealsInNotion } from "./notion";

(async () => {
	const menu = await generateMenu();
	await Promise.all(menu.map(insertMealsInNotion));
	console.log(menu);
})();
