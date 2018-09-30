function prepareFood(Tablenumber, items, callback) {
    console.log("Prparation of food item");
    console.log(items);
    //setTimeout(callback(items), 2000);
    callback(items)
}

function serveFood(items){
    console.log("serving food for items")
    console.log(items);
}

prepareFood(1,["Burger","Pasta","cake"], serveFood);

