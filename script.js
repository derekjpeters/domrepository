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


