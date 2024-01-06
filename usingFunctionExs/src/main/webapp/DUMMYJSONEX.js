//get All quotes 
fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(console.log);

//Get a single quote
fetch('https://dummyjson.com/quotes/1')
	.then(res => res.json())
	.then(console.log);  

//Get a random quote
fetch('https://dummyjson.com/quotes/random')
	.then(res => res.json())
	.then(console.log);

fetch('https://dummyjson.com/http/200')
.then(res => res.json())
.then(console.log);