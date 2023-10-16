const a1cList = [];

renderA1cList();

function renderA1cList() {
  let a1cListHTML = '';

  for (let i = 0; i < a1cList.length; i++) {
    const a1cObject = a1cList[i];
    
    const { name, dueDate } = a1cObject;
    const html = `
      <p>${name}</p>
      <p>${dueDate}</p>
      <button onclick="
        a1cList.splice(${i}, 1);
        renderA1cList();
      " class="delete-A1c-button">Delete</button> 
    `;
    a1cListHTML += html;
  }

  document.querySelector('.js-A1c-list')
    .innerHTML = a1cListHTML;
    
    
}

function a1cTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const mgDl = inputElement.value;
  const a1c = (Number(mgDl) + 46.7)/28.7;
  const name = a1c;
  

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;



  a1cList.push({
    
    name,
    dueDate
  });

  inputElement.value = '';

  renderA1cList();
}