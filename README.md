#Welcome to Bamazon!

##What Does the app do?
* Allows the user to view a list of the stock at bamazon
![Image of Stock in CLI](https://gyazo.com/87eabc33013de651bfb22655ee5ffaaa)

* Allows user to buy a certain amount of the item they want
![User Selection](https://gyazo.com/e4d2fc800f3e5dc688b06c73a3fe4e60) 
* Show the total price of what they paid for
![Amount Paid](https://gyazo.com/5bf47f69135a3874fca9f7d5325fe3b7)


* If there is insuficient stock for an item the user will be prompted to pick another item.
![Insufficient quantity image](https://gyazo.com/137e0cf472d3e1ab43748ed13f4ccd49)

## How is it built?
* It uses bamazon.sql as a template to build the MySQL database tables


* Makes use of NPM inquirer and NPM mysql to query said databse and update dynamically based on user inputs
