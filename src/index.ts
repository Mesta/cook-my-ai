import type { CloudEvent } from "@google-cloud/functions-framework";
import { generateMenu } from "./chatgpt";

exports.prepareMenu = async (): Promise<void> => {
	const menu = await generateMenu();
	console.log(menu);
};
