console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Global variables //
let basket = [];
const MAX_ITEMS = 5;

// ************************************* //

// TESTS //
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
addItem('Chicken');
addItem('Beans');
addItem('Ice Cream');
console.log(`Expected result is false: ${isFull()}`);
addItem('Avocado');
addItem('Eggs');
//isFull - true
console.log(`Expected result is true: ${isFull()}`);
addItem('Bread');
console.log(`Expected result is true: ${isFull()}`);

//removeItem - Found
removeItem('Ice Cream');
//removeItem - Not Found
removeItem('Pasta');
//END TESTS //

// ************************************* //

// FUNCTION DEFINITITIONS //

// If the basket has room, adds an item to the basket
function addItem(item){ 
    if(isFull()){
        console.log(`Error: There was no room in the basket for ${item}`)
        return false;
    }
    else{
        basket.push(item);
        console.count(`Added ${item} into the basket`);
        return true;
    }    
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

//
function removeItem(item){
    if(basket.indexOf(item) != -1){
        basket.splice(basket.indexOf(item));
        console.log(`Removed ${item}`);
        return item;
    }
    console.log(`${item} was not found in the basket`);
    return null;
    
}


// END FUNCTION DEFINITIONS //