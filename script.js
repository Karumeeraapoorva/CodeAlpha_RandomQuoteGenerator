const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not final; failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Success doesn’t come to you, you go to it.", author: "Marva Collins" },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" }
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random].text;
  document.getElementById("author").textContent = "— " + quotes[random].author;
}

newQuote();
