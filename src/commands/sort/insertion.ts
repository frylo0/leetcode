import { Command } from "@oclif/core";

import { genArray } from "../../lib/array.js";

function insertionSort(array: number[]): number[] {
	const len = array.length;

	for (let i = 1; i < len; i++) {
		for (let j = i; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				[array[j], array[j - 1]] = [array[j - 1], array[j]];
			} else break;
		}
	}

	return array;
}

export default class Insertion extends Command {
	async run(): Promise<void> {
		const array = genArray(10);

		this.log('Insertion sort');

		this.log(array.join(", "));
		insertionSort(array);
		this.log(array.join(", "));
	}
}
