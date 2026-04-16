const styleInput = document.querySelector("#style");
const styleLabel = document.querySelector("#style-label");

styleInput.addEventListener("change", e => {
  const isChecked = e.target.checked;
  isChecked ? styleLabel.textContent = "Claro" : styleLabel.textContent = "Escuro";
});

const fileInput = document.querySelector("#photo");
const fileMessage = document.querySelector("#file-message");

fileInput.addEventListener("change", e => {
  const fileName = e.target.files[0]?.name;
  fileMessage.textContent = `${fileName}`;

  if(fileName === null || fileName === undefined) fileMessage.textContent = "Nenhum arquivo selecionado";
  if(fileMessage.textContent === fileName) fileMessage.style.color = "#C8CDD0";
})
