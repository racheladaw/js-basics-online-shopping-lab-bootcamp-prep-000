var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {};
  newObj['itemName '] = item;
  newObj['itemPrice'] = Math.floor(Math.random() * Math.floor(100));
  cart.push(newObj);
  return `${item} has been added to your cart.`
}

function viewCart() { 
  var statement = 'In your cart, you have ';
  if (cart.length > 0) {
    for (var i = 0; i < cart.length - 1; i++) {
      statement = statement + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
    }
  return statement + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  }
  else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
