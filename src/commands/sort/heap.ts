import { Command } from "@oclif/core";

import { genArray } from "../../lib/array.js";
import { Heap } from "../structures/heap.js";

function heapSort(array: number[]): number[] {
	const heap = new Heap(array, 'min');

	for (let i = 0; i < array.length; i++) {
		array[i] = heap.extract()!;
	}

	return array;
}

export default class HeapSort extends Command {
	async run(): Promise<void> {
		const array = genArray(14);

		this.log('Heap sort');

		this.log(array.join(", "));
		heapSort(array);
		this.log(array.join(", "));
	}
}
