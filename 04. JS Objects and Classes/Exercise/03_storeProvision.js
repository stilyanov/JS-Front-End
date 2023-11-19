function storeProvision(currentStock, products) {
  const store = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    let name = currentStock[i];
    let quantity = Number(currentStock[i + 1]);

    if (!store.hasOwnProperty(name)) {
      store[name] = quantity;
    } else {
      store[name] += quantity;
    }
  }

  for (let i = 0; i < products.length; i += 2) {
    let name = products[i];
    let quantity = Number(products[i + 1]);

    if (!store.hasOwnProperty(name)) {
      store[name] = quantity;
    } else {
      store[name] += quantity;
    }
  }

  for (const product in store) {
    console.log(`${product} -> ${store[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
