var display = document.getElementById("output");

function set(m) {
    display.textContent += m.textContent;
}

function calc() {
    display.textContent = new Function("return " + display.textContent)();
}

function reset() {
    display.textContent = "";
}