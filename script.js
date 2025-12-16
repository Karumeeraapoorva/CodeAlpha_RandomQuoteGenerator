const quotes = [
  { text: "Believe in yourself and all that you are 💪", author: "Christian D. Larson" },
  { text: "Dream big and dare to fail 🚀", author: "Norman Vaughan" },
  { text: "Success is not for the lazy 🔥", author: "Unknown" },
  { text: "Make today amazing ✨", author: "Unknown" },
  { text: "Your limitation is only your imagination 🧠", author: "Unknown" },
  { text: "Hard work beats talent every time 🏆", author: "Tim Notke" },
  { text: "Push yourself, no one else will 💯", author: "Unknown" },
  { text: "Great things take time ⏳", author: "Unknown" },
  { text: "Stay positive, work hard, make it happen 😄", author: "Unknown" },
  { text: "Don’t stop until you’re proud 👑", author: "Unknown" }
];

const gradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #ff758c, #ff7eb3)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #56ccf2, #2f80ed)",
  "linear-gradient(135deg, #ff512f, #dd2476)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #11998e, #38ef7d)"
];

function newQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const colorIndex = Math.floor(Math.random() * gradients.length);

  document.getElementById("quote").textContent = quotes[quoteIndex].text;
  document.getElementById("author").textContent = "— " + quotes[quoteIndex].author;
  document.getElementById("container").style.background = gradients[colorIndex];
}

newQuote();
