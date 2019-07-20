drop database bamazon;
create database bamazon;
create table products(
    item_id  integer(10) primary key auto_increment,
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price integer(500) not null,
    stock_quantity integer(50) not null

);

insert into products (product_name, department_name,price,stock_quantity)
	values
		("apple", "produce", 2, 50),
        ("broom", "appliances", 5, 15),
        ("hammer", "appliances", 3, 50),
        ("shoes", "apparel", 20, 45),
        ("headphones", "electronics", 75, 10),
        ("tent", "outdoors", 250, 10),
        ("TV", "electronics", 300, 20),
        ("aspirin", "health", 5, 100),
        ("book", "entertainment", 10, 50),
        ("playing cards", "entertainment", 1, 75);
        