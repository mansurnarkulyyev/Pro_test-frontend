const spliceOrAddToStore = (arr, obj, variable) => {
  const requiredIdx = arr.findIndex((el) => el[variable] === obj[variable]);
  if (requiredIdx !== -1) {
    arr.splice(requiredIdx, 1, obj);
    return;
  }
  return [...arr, obj];
};

export default spliceOrAddToStore;
