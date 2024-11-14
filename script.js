// Select the header element with the ID 'main-header' and log it to the console
const header = document.getElementById('main-header');
console.log(header);

// Change the header text color to blue
header.style.color = 'blue';
//header.style.backgroundColor = 'white'; // Uncomment to set header background color to white

// Select all elements with the class 'text' and log the collection and its length
const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs);
console.log(paragraphs.length);

// Loop through each paragraph element in the collection to apply styles
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#F28500'; // Set text color
    paragraphs[i].style.backgroundColor = 'aqua'; // Set background color
}

// Select the button with ID 'change-color-btn' and log it to the console
const colorButton = document.querySelector('#change-color-btn');
console.log(colorButton);

// Add a click event listener to the colorButton to change paragraph background colors
colorButton.addEventListener('click', () => {
    const allText = document.querySelectorAll('.text'); // Select all elements with class 'text'

    // Loop over each paragraph in NodeList to apply new background color
    allText.forEach(paragraph => {
        paragraph.style.backgroundColor = '#5d6c89';
    });
});

// Select the same button by ID and add a separate click event listener to log a message
const button = document.getElementById('change-color-btn');

// Define a function to handle click events on the button
function handleClick() {
    console.log('Button was Clicked');
}

// Attach the handleClick function to button's click event
button.addEventListener('click', handleClick);

// Select the first <p> element and log it to the console
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// Set font size and color for the first paragraph
firstParagraph.style.fontSize = '20px';
firstParagraph.style.color = '#fbf6f3';

// Select all paragraph elements with class 'text' and log them
const allParagraphs = document.querySelectorAll('.text');
console.log(allParagraphs);

// Loop over each paragraph to apply specific styles and log each paragraph with its index
allParagraphs.forEach((paragraph, index) => {
    paragraph.style.margin = '10px 0'; // Set margin
    paragraph.style.color = 'black'; // Set text color
    paragraph.style.fontSize = '15px'; // Set font size
    console.log(`Paragraph ${index + 1}`, paragraph);
});

// Update header text content and apply new styles
const changeHeader = document.getElementById('main-header');
changeHeader.textContent = 'DOM Manipulation Updated Lesson';
changeHeader.style.fontSize = '30px';
changeHeader.style.color = 'blue'; // The color 'blue' will override 'red'
changeHeader.style.font = 'italic bold 30px Arial'; // Set font style

// Set the title attribute on colorButtonTwo for hover text
const colorButtonTwo = document.getElementById('change-color-btn');
colorButtonTwo.setAttribute('title', 'Click to change colors');

// Log the number of elements with class 'text' in paragraphSecOne
const paragraphSecOne = document.getElementsByClassName('text');
console.log(paragraphSecOne.length);

// Add a keydown event listener to log a message if the "J" key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'J' || event.key === 'j') {
        console.log('The "J" key was pressed');
    }
});

// Loop through each paragraph to change the class and add a highlight class
for (let i = 0; i < paragraphSecOne.length; i++) {
    console.log(paragraphSecOne[i].className); // Log current class name
    paragraphSecOne[i].className = 'updated-text'; // Change to 'updated-text'
    console.log(paragraphSecOne[i].className); // Log updated class name

    paragraphSecOne[i].classList.add('highlight'); // Add 'highlight' class
}

// Log final state of paragraphSecOne collection
console.log(paragraphSecOne);
