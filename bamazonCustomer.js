inquirer = require("inquirer");
fs = require("fs");
mysql = require("mysql");


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A19s92c95ar',
    database: 'bamazon'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to database");
    showAll();


});





function showAll() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("Here is a list of all of our products, their department, price, and stock!");
        console.log("---------------------------------------------------------------------------");

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        };


        buyAnItem();

    });

}
function buyAnItem() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is the id of the item you want to buy?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            name: "item"
        },
        {
            type: "number",
            message: "How Many?",
            name: "quantity"



        }
    ]).then(function (res) {
        //checks to see if quantity not a number and recalls function if not
        if (Number.isNaN(res.quantity)) {
            console.log("That is not a valid number please retry!");
            buyAnItem();
        }
        var quantity = parseInt(res.quantity);
        var choice = parseInt(res.item)
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;


            if (res[choice - 1].stock_quantity > 0) {
                connection.query("UPDATE products SET stock_quantity=stock_quantity - ? WHERE item_id = ?", [quantity, choice], function (err, res) {
                    if (err) throw err;
                    console.log("updated succesfully!");
                    connection.query("SELECT * FROM products", function (err, res) {
                        if (err) throw err;
                        var totalPaid = quantity * res[choice - 1].price;

                        console.log("You paid $" + totalPaid);

                        inquirer.prompt([
                            {
                                type: "confirm",
                                message: "Would you like to make another purchase?",
                                name: "choice"

                            }
                        ]).then(function (res) {

                            if (res.choice == true) {
                                showAll();

                            } else {
                                console.log("Goodbye!");
                                connection.end();
                            }
                        })
                    });



                });
            } else {
                console.log("Insufficient Quantity!");
                buyAnItem();
            };
        });
















    })
}