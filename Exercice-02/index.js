function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operator";
  }

  return result;
}
