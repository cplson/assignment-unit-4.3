console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// addItem Test //
addItem('Broccoli');
addItem('Potatoes');
console.log(basket);

// listItem Test //
listItems();

// empty Test //
empty();

// Function Definitions //
function addItem(item){ // Adds an item to the basket array
    basket.push(item);
    console.count(`Added ${item} into the basket`);
    return true;
}

function listItems(){ // Logs every item in basket to the console
    console.log('*Item List*\n')
    for(let item of basket){
        console.log('>', item);
    }
}

function empty(){ // Empties all items from the list
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
// End Function Definitions //