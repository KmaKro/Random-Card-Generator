  window.addEventListener("load", () => {
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
  
    const symbols = ["♠", "♣", "♦", "♥"];
    const colors = ["red", "black"];
  
    const topItem = document.getElementById("top-item");
    const cardNumber = document.getElementById("card-number");
    const bottomItem = document.getElementById("bottom-item");
  
    const randomValueIndex = Math.floor(Math.random() * values.length);
    const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
  
    topItem.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
    cardNumber.innerHTML = `<p>${values[randomValueIndex]}</p>`;
    bottomItem.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
  });

