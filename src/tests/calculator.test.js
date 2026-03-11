const { calculate } = require('../calculator');

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
