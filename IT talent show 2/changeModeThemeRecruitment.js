const switchButton = document.querySelector("#change-mode");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  if (theme === "dark") {
    document
      .querySelector("section #recruitment-link")
      .classList.remove("dark");

    document.querySelector("section #recruitment-link").classList.add("light");
    theme = "light";
  } else {
    document
      .querySelector("section #recruitment-link")
      .classList.remove("light");

    document.querySelector("section #recruitment-link").classList.add("dark");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("section #recruitment-link").classList.add("dark");
}

if (theme === "light") {
  document.querySelector("section #recruitment-link").classList.add("light");
}
