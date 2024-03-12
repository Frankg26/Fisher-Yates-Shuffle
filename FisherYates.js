/**
 * Function shuffles an array of arbitrary length by utilizing the Fisher-Yates algorithm, resulting in a new unique array each time it is run.
 * @author Francisco Garcia
 * 
 * @param  {Array} arr The Array containing a sequence of numbers that will be shuffled using the Fisher-Yates Algorithm.
 */
function fisherYatesShuffle(arr) {
    // Perform the Fisher-Yates Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        // Choose a random number between 0 and the current iterated index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements in the array
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;   
    }
}

/**
 * Main Function
 * Prints a list of 10,000 unique numbers between 1 and 10,000 (inclusive) in random order each time it runs.
 */
function main() {
    // The array contains the numbers from 1 to 10,000
    const arr = [];
    for (let i = 1; i <= 10000; i++) {
        arr.push(i);
    }

    // Run the fisherYatesShuffle function
    fisherYatesShuffle(arr);

    // Print the shuffled array
    console.log(arr.join('\n'));  
}

// Run the main function
main();