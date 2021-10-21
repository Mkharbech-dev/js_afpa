// var etudiants =[['Moussa', 14],['Vanessa', 17],['Jean', 8],['afpa', 5]];
// // console.log(etudiants)
//         for (i=0 ; i< etudiants.length; i++){
//             etudiants[i][0]; //nom
//             etudiants[i][1]; //note
//                 if(etudiants[i][1]< 10){
//                     console.log(etudiants[i][0] + " n'est pas admis ")
//                 }else{
//                     console.log(etudiants[i][0] + " admis avec une moyenne de " +  etudiants[i][1])
//                 }
//         }
//  **********************exo*******************
// var tab1 = [4,8,7,9,1,5,4,6];
// var tab2 = [4,8,7,9,1,5,4,6];
// var tab3 = new Array;

// var somme = 0;
// for(var i =0 ;i <tab1.length; i++){
//     somme = tab1[i]+tab2[i];
//     tab3.push(somme)
// }5
// console.log(tab3)

// *************************exo******************************
// var tab = [52,82, 57, 105, 23, 95, 315]
// console.log(tab)
// var ind1= parseInt(prompt("indiquer un indice1 entre 0 et 6"));
// var ind2= parseInt(prompt("indiquer un indice2 entre 0 et 6"));
// console.log("avant "+ tab)
// var temp = tab[ind1];
// tab[ind1] = tab[ind2] ;
// tab[ind2] = temp;
// console.log("apres "+ tab)
// *********************autre facon ************************
// let tab = [52, 82, 57, 105, 23, 95, 315];
// console.log(tab);
// var choix = prompt("saisir un chiffre entre 0 et 6");
// var choix2 = prompt("saisir un autre chiffre entre 0 et 6");
// [tab[parseInt(choix)], tab[parseInt(choix2)]] = [tab[parseInt(choix2)], tab[parseInt(choix)]];
// console.log(tab);


// ***************************************************************
//EXO 2:
// var tab = [52,82, 57, 105, 23, 95, 315];
// i1 = prompt("Chiffre entre 0 et 6");
// i2 = prompt("Chiffre entre 0 et 6");
// console.log("Avant échange : " + tab);
// var temp = tab[i1];
// tab[i1] = tab[i2];
// tab[i2] = temp;
// console.log("Après échange : " + tab);
// ******************************rondom****************************************
// var salah = Math.floor(Math.random() * 10)
// console.log(salah);
// ******************************************************************************

// var paragraphe = document.querySelectorAll('.para')
// paragraphe.forEach(element => {
//     element.style.color = "red";
    
// });
// *******************************************************************************
// var prenom = prompt('entrer nom')
// var titre = document.querySelector('.titre')
// // titre.innerText = "bonjour "+ prenom
// titre.innerHTML = "bonjour "+ prenom
// ************************************************************************************

var form = document.querySelector('.form')
// console.log(form)
function verif(event){
    event.preventDefault();
    // alert(document.querySelector('#nom'));
    var nom = document.querySelector('#nom').value
    var prenom = document.querySelector('#prenom').value
    var email = document.querySelector('#email').value
    console.log(nom.length);
    console.log(typeof prenom);
    console.log(email)
    if( (nom === '' || nom.length < 5)){
       alert("entrer un nom avec cinq caracteres minimaum")
    }
}
document.querySelector('.titre').onmouseover = function(){
    document.querySelector('.titre').style.color="red";
}
document.querySelector('.titre').onmouseout = function(){
    document.querySelector('.titre').style.background="black";
    document.querySelector('.titre').style.color="white";
}


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
// console.log(document.querySelector('#nom').value)
// })