function inventory(input) {

    const heroes = [];

    input.forEach((hero) => {
        let [name, level, items] = hero.split(" / ");

        heroes.push({ name, level: Number(level), items });
    });

    let orderedHeroes = heroes.sort((a, b) => a.level - b.level);

    orderedHeroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);