function countElementsByLevel(srcDOMElement, childElementName) {
  let result = {};
  let level = 0,
    count = 0;
  let itemsOnlevels = [1];
  let queue = [srcDOMElement];

  while (queue.length > 0) {
    let currentElement = queue.shift();
    let children = currentElement.children;

    itemsOnlevels[level + 1] ||= 0;
    itemsOnlevels[level + 1] += children.length;

    for (let i = 0; i < children.length; i++) {
      queue.push(children[i]);
    }

    if (currentElement.tagName.toLowerCase() === childElementName) {
      const key = `level${level}`;
      result[key] ||= 0;
      result[key]++;
    }

    count++;

    if (count === itemsOnlevels[level]) {
      count = 0;
      level++;
    }
  }

  return result;
}

const div = document.querySelector("#thediv");
const output = countElementsByLevel(div, "span");
console.log(output);
