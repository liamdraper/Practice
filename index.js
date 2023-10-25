
// Data
const memes = ["https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png", "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png", "https://dnd2oi6izkvoi.cloudfront.net/img/iea/yrwQvLJbON/programmer-memes.jpg"];
const jokes = ["What did the horse say after it tripped? Help! I’ve fallen and I can’t giddyup!", "Why can’t you hear a pterodactyl going to the bathroom? Because the “P” is silent.", "What do you call a well-balanced horse? Stable."];


// HTML Elements

const memeButton = document.querySelector('.btn1');
const memeItem = document.querySelector('.item1');
const jokeButton = document.querySelector('.btn2');
const jokeItem = document.querySelector('.item2');

let displayedMeme = null;
let displayedJoke = null;

// Buttons

memeButton.addEventListener('click', () => {
    if (displayedMeme) {
        memeItem.removeChild(displayedMeme);
        displayedMeme = null;
    }
    // *** Still displays meme even if its the last one seen
    const randomMeme = memes[Math.floor(Math.random() * 3)];
    const memePic = document.createElement("img");
    memePic.setAttribute('src', randomMeme);
    memePic.setAttribute('width', '100%');
    memeItem.appendChild(memePic);
    displayedMeme = memePic;
});

jokeButton.addEventListener('click', () => {
    if (displayedJoke) {
        jokeItem.removeChild(displayedJoke);
        displayedJoke = null;
    }
    // *** Still displays meme even if its the last one seen
    const randomJoke = jokes[Math.floor(Math.random() * 3)];
    const joke = document.createElement("p");
    joke.innerHTML = randomJoke;
    jokeItem.appendChild(joke);
    displayedJoke = joke;
});