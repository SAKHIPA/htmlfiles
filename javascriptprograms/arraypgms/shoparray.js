var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"magi",5,10]
]

for(let pdt of products){
    
    
    if(pdt[2]<20){
    

    console.log(`low cost product is ${pdt[1]}`);
        
    }
    if(pdt[2]>200){
        console.log(`the costly product is ${pdt[1]}`);

    }

    if(pdt[2]<10){
        console.log(`pdct under 10 is available ${true}`);
    }

    if(pdt[0]==106){
    console.log(`details of boost:${pdt}`);}


    //no of pdcts



    //no of pdcts in stock

} 