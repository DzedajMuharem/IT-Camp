const addTask = document.querySelector('.addTask');
const forma = document.querySelector('form');
const listUl = document.querySelector('.bodyNeki');
forma.addEventListener('submit', function (e) {
  e.preventDefault();
  if (addTask.value)
    listUl.innerHTML += `<li>${addTask.value}<button class="deleteBtn" onclick="deleteItem(this)">X</button></li>`;
  addTask.value = '';
});

function deleteItem(e) {
  e.parentElement.remove();
}
