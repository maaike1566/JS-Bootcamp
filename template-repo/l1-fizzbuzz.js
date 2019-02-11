for (var number = 1; number <= 100; number++){
var leeg = " "
    if (number % 3 == 0 && number % 5 == 0){
        leeg += "Fizzbuzz";
    }
    else if (number % 3 == 0){
        leeg += "Fizz";
    }
    else if( number % 5 == 0){
        leeg += "Buzz";
    }
    else{
        leeg += number;
    }

    console.log(leeg);
}
