import fs from "fs";

const one = `+!![]`;
/**
 * translate a number to a weird string
 * @param {number} n
 */
const numberToWeirdString = (n) => {
  return Array.from({ length: n }, () => one).join(" + ");
};

/**
 * @param {string} str string to convert
 * @returns weird string array
 */
const encodeWeirdStringArray = (str) =>
  [...str].map((char) => {
    return numberToWeirdString(char.charCodeAt(0));
  });

/**
 * nodejs executeable function to get the real string
 * @param {string} str
 * @returns {string}
 */
const createExecuteableFunc = (str) => {
  const stringArray = encodeWeirdStringArray(str);
  let result = "String.fromCharCode( ";
  stringArray.forEach((s, i) => {
    result += s;
    if (i !== stringArray.length - 1) {
      result += " ,";
    }
  });
  result += " )";
  return result;
};

/**
 * weird string to human readable string
 * @param {string[]} str
 */
const decodeWeirdStringToString = (str) => {
  let result = "String.fromCharCode( ";
  str.forEach((s, i) => {
    result += `eval(${s})`;
    if (i !== str.length - 1) {
      result += " ,";
    }
  });
  result += " )";
  return eval(result);
};

export { createExecuteableFunc, decodeWeirdStringToString };
