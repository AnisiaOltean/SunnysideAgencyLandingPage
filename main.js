const triangle = document.querySelector(".triangle");
const navigation = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");

triangle.classList.add("hidden");
navigation.classList.add("hidden");

/* Show or hide navigation when clicking hamburger*/

hamburger.addEventListener("click", () => {
  triangle.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
});
