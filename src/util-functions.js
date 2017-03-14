const combineClassNames = function (...classNames) {
  if (classNames.length === 0) {
    return '';
  }
  let className = '';
  classNames.forEach((cn) => {
    if (cn) { className = `${className} ${cn}`; }
  });
  return className.trim();
};

export {
  combineClassNames
};
