const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let index = 0;
    const next = () => {
      if (index < this.data.length) {
        const value = this.data[index += 1];
        return { value, done: false };
      }

      if (index === this.data.length) {
        index = 0;
        const value = this.data[index += 1];
        return { value, done: false };
      }

      return { done: true };
    };

    return { next };
  },
};

for (const paragraphs of document.getElementsByTagName('p')) {
  let i = 0;
  const colorsIterator = colors[Symbol.iterator]();

  paragraphs.onclick = function () {
    this.style.color = colorsIterator.next().value;
    i += 1;
  };
}
