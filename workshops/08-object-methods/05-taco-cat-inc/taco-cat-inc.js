let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  var currentInv = 0;
  for (let category in this) {
    if (category === 'cash') {
      continue;
    }

    let items = this[category];


    for (let itemName in items) {
      let itemObj = items[itemName];

      currentInv += itemObj.cost * itemObj.quantity;
    }

  }

  return currentInv;
}

// console.log(tacoCatInc.currentInventory());


tacoCatInc.sale = function(order) {
  // initialize empty variable to hold order cost
  var totalCost = 0;

  // Iterate through order items
  for (item in order) {
  // Store one individual item
    var addOn = order[item];

    // If the an item category has the addOn as a property, add the cost to the total cost
    for (let category in this) {
      if (this[category].hasOwnProperty(addOn)) {
        totalCost += this[category][addOn]['cost'];
        this[category][addOn]['quantity'] -= 1;
        this['cash'] += this[category][addOn]['cost'];
        console.log("Quantity" + this[category][addOn]['quantity'] +  "Cash" + this.cash);
      }
    }
  }

  // return price of order
  return totalCost;
}


