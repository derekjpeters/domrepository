const header = document.getElementById('main-header');
console.log(header);
header.style.color = 'blue';
//header.style.backgroundColor='white';

const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs);
console.log(paragraphs.length);
//Loop through the collection of paragraphs
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#F28500';
    paragraphs[i].style.backgroundColor = 'aqua';
}

const colorButton = document.querySelector('#change-color-btn');
console.log(colorButton);

colorButton.addEventListener('click', () => {
    const allText = document.querySelectorAll('.text');

    //Loop over NodeList of paragraphs
    allText.forEach(paragraph => {
        paragraph.style.backgroundColor = '#5d6c89'
    });
});

const button = document.getElementById('change-color-btn');

function handleClick() {
    console.log('Button was Clicked')
}

button.addEventListener('click', handleClick);

const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

firstParagraph.style.fontSize = '20px';
firstParagraph.style.color = '#fbf6f3';

const allParagraphs = document.querySelectorAll('.text')
console.log(allParagraphs)

allParagraphs.forEach((paragraph, index) => {
    paragraph.style.margin = '10px 0';
    paragraph.style.color = 'black';
    paragraph.style.fontSize = '15px';
    console.log(`Paragraph ${index + 1}`, paragraph);
})

const changeHeader = document.getElementById('main-header');
changeHeader.textContent = 'DOM Manipulation Updated Lesson';

changeHeader.style.fontSize = '30px';
changeHeader.style.color = 'red';
changeHeader.style.color = 'blue';
changeHeader.style.font = 'italic bold 30px Arial'

//Setting an attribute with .setAttribute
const colorButtonTwo = document.getElementById('change-color-btn');
colorButtonTwo.setAttribute('title', 'Click to change colors');

const paragraphSecOne = document.getElementsByClassName('text');
console.log(paragraphSecOne.length);

document.addEventListener('keydown', (event) => {
    if(event.key === 'J' || event.key === 'j') {
        console.log('The "J" key was pressed')
    }
});

for (let i = 0; i < paragraphSecOne.length; i++) {
    //Change class name using .className
    console.log(paragraphSecOne[i].className);
    paragraphSecOne[i].className = 'updated-text'
    console.log(paragraphSecOne[i].className);

    paragraphSecOne[i].classList.add('highlight');
}

console.log(paragraphSecOne);







