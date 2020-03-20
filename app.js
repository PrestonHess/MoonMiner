let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  laser: {
    price: 1000,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  aliens: {
    price: 6000,
    quantity: 0,
    multiplier: 200
  }
};

let cheese = 10000;

// NOTE This function is invoked when the user clicks on the moon which increases cheese count and updates the DOM
function mine() {
  let pickaxeMultiplier = clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier;
  let laserMultiplier = clickUpgrades.laser.quantity * clickUpgrades.laser.multiplier;
  cheese += 1 + pickaxeMultiplier + laserMultiplier;
  update();
}

//NOTE This function is responsible for updating the DOM with the current cheese count 
function update() {
  document.getElementById('cheese-Count').innerText = cheese.toString();
  // Updates Pickaxe Items
  document.getElementById('pickaxe-Count').innerText = clickUpgrades.pickaxes.quantity.toString();
  document.getElementById('pickaxe-Price').innerText = clickUpgrades.pickaxes.price.toString();
  // Updates Laser Items 
  document.getElementById('laser-Count').innerText = clickUpgrades.laser.quantity.toString();
  document.getElementById('laser-Price').innerText = clickUpgrades.laser.price.toString();
  // Updates Rover Items
  document.getElementById('rover-Count').innerText = automaticUpgrades.rovers.quantity.toString();
  document.getElementById('rover-Price').innerText = automaticUpgrades.rovers.price.toString();
}


// NOTE This method will be responsible for checking if the user has the resources, and if they do increasing the pickaxe purchased count, and decreasing the cheese resources by the appropriate amount.
function BuyPickaxe() {
  let price = clickUpgrades.pickaxes.price;
  if (cheese >= price) {
    cheese -= price;
    clickUpgrades.pickaxes.quantity++;
    clickUpgrades.pickaxes.price += Math.floor(price * 0.2);
    update();
  } else {
    alert('You need more cheese');
  }
}


function BuyLaser() {
  console.log("purhcased")
  let price = clickUpgrades.laser.price;
  if (cheese >= price) {
    cheese -= price;
    clickUpgrades.laser.quantity++;
    clickUpgrades.laser.price += Math.floor(price * 0.2);
    update();
  } else {
    alert('You need more cheese');
  }
}

function buyRover(){
  let price = automaticUpgrades.rovers.price;
  if (cheese >= price) {
    cheese -= price;
    automaticUpgrades.rovers.quantity++;
    automaticUpgrades.rovers.price += Math.floor(price * 0.3);
  } else {
    alert('You need more cheese');
  }
}

// NOTE This will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource.
function startInterval() {
  setInterval(collectAutoUpgrades, 1000);
}

// NOTE This function is responsible for calculating/returning the total of cheese collected according to how many autoUpgrades the user has
function collectAutoUpgrades() {
  let passiveCheeseIncome = 0;
  for (let key in automaticUpgrades) {
    passiveCheeseIncome += automaticUpgrades[key].quantity * automaticUpgrades[key].multiplier;
  }
  cheese += passiveCheeseIncome;
  document.getElementById('CPS').innerText = passiveCheeseIncome.toString();
  update();
}

startInterval();
