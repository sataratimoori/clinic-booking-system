const filterButtons = document.querySelectorAll(".filter-btn");
const doctorCards = document.querySelectorAll(".doctor-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    doctorCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
