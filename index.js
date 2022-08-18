const targetElement = document.querySelectorAll("button");
let screnValue = "";
for (const item of targetElement) {
    item.addEventListener("click", function (event) {
        const targetInput = document.getElementById("target-input");
        if (event.target.innerText == "X") {
            screnValue += "*";
            targetInput.value = screnValue;
        }
        else if (event.target.innerText == "C") {
            screnValue = "";
            targetInput.value = screnValue;
        }
        else if (event.target.innerText == "=") {
            targetInput.value = eval(screnValue);
            screnValue = targetInput.value;
        }
        else if (event.target.innerText == "x") {
            const array = screnValue.split("");
            array.pop();
            targetInput.value = array.join("");
            screnValue = targetInput.value;
        }
        else {
            screnValue += event.target.innerText;
            targetInput.value = screnValue;
        }

    })
}