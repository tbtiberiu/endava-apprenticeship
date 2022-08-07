const countElementsInDocument = (document, elementName) => {
  return document.querySelectorAll(elementName).length;
};

const output = document.querySelector("#nr-spans");
const nrOfSpans = countElementsInDocument(document, "span");
output.innerText = nrOfSpans;
