const form = document.getElementById("form");
const conteiner = document.getElementById("conteiner");
const modalText = document.getElementById("modalText");
const modal = document.getElementById("modal");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = document.getElementById("texto").value;

  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texto }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error interno al enviar el texto");
      }
      return response.json();
    })
    .then(() => {
      return fetch("http://localhost:3000/get", {
        method: "GET",
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error interno al obtener el texto");
      }
      return response.json();
    })
    .then((data) => {
      modalText.innerText = data;
      modal.showModal();
    });
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
