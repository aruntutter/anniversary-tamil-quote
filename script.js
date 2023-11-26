document.addEventListener("DOMContentLoaded", function () {
  const quotes = document.querySelectorAll(".quote");
  const totalQuotes = quotes.length;

  function animateQuote(index, direction) {
    const quote = quotes[index];
    const startPosition = direction === "right" ? "100%" : "-100%";
    const endPosition = "0";

    quote.style.opacity = "0";
    quote.style.transform = `translateX(${startPosition})`;
    quote.style.transition = "opacity 1s, transform 1s";

    // Triggering a reflow to restart the transition
    void quote.offsetWidth;

    setTimeout(() => {
      quote.style.opacity = "1";
      quote.style.transform = `translateX(${endPosition})`;
    }, index * 700); // Delay each quote by 2 seconds
  }

  // Initially hide all quotes
  quotes.forEach((quote) => {
    quote.style.opacity = "0";
  });

  // Animation sequence
  animateQuote(0, "right"); // quote1 from the right
  animateQuote(1, "left"); // quote2 from the left
  animateQuote(2, "right"); // quote3 from the right
  animateQuote(3, "left"); // quote4 from the left
  animateQuote(4, "right"); // quote5 from the right
});
