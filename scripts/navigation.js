const hamBtn = document.querySelector("#ham-btn");
const sidebar = document.querySelector("#side-bar");

hamBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  hamBtn.classList.toggle("show");
});
