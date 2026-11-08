"use strict"

// Ici on utilise un tableau contenant des objets (vu dans le slide 40)
const Produit = [
    {
        nom : 'produit1',
        qte :1,
        prix :10,
    },
    {
        nom : 'produit2',
        qte :2,
        prix :20,
    },
    {
        nom : 'produit3',
        qte :3,
        prix :30,
    },
    {
        nom : 'produit4',
        qte :4,
        prix :40,
    },
    {
        nom : 'produit5',
        qte :5,
        prix :50
    }
]


let moyenne;

// Ici on utilise une boucle (vu dans le slide 45)
for(produit in Produit) {
    moyenne = Produit[x];
}

// Ici on utilise une boucle (vu dans le slide 45)
for(produit in Produit) {
    if (Produit[x] >= moyenne) {
        console.log(Produit[x]); // Ici on utilise la Console (vu dans le slide 34)
    }
}

console.log(Produit.length); // Ici on utilise la Console (vu dans le slide 34)

let somme = Produit.reduce
            ((acc, produit) => acc + produit.prix ,0);

// Ici on utilise la Console (vu dans le slide 34)
console.log(somme);

function valeurstock(produit){
    // Ici on utilise la Console (vu dans le slide 34)
    console.log(produit.qte*produit.prix);
}

valeurstock(Produit[1]);
valeurstock(Produit[2]);
valeurstock(Produit[3]);
valeurstock(Produit[4]);
valeurstock(Produit[5]);

function afficherNom(callback){

  // Ici on utilise la méthode forEach (vu dans le slide 45)
  Produit.forEach(produit => {
    // Ici on utilise la Console (vu dans le slide 34)
    console.log(produit.nom);
  });

  // Ici on utilise une fonction de rappel (Callback) (vu dans le slide 48)
  callback();
}

function afficherPrix(){

  // Ici on utilise la méthode forEach (vu dans le slide 45)
  Produit.forEach(produit => {
    // Ici on utilise la Console (vu dans le slide 34)
    console.log(produit.prix);
  });
}

// Ici on utilise une fonction de rappel (Callback) (vu dans le slide 48)
afficherNom(afficherPrix);