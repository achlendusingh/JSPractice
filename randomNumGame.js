let x=Math.floor(Math.random()*100) 
x=Number.parseInt(x)
prompt("The game has begun")
let guess, count=0
do {
     guess=Number.parseInt(prompt("Enter your guess"))
     if (guess==x)
         {
            count+=1
            prompt("Your guess is right")
            prompt("You won")
            prompt("It took you "+count+" guess")
            break;
         } 
    else{
           if (guess>x)
           {
            prompt("Your guess was wrong, the number is lesser than your entered number")
           }
           else
           {
            prompt("Your guess was wrong, the number is greater than your entered number")
           }
           count+=1
    }
    
}while(guess!=x)