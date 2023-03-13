console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++){
    
if ( i % 3 == 0 && i % 5 == 0){
console.log (i,"FIZZBUZZ")
}
else if (i % 3 == 0){
console.log(i,"FIZZ")
}
else if ( i % 5 == 0){
console.log(i, "BUZZ")
}
else {
    console.log(i)
}
}

//Excercise 3 Section

console.log ("Excercise 3: \n========\n")

let i =1;
do{
if(i % 15 == 0)
{
console.log(i,"FIZZBUZZ")
}
else if(i % 3 == 0)
{
console.log(i, "FIZZ")
}
else if (i % 5 == 0)
{    
console.log(i, "BUZZ")
}
i++
}while(i <= 100);

//Excercise 4 Section




