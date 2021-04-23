/* 
There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they re
Order is same as in the description(James works on mondays,John works on tuesdays and so on).

You have to create a function 'task' that will take 3 arguments(w, n, c):Weekday

-Number of trees that must be sprayed on that day;  treesNumber = function parameter (n);
-Let cost of all liquid be x; x = n(trees) * c(cost);

Examples:
task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
 */

export {multiplication, task, checkDay}


/**
 * Returns a string with the cost of all liquid;
 * @param {number} n
 * @param {string} w 
 * @returns {string} stringOut
 */
const task = (w: string, n: number, c: number): string => multiplication(n, c) > 0 ? `It is ${w} today, ${checkDay(w)}, you have to work, you must spray ${n} trees and you need ${multiplication(n, c)} dollars to buy liquid` : "Oh no, que don't expect a negative number, so please, check this out";


/**
 * Does a multiplication
 * @param {number} n 
 * @param {number} c 
 * @returns {number} result
 */
const multiplication = (n: number, c: number): number => (n > 0 && c > 0) ? n * c : -1;

/**
 * Returns the name of the worker for each day;
 * @param {string} w 
 * @returns {string} name
 */
function checkDay(w: string): string {
    let name: string = "";
    switch(w) {
        case "Monday":
            name = "James";
            break;

        case "Tuesday":
            name = "John";
            break;

        case "Wednesday":
            name = "Robert";
            break;

        case "Thursday":
            name = "Michael";
            break;

        case "Friday":
            name = "William";
            break;
    }
    return name;
}  


