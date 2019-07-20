inquirer = require("inquirer");
fs = require("fs");
mysql = require("mysql");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'A19s92c95ar',
    database : 'bamazon'
});
connection.connect(function(err){
    if (err) throw err;
    console.log("connected to database");
});

connection.query("SELECT * FROM products",function(err,res){
    if (err) throw err;
    
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      };
    connection.end();
   
})