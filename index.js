const input = document.getElementById("myInput");
const form = document.getElementById("myForm");
const notes = document.getElementById("notes");

const changeCheckbox = (element) => {
  console.log(element.target.parentNode.childNodes[2].textContent);
  if (element.target.parentNode.childNodes[2].textContent === "Not Done") {
    element.target.parentNode.childNodes[2].classList.remove("noteNotDone");
    element.target.parentNode.childNodes[2].classList.add("noteDone");
    element.target.parentNode.childNodes[2].textContent = "Done";
  } else {
    element.target.parentNode.childNodes[2].classList.remove("noteDone");
    element.target.parentNode.childNodes[2].classList.add("noteNotDone");
    element.target.parentNode.childNodes[2].textContent = "Not Done";
  }
};

const createCheckboxListeners = () => {
  let checkboxes = document.getElementsByClassName("checkbox");

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].removeEventListener("click", changeCheckbox);
    checkboxes[i].addEventListener("click", changeCheckbox);
  }
};

const createNote = (event) => {
  event.preventDefault();
  let div = document.createElement("div");
  let createInput = document.createElement("input");
  let pNoteItem = document.createElement("p");
  let pNoteDone = document.createElement("p");
  div.classList.add("noteWrap");

  createInput.type = "checkbox";
  createInput.classList.add("checkbox");

  pNoteItem.textContent = input.value;
  pNoteDone.textContent = "Not Done";
  pNoteDone.className = "noteNotDone";

  notes.appendChild(div);
  div.appendChild(createInput);
  div.appendChild(pNoteItem);
  div.appendChild(pNoteDone);
  createCheckboxListeners();
};

form.addEventListener("submit", createNote);
