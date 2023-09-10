// Differences Between Type Aliases and Interfaces
var getBearInterface = function () {
    return {
        name: "test",
        honey: true,
    };
};
var testBear = getBearInterface();
testBear.name;
testBear.honey;
var getBear = function () {
    return {
        name: "test",
        honey: true,
    };
};
var bear = getBear();
bear.name;
bear.honey;
var dog = {
    paws: 4,
    ears: 4,
};
//! Duplicate identifier 'Cat'.
// type Cat = {
//   eyes: number;
// }
