

// 



function kilometerToMeter( kilometer ){                           //This function convert distance from kilometer to meter
    if(kilometer<0){
        return "Distance cannot be negative" ;
    }
    return kilometer*1000 ;
}





function budgetCalculator( numberOfWatch , numberOfPhone , numberOfLaptop ){                  //This function calculate the total budget
    if(numberOfWatch<0 || numberOfPhone<0 || numberOfLaptop<0 ){
        return "Count of someting can not be nagetive" ;
    }
    return (numberOfWatch*50)+(numberOfPhone*100)+(numberOfLaptop*500);
}





function hotelCost( numberOfDays ){                          //This function calculate the amount of money spent on staying in a hotel
    if(numberOfDays<0){
        return "Number of days cannot be negative" ;
    }

    if(numberOfDays>=0 && numberOfDays<=10){
        return numberOfDays*100;
    }
    else if(numberOfDays>=11 && numberOfDays<=20){
        return ((numberOfDays-10)*80)+1000;
    }
    else if(numberOfDays>20){
        return ((numberOfDays-20)*50)+1800 ;
    }
}






function megaFriend( nameOfFriends ){                                  //This funtion find the biggest name among all friends name
    if(nameOfFriends.length==0){
        return "The array of Friends name is empty" ;
    }
    var bigName = "";
    for(var i=0 ;i<nameOfFriends.length;i++){
        if(nameOfFriends[i].length > bigName.length){
            bigName = nameOfFriends[i];
        }
    }
    return bigName ;
}