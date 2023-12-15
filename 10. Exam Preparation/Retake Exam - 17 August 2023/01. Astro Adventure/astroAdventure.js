function solve(input) {

    let n = input.shift();

    let astronauts = {};

    for (let i = 0; i < n; i++) {

        let [name, oxygenLevel, energyReserves] = input[i].split(' ');

        astronauts[name] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(energyReserves),
        };
    }

    input.splice(0, n);

    let line = input.shift();
    while (line !== 'End') {

        let lineArr = line.split(' - ');
        let command = lineArr[0];
        let astronautName = lineArr[1];

        switch (command) {

            case 'Explore':
                let energy = Number(lineArr[2]);

                if (astronauts[astronautName].energyReserves >= energy) {

                    astronauts[astronautName].energyReserves -= energy;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energyReserves} energy!`);
                } else {
                    console.log(`${astronautName} does not have enough energy to explore!`);
                }

                break;

            case 'Refuel':
                let amountEnergy = Number(lineArr[2]); //30
                let currentEnergy = astronauts[astronautName].energyReserves;//100

                let refueledEnergy = currentEnergy + amountEnergy; //130
                if (refueledEnergy > 200) {
                    let result = 200 - currentEnergy;

                    console.log(`${astronautName} refueled their energy by ${result}!`);
                    astronauts[astronautName].energyReserves = 200;
                } else {
                    astronauts[astronautName].energyReserves = refueledEnergy;

                    console.log(`${astronautName} refueled their energy by ${amountEnergy}!`);
                }

                break;

            case 'Breathe':
                let amountOxygen = Number(lineArr[2]);
                let currentOxygenLevel = astronauts[astronautName].oxygenLevel;

                let allOxygen = currentOxygenLevel + amountOxygen;

                if (allOxygen > 100) {
                    let amountRecovered = 100 - currentOxygenLevel;

                    console.log(`${astronautName} took a breath and recovered ${amountRecovered} oxygen!`);

                    astronauts[astronautName].oxygenLevel = 100;
                } else {
                    astronauts[astronautName].oxygenLevel = allOxygen;

                    console.log(`${astronautName} took a breath and recovered ${amountOxygen} oxygen!`);
                }

                break;

        }
        line = input.shift();
    }

    for (const astronaut in astronauts) {

        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserves}`);

    }

}

solve(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']);