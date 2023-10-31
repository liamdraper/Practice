// Reviewer data

const reviewers = [
    { photo : 'https://kevindayphotography.com/wp-content/uploads/2020/12/headshot-for-business-man-1200x675.jpg', fullName: 'Kevin Grambly', title: 'Lawyer', text: 'I love tacos!  They got some good tacos here!!!! I really like the carne asada.'},
    { photo : 'https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/lowres-mjb-5074_3.jpg?1574008349', fullName: 'Shaniqua Davis', title: 'Social Worker', text: 'I spilled all the taco sauce and ruined my white shirt!  Oh no!!!!'},
    { photo : 'https://i0.wp.com/www.kevinthom.com/wp-content/uploads/2014/08/professional-headshot-for-executive.jpg?resize=1080%2C675&ssl=1', fullName: 'Jimmy Jomtrombo', title: 'Finance Guy', text: `I${''}m a busy guy, so having tacos on the run is perfect!!`},
    { photo : 'https://www.cityheadshots.com/uploads/5/1/2/1/5121840/good-3-copy.jpg', fullName: 'Samantha Gargantuan', fullName: 'Librarian', text: 'Shhhhhhh!!!!'}
]
// HTML elements

const photo = document.querySelector('img');
const fullName = document.querySelector('h2');
const title = document.querySelector('h3');
const text = document.querySelector('p');

const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');


// State variables

let index = 0;

// Event listeners

leftBtn.addEventListener('click', () => {
    if (index === 0) return;
    index--;
    updateReview();
})

rightBtn.addEventListener('click', () => {
    if (index === reviewers.length - 1) return;
    index++;
    updateReview();
})

// Functions

function updateReview() {
    photo.src = reviewers[index].photo;
    fullName.innerText = reviewers[index].fullName;
    title.innerText = reviewers[index].title;
    text.innerText = reviewers[index].text;
}

// Initialize display

updateReview();