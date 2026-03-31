// Typing effect (nice UX touch)
const text = "Lahav Kasper";
const title = document.getElementById("typing-title");

let i = 0;

function type() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

// clear before typing
title.innerHTML = "";
type();