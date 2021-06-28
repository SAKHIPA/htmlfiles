var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},



]
//print product names

var names=products.map(item=>item.name)
//console.log(names);


//print pdcts name in uppercase

//var names=products.map(item=>item.name.toUpperCase())

var names=names.map(name=>name.toUpperCase())
//console.log(names);


//print products prize<50
var below_fifty=products.filter(item=>item.mrp<50)
//console.log(below_fifty);

//print all pdcts bw 30 to 50

var range_pdt=products.filter(item=>item.mrp>=30 & item.mrp<=50)
//console.log(range_pdt);


//print all products out of stock

var out_stock=products.filter(items=>items.aval_qty<1)
//console.log(out_stock);


//print costly products

var costly_pdct=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
//console.log(costly_pdct);

var low_cost=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2)
//console.log(low_cost);

//sort according to qty

var sorted=products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty)
//console.log(sorted);

var sorted=products.map(item=>item.name).sort()
//console.log(sorted);

//searching for product
var search=products.find(item=>item.name=="potatto")
//console.log(search);

//some()
var is_ter_avail_price=products.some(item=>item.mrp<=100)
//console.log(is_ter_avail_price);


//forEach() on sorted array
//products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty).forEach(item=>console.log(item))

products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty).forEach(item=>{
    
    if(item.aval_qty>0){
        console.log(item)
}})
    
