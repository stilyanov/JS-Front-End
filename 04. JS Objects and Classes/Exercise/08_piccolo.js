function parkingLot(carArray) {

    let parking = new Set();

    for (const car of carArray) {
        let [carDirection, carNumber] = car.split(", ");

        if (carDirection === "IN") {
            parking.add(carNumber);
        } else if (carDirection === "OUT") {
            parking.delete(carNumber);
        }
    }

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedParking = [...parking].sort();

        sortedParking.forEach((car) => console.log(car));

    }
}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])