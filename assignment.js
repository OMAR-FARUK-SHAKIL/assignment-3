// ekhane url likhte hbe

//problem-1: Kilometer To Meter

function kilometerToMeter(km)
{
    var meter;
    if (km>-1) {
        meter = km*1000;
        return meter;
    } 
    else {
       return console.log("Distance should be a positive value.");
    }
    
}


//problem-2: budgetCalculator

function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity)
{   
    if (watchQuantity<-1 || phoneQuantity<-1 ||laptopQuantity<-1) {
        return console.log("Hey!Quantity of product should always positive.")
    }
   
    var watchPrice = 50 * watchQuantity;
    var phonePrice = 100 * phoneQuantity;
    var laptopPrice = 500 * laptopQuantity;

    var total = watchPrice + phonePrice +        laptopPrice;

    return total;
}


//problem-3: hotelCost

function hotelCost(days)
{   
    if (days<0) {
        return console.log("Hey!Days should not negative.")
    }
    var hotelRent;
    if (days<=10) {
        hotelRent = days * 100;
        return hotelRent;
    } 
    else if(days >10 && days<=20) {
        hotelRent = (days-10)*80 + 10*100;
        //10*100 is first 10 days rent.
        return hotelRent;
    }
    else{
        hotelRent = (days-20)*50 + 10*100 + 10*80;
        //10*100 is 1st 10 days rent and 10*80 is rent of 11-20th days.
        return hotelRent;
    }
}


//problem-4: megaFriend

function megaFriend(names)
{
    var lgth = 0;
    var longest;
  
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > lgth) {
            var lgth = names[i].length;
            longest = names[i];
        }
    }
    return longest;
}


