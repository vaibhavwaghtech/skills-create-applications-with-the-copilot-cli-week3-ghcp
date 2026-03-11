const { calculate, modulo, power, squareRoot, handleCalculation } = require('../calculator');

describe('Calculator - Basic Operations', () => {
  
  // Addition Tests
  describe('Addition (+)', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should add negative and positive numbers: -5 + 10 = 5', () => {
      expect(calculate(-5, '+', 10)).toBe(5);
    });

    test('should add two negative numbers: -3 + (-2) = -5', () => {
      expect(calculate(-3, '+', -2)).toBe(-5);
    });

    test('should add zero to a number: 5 + 0 = 5', () => {
      expect(calculate(5, '+', 0)).toBe(5);
    });

    test('should add decimal numbers: 2.5 + 3.7 = 6.2', () => {
      expect(calculate(2.5, '+', 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(calculate(1000000, '+', 2000000)).toBe(3000000);
    });
  });

  // Subtraction Tests
  describe('Subtraction (-)', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(calculate(5, '-', 10)).toBe(-5);
    });

    test('should subtract two negative numbers: -5 - (-3) = -2', () => {
      expect(calculate(-5, '-', -3)).toBe(-2);
    });

    test('should subtract zero from a number: 10 - 0 = 10', () => {
      expect(calculate(10, '-', 0)).toBe(10);
    });

    test('should subtract decimal numbers: 10.5 - 3.2 = 7.3', () => {
      expect(calculate(10.5, '-', 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract a number from itself: 7 - 7 = 0', () => {
      expect(calculate(7, '-', 7)).toBe(0);
    });
  });

  // Multiplication Tests
  describe('Multiplication (*)', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should multiply positive and negative numbers: 6 * (-3) = -18', () => {
      expect(calculate(6, '*', -3)).toBe(-18);
    });

    test('should multiply two negative numbers: (-4) * (-5) = 20', () => {
      expect(calculate(-4, '*', -5)).toBe(20);
    });

    test('should multiply by zero: 10 * 0 = 0', () => {
      expect(calculate(10, '*', 0)).toBe(0);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculate(2.5, '*', 4)).toBe(10);
    });

    test('should multiply by one: 7 * 1 = 7', () => {
      expect(calculate(7, '*', 1)).toBe(7);
    });

    test('should multiply large numbers: 1000 * 2000 = 2000000', () => {
      expect(calculate(1000, '*', 2000)).toBe(2000000);
    });
  });

  // Division Tests
  describe('Division (/)', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should divide positive and negative numbers: 15 / (-3) = -5', () => {
      expect(calculate(15, '/', -3)).toBe(-5);
    });

    test('should divide two negative numbers: (-20) / (-4) = 5', () => {
      expect(calculate(-20, '/', -4)).toBe(5);
    });

    test('should divide decimal numbers: 7.5 / 2.5 = 3', () => {
      expect(calculate(7.5, '/', 2.5)).toBe(3);
    });

    test('should divide resulting in decimal: 5 / 2 = 2.5', () => {
      expect(calculate(5, '/', 2)).toBe(2.5);
    });

    test('should divide zero by a number: 0 / 5 = 0', () => {
      expect(calculate(0, '/', 5)).toBe(0);
    });

    test('should divide a number by one: 10 / 1 = 10', () => {
      expect(calculate(10, '/', 1)).toBe(10);
    });
  });

  // Edge Case Tests - Division by Zero
  describe('Division by Zero (Error Cases)', () => {
    test('should handle division by zero: 10 / 0 returns error', () => {
      expect(calculate(10, '/', 0)).toBe('Error: Division by zero');
    });

    test('should handle zero divided by zero: 0 / 0 returns error', () => {
      expect(calculate(0, '/', 0)).toBe('Error: Division by zero');
    });

    test('should handle negative division by zero: -5 / 0 returns error', () => {
      expect(calculate(-5, '/', 0)).toBe('Error: Division by zero');
    });
  });

  // Edge Case Tests - Invalid Input
  describe('Invalid Input Handling', () => {
    test('should handle non-numeric first operand: "abc" + 5 returns error', () => {
      expect(calculate('abc', '+', 5)).toBe('Error: Invalid operands');
    });

    test('should handle non-numeric second operand: 5 + "xyz" returns error', () => {
      expect(calculate(5, '+', 'xyz')).toBe('Error: Invalid operands');
    });

    test('should handle both operands non-numeric: "abc" + "def" returns error', () => {
      expect(calculate('abc', '+', 'def')).toBe('Error: Invalid operands');
    });

    test('should handle invalid operator: 5 # 3 returns error', () => {
      expect(calculate(5, '#', 3)).toBe('Error: Invalid operator');
    });

    test('should handle empty operator: 5 "" 3 returns error', () => {
      expect(calculate(5, '', 3)).toBe('Error: Invalid operator');
    });
  });

  // String to Number Conversion Tests
  describe('String to Number Conversion', () => {
    test('should convert string operands to numbers: "5" + "3" = 8', () => {
      expect(calculate('5', '+', '3')).toBe(8);
    });

    test('should handle decimal string operands: "2.5" * "4" = 10', () => {
      expect(calculate('2.5', '*', '4')).toBe(10);
    });

    test('should handle negative string operands: "-10" - "-3" = -7', () => {
      expect(calculate('-10', '-', '-3')).toBe(-7);
    });
  });

  // Floating Point Precision Tests
  describe('Floating Point Precision', () => {
    test('should handle floating point addition: 0.1 + 0.2 ≈ 0.3', () => {
      expect(calculate(0.1, '+', 0.2)).toBeCloseTo(0.3);
    });

    test('should handle floating point subtraction: 1.1 - 0.3 ≈ 0.8', () => {
      expect(calculate(1.1, '-', 0.3)).toBeCloseTo(0.8);
    });

    test('should handle floating point multiplication: 0.1 * 0.2 = 0.02', () => {
      expect(calculate(0.1, '*', 0.2)).toBeCloseTo(0.02);
    });

    test('should handle floating point division: 1 / 3 ≈ 0.333...', () => {
      expect(calculate(1, '/', 3)).toBeCloseTo(0.333, 2);
    });
  });
});

// Modulo Operations Tests
describe('Calculator - Modulo Operations', () => {
  describe('Modulo (%)', () => {
    test('should calculate modulo with positive numbers: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo as shown in example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo: 17 % 5 = 2', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('should calculate modulo: 20 % 6 = 2', () => {
      expect(modulo(20, 6)).toBe(2);
    });

    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with negative dividend: -17 % 5 = -2', () => {
      expect(modulo(-17, 5)).toBe(-2);
    });

    test('should calculate modulo with negative divisor: 17 % -5 = 2', () => {
      expect(modulo(17, -5)).toBe(2);
    });

    test('should calculate modulo with both negative: -17 % -5 = -2', () => {
      expect(modulo(-17, -5)).toBe(-2);
    });

    test('should calculate modulo with decimal numbers: 10.5 % 3 = 1.5', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should return zero when dividend is multiple of divisor: 20 % 5 = 0', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should handle modulo with zero dividend: 0 % 5 = 0', () => {
      expect(modulo(0, 5)).toBe(0);
    });
  });

  // Modulo Error Cases
  describe('Modulo by Zero (Error Cases)', () => {
    test('should throw error for modulo by zero: 10 % 0', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for zero modulo by zero: 0 % 0', () => {
      expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for negative modulo by zero: -5 % 0', () => {
      expect(() => modulo(-5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // Modulo via handleCalculation
  describe('Modulo via handleCalculation', () => {
    test('should handle modulo with % operator: 5 % 2 = 1', () => {
      expect(handleCalculation('%', ['5', '2'])).toBe(1);
    });

    test('should handle modulo with "modulo" keyword: 17 % 5 = 2', () => {
      expect(handleCalculation('modulo', ['17', '5'])).toBe(2);
    });

    test('should return error for modulo with wrong operand count', () => {
      expect(handleCalculation('%', ['5'])).toBe('Error: Modulo requires exactly 2 operands');
    });

    test('should return error for modulo with too many operands', () => {
      expect(handleCalculation('%', ['5', '2', '3'])).toBe('Error: Modulo requires exactly 2 operands');
    });

    test('should return error for modulo by zero via handleCalculation', () => {
      expect(handleCalculation('%', ['10', '0'])).toBe('Error: Modulo by zero is not allowed');
    });
  });
});

// Power/Exponentiation Operations Tests
describe('Calculator - Power Operations', () => {
  describe('Power/Exponentiation (^)', () => {
    test('should calculate power with positive exponent: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power as shown in example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power: 2 ^ 8 = 256', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power: 5 ^ 3 = 125', () => {
      expect(power(5, 3)).toBe(125);
    });

    test('should calculate power: 3 ^ 4 = 81', () => {
      expect(power(3, 4)).toBe(81);
    });

    test('should handle zero exponent: 5 ^ 0 = 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle base of zero: 0 ^ 5 = 0', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative exponent: 2 ^ -3 = 0.125', () => {
      expect(power(2, -3)).toBeCloseTo(0.125);
    });

    test('should handle negative base with even exponent: (-2) ^ 4 = 16', () => {
      expect(power(-2, 4)).toBe(16);
    });

    test('should handle negative base with odd exponent: (-2) ^ 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle fractional exponent: 16 ^ 0.5 = 4', () => {
      expect(power(16, 0.5)).toBe(4);
    });

    test('should handle decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(power(2.5, 2)).toBeCloseTo(6.25);
    });

    test('should calculate large powers: 10 ^ 6 = 1000000', () => {
      expect(power(10, 6)).toBe(1000000);
    });
  });

  // Power via handleCalculation
  describe('Power via handleCalculation', () => {
    test('should handle power with ^ operator: 2 ^ 3 = 8', () => {
      expect(handleCalculation('^', ['2', '3'])).toBe(8);
    });

    test('should handle power with "power" keyword: 3 ^ 4 = 81', () => {
      expect(handleCalculation('power', ['3', '4'])).toBe(81);
    });

    test('should return error for power with wrong operand count', () => {
      expect(handleCalculation('^', ['2'])).toBe('Error: Power requires exactly 2 operands');
    });

    test('should return error for power with too many operands', () => {
      expect(handleCalculation('^', ['2', '3', '4'])).toBe('Error: Power requires exactly 2 operands');
    });

    test('should handle negative exponent via handleCalculation', () => {
      expect(handleCalculation('^', ['2', '-3'])).toBeCloseTo(0.125);
    });
  });
});

// Square Root Operations Tests
describe('Calculator - Square Root Operations', () => {
  describe('Square Root (√)', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root as shown in example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root: √36 = 6', () => {
      expect(squareRoot(36)).toBe(6);
    });

    test('should calculate square root: √49 = 7', () => {
      expect(squareRoot(49)).toBe(7);
    });

    test('should calculate square root of perfect square: √100 = 10', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('should calculate square root of non-perfect square: √2 ≈ 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of decimal: √2.25 = 1.5', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of zero: √0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one: √1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of large number: √10000 = 100', () => {
      expect(squareRoot(10000)).toBe(100);
    });
  });

  // Square Root Error Cases - Negative Numbers
  describe('Square Root of Negative Numbers (Error Cases)', () => {
    test('should throw error for square root of negative number: √(-4)', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for square root of -1: √(-1)', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for square root of large negative: √(-100)', () => {
      expect(() => squareRoot(-100)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for square root of small negative: √(-0.5)', () => {
      expect(() => squareRoot(-0.5)).toThrow('Square root of negative numbers is not allowed');
    });
  });

  // Square Root via handleCalculation
  describe('Square Root via handleCalculation', () => {
    test('should handle square root with √ symbol: √16 = 4', () => {
      expect(handleCalculation('√', ['16'])).toBe(4);
    });

    test('should handle square root with "sqrt" keyword: √25 = 5', () => {
      expect(handleCalculation('sqrt', ['25'])).toBe(5);
    });

    test('should handle square root with "squareroot" keyword: √36 = 6', () => {
      expect(handleCalculation('squareroot', ['36'])).toBe(6);
    });

    test('should return error for square root with no operands', () => {
      expect(handleCalculation('√', [])).toBe('Error: Square root requires exactly 1 operand');
    });

    test('should return error for square root with too many operands', () => {
      expect(handleCalculation('√', ['16', '4'])).toBe('Error: Square root requires exactly 1 operand');
    });

    test('should return error for negative square root via handleCalculation', () => {
      expect(handleCalculation('√', ['-4'])).toBe('Error: Square root of negative numbers is not allowed');
    });

    test('should return error for negative square root with sqrt keyword', () => {
      expect(handleCalculation('sqrt', ['-1'])).toBe('Error: Square root of negative numbers is not allowed');
    });
  });
});

// Extended Operations String Input Tests
describe('Calculator - Extended Operations with String Input', () => {
  describe('Modulo with String Input', () => {
    test('should handle modulo with string operands: "20" % "6" = 2', () => {
      expect(handleCalculation('%', ['20', '6'])).toBe(2);
    });

    test('should handle modulo with decimal string: "10.5" % "3" = 1.5', () => {
      expect(handleCalculation('%', ['10.5', '3'])).toBeCloseTo(1.5);
    });

    test('should return error for modulo with invalid string operands', () => {
      expect(handleCalculation('%', ['abc', '2'])).toBe('Error: All inputs must be valid numbers');
    });
  });

  describe('Power with String Input', () => {
    test('should handle power with string operands: "2" ^ "8" = 256', () => {
      expect(handleCalculation('^', ['2', '8'])).toBe(256);
    });

    test('should handle power with decimal string: "2.5" ^ "2" = 6.25', () => {
      expect(handleCalculation('^', ['2.5', '2'])).toBeCloseTo(6.25);
    });

    test('should return error for power with invalid string operands', () => {
      expect(handleCalculation('^', ['2', 'xyz'])).toBe('Error: All inputs must be valid numbers');
    });
  });

  describe('Square Root with String Input', () => {
    test('should handle square root with string operand: "49" = 7', () => {
      expect(handleCalculation('√', ['49'])).toBe(7);
    });

    test('should handle square root with decimal string: "6.25" = 2.5', () => {
      expect(handleCalculation('√', ['6.25'])).toBe(2.5);
    });

    test('should return error for square root with invalid string operand', () => {
      expect(handleCalculation('√', ['abc'])).toBe('Error: All inputs must be valid numbers');
    });
  });
});
