/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(value);
    return this;
  },

  removeLink(position) {
    const pos = position-1;
    if (this.array[pos] === undefined) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.array.splice(pos, 1);
    }
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    const cainArray = this.array.map((el) => `( ${el} )`);
    const final=  cainArray.join('~~');
    this.array = [];
    return final;
  },
};
