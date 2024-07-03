import { Command } from "@oclif/core";

import { genArray } from "../../lib/array.js";

function bubbleSort(array: number[]): number[] {
	const len = array.length;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}

	return array;
}

export default class Bubble extends Command {
	async run(): Promise<void> {
		const array = genArray(10);

		this.log('Bubble sort');

		this.log(array.join(", "));
		bubbleSort(array);
		this.log(array.join(", "));
	}
}
