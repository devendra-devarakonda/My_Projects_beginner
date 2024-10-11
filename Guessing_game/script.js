const max = prompt("Enter the maximum number of range You want to Guess (Starts from 1) : ");

const random=Math.floor( Math.random() * max ) + 1;

while(true){

    let num = prompt("Enter the guessed Number :  or ('Quit to Quit the Game') ");

    if(num=="quit"){
        console.log("You have quited the Game ");
        break;
    }

    if(num==random){
        console.log(" You Have Won the Game by Guessing Correct number ");
        break;
    }
    else if(num>max){
        console.log("you Guessed big number ");
    }

    else{
        console.log("You Guessed Small Number")
    }
}

