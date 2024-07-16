import { add } from "./maths";
import { test, expect } from "vitest";

test("adds two numbers correctly", () => {
  // Arrange : Given
  const num1 = 2;
  const num2 = 3;

  // Act : When
  const result = add(num1, num2);

  // Assert : Then
  expect(result).toBe(5);
});
