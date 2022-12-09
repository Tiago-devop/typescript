const toNumber = (num: number | string) => {
  if (typeof num === "number") {
    return num;
  } else if (typeof num === "string") {
    return +num;
  } else {
    throw new Error("value must be a number or a string");
  }
};

console.log(toNumber(10));
console.log(toNumber("10"), typeof toNumber("10"));
console.log(toNumber(true));
