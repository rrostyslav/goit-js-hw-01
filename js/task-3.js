const numberToString = (string) => {
  const regexResult = string.match(/[+-]?([0-9]*[.])?[0-9]+/g)?.at(0);

  return regexResult ? Number(regexResult) : undefined;
};

const getElementWidth = (content, padding, border) =>
  [
    numberToString(content),
    numberToString(padding) * 2,
    numberToString(border) * 2,
  ].reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
