function getCatNameAndAge(array) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const element of array) {
        const [name, age] = element.split(" ");
        const newCat = new Cat(name, age)
        newCat.meow();
        cats.push(newCat);
    }
}

getCatNameAndAge(['Mellow 2', 'Tom 5']);