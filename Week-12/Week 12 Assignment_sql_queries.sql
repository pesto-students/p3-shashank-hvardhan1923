Prob 1:- select itemno from items where weight in (select min(weight) from items);

prob 2:- select wid from warehouses where city='PUNE';

prob 3:- select item_no from items_orders_relation where order_no in (select ono from orders where cno in (select cno from customer where cname='Mr. Patil'));

prob 4:- select wid from stores group by wid order by count(wid) desc limit 1;

prob 5:- select item_no from items_orders_relation group by item_no order by sum(ordered_quantity) limit 1;

prob 6:- select c.cno, c.cname, o.ono,o.odate,i.item_no,i.ordered_quantity from customer c, orders o, items_orders_relation i where c.cno=o.cno and o.ono=i.order_no;
