function execute(func, operand) {
  let returnedValue = func(operand);
  return returnedValue;
}

console.log(execute(function (number) {
  return number * 2;
}, 10)); // 20

console.log(execute(function (string) {
  return string.toUpperCase();
}, 'hey there buddy')); // "HEY THERE BUDDY"
