document.getElementById('changepara').addEventListener('click', ()=>{document.getElementById('para').innerHTML = 'after clicking ;)'});

document.getElementById('hide').addEventListener("dblclick", ()=> {
    document.getElementById('hide').style.border
});

let inputField = document.getElementById('input-field');
inputField.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

inputField.addEventListener('keyup', function() {
    let output = document.getElementById('output');
    output.textContent = `Current value: ${inputField.value}`;
});

let form = document.getElementById('my-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

let select = document.getElementById('my-select');
select.addEventListener('change', function() {
    let selectedValue = document.getElementById('selected-value');
    selectedValue.textContent = `Selected value: ${select.value}`;
});

let list = document.getElementById('my-list');
list.addEventListener('click', function(event) {
    if (event.target) {
        console.log(`List item clicked: ${event.target.textContent}`);
    }
});

let parent = document.getElementById('parent');
let addChildButton = document.getElementById('add-child');

addChildButton.addEventListener('click', function() {
    let newChild = document.createElement('div');
    newChild.textContent = 'New Child Element';
    newChild.classList.add('child');
    parent.appendChild(newChild);
});

parent.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('child')) {
        console.log('Dynamically added child clicked:', event.target.textContent);
    }
});