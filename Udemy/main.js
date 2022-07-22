//Les conditions :

//  let age = prompt("Quel est votre age ? ")

//  if (age < 18) {
//     alert("tu es mineur ")
// }
// else if (age < 21 ){
//     alert(" tu es majeur en france")
// }
// else {
//     alert(" Tu es majeur aux USA a toi les casino ")
// }




//Les condition switch : 




// let consmmable = "rien"

// switch (consmmable) {
//     case "carotte": 
//     case "pomme de terre": 
//     case "cougete":
//         console.log("cest un legume ");
//         break;
        
//     case " bananne":
//     case " fraises":
//     case " pomme":
//         console.log("cest un fruit")
//         break;
//     default:
//         console.log("ceci n'est ni un fuit ni un legume");

// }




// Les boucles :


// let i = 0;
// while (i < 5) {

//     console.log("Ligne : " + i + " ");
//     i++;
// }


// do{
//     var prenom = prompt("Entrer votre prenom s'il vous plait ? ");

// }while (prenom == "" || prenom == null)

// alert("Bievenue " + prenom +  " .");


//boucle for


// for (let i = 1; i <= 5; i++){
//     console.log("ligne : " + i + ".");
// }




// Projet Calculatrice :


// //UNe boucle qui demande et on oblige lutilisateur à faire un choix
// do{
//     var choix = Number(prompt("Que souhaiterez-vous faire ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction \n 4 - Division\n "));
// }while(choix != 1 && choix != 2 && choix != 3 && choix != 4);

// //Une boucle switch pour faire un choix parmis ceux citer
// switch(choix){
//     case 1:
//         var resultat = addition(premierNombre, deuxiemeNombre);
//         break;
//     case 2:
//         var resultat = multiplication(premierNombre, deuxiemeNombre);
//         break;
//     case 3: 
//         var resultat = division(premierNombre, deuxiemeNombre);
//         break;
//     case 4: var resultat = soustraction(premierNombre, deuxiemeNombre);
//     break;

//     default:
//         throw new Error("Une erreur est survenue");
        
// }

// //une boucle qui demander de saisir un ombre pet aussi on Obliger lutilisateur à mettre un nombre 
// do{
//     var premierNombre  = Number(prompt("Entez votre  premier nombre : "));
//     var deuxiemeNombre = Number(prompt("Entez votre  deuxieme nombre : "));
// }while(isNaN(premierNombre) || isNaN(deuxiemeNombre));


// //fonction addition
// function addition (nombreA, nombreB) {
//     return nombreA + nombreB;
// }

// //fonction multiplication
// function multiplication (nombreA, nombreB) {
//     return nombreA * nombreB;
// }

// //Fonction Soustraction
// function soustraction (nombreA, nombreB) {
//     return nombreA - nombreB;
// }

// //Fonction division 
// function division (nombreA, nombreB) {
//     if(nombreB == 0){
//         throw new Error("ipossible de diviser par 0");
//     }
//     return nombreA / nombreB;
// }

// alert("Voici le Resultat " + resultat +"");





//Les tableaux 



// //Les Tableau Simple 
// let tableau = ['un', 'deux', 'trois',];
// // console.log(tableau);
// // console.log(tableau[0]);

// //ajouter et surpimer des elements
// tableau.splice(0, 0,'moi')
// console.log(tableau);

// //Acceder au derrnier element dans mon tableau 
// console.log(tableau.length);

// //Ajouter des element
// tableau.push('5');
// console.log(tableau);

// //Suprimer Des èlements
// //Premier èlement
// tableau.shift();
// //Derrnier èlement
// tableau.pop();
// console.log(tableau);


// // Les tableau 2demonssions
// let monTableau2D = [
//     ['Mark', 'Jeff', 'Bill',],
//     ['Zukerberg', 'Bezos', 'Gates']
// ];

// // console.log(monTableau2D[0][0]);

// //Suprmier ou ajouter des elments
// monTableau2D.splice(2, 0, ['1', '2', '3']);
// console.log(monTableau2D);



// //Les tableau Assiciatif 
// let monTableauAssociatif = {
//     'Prenom' : 'Mark',
//     'Nom'    : 'Zukergberg',
//     'Poste'  : 'PDG Facebook'
// };
// console.log(monTableauAssociatif['Prenom']);
// console.log(monTableauAssociatif['Poste']);


// //Ajouter des ellements dans le tableau associatif
// monTableauAssociatif['Nationnalitè'] = 'Americaine';
// console.log(monTableauAssociatif);






//LA boucle For et For in 


// //La boucle FOR IN
// let panier = ['fraise', 'banane', 'poire'];

// for (const fruit in panier) {
//     console.log(panier[fruit]); 
// }

//LA boucle FOR OF

// let panier = ['fraise', 'banane', 'poire'];

// for (const fruit of panier) {
//     // console.log(fruit);
//     console.log(panier.indexOf(fruit)); 
// }





//Les boucle forEach



// let listeDePays = ['france', 'Belgique', 'Japon', 'Maroc'];

// for (const pays of listeDePays) {
//     console.log(pays);
    
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);

// });

// listeDePays.forEach(pays => console.log(pays));



// Pour Concategner un tableau associatif 

// let monTableauAsociatif = {
//     'Prenom' : 'Mark',
//     'nom'    : 'Zukerberg',
//     'poste'  : 'PDG Facebook'
// };

// On vas utiliser une boucle for in


// function concatener(tableau){

//     let chaine = '' ;

//     for (const valeur in tableau) {

//         chaine += (valeur + ' : ' + tableau[valeur] + '\n');

//     }
//     console.log(chaine);

// }

// concatener(monTableauAsociatif);







//Les NOtion avancer sur les fonctions




// let mafonction = () => console.log('test');

// mafonction();







//Interiagir avec le DOM


//let header    = document.getElementsByTagName('header');
// let logo      = document.getElementById('logo');
// let container = document.getElementsByClassName('container');
// let h1        = document.querySelector('h1');
// let p         = document.querySelectorAll('p');

// console.log(header);
// console.log(logo);
// console.log(container);
// console.log(h1);
// console.log(p);



//Modifier des elements du DOM


// let h1 = document.getElementsByTagName('h1')[0];
// h1.textContent = "Hello World !";
// h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

// console.log(h1);



// function abraCadabra (){
//     let prenom = prompt("Quelle est votre prenom ? ");
//     let nom    = prompt('Quelle est votre nom');
//     let age    = prompt('Quelle est votre nom ?');
    
//     alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, " + prenom + " ! Euh... Je veux dire... Monsieur le grand magicien "  + nom +  " ! Cela fait déjà  " + age +  "  ans que vous faites rayonner notre contrée ");
   
// }



// function calculerIMC (poids, taille){

//     //Calculer la taille en mètre 
//     let taillEnmètre   =  taille/100;
//     let tailleCalculee =  Math.pow(taillEnmètre, 2);
//     let resultat       =  poids / tailleCalculee;
    
//     return resultat; 

// }

// let poids = prompt("Quel est votre poids ? (en Kg) ");
// let taille= prompt("Quelle est votre taille ? (en cm)");

// alert(calculerIMC(poids, taille));


// console.log('top');


