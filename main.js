// calculator programme
const display = document.getElementById("display")

function zoneTexte(input){
    display.value += input;
  
}

function effacer(){
    display.value = "";
}

function calculer(){
    try{
        display.value= eval(display.value)

    }
    catch(error){
        display.value= "Error";

    }
}