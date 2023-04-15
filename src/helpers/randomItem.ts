export const randomItem = (arr: Object[]) => {
  const randomArr: Object[] = [];
  const count = 2;

  // Pick a random object of profession
  for (let i = 0; i < count; i++) {
    const random: number = Math.floor(Math.random() * arr.length);

    randomArr.push(arr[random]);
  }

  // If two objects are the same, selects the new one
  if (randomArr[0] === randomArr[1]) {
    const random: number = Math.floor(Math.random() * arr.length);

    randomArr[1] = arr[random];
  }

  return randomArr;
};
