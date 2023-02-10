console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
addItem('Broccoli');
addItem('Potatoes');

console.log(basket);

function addItem(item){
    basket.push(item);
    console.count(`Added ${item} into the basket`);
    return true;
}