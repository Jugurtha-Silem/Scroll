const buttons = document.querySelectorAll(".btn");
const result  = document.getElementById("result");

buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
} );

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
    result.textContent = '';
});
