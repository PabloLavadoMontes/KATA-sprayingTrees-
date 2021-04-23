/* You have to create a function 'task' that will take 3 arguments(w, n, c):Weekday

-Number of trees that must be sprayed on that day;  treesNumber = function parameter (n);
-Let cost of all liquid be x; x = n(trees) * c(cost);

Examples:
task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
 */
import { multiplication, task, checkDay } from "../sprayingTrees";

// Tests for multiplication(number, number);
test("Cost of all liquid = trees * cost", () => {
    expect(multiplication(15, 2)).toBe(30);
});
test("Cost of all liquid = trees * cost", () => {
    expect(multiplication(3, 10)).toBe(30);
});
test("Cost of all liquid = trees * cost", () => {
    expect(multiplication(11, 100)).toBe(1100);
});
test("Cost of all liquid = trees * cost", () => {
    expect(multiplication(0.5, 10)).toBe(5);
});
test("Cost of all liquid = trees * cost", () => {
    expect(multiplication(-3, 10)).toBe(-1);
});


// Tests for task(string, number);
test("String with the 3 final values", () => {
    expect(task("Monday", 15, 2)).toBe("It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid")
});
test("String with the 3 final values", () => {
    expect(task("Thursday", 3, 10)).toBe("It is Thursday today, Michael, you have to work, you must spray 3 trees and you need 30 dollars to buy liquid");
});
test("String with the 3 final values", () => {
    expect(task("Wednesday", 11, 100)).toBe("It is Wednesday today, Robert, you have to work, you must spray 11 trees and you need 1100 dollars to buy liquid");
});
test("String with the 3 final values", () => {
    expect(task("Friday", 0.5, 10)).toBe("It is Friday today, William, you have to work, you must spray 0.5 trees and you need 5 dollars to buy liquid");
});
test("String with the 3 final values", () => {
    expect(task("Tuesday", -3, 10 )).toBe("Oh no, que don't expect a negative number, so please, check this out" );
});

// Tests for checkNames(w: string);

test("Returns the name of the worker for each day", () => {
    expect(checkDay("Monday")).toBe("James");
});
test("Returns the name of the worker for each day", () => {
    expect(checkDay("Tuesday")).toBe("John");
});
test("Returns the name of the worker for each day", () => {
    expect(checkDay("Wednesday")).toBe("Robert");
});
test("Returns the name of the worker for each day", () => {
    expect(checkDay("Thursday")).toBe("Michael");
});
test("Returns the name of the worker for each day", () => {
    expect(checkDay("Friday")).toBe("William");
});