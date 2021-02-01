const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search =document.querySelector('.search input');


// delete ToDos 
list.addEventListener('click', e =>{
 if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
 }
});

// create empleate 
const gerneratTemp = todo =>{
return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
 `;
};

// add the template to the  list
addForm.addEventListener('submit', e => {
 e.preventDefault();
 const todo = addForm.add.value.trim();
 if(!todo.length){
  alert('No baby, you Should add Some ThiNg To Do..');
 }else {
  list.innerHTML +=gerneratTemp(todo);
  addForm.reset();
  // addForm.add.value = '';
 }
});

// search funcation 
const searchFun = (term) =>{
 Array.from(list.children)
  .filter(todo =>  !todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
  .filter(todo =>  todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));
};
// keyup event
search.addEventListener('keyup', e =>{
 const term = search.value.trim().toLowerCase();
 searchFun(term);

});