function fruit(typeOfFruit, weightInGrams, pricePerKG) {
    let weightInKG = weightInGrams / 1000;

    console.log(`I need $${(pricePerKG * weightInKG).toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('apple', 1563, 2.35)