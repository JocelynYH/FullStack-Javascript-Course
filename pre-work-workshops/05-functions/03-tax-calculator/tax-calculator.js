// YOUR CODE BELOW
// function taxCalculator(price, state) {
//     if (state == "NY") {
//         return price * 1.04;
//     }

//     else if (state == "NJ") {
//         return price * 1.06625;
//     }
// }

const taxCalculator = (price,state) => {
    switch (state) {
        case "NY":
            return price * 1.04;
        case "NJ":
            return price * 1.06625;
        default:
            return price;
    }
};