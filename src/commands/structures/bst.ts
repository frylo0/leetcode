import { Command } from "@oclif/core";

class BSTNode<T> {
	left: BSTNode<T> | null = null;
	right: BSTNode<T> | null = null;
	value: T;

	constructor (value: T) {
		this.value = value;
	}
}

/** Binary search tree */
class BST<T> {
	root: BSTNode<T> | null = null;

	draw(
		node: BSTNode<T> | null = this.root,
		prefix: string = "",
		isLeft: boolean = true
	) {
		if (node === null) return;

		if (node.right !== null) {
			this.draw(node.right, prefix + (isLeft ? "│   " : "    "), false);
		}

		console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

		if (node.left !== null) {
			this.draw(node.left, prefix + (isLeft ? "    " : "│   "), true);
		}
	}

	insert(value: T) {
		const newNode = new BSTNode(value);

		if (this.root === null) {
			this.root = newNode;
			return;
		}

		let current = this.root;

		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return;
				}

				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return;
				}

				current = current.right;
			}
		}
	}
}

export default class BSTCommand extends Command {
	async run(): Promise<void> {
		// const array = genArray(14);
		const array = [5, 1, 3, 2, 7, 8, 1, 3, 4, 9, 10, 6, 7];

		const bst = new BST();

		for (const value of array) {
			bst.insert(value);
		}

		this.log("Binary search tree");

		this.log(array.join(", "));
		bst.draw();
	}
}
