function printObject(input) {

    for (const element of input) {
        let [town, latitude, longitude] = element.split(" | ");
        
        let currentTown = {
            town, 
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        console.log(currentTown);
    }
}

printObject(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);