let n =3;

// Ensure n is greater than 1
if (n > 1) {
    let rows = 2 * n - 1; // Total rows will be 2*n - 1

    // Top half of the diamond
    for (let i = 1; i <= n; i++) {
        let stars = '';
        // Print leading spaces
        for (let j = 1; j <= n - i; j++) {
            stars += ' '; // Add space
        }
        // Print stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += '*'; // Add star
        }
        console.log(stars);
    }

    // Bottom half of the diamond
    for (let i = n - 1; i >= 1; i--) {
        let stars = '';
        // Print leading spaces
        for (let j = 1; j <= n - i; j++) {
            stars += ' '; 
        }
        // Print stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += '*'; 
        }
        console.log(stars);
    }
} else {
    console.log("Please enter a value greater than 1 for n.");
}
