import { Command } from "@oclif/core";

export default class Quick extends Command {
	async run(): Promise<void> {
		this.log("Hello from quick sort");
	}
}
