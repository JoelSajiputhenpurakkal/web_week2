let c;
function validate(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    let no = document.getElementById("number").value;
    let msg = document.getElementById("msg");
    msg.textContent = "";
    msg.style.color = "#AAABB8";

    if (no == c) {
        msg.textContent = "Congrats! You guessed it!";
        msg.style.color = "#28A745"; // Green color for correct guess
        msg.classList.add("correct-guess-animation"); // Add animation class
    } else if (no < c) {
        msg.textContent = "Try a little higher.";
        msg.classList.remove("correct-guess-animation"); // Remove animation class
    } else {
        msg.textContent = "Try a little lower.";
        msg.classList.remove("correct-guess-animation"); // Remove animation class
    }
}

function generator() {
    c = Math.floor(Math.random() * 100) + 1;
    document.getElementById("msg").textContent = ""; // Clear previous message
    document.getElementById("msg").classList.remove("correct-guess-animation"); // Reset animation
}
