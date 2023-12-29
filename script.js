const toggleClass = document.querySelector(".toggle-icon");
const icon = document.querySelector(".fa-solid");
const cards = document.querySelector(".cards");
const price = cards.querySelectorAll(".price");

icon.addEventListener("click", () => {
  toggleClass.classList.toggle("active");
  if (toggleClass.classList.contains("active")) {
    price.forEach((item) => {
      const result = item.textContent;
      const numericValue = parseFloat(result.replace("$", ""));
      const finalResult = (numericValue / 10);
      item.innerHTML = `<span id="price">$</span> ${finalResult.toFixed(3)}`;
    });
  } else {
    price.forEach((item) => {
      const result = item.textContent;
      const numericValue = parseFloat(result.replace("$", ""));
      const finalResult = numericValue * 10;
      item.innerHTML = `<span id="price">$</span> ${finalResult.toFixed(2)}`;
    });
  }
});
