import { Command } from "@oclif/core";

import { genArray } from "../../lib/array.js";

export class Heap {
	private heap: number[] = [];
	private sign: "<" | ">";

	constructor(array: number[], heapType: "max" | "min") {
		console.log(`== Con heap (${heapType}) ==`);

		this.heap = [...array];
		this.sign = heapType === "max" ? ">" : "<";
		this.draw();
		this.build();
	}

	public draw() {
		const levels = Math.floor(Math.log2(this.heap.length)) + 1;
		let output = "";
		let levelIndex = 0;

		for (let level = 0; level < levels; level++) {
			const levelLength = 2 ** level; // Number of elements in the current level
			const levelNodes = this.heap.slice(levelIndex, levelIndex + levelLength);
			const nextLevelNodes = this.heap.slice(
				levelIndex + levelLength,
				levelIndex + 2 * levelLength
			);

			// Print the current level with spaces
			output += " ".repeat(2 ** (levels - level) - 1);

			for (const node of levelNodes) {
				output +=
					node + " ".repeat(2 ** (levels - level + 1) - node.toString().length);
			}

			output += "\n";

			// Print space between levels
			if (level + 1 < levels && nextLevelNodes.length > 0) {
				output += "\n";
			}

			levelIndex += levelLength;
		}

		console.log(output);
	}

	public extract(): null | number {
		console.log(`== Extracting (${this.sign}) ==`);

		if (this.heap.length === 0) return null;

		const value = this.heap[0];

		const lastItem = this.heap.pop();
		if (lastItem === undefined && this.heap.length === 0) return value;

		this.heap[0] = lastItem!;
		this.heapifyDown(0);

		return value;
	}

	public heapifyDown(startIndex: number) {
		console.log(`Heapify down: ${startIndex}`);

		let index = startIndex;

		while (index !== null) {
			const leftChildI = this.getChildIndexLeft(index);
			const rightChildI = this.getChildIndexRight(index);

			if (leftChildI === null && rightChildI === null) break;

			let targetChildI: number;

			if (leftChildI !== null && rightChildI !== null) {
				targetChildI = this.pt(this.heap[leftChildI], this.heap[rightChildI])
					? leftChildI
					: rightChildI;
			} else if (leftChildI === null) {
				targetChildI = rightChildI!;
			} else if (rightChildI === null) {
				targetChildI = leftChildI!;
			}

			if (this.pt(this.heap[index], this.heap[targetChildI!])) break;

			this.swap(index, targetChildI!);

			index = targetChildI!;

			console.log(`Index: ${index}`);
			this.draw();
		}
	}

	public heapifyUp(startIndex: number) {
		console.log(`Heapify up: ${startIndex} (${this.sign})`);

		let index = startIndex;

		while (index !== null) {
			const parentI = this.getParentIndex(index);
			if (parentI === null) break;

			const needSwap = this.pt(this.heap[index], this.heap[parentI]);

			if (!needSwap) break;
			this.swap(index, parentI);

			index = parentI;

			console.log(`Index: ${index}`);
			this.draw();
		}
	}

	public insert(item: number) {
		const length = this.heap.push(item);
		this.heapifyUp(length - 1);
	}

	private build() {
		console.log(`== Building heap (${this.sign}) ==`);

		for (let i = this.lastParentIndex; i >= 0; i--) {
			this.heapifyDown(i);
		}
	}

	private getChildIndexLeft(index: number): null | number {
		const childI = index * 2 + 1;
		return childI >= this.heap.length ? null : childI;
	}

	private getChildIndexRight(index: number): null | number {
		const childI = index * 2 + 2;
		return childI >= this.heap.length ? null : childI;
	}

	private getParentIndex(index: number): null | number {
		if (index === 0) return null;
		return Math.trunc((index - 1) / 2);
	}

	private get lastParentIndex(): number {
		return Math.trunc(this.heap.length / 2) - 1;
	}

	/**
	 * Prior then
	 * @param a A number
	 * @param b B number
	 * @returns Is A more prior then B
	 */
	private pt(a: number, b: number): boolean {
		switch (this.sign) {
			case ">": {
				return a > b;
			}

			case "<": {
				return a < b;
			}

			default: {
				throw new Error(`Unexpected sign '${this.sign}'`);
			}
		}
	}

	private swap(index1: number, index2: number) {
		console.log(`Swap: ${index1}, ${index2}`);
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}
}

export default class HeapCommand extends Command {
	async run(): Promise<void> {
		const array = genArray(14);

		const maxHeap = new Heap(array, "max");
		const minHeap = new Heap(array, "min");

		this.log("Heap");

		this.log(array.join(", "));
		maxHeap.draw();
		minHeap.draw();

		maxHeap.insert(3);
		minHeap.insert(3);

		const maxHeapValue = maxHeap.extract();
		console.log(`Max heap value: ${maxHeapValue}`);

		const minHeapValue = minHeap.extract();
		console.log(`Min heap value: ${minHeapValue}`);
	}
}
