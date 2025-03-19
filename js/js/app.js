const form = document.getElementById("form");
const conteiner = document.getElementById("conteiner");
const modalText = document.getElementById("modalText");
const modal = document.getElementById("modal");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = document.getElementById("texto").value;
  modalText.innerText = texto;
  modal.showModal();
});

button.addEventListener("click", () => {
  if (modal.classList.contains("text")) {
    modal.classList.remove("text");
    modal.classList.add("text2");
  } else if (modal.classList.contains("text2")) {
    modal.classList.remove("text2");
    modal.classList.add("text3");
  } else if (modal.classList.contains("text3")) {
    modal.classList.remove("text3");
    modal.classList.add("text");
  }
});
