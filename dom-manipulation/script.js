const quotes = [
  { text: "Believe in yourself.", category: "Motivation" },
  { text: "Stay hungry, stay foolish.", category: "Inspiration" },
  { text: "Do one thing every day that scares you.", category: "Courage" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quote-display");
  quoteDisplay.innerHTML = `<p><strong>${quote.category}:</strong> ${quote.text}</p>`;
}

function createAddQuoteForm() {
  const formContainer = document.getElementById("quote-form-container");
  formContainer.innerHTML = `
    <form id="quote-form">
      <input type="text" id="quote-text" placeholder="Enter quote" required />
      <input type="text" id="quote-category" placeholder="Enter category" required />
      <button type="submit">Add Quote</button>
    </form>
  `;

  const form = document.getElementById("quote-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = document.getElementById("quote-text").value.trim();
    const category = document.getElementById("quote-category").value.trim();

    if (text && category) {
      quotes.push({ text, category });
      alert("Quote added successfully!");
      form.reset();
    }
  });
}