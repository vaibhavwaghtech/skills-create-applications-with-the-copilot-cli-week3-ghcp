/**
 * Node.js CLI Calculator Application
 * Supports the following operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

// Perform arithmetic operations
function calculate(operand1, operator, operand2) {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Error: Invalid operands';
  }

  switch (operator) {
    case '+':
      return num1 + num2; // Addition
    case '-':
      return num1 - num2; // Subtraction
    case '*':
      return num1 * num2; // Multiplication
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero';
      }
      return num1 / num2; // Division
    default:
      return 'Error: Invalid operator';
  }
}

// Export for testing and CLI usage
module.exports = { calculate };
