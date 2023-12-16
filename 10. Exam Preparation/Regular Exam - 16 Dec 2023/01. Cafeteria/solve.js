function solve(input) {

    let n = input.shift();

    let baristas = {};

    for (let i = 0; i < n; i++) {

        let [name, shift, coffeeType] = input[i].split(" ");
        coffeeType = coffeeType.split(',');

        baristas[name] = {
            shift,
            coffeeType
        };
    }

    input.splice(0, n);

    let line = input.shift();
    while (line !== 'Closed') {

        let lineArr = line.split(' / ');
        let command = lineArr[0];
        let baristaName = lineArr[1];

        switch (command) {
            case 'Prepare':
                let shift = lineArr[2];
                let coffeeTypeBarista = lineArr[3];

                let canPrepareCoffee = false;

                let currentBaristaType = baristas[baristaName].coffeeType;
                let currentBaristaShift = baristas[baristaName].shift;

                if (currentBaristaShift === shift) {

                    for (let i = 0; i < currentBaristaType.length; i++) {
                        if (currentBaristaType[i] === (coffeeTypeBarista)) {
                            canPrepareCoffee = true;
                            break
                        }

                    }

                    if (canPrepareCoffee) {
                        console.log(`${baristaName} has prepared a ${coffeeTypeBarista} for you!`);
                    } else {
                        console.log(`${baristaName} is not available to prepare a ${coffeeTypeBarista}.`);
                    }

                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeTypeBarista}.`);
                }


                break;

            case 'Change Shift':
                let currentShift = lineArr[2];
                baristas[baristaName].shift = currentShift;

                console.log(`${baristaName} has updated his shift to: ${currentShift}`);

                break;

            case 'Learn':
                let newCoffeeType = lineArr[2];
                let baristaCoffeeType = baristas[baristaName].coffeeType;

                let knowCoffee = false;

                for (let i = 0; i < baristaCoffeeType.length; i++) {
                    if (baristaCoffeeType[i] === newCoffeeType) {
                        knowCoffee = true;
                        break
                    }
                }

                if (knowCoffee) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[baristaName].coffeeType.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }

                break;
        }

        line = input.shift();
    }

    for (const barista in baristas) {

        console.log(`Barista: ${barista}, Shift: ${baristas[barista].shift}, Drinks: ${baristas[barista].coffeeType.join(', ')}`);

    }


}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']);

// solve(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed'])