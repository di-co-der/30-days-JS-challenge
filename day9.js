document.getElementById("test").innerHTML = 'Jai Shree Ram';

let titles = document.getElementsByTagName('h1');

titles[0].style.backgroundColor = 'lightblue';

let newdiv = document.createElement('div');
newdiv.textContent = 'jai Hanuman ji';
document.body.appendChild(newdiv);


let newListItem = document.createElement('li');
    newListItem.textContent = 'New List Item';
    let ulList = document.getElementById('my-list');
    ulList.appendChild(newListItem);

    document.getElementById('my-list').remove();

    let image = document.getElementById('my-image');
    image.setAttribute('src', 'new-image.jpg');

    let element = document.getElementById('my-element');
    element.classList.add('new-class'); // Add the class
    element.classList.remove('initial-class'); // Remove the class

    let button = document.getElementById('my-button');
    button.addEventListener('click', function() {
        let paragraph = document.getElementById('my-paragraph');
        paragraph.textContent = 'Text changed after button click';
    });


    let element1 = document.getElementById('hover-element');
    element1.addEventListener('mouseover', function() {
        element.style.borderColor = 'red';
        element.style.borderStyle = 'solid';});