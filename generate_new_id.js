var fs = require('fs');

let laptopData = require('./data.json')

let newLaptopData = []
let new_id = 1;
for (var i = 0; i < laptopData.length; i++) {
    let newLaptop = laptopData[i];
    newLaptop.id = new_id;
    newLaptopData.push(newLaptop);
    new_id++;
}

fs.writeFile("data.new.json", JSON.stringify(newLaptopData), err => {
    if (err) throw err;
    console.log('New Data Created');
});
