    // for loop:
     // for loop
     // for..in loop

    //while
    //do-while

    console.log(1);
    console.log(2);

    // 1 to 10
    for(let i=1; i<=10; i++){
        console.log(i); //1,2,3.....10

    }

    //0 2 4 6 8 10
    for(let j=0; j<=10; j=j+2){
        console.log(j);//0
    }

    let numbers =[10,200,3000,400000];
    for(let n of numbers){
        console.log(n);
    }

    console.log("---------------");
    //do-while
    let d=1;
    do{
        console.log(d);
        d++; //2
    }
    while(d>=10);//false