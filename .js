function maxElement() {
    const arr = [3, 5, 7, 0, 3, 2];

    let max = arr[0]; // Initialize max with the first element of the array

    for (let i = 1; i < arr.length; i++) { // Start from the second element
        if (arr[i] > max) { // Compare current element with max
            max = arr[i];
        }
    }

    console.log("Max element:", max); // Log the maximum element

}

maxElement(); // Call the function  `   