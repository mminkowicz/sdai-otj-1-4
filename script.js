// Definition of the function
function saleTotal(item1, item2, item3) {
    return item3 + item1 + item2;
}

// Call of the function
console.log(saleTotal(2.99, 5.25, 4.99)); // Expected to log the total of the items

// Function to calculate the area of a rectangle
// Formula = l * w
// Definition of the function
function areaRectangle(length, width) {
    return length * width
}

console.log(areaRectangle(10,20))


function divide(num1, num2) {
    return num1 / num2;
}

// Calling the function with different arguments and printing the results
console.log("integer answer", divide(10, 2)); // Should print 5
console.log(divide(15, 3)); // Should print 5
console.log(divide(9, 3));  // Should print 3
console.log(divide(100, 25)); // Should print 4