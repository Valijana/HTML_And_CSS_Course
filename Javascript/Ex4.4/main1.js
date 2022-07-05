let userInput = prompt("Ask a question");

switch (userInput) {
    case "What are you doing":
        message = "I am eating";
        break;
        case "What are you going":
            message = "I am eating";
        break;
        case "Are we there yet":
            message = "No";
        break;
        case "Do you know coding":
            message = "Yes i know";
            break;
    default:
        message = "I dot understand the question";
}
console.log(userInput);
console.log(message);