// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// const para = document.querySelector("p");

// para.addEventListener("click", updateName);

// function updateName() {
//   const name = prompt("Enter a new name");
//   myHeading.textContent = `Mozilla is cool, ${name}`;
// }

// const myImage = document.getElementById("myImage");

// myImage.addEventListener("click", updatePage);

// function updatePage() {
//   myHeading.textContent = "Is Brave even Cooler?";
//   document.body.style.backgroundColor = "white";
//   myImage.style.visibility = "hidden";

//   const newIcone = document.createElement("img");
//   newIcone.src = "/images/icons8-brave-240.png";
//   newIcone.alt = "Brave";

//   document.body.appendChild(newIcon);
// }

let btn = document.querySelector("#username");

let h1 = document.querySelector("h1");

let img = document.querySelector("img");

btn.addEventListener("click", function () {
  let name = prompt("Enter UserName: ");

  h1.innerHTML = " Mozilla is Cool, " + name;
});

img.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";

  img.setAttribute("src", "/images/icons8-brave-240.png");

  h1.innerHTML = "Is Brave even Cooler?";
});
