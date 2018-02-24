// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   var coins = {
      
   }
   var coin_H, coin_Q, coin_D, coin_N, coin_P;
    function rubli_foreve(currency){         
           if(currency>=25){
           if(currency==25)
               coins["Q"] = 1;
           else{
               coins["Q"] = 1;
               if(Math.floor((currency-25)/10) > 0){
                   coins["D"] = Math.floor((currency-25)/10);
                   if(Math.floor((currency-25-10*Math.floor((currency-25)/10))/5) >0){
                       coins["N"] = 1;
                       if(currency-25-10*Math.floor((currency-25)/10)-5 > 0){
                           coins["P"] = currency-25-10*Math.floor((currency-25)/10)-5;
                       }
                   }else{
                       if(currency-25-10*Math.floor((currency-25)/10)>0)
                       coins["P"] = currency-25-10*Math.floor((currency-25)/10);
                   }
               }else{
                   if(Math.floor((currency-25)/5) >0){
                       coins["N"] = 1;
                       if(currency-25-5 > 0){
                           coins["P"] = currency-25-5;
                       }
                   }else{
                       if(currency-25>0)
                       coins["P"] = currency-25;
                   }
               }
           }
       }
           else{if(currency>=10){
               if(currency==10)  
                   coins["D"] = 1; 
               else{
                   coins["D"] = Math.floor(currency/10);
                   if(Math.floor((currency-Math.floor(currency/10)*10)/5)>0){
                       coins["N"] = Math.floor((currency-Math.floor(currency/10)*10)/5);
                       if(currency-Math.floor(currency/10)*10-5 > 0)
                       coins["P"] = currency-Math.floor(currency/10)*10-5;
                   }else{ if(currency%10>0) coins["P"] = currency%10;}
               }
           }
                else{if(currency>=5){
                    if(currency == 5) 
                        coins["N"] = 1;
                    else{
                        coins["N"] = 1;
                        if(currency%5>0)
                        coins["P"] = currency%5;}
                }
                    else{
                        if(currency>0)
                        coins["P"] = currency;
                    }
                    }
               
           }
}
   if(currency<=10000){
       if(currency!=0)
        if(currency >= 50){
            coins["H"] = Math.floor(currency/50);
            currency = currency%50;
                if(currency!=0)
                 rubli_foreve(currency);    
        }
       else{
           rubli_foreve(currency);
       }
      }else{
          coins.error = "You are rich, my friend! We don't have so much coins for exchange";
      }
return coins;
}
