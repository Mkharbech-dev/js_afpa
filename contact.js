



// function envoyer(event){
//     var prenom = document.querySelector('#lastname');
//     var mail = document.querySelector('#email');
//     var tele = document.querySelector('#tel');
//     var texte = document.querySelector('#message');
//     var nom = document.querySelector('#firstname');
//     // ************************************************************
//     var lastName = document.querySelector('#lastname').value;
//     var email = document.querySelector('#email').value;
//     var tel = document.querySelector('#tel').value;
//     var text = document.querySelector('#message').value;
//     var firstName = document.querySelector('#firstname').value;
//     event.preventDefault();
//     var tab = [prenom, mail, tele, texte, nom];
//     var tab = [lastName, email, tel, text, firstName];
//     tab.forEach(element => {
//         if (element != ""){
//             alert("formulaire bien posté")
//         }else{
//             alert(element.name + "n'est pas rempli")
//             return false ;
//         }
//     });
//     return false
// }

function envoyer(event){

    event.preventDefault();
    var genre = document.querySelector('.genre') 
    var homme = document.querySelector('#title_m') 
    var femme = document.querySelector('#title_f') 
    if(!homme.checked && !femme.checked){
    alert('saisir une civilité ')
    // genre.setAttribute('class', "alert alert-danger")
    return false;
    }
    if(document.querySelector('#firstname').value == ""){;
    document.querySelector('#firstname').setAttribute('class', "alert alert-danger")
    document.querySelector('#firstname').focus();
    alert('entrer un nom ')
    return false;
    }else{
    document.querySelector('#firstname').setAttribute('class', "alert alert-success")
    }
    if(document.querySelector('#lastname').value == ""){
    document.querySelector('#lastname').setAttribute('class', "alert alert-danger")
    document.querySelector('#lastname').focus();
    alert('entrer un prénom ')
    return false;
    }else{
    document.querySelector('#lastname').setAttribute('class', "alert alert-success")
    }


    if(document.querySelector('#email').value == ""){
    document.querySelector('#email').setAttribute('class', "alert alert-danger")
    document.querySelector('#email').focus();
    alert('entrer un email ')
    return false;
    }else{
    document.querySelector('#email').setAttribute('class', "alert alert-success")
    }



    if(document.querySelector('#tel').value == ""){
    document.querySelector('#tel').setAttribute('class', "alert alert-danger")
    document.querySelector('#tel').focus();
    alert('entrer un tel ')
    return false;
    }else{
    document.querySelector('#tel').setAttribute('class', "alert alert-success")
    }



    if(document.querySelector('#message').value == ""){
    alert('entrer un texte svp ')
    document.querySelector('#message').setAttribute('class', "alert alert-danger")
    document.querySelector('#message').focus();
    return false;
    }else if(document.querySelector('#message').value.length < 11){
        document.querySelector('#message').setAttribute('class', "alert alert-danger")
        alert('entrer minimaum 10caractéres dans le message')
    }else{
    document.querySelector('#message').setAttribute('class', "alert alert-success")
    }

    var agree = document.querySelector('#agree') 
    var read = document.querySelector('#read')
    var divFlex =  document.querySelector('.conditions')
    if(!agree.checked || !read.checked){
    alert('accepter les deux conditions ')
    // divFlex.setAttribute('class', "alert alert-danger")
    return false;
    }
    
    if (true){
        document.querySelector('.container').innerHTML = "merci, pour votre message Mr  " + document.querySelector('#lastname').value
    }
}









// function envoyer(event){
//     event.preventDefault();
//     var inputLabel = document.querySelector('.form-label').value
//     console.log(inputLabel)
//     inputLabel.forEach(element => {
//         console.log(element)
//         if(element != ''){
            
//             alert('ok')
//         }else{
//             alert("ko")
//             return false ;
//         }
//     });
// }