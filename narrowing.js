function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        //! (property) Container.value: number
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
// type predicates
function isFish(pet) {
    return pet.swim !== undefined;
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
