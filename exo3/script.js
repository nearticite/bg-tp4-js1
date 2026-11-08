"use strict"

// Ici on utilise un tableau contenant des objets (vu dans le slide 40)
const Student = [
    {
        val1: 1000,
        val2: "JOHN",
        val3: "DOE",
        val4: 14,
        val5: 5,
    },
    {
        val1: 2000,
        val2: "BOB",
        val3: "CARLTON",
        val4: 7,
        val5: 1,
    },
    {
        val1: 3000,
        val2: "RAYAN",
        val3: "SMITH",
        val4: 13,
        val5: 3,
    }
]

// Ici on utilise une fonction (vu dans le slide 47)
function A(){
  Student.forEach(student => {
    if(B(student.val4) == true){ // Ici on utilise un if statement (vu dans le slide 43)
      console.log(student.val1 + ": AJOURNE") // Ici on utilise la Console (vu dans le slide 34)
    }
    else{
      console.log(student.val1 + ": ADMIS") // Ici on utilise la Console (vu dans le slide 34)
    }
  });
}

// Ici on utilise une fonction (vu dans le slide 47)
function B(b){
  if (b > 10) { // Ici on utilise un if statement (vu dans le slide 43)
    return false
  }
  return true
}