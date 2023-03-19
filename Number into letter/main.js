

"use strict"    //strict mode on

//initializing  variables
let score;
let repeat = true;


while (repeat) {                             //while loop to repeat entire process

  do {                                      //do while loop to validate and repeat process

    score = parseInt (                          //asking for numeric grade in prompt
      prompt (

        "Bimal Pudasaini Assignment#1 \n\n Please enter a number grade between 0 and 100",
        "0"
      )
    );


    if (isNaN(score) || score > 100 || score < 0) {                  //coldition for valid input

      alert (                                                   //alert msg if validation failed

        "Bimal Pudasaini Assignment#1 \n\n Invalid number grade! please enter a numeric value between 0 and 100"
      );
    };

  }

  while (isNaN(score) || score > 100 || score < 0);           //coldition for valid input



  //if else statement for grading 
  if (score >= 88) {

    alert (

      "Bimal Pudasaini Assignment#1 \n\n Number Grade = " + score +
      
      "\n Letter Grade = A"

    );

  } 
  
  else if (score >= 80) {

    alert (

      "Bimal Pudasaini Assignment#1 \n\n Number Grade = " + score +

      "\n Letter Grade = B"

    );

  } 
  
  else if (score >= 68) {

    alert (

      "Bimal Pudasaini Assignment#1 \n\n Number Grade = " + score +
      "\n Letter Grade = C"

    );

  } 
  
  else if (score >= 60) {

    alert (

    "Bimal Pudasaini Assignment#1 \n\n Number Grade = " + score +
    "\n Letter Grade = D"

    );

  }
  
  else if (score < 59) { 

    alert (

      "Bimal Pudasaini Assignment#1 \n\n Number Grade = " + score +
      "\n Letter Grade = F"

    );

  } 
  
  else {             //if all the conditions are false false 

    alert (

    "Bimal Pudasaini Assignment#1 \n\n Invalid number grade! please enter a numeric value between 0 and 100"

    );
  };


 //repeat when entering y or Y 

  let repeatAgain = prompt (
    "Dou you want to convert another number grade value?(y/n)", "y"    //asing user for input

  );

  if (repeatAgain == "y" || repeatAgain == "Y") {  //condition 

    repeat = true;  //repeats entire process
  } 

  else {
    repeat = false;  //execute 
  };
};
