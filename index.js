function writeCards(names, event) {
    const messages = []; // Initialize an empty array to store messages
    for (let i = 0; i < names.length; i++) {
        // Create the thank-you message
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message); // Add the message to the array
    }
    return messages; // Return the array of messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
function countDown(number) {
    while (number >= 0) {
        console.log(number); // Log the current number
        number--; // Decrement the number
    }
}
countDown(10);



