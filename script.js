function countElementsByLevel(srcDOMElement, childElementName, level = 0) {
  let result = {};

  const children = srcDOMElement.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    const tagName = child.tagName.toLowerCase();
    childElementName = childElementName.toLowerCase();

    if (tagName === childElementName) {
      const key = tagName + level;
      result[key] ||= 0;
      result[key]++;
    }

    const childResult = countElementsByLevel(child, childElementName, level + 1);
    result = { ...result, ...childResult };
  }

  return result;
}

const div = document.querySelector("#thediv");
const output = countElementsByLevel(div, "span");
console.log(output);
