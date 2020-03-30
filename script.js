// var years=[1995,2000,2001,1945,1932,1993,1997,1971,1952];

// function age(value,value1){

//  var  emptyage=[];

//   for(var i=0; i< value.length;i++){

//           emptyage.push(value1(value[i]));
          
//   }
//   return emptyage;


// }
// function agecount(value){
//     return 2020-value;

// }

// function agelimit(value){
    
    
//     if(value>=18 && value <=81){
//         console.log(' your age is ok '+value);
//     }
//     else{
//         if(value<18){
//             console.log(' your age 18 chite choto ='+value);
//         }
//         else{
//             console.log(' apnar age 81 bashi ='+value);
//         }
//     }
    
// }

// var totalage =age(years,agecount);
// var totalagelimit=age(totalage,agelimit);

// console.log(totalage); 
// console.log(totalagelimit); 


var all ={
    years :[1995,2000,2001,1945,1932,1993,1997,1971,1952],
    age: function(value,value1){
        var  emptyage=[];

        for(var i=0; i< value.length;i++){
      
                emptyage.push(value1(value[i]));
                
        }
        return emptyage;
      
    },
    agecount:function(value){
        return 2020-value;
    
    },

     agelimit:function(value){
    
    
        if(value>=18 && value <=81){
            console.log(' your age is ok '+value);
        }
        else{
            if(value<18){
                console.log(' your age 18 chite choto ='+value);
            }
            else{
                console.log(' apnar age 81 bashi ='+value);
            }
        }
        
    }



}

var showage =all.age(all.years,all.agecount);
var limitage =all.age(showage,all.agelimit);
console.log(showage);
console.log(limitage);