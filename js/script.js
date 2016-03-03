var gollumQuote = [];

gollumQuote[0] = "So bright... so beautiful... our precious.";
gollumQuote[1] = "All dead... all rotten. Elves and men and orcses. A great battle, long ago...";
gollumQuote[2] = "It's the only way. Go in, or go back";
gollumQuote[3] = "Master broke his promise";
gollumQuote[4] = "Yes, precious, she could. And then we takes it once they're dead";
gollumQuote[5] = "What's taters, precious? What's taters, eh?";
gollumQuote[6] = "But, the fat Hobbit. He knows. Eyes always watching";
gollumQuote[7] = "Cruel men hurts us. Master tricksed us.";
gollumQuote[8] = "Dead? No, you cannot kill them. No.";
gollumQuote[9] = "That would kill us! KILL US!";
gollumQuote[10] = "See? See? He wants it for himself";

function newQuote(){
	var randomQuote = Math.floor(Math.random()*(gollumQuote.length));
	document.getElementById('quote').innerHTML = gollumQuote[randomQuote];

var strLink = "http://twitter.com/home/?status=" + randomQuote;
document.getElementById("tweetThisQuote").setAttribute("href",strLink);

}


// append twitter to status 
// google twiiter buttons and how add to link.