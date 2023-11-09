function calculateTotalPrice(order, quantity) {
    const productPrice = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };

    const price = productPrice[order];
    let result = price * quantity;
    console.log(result.toFixed(2));
}

calculateTotalPrice("water", 5);
calculateTotalPrice("coffee", 2);