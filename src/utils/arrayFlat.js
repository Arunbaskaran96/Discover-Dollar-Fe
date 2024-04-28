// import menuItems from "../menulist.json";
const arrayFlatern = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      result.push(arr[i].name);
      result.push(...arrayFlatern(arr[i].children));
    } else {
      result.push(arr[i].name);
    }
    // console.log(arr[i]);
  }
  return result;
};

export default arrayFlatern;
// console.log(arrayFlatern(menuItems));
