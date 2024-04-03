const switchButton = document.querySelector("#change-mode");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  if (theme === "dark") {
    document.querySelector("nav").classList.remove("dark");
    document.querySelector("header").classList.remove("dark");
    document.querySelector("section").classList.remove("dark");
    document.querySelector("footer").classList.remove("dark");
    document.querySelector("nav").classList.add("light");
    document.querySelector("header").classList.add("light");
    document.querySelector("section").classList.add("light");
    document.querySelector("footer").classList.add("light");
    theme = "light";
  } else {
    document.querySelector("nav").classList.remove("light");
    document.querySelector("header").classList.remove("light");
    document.querySelector("section").classList.remove("light");
    document.querySelector("footer").classList.remove("light");
    document.querySelector("nav").classList.add("dark");
    document.querySelector("header").classList.add("dark");
    document.querySelector("section").classList.add("dark");
    document.querySelector("footer").classList.add("dark");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("nav").classList.add("dark");
  document.querySelector("header").classList.add("dark");
  document.querySelector("section").classList.add("dark");
  document.querySelector("footer").classList.add("dark");
}

if (theme === "light") {
  document.querySelector("nav").classList.add("light");
  document.querySelector("header").classList.add("light");
  document.querySelector("section").classList.add("light");
  document.querySelector("footer").classList.add("light");
}
