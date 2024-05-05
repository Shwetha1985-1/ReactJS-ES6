const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 15, stock: 20 }
];




var filteredArray = products.filter(function(prod){
    if(prod.category=="Electronics"){
        return prod.category ;
    }
   
    });

    var filteredArray3 = products.filter(function(prod,a){
           if(!prod.stock>a){
           return prod.category ;
        }

});

        var filteredArray2 = products.filter(function(prod){
            if(prod.price>=50 & prod.price<=150){
                return prod.category ;
            }
    
    
           
            });

        

    console.log(filteredArray3(7));