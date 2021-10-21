// alert('salut');
// console.log("salut les gens")
// pour commenter deux slaches
// var age = prompt("comment ca va? tu as quel age?")
// console.log(age)
// ********************************
// type de variables
// var test = " salut 1980";  //string
// var nbr = 1524;  // number
// var tab = [12, "salah", 14 , true]; // tablaeu : array()
// ********************************
// TYPE OBJET
// var object = {
//     nom: "camara",
//     prenom: "moussa"
// }

// ********************************
// Tableau d'objet
// var tab_obj = [
//     {
//         nom: "camara",
//         prenom: "moussa"
//     },
//     {
//         nom: "salama",
//         prenom: "abdel"
//     }
// ]
// ********************************
// var afpa = "test"
// console.log(typeof(afpa))

// ****************function***************
// var test = prompt('entrez un chiffre')
// test = parseInt(test);// SANS VIRGULE
// test = parseFloat(test)// AVEC VIRGULE
// console.log(test)
// ****************************************

// function multi (a , b){
//     var result = a * b;
//     return result
//     // return a * b
// }
// alert(multi(12, 2))

// *********************fonction avec plusieurs params***********************

// function addition (... chiffres){
//     var result = 0;
//     chiffres.forEach(element => {
//         result +=  element
//     });  
//     return result
       
// }
//   console.log(addition(12,12,13))

// ************************Fonctions anonymes***************************************

// (function(param){
//     console.log(param)
// })

// // appel de la fonction
// ();

// ************************PARCOURIR UN TABLEAU DIMENSIONE***************************************
// var etudiants = [
//     ["Moussa",19],
//     ["Jeff",45],
//     ["Moise",90],
//     ["Mathieu",29],
//     ["Mathéo",44],
// ];
//     etudiants.forEach(element=>{
//         console.log(element);
//         element.forEach(el=>{
//             console.log("Dans le 2eme forEach: "+el)
//         });
//     });
// ************************************************************************************

var semaine =[ "lundi" , "mar" ,"mercredi" ,"jeudi", "vendredi"  , "samedi"  , "dimanche" ];
// Supprimer un element du tableau
semaine.pop();
semaine.forEach(element => {
document.write(element + "<br>")
});
document.write("<br>--------------------------------------</br>")

semaine.push("dimanche")
semaine.forEach(element => {
    document.write(element + "<br>")
});
// *******************************************************************
document.write("<br>--------------------------------------</br>")
// chercher l'index de mardi par indexOf si on a un log tableau
semaine[semaine.indexOf('mar')] ="Mardi"
semaine.forEach(element => {
document.write(element + "<br>")
});
// ********************************************
document.write("le nombre de valeur du tableau est : "+ semaine.length)
document.write("<br>--------------------------------------</br>")
document.write("la cinqieme valeur du tableau est :   "+ semaine[4])
// *****************************************************************
document.write("<br>--------------------------------------</br>")
salah=[semaine.replace("${semaine[0]}" , semaine[5])]
document.write(salah)
