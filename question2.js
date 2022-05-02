const items = [ {name: 'Bike', price:100}, 
{name: 'TV', price:200},
 {name: 'Album', price:10},
  {name: 'Book', price:5},
   {name: 'Phone', price:500}, 
   {name: 'Computer', price:1000}, ];

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
const cheapProduct = items.reduce((prev,current)=>(prev['price']<=current['price'])?prev:current);

//Filter and show the product that will be expensive in the array
const expensiveProduct = items.reduce((prev,current)=>(prev['price']<=current['price'])?current:prev);

//Filter and show the product that will be expensive in the array
const totalPrice = items.reduce((prev,current)=>prev+current['price'],0);

//Calculate the full price of all product combined and remove product that are under the 10 dollar
const totalPriceWithout10= items.filter((item)=>item['price']!=10).reduce((prev,current)=>prev+current['price'],0);