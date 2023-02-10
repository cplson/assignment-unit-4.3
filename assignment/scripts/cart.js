console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Global variables //
let basket = [];
const MAX_ITEMS = 5;

// Tests //
// addItem  
addItem('Broccoli');
addItem('Potatoes');
console.log(basket);

// listItem 
listItems();

// empty 
empty();

// isFull - false
console.log(`Expected result is false: ${isFull()}`);
basket = ['Chicken', 'Beans', 'Ice Cream'];
console.log(`Expected result is false: ${isFull()}`);

basket.push('Avocado');
basket.push('Eggs');

//isFull - true
console.log(`Expected result is true: ${isFull()}`);
basket.push('Bread');
console.log(`Expected result is true: ${isFull()}`);

//End Tests //


// Function Definitions //

// Adds an item to the basket array
function addItem(item){ 
    basket.push(item);
    console.count(`Added ${item} into the basket`);
    return true;
}

// Logs every item in basket to the console
function listItems(){ 
    console.log('*Item List*\n')
    for(let item of basket){
        console.log('>', item);
    }
}

// Empties all items from the list
function empty(){ 
    for(let i = basket.length - 1; i >= 0; i--){
        console.log(`${basket.pop(i)} removed from basket`);
    }
    if(basket.length != 0){
        console.log(`Error: Basket has ${basket.length} item(s) remaining`);
        console.log(basket);
    }
    else{
        console.log('Basket is now empty');
    }
}

// Checks if the basket is full
function isFull(){
    if(basket.length < MAX_ITEMS){
        return false;
    }
    return true;
}
// End Function Definitions //