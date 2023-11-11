
const quote = document.getElementById("quote");
const author = document.getElementById("author");


const api = "https://api.quotable.io/random";


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    console.log(data)
}


function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text=" + quote.innerHTML,"Tweet Window", "width=350, height=350")
}




