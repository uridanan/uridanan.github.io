//quote array
var quotes = [
    "A good leader does not give all the right answers, he asks all the right questions",
    "Don't practice until you get it right, practice until you can't get it wrong",
    "Natural Stupidity is still more dangerous than Artificial Intelligence",
    "It takes as much energy to wish as it does to plan"
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
    document.getElementById('quote').innerHTML = getRandomQuote();
}

updateContent();
updateYaccValue();