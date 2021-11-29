// declaration des variables 
var btn;
var sortie;
var nombre;
var NombreDeviner;


 // entrer: saiser 
 btn = document.getElementById('btn');
 sortie = document.getElementById('sortietext');
 nombre = Math.floor(Math.random() * 100);
 
 // traitement 

btn.addEventListener('click', function(){
  
  NombreDeviner = document.getElementById('userInput').value;
  if (NombreDeviner == nombre){
    sortie.innerHTML = 'Correct'
  } else{
    if (NombreDeviner < nombre){
        sortie.innerHTML = "le nombre que vous avez choisir est plus petit"
    }
    else {
      sortie.innerHTML = "le nombre que vous avez choisir est plus grand"
    }

  } 

});






           