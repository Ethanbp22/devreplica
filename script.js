const header = document.querySelector('.header');
const menu_Icon = document.querySelector('.menu-icon');
const number = document.querySelector('.number');

header.addEventListener('mouseenter', () => {
  header.style.backgroundColor = 'black'; 
  menu_Icon.style.color = 'white';
  number.style.color = 'white';
});

header.addEventListener('mouseleave', () => {
  header.style.backgroundColor = 'white';
  menu_Icon.style.color ='black';
  number.style.color = 'black';
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'

}

function hideSidebar(){
 const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none'
}
const select = document.querySelector('.select');
const dropDown = document.querySelector('.drop-down');

select.addEventListener('click', function() {
  dropDown.classList.toggle('open');
});

let sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  let id = section.id;
  navLinks[index].href = `#${id}`;
});
const dropdown = document.querySelector('.dropdown');
const options = document.querySelectorAll('.dropdown-option');
const selectedOption = document.querySelector('.selected-option');

dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selectedOption.textContent = option.textContent;
    dropdown.classList.remove('open');
    // Show the box with the selected option
    const selectedBox = document.querySelector('.selected-box');
    selectedBox.textContent = option.textContent;
    selectedBox.style.display = 'block';
  });
});

// Function to hide the box
function hideSelectedBox() {
  const selectedBox = document.querySelector('.selected-box');
  selectedBox.style.display = 'none';
}

// Add an event listener to hide the box when clicking outside of it
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target) && !selectedOption.contains(event.target)) {
    hideSelectedBox();
  }
});