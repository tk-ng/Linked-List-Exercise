/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	_get(idx) {
		if (idx === 0) {
			return this.head;
		}

		let currentNode = this.head;

		for (let i = 1; i <= idx; i++) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (!this.head) {
			console.log("The list is empty.");
			throw new Error("Empty list");
		} else if (this.head === this.tail && this.length === 1) {
			let val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return val;
		}
		let currentNode = this.head;
		let prevNode = null;

		while (currentNode.next !== null) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}

		prevNode.next = null;
		this.tail = prevNode;
		this.length -= 1;
		return currentNode.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		if (!this.head) {
			console.log("The list is empty.");
			return;
		} else if (this.head === this.tail && this.length === 1) {
			let returnValue = this.head.val;
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return returnValue;
		}
		let returnValue = this.head.val;
		this.head = this.head.next;
		this.length -= 1;
		return returnValue;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}

		return this._get(idx).val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}

		this._get(idx).val = val;

		return this._get(idx).val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx > this.length || idx < 0) {
			throw new Error("Invalid index.");
		}

		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);

		let newNode = new Node(val);
		let prevNode = this._get(idx - 1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;

		this.length += 1;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx > this.length || idx < 0) {
			throw new Error("Invalid index.");
		}

		if (idx === 0) return this.shift();
		if (idx === this.length - 1) return this.pop();

		let prevNode = this._get(idx - 1);
		currentNode = prevNode.next;
		prevNode.next = currentNode.next;
		this.length -= 1;

		return currentNode.val;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) return 0;

		let sum = 0;
		let currentNode = this.head;

		while (currentNode) {
			sum += currentNode.val;
			currentNode = currentNode.next;
		}

		return sum / this.length;
	}
}

module.exports = LinkedList;
