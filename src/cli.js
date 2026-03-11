#!/usr/bin/env node

/**
 * CLI interface for the Calculator
 */

const readline = require('readline');
const { calculate } = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Interactive prompt
function startCalculator() {
  rl.question('Enter calculation (e.g., 5 + 3) or type "exit" to quit: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    // Parse input
    const parts = input.trim().split(/\s+/);
    if (parts.length !== 3) {
      console.log('Invalid format. Please enter: number operator number (e.g., 5 + 3)\n');
      startCalculator();
      return;
    }

    const [operand1, operator, operand2] = parts;
    const result = calculate(operand1, operator, operand2);
    console.log(`Result: ${result}\n`);
    startCalculator();
  });
}

// Command-line argument support
if (process.argv.length === 5) {
  const [, , operand1, operator, operand2] = process.argv;
  const result = calculate(operand1, operator, operand2);
  console.log(result);
} else if (process.argv.length === 2) {
  // Start interactive mode if no arguments provided
  console.log('🧮 Node.js CLI Calculator');
  console.log('Supported operations: + (addition), - (subtraction), * (multiplication), / (division)\n');
  startCalculator();
} else {
  console.log('Usage:');
  console.log('  Interactive mode: node cli.js');
  console.log('  Direct calculation: node cli.js <number1> <operator> <number2>');
  console.log('  Example: node cli.js 10 + 5');
  process.exit(1);
}
