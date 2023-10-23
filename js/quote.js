const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => quoteDisplay(data));
}

const quoteDisplay = quote => {
    //console.log(quote)
    const blockQuote = document.getElementById('quote')
    blockQuote.innerText = quote.quote;
}
loadQuote();