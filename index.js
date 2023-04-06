const switchButton = document.querySelector('[data-js="switch"]');
const body = document.querySelector('[data-js="body"]');
const lightModeTitel = document.querySelector('[data-js="lightMode_titel"]');
switchButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    /*function switchColor() {
        var x = document.getElementById("DarkMode");
        if (x.innerHTML === "Dark Mode") {
          x.innerHTML = "Light Mode";
        } else {
          x.innerHTML = "Dark Mode";
        }
      };
    /*document.getElementById("DarkMode").innerHTML = "Light Mode";*/
});