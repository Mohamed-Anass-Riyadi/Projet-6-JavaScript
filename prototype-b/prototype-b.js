// declaration des variables 
var btn;
var output;
var nombre;
var NombreDeviner;


 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('outputtext');
 nombre = Math.floor(Math.random() * 100);
 
 // traitement 

btn.addEventListener('click', function(){
  
  NombreDeviner = document.getElementById('userInput').value;
  if (NombreDeviner == nombre){
    output.innerHTML = 'Correct'
  } else{
    if (NombreDeviner < nombre){
        output.innerHTML = "le nombre que vous avez choisir est plus petit"
    }
    else {
      output.innerHTML = "le nombre que vous avez choisir est plus grand"
    }

  } 

});






           