// YOUR CODE BELOW
function billerBuilder(state) {
    return function(price) {
        if (state === "NY") {
            var shipping = 1.03;
            var tax = 1.04;
            var finalPrice = price * shipping * tax;
            return finalPrice;
        }

        if (state === "NJ") {
            var shipping = 1.05;
            var tax = 1.06625;
            var finalPrice = price * shipping * tax;
            return finalPrice;
        }
    }
}

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100));