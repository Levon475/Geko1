let numbers = [12, 5, 8, 21, 3, 17, 9, 30, 2, 14];

  /* 1  for( let i=0; i <10; i++){
        console.log(numbers[i]);
    } */

   /* 2 for( let j=0; j<10; j++){
        if(numbers[j] > 10){
            console.log(numbers[j])
        }
    } */

/* 3    let x=0;
    for(let i=0; i<10; i++){
         x += numbers[i];
    }
    console.log(x); */

/* 4    let min = numbers[0]
    for(let i=1; i<10 ; i++){
        if( min > numbers[i]){
            min = numbers[i] 
        }
    }
    console.log(`"This number is minimum "${min}`) */

    let n = 0;

    for( let i = 0; i < 10; i++){
        if (numbers[i] % 2 === 0){
            n++;
        }
    } 
    console.log(`"zuyg en ${n} hat tiv"`)