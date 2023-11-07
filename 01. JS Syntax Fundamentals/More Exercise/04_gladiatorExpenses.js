function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmetCount = Number.parseInt(lostFightsCount / 2);
    let brokenSwordCount = Number.parseInt(lostFightsCount / 3);
    let brokenShieldCount = Number.parseInt(lostFightsCount / 6);
    let brokenArmorCount = Number.parseInt(lostFightsCount / 12);

    let expenses = (brokenHelmetCount * helmetPrice) + (brokenSwordCount * swordPrice) + (brokenShieldCount * shieldPrice) + (brokenArmorCount * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);