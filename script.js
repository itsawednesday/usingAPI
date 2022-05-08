const show = document.querySelector('.quote'); /* select quote clas */
const author = document.querySelector('.author');


const nextQuote = document.querySelector('.next'); /* button*/

const quoteGenerate =async ()=> {
 
    const response= await fetch('https://type.fit/api/quotes')


    const quotes = await response.json();
    const storeQuotes=  Math.floor(Math.random()*quotes.length); /*get all quotes in the array*/
    const item = quotes[storeQuotes]; /* access random quote from array and save it in 'item' variable */
    const quote = item.text; /* save the quote from variable quote*/

    const authorName = item.author; /* save the author in the variable authorName */
    
    show.innerText = quote; /* to change the quotes */
    author.innerText = authorName;
}

nextQuote.addEventListener('click', quoteGenerate); /* change the quote each time Next is clicked */

    quoteGenerate()