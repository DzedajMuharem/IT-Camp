const addTask = document.querySelector('.addTask');
const submitBtn = document.querySelector('.submitBtn');
const forma = document.querySelector('form');
const listUl = document.querySelector('.bodyNeki');
const deleteBtn = document.querySelectorAll('.deleteBtn');
forma.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(Boolean(addTask.value));
  if (addTask.value)
    listUl.innerHTML += `<li>${addTask.value}<button class="deleteBtn" onclick="deleteItem(this)">X</button></li>`;
  addTask.value = '';
});

function deleteItem(e) {
  e.parentElement.remove();
}
