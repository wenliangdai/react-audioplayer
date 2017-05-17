/**
 * This function is used to combine one or more classNames into one string.
 * Value null or undefined will be ignored.
 * E.g. combineClassNames('foo', 'bar') will return 'foo bar', 
 *      combineClassNames('foo', null, 'bar') will also return 'foo bar'.
 * @param {*} classNames 
 */
const combineClassNames = (...classNames) => {
  if (classNames.length === 0) {
    return '';
  }
  let className = '';
  classNames.forEach((cn) => {
    if (cn) { className = `${className} ${cn}`; }
  });
  return className.trim();
};

/**
 * This function is used to remove the unit substring inside a CSS <length>.
 * E.g. getCleanSizeNumber('100px') will return '100', getCleanSizeNumber('200') will return '200'.
 */
const getCleanSizeNumber = numStr => {
  const regExp = /[a-z]+/i;
  let newStr = numStr;
  if (regExp.test(newStr)) {
    const result = regExp.exec(newStr);
    newStr = newStr.slice(0, result.index);
  }
  return newStr.trim();
};

export {
  combineClassNames,
  getCleanSizeNumber
};
