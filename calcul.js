var form = document.querySelector('.form')
form.style.background= 'grey'
form.style.padding= '15px'
form.style.margin = '15px'


function calcul(event){
    event.preventDefault();

var nbre1 = parseInt(document.querySelector('#nbre1').value);
var nbre2 = parseInt(document.querySelector('#nbre2').value);
var operateur = document.querySelector('#operateur').value;


// console.log(operateur)


var  result = 0

switch(operateur){
    case "+":
        result = nbre1+nbre2;
        break;
    case "-":
        result = nbre1-nbre2;
        break;
    case "*":
        result = nbre1*nbre2;
        break;
    case "/":
        result = nbre1/nbre2;
        break;
    default:
}
// afficherAlert()
alert(nbre1 + operateur +nbre2 +" = " + result);

// function afficherAlert(){
//     const item = document.createElement('div')
//     item.style.background = "red" ;
//     item.style.color = "yellow";
//     item.style.width = "200px";
//     item.style.textAlign = "center";
//     item.innerText = result;
//     form.appendChild(item)  
// }
}



document.querySelector('.hidden').onclick = function(){
document.querySelector('.form').style.display="none";
}

document.querySelector('.block').onclick = function(){
document.querySelector('.form').style.display="block";
}

document.querySelector('#nbre1').onmouseover = function(){
document.querySelector('.message').innerHTML= "saisir un chiffre";
document.querySelector('.message').style.background= "yellow";
document.querySelector('.message').style.textAlign = "center";
    
}
document.querySelector('#nbre2').onmouseover = function(){
document.querySelector('.message').innerHTML= "saisir un chiffre";
document.querySelector('.message').style.background= "yellow";
document.querySelector('.message').style.textAlign = "center";
    
}
document.querySelector('#operateur').onmouseover = function(){
document.querySelector('.message').innerHTML= "selectionner un operateur: +-*/%";
document.querySelector('.message').style.background= "yellow";
document.querySelector('.message').style.textAlign = "center";
    
}



