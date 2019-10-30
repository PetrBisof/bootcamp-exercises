

//1

/* x = 0;

for (const number of numbers) {
    x += 1;
  }
 
  console.log(x); */

  //2

  /* console.log(numbers[13]); */

  //3

/*   i = (numbers.length - 1) / 2;

  console.log(numbers[i]); */

  //4

/*   for (const number of numbers) {
    console.log(number);
  } */

  //5

/*   for (const number of numbers) {
    console.log(number*number);
  } */

  //6

 /*  for (const number of numbers) {
    if(number<0){
        console.log(number)
    };
  } */

  //7

/*   for (let number of numbers) {
    if(number<0){
        number *= -1;
        console.log(number)
    }
    else{
        console.log(number);
    };
  } */

  //8

/*     for (let number of numbers) {
    let absolute = 0;

    if(number<0){
        number *= -1;
        absolute = number
            }
    else{
        absolute = number
            };
    if(number % 3 === 0)
    {console.log(number)}
  }  */

  //9

/*     for (let number of numbers) {
    if(number % 2 === 0)
    {console.log(number)}
  } */

  //10

/*   for (let number of numbers) {
    let difference = 5;
        if(number<0){
        number *= -1;
        difference += number;
        console.log(difference);
            }
    else{
        if (number <= 5)
        {
            difference -= number;
            console.log(difference);
        }
        else{
            
            number -= difference;
            console.log(number);
        };
            }
        } */

//11

/* for (const number of numbers) {
    let square = number*number;
    let difference = 5;

    if (square <= 5)
        {
            difference -= square;
            console.log(difference);
        }
        else{
            
            square -= difference;
            console.log(square);
        };
            } */

//12

/* for(let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > numbers[i-1]){
        console.log(numbers[i])
    };
  } */

  //13

/*  for(let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]){
        console.log(numbers[i])
    };
  } */

  //counting

  //3

/*   const average = () =>{
      let i = 0;
    for (const number of numbers) {
        i += number    
  };
  console.log(i/numbers.length);
}
average(); */

//4

/* const average = () =>{
    let i = 0;
  for (const number of numbers) {
      if(number > 0)
      {i += number }   
};
console.log(i);
}
average(); */

//Searching
//1 

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

const row = () => {
    let x = 0;
    for (let i = 1; i < numbers.length; i++) {
        if ( numbers[i] > numbers[i-1]){
            x += 1;
        } else {
            x = 1;
        }
    }
    console.log(x);
}

row();

