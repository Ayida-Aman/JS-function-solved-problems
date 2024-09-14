# Function Practice Exercises

## 1. Shopping Cart TotalTask:
 Write a function called calculateTotal that takes an array of item prices and returns the total cost.Test Cases:calculateTotal([10.99, 5.75, 3.50]) should return 20.24calculateTotal([50.00, 25.50]) should return 75.50calculateTotal([]) should return 0

## 2. Word Occurrence CounterTask:
 Write a function called countOccurrences that takes an array of comments and a word, returning the count of how many times the word appears.Test Cases:countOccurrences(["this is good", "good day", "good times"], "good") should return 3countOccurrences(["hello", "world", "hello again"], "hello") should return 2countOccurrences(["hi there"], "hello") should return 0
`

## 3. covert to fahrenheit Task:
 Write a function called convertToFahrenheit that converts an array of Celsius temperatures to Fahrenheit.Test Cases:convertToFahrenheit([0, 100]) should return [32, 212]convertToFahrenheit([-40, 0, 40]) should return [-40, 32, 104]convertToFahrenheit([15, 20, 25]) should return [59, 68, 77]

## 4. Task Report GeneratorTask:
 Write a function called generateReport that takes an object with usernames as keys and task counts as values, returning an array of report strings.Test Cases:generateReport({ "Alice": 5, "Bob": 7 }) should return ["Alice completed 5 tasks", "Bob completed 7 tasks"]generateReport({ "John": 10, "Jane": 2 }) should return ["John completed 10 tasks", "Jane completed 2 tasks"]generateReport({ "Eva": 0, "Adam": 3 }) should return ["Eva completed 0 tasks", "Adam completed 3 tasks"]

## 5. Even Number FilterTask:
 Write a function called filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.Test Cases:filterEvenNumbers([1, 2, 3, 4, 5, 6]) should return [2, 4, 6]filterEvenNumbers([11, 20, 33, 42]) should return [20, 42]filterEvenNumbers([1, 3, 5]) should return []