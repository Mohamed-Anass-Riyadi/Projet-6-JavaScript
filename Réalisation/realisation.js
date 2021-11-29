// declaration des variables 
var button;
var output;
var nombreDeviner;
var attempt;
var nombre;


 // entrer: saiser 
 button = document.getElementById('button');
 output = document.getElementById('outputtext');
 nombre = Math.floor(Math.random() * 100);
 console.log(nombre)
 attemptOutPut = document.getElementById('tentative')
 attempt =10;
 // traitement 

button.addEventListener('click', function(){
    attempt--;
    nombreDeviner = document.getElementById('userInput').value;
    if(attempt>0){
        attemptOutPut.innerHTML=attempt +"-tentative"
        if ( nombreDeviner == nombre){
            if (nombreDeviner == nombre && attempt >=8 ) { 
                output.innerHTML = 'Bravo, vous avez ganiez !'
                }else{
                if(nombreDeviner == nombre && attempt >=3){
                    output.innerHTML ='Félicitations, vous avez gagné après , ' +attempt +" tentative" 
                }
                }
                
          } else{
            if ( nombreDeviner < nombre){
                output.innerHTML = "le nombre que vous avez choisir est plus petit !"
            }
            else {
              output.innerHTML = "le nombre que vous avez choisir est plus grand !"
            }
        
          }
    }else {
        output.innerHTML = "Vous avez perdu !!"
        attemptOutPut.innerHTML= "0-tentative"
    }





  
  

});

    