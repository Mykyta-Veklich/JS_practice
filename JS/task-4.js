let credits = 23580;
let pricePerDroid = 3000;
const userInput = prompt("Введіть кількість дроїдів для покупки:");

if (userInput === null) {
    console.log("Скасовано користувачем!");
}
else {
    const numberOfDroids = Number(userInput);
    const totalPrice = numberOfDroids * pricePerDroid;

    if (totalPrice > credits) {
        console.log("Недостатньо коштів на рахунку!")
    }
    else {
        credits -= totalPrice;
        console.log(`Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`)
    }
}
