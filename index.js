// For each person's review, I need to store a photo, a name, a title, and review text

const reviewers = [
    { photo : 'https://kevindayphotography.com/wp-content/uploads/2020/12/headshot-for-business-man-1200x675.jpg', name: 'Kevin Grambly', title: 'Lawyer', text: 'I love tacos!  They got some good tacos here!!!! I really like the carne asada.'},
    { photo : 'https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/lowres-mjb-5074_3.jpg?1574008349', name: 'Shaniqua Davis', title: 'Social Worker', text: 'I spilled all the taco sauce and ruined my white shirt!  Oh no!!!!'},
    { photo : 'https://i0.wp.com/www.kevinthom.com/wp-content/uploads/2014/08/professional-headshot-for-executive.jpg?resize=1080%2C675&ssl=1', name: 'Jimmy Jomtrombo', title: 'Finance Guy', text: `I${''}m a busy guy, so having tacos on the run is perfect!!`},
    { photo : 'https://www.cityheadshots.com/uploads/5/1/2/1/5121840/good-3-copy.jpg', name: 'Samantha Gargantuan', title: 'Librarian', text: 'Shhhhhhh!!!!'}
]

// HTML elements

const photo = document.querySelector('img');
const name = document.querySelector('h2');
const title = document.querySelector('h3');
const text = document.querySelector('p');

const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');

let index = 0;

leftBtn.addEventListener('click', () => {
    if (index === 0) return;
    return index--;
})

rightBtn.addEventListener('click', () => {
    if (index === reviewers.length) return;
    return index++;
})

photo.src = reviewers[index]
title.text = reviewers[index].title;
console.log(index)