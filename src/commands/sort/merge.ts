import { Command } from "@oclif/core";

import { genArray } from "../../lib/array.js";

function mergeSort(
	array: number[],
	startI: null | number = null,
	endI: null | number = null
): void {
	startI ??= 0;
	endI ??= array.length;

	if (endI - startI <= 1) return;

	const center = Math.trunc((startI + endI) / 2);

	mergeSort(array, startI, center);
	mergeSort(array, center, endI);

	let i = startI;
	let j = center;

	const res = [];

	while (i < center && j < endI) {
		if (array[i] < array[j]) {
			res.push(array[i++]);
		} else {
			res.push(array[j++]);
		}
	}

	while (i < center) res.push(array[i++]);
	while (j < endI) res.push(array[j++]);

	for (let i = startI; i < endI; i++) array[i] = res[i - startI];
}

export default class Merge extends Command {
	async run(): Promise<void> {
		const array = genArray(10);

		this.log("Merge sort");

		this.log(array.join(", "));
		mergeSort(array);
		this.log(array.join(", "));
	}
}
