import './style.css';

const form = document.querySelector('form');
// const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todoContainer');

const lists = [{
  description: 'Start being me',
  bool: 'true',
  index: '1',
},
{
  description: 'Just be happy',
  bool: 'false',
  index: '2',
}, {
  description: 'I am kenny',
  bool: 'false',
  index: '3',
}];

lists.forEach((task) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.createElement('ul');
    const hr = document.createElement('hr');
    ul.innerHTML = `
    <li>
    <i class="fa-regular fa-square"></i>${task.description}<i class="fa-solid fa-ellipsis-vertical dots"></i>
    </li>
    `;
    todoContainer.append(ul, hr);
  });
});