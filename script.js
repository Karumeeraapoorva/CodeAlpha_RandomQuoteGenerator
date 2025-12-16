let quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" }
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random].text;
  document.getElementById("author").innerText = "- " + quotes[random].author;
}
