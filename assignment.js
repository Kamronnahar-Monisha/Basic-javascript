//  https://github.com/Kamronnahar-Monisha/Basic-javascript



function kilometerToMeter( kilometer ){                //This function convert distance from kilometer to meter
    if(isNaN(kilometer)){
        return "Distance should be in number" ;//if input is not a number.
    }                     
    if(kilometer<0){
        return "Distance cannot be negative" ;//if kilometer is negative
    }
    return kilometer*1000 ; 
}





function budgetCalculator( numberOfWatch , numberOfPhone , numberOfLaptop ){                  //This function calculate the total budget
    if(isNaN(numberOfWatch) || isNaN(numberOfPhone) || isNaN(numberOfLaptop) ){
        return "Amount of things should be in number......" ; ;//if input is not a number.
    }
    if(numberOfWatch<0 || numberOfPhone<0 || numberOfLaptop<0 ){
        return "Count of someting can not be nagetive" ;//if any of this parameter is negative
    }
    return (numberOfWatch*50)+(numberOfPhone*100)+(numberOfLaptop*500);
}





function hotelCost( numberOfDays ){                          //This function calculate the amount of money spent on staying in a hotel
    if(isNaN(numberOfDays)){
        return "Amount of days should be in number" ;//if input is not a number.
    }
    if(numberOfDays<0){
        return "Number of days cannot be negative" ;//if numberOfDays is negative
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






function megaFriend( nameOfFriends ){                        //This funtion find the biggest name among all friends name
    if(!Array.isArray(nameOfFriends)){
        return "You should give an array as input" ;//if input is not a number.
    }                              
    if(nameOfFriends.length==0){
        return "The array of Friends name is empty" ;//if array is empty
    }
    var bigName = "";
    for(var i=0 ;i<nameOfFriends.length;i++){
        if(nameOfFriends[i].length > bigName.length){
            bigName = nameOfFriends[i];
        }
    }
    if (bigName==""){
        return "You should give  the name of friends as string." ;//if the array doesn't contain any string
    }
    return bigName ;
}
