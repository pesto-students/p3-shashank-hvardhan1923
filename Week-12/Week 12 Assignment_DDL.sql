create database pesto_dev;
use pesto_dev;

create table CITIES(CITY char(20) PRIMARY KEY, STATE char(20));

create table WAREHOUSES(WID INT PRIMARY KEY, WNAME char(20), LOCATION char(20), EXTRA_CONTEXT json, CITY char(20) REFERENCES CITIES(CITY));

create table STORES(SID INT PRIMARY KEY, STORE_NAME CHAR(20), LOCATION_CITY CHAR(20), WID INT REFERENCES WAREHOUSES(WID));

CREATE TABLE CUSTOMER(CNO INT PRIMARY KEY, CNAME CHAR(50), ADDR VARCHAR(50), CU_CITY CHAR(20));

CREATE TABLE ORDERS(ONO INT PRIMARY KEY, ODATE DATE, CNO INT REFERENCES CUSTOMER(CNO));

create table ITEMS(itemno int primary key, description text, weight decimal(5 , 2),cost decimal(5 , 2));

create table items_orders_relation(item_no int references items(itemno), order_no int references orders(ono), ordered_quantity int);

create table stores_items_relation(store_id int references stores(sid), item_no int references items(itemno), quantity int);