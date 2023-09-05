//quote array
var quotes = [
    {quote: "A good leader does not give all the right answers, he asks all the right questions", author: "Tim Brown"},
    {quote: "Don't practice until you get it right, practice until you can't get it wrong", author: "John Flanagan"},
    {quote: "Natural Stupidity is still more dangerous than Artificial Intelligence", author: "Albert Einstein ?"},
    {quote: "It takes as much energy to wish as it does to plan", author: "Eleanor Roosevelt"},
    {quote: "Nobody realizes that some people expend tremendous energy merely to be normal.", author: "Albert Camus"},
    {quote: "Those who are too smart to engage in politics are punished by being governed by those who are dumber.", author: "Plato"}
    ];


function updateYaccValue(){
    const urlParams = new URLSearchParams(window.location.search);
    const yacc = urlParams.get('yacc');
    const yaccValue = "this is what yacc needs";
    if(yacc == "whatshouldibeaskingfor")
        document.getElementById('quote').innerHTML = yaccValue;
}

function getRandomQuoteIndex(){
    return Math.floor(Math.random() * quotes.length);
}

function getRandomQuote(){
    return quotes[getRandomQuoteIndex()];
}

function updateContent(){
    q = getRandomQuote();
    document.getElementById('quote').innerHTML = q.quote;
    document.getElementById('author').innerHTML = q.author;
}

updateContent();
updateYaccValue();