// Example click actions
const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("You clicked: " + btn.textContent);
    });
});
