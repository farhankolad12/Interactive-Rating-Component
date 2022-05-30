const labels = document.querySelectorAll("label");
const btn = document.getElementById("submit");
const thanks = document.querySelector(".thanks-container");
const container = document.querySelector(".container");
const span = document.getElementById("select-rating");

labels.forEach((label) => {
  label.addEventListener("click", (e) => {
    const rating = e.target.textContent;
    localStorage.setItem("rating", rating);

    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.contains("selected");
      labels[i].classList.remove("selected");
    }

    e.target.classList.add("selected");
  });
});

btn.addEventListener("click", () => {
  thanks.style.display = "block";
  container.style.display = "none";
  const ratings = localStorage.getItem("rating");
  span.innerHTML = ratings;
});
