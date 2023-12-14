function solve(input) {

    let n = input.shift();

    let drivers = {};

    for (let i = 0; i < n; i++) {

        let [name, fuel, position] = input[i].split("|");

        drivers[name] = {
            name,
            fuel: Number(fuel),
            position: Number(position)
        };

        // drivers[name] = {
        //     fuel: Number(fuel),
        //     position: Number(position)
        // }

    }

    input.splice(0, n);

    let line = input.shift();
    while (line !== 'Finish') {

        let lineArr = line.split(" - ");
        let command = lineArr[0];
        let rider = lineArr[1];

        switch (command) {
            case "StopForFuel":

                let minimumFuel = Number(lineArr[2]);
                let changedPosition = Number(lineArr[3]);

                if (drivers[rider].fuel < minimumFuel) {
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    drivers[rider].position = changedPosition;

                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }

                break;

            case "Overtaking":

                let secondRider = lineArr[2];

                if (drivers[rider].position < drivers[secondRider].position) {
                    console.log(`${rider} overtook ${secondRider}!`);

                    const temporaryPosition = drivers[rider].position;
                    drivers[rider].position = drivers[secondRider].position;
                    drivers[secondRider].position = temporaryPosition;
                }

                break;

            case "EngineFail":

                let lapsLeft = Number(lineArr[2]);

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);

                delete drivers[rider];

                break;
        }

        line = input.shift();
    }


    for (const rider in drivers) {
        
        console.log(`${rider}\n  Final position: ${drivers[rider].position}`);

    }

}


// solve((["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"]));

solve((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]))