// ======= main.js =======

// Import functions and constant from utils.js
import { add, multiply, pi } from './utils.js';

// Select output div and button
const outputDiv = document.getElementById("jsOutput");
const moduleBtn = document.getElementById("moduleBtn");

// Function to demonstrate module usage
const showModuleDemo = () => {
    const sum = add(5, 3);          // using add function
    const product = multiply(4, 2); // using multiply function
    const output = `Sum (5 + 3): ${sum}<br>` +
                   `Product (4 * 2): ${product}<br>` +
                   `Value of Pi: ${pi}`;

    // Display on webpage
    outputDiv.innerHTML = output;

    // Console debugging
    console.log("Sum:", sum);
    console.log("Product:", product);
    console.log("Pi:", pi);
};

// Button click event
moduleBtn.addEventListener("click", showModuleDemo);
