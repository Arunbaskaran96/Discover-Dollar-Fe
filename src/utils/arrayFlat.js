const arrayFlatern = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      result.push(arr[i].name);
      result.push(...arrayFlatern(arr[i].children));
    } else {
      result.push(arr[i].name);
    }
  }
  return result;
};

export default arrayFlatern;
