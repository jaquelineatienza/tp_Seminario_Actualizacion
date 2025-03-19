const form = document.getElementById("form");
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const changeStyleBtn = document.getElementById("changeStyleBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("userInput").value;

  if (text.trim() !== "") {
    openModal(text);
  }
});

function openModal(text) {
  modalText.innerText = text;
  modal.showModal();
}

function closeModal() {
  modal.close();
}

changeStyleBtn.addEventListener("click", () => {
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
