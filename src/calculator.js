#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers from an initial value
 * - Multiplication (*): Multiply two or more numbers
 * - Division (/): Divide numbers with error handling for division by zero
 */

const readline = require('readline');

// Perform two-number arithmetic operations
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

// Addition: Add two or more numbers
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Subtraction: Subtract numbers from an initial value
function subtract(initial, ...numbers) {
  return numbers.reduce((result, num) => result - num, initial);
}

// Multiplication: Multiply two or more numbers
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Division: Divide numbers with error handling for division by zero
function divide(initial, ...numbers) {
  if (numbers.some(num => num === 0)) {
    throw new Error('Division by zero is not allowed');
  }
  return numbers.reduce((result, num) => result / num, initial);
}

function handleCalculation(operation, operands) {
  try {
    const nums = operands.map(num => parseFloat(num));
    
    if (nums.some(isNaN)) {
      return 'Error: All inputs must be valid numbers';
    }

    let result;
    switch (operation.toLowerCase()) {
      case '+':
      case 'add':
        result = add(...nums);
        break;
      case '-':
      case 'subtract':
        result = subtract(...nums);
        break;
      case '*':
      case 'multiply':
        result = multiply(...nums);
        break;
      case '/':
      case 'divide':
        result = divide(...nums);
        break;
      default:
        return 'Error: Invalid operation. Use +, -, *, or /';
    }

    return result;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

function showMenu() {
  console.log('\n=== Node.js CLI Calculator ===');
  console.log('Operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Examples:');
  console.log('  + 5 3 2      -> 10 (addition)');
  console.log('  - 10 3 2     -> 5 (subtraction)');
  console.log('  * 4 5 2      -> 40 (multiplication)');
  console.log('  / 100 2 5    -> 10 (division)');
  console.log('Type "exit" to quit\n');
}

function startCalculator() {
  showMenu();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const promptUser = () => {
    rl.question('Enter operation and operands (or "exit"): ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      const parts = input.trim().split(/\s+/);
      if (parts.length < 2) {
        console.log('Error: Please provide an operation and at least one operand');
        promptUser();
        return;
      }

      const operation = parts[0];
      const operands = parts.slice(1);
      const result = handleCalculation(operation, operands);
      console.log(`Result: ${result}`);
      promptUser();
    });
  };

  promptUser();
}

// Start calculator if run directly
if (require.main === module) {
  startCalculator();
}

// Export for testing and CLI usage
module.exports = { calculate, add, subtract, multiply, divide, handleCalculation };
