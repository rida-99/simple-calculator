window.onload = function() {
    document.getElementById("screen").value = "!Bienvenue" ;
}

function mode(){
    mode = document.getElementById("button_mode");
    if(mode.value == "mode sombre"){
        document.getElementById("button_mode").value = "mode fance"; //&#9788;
        document.body.backgroundColor = "red";
        document.body.style.color = "";
    }
    else{
        document.getElementById("button_mode").value = "mode sombre"; // &#x263E;
        document.body.backgroundColor = "linear-gradient(to right, darkslategray, cadetblue)";
        document.body.style.color = "";
    }
}

function nmbrcharacter(ch){  // pour compter le nombre de point virgule dans l'expression
    var screenCurrent = document.getElementById("screenCurrent").value;
    var nbr = 1;
    for(var i = 0; i < screenCurrent.length; i++){
        if(screenCurrent[i] == ch)
            nbr++;
    }
    return nbr;
}

function affiche(n){
    console.log("nombre de " + n + " est : " + nmbrcharacter(n));
    
    var screenCurrent = document.getElementById("screenCurrent").value;
    
    if(isNaN(n)){
        var lastelement = screenCurrent.charAt(screenCurrent.length - 1);
        switch(n){
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
			case '²':
                if(lastelement == "+" || lastelement == "-" || lastelement == "*" || lastelement == "/" || lastelement == "%"|| lastelement == "²"){
                    document.getElementById("screenCurrent").value = screenCurrent.slice(0, screenCurrent.length-1);
                    document.getElementById("screenCurrent").value += n;
                }else
                    document.getElementById("screenCurrent").value += n;
                break;
            case '.':
                if(nmbrcharacter('.') <= 1){ // pour ne pas repeter le point virgule dans l'expression
                if(lastelement == "."){
                    document.getElementById("screenCurrent").value = screenCurrent.slice(0, screenCurrent.length-1);
                    document.getElementById("screenCurrent").value += n;
                }else
                    document.getElementById("screenCurrent").value += n;
                }
                break;
            default:
                document.getElementById("screenCurrent").value += n;
                break;
        }
    }
    else{
        /*if(n == '0'){    //*********************************** Maintenance *************************************************
            console.log("HHHHHHHHHHH");
            document.getElementById("screenCurrent").value = "0";
        }
        else{
            console.log("OOOOOOOOOO");
            document.getElementById("screenCurrent").value += n;
        }*/
        document.getElementById("screenCurrent").value += n;
    }
    
}

/*function puiss(){
    
    document.getElementById("screenCurrent").value += "²";  
}*/

function clearTout(){
    document.getElementById("screen").style.backgroundColor= "darkslategrey";
    document.getElementById("screenCurrent").style.backgroundColor= "darkslategrey";
    
    document.getElementById("screen").value = "";
    document.getElementById("screenCurrent").value = "";
}

function deleteOne(){
    var screen = document.getElementById("screenCurrent").value;
    
    document.getElementById("screenCurrent").value = screen.substring(0, screen.length - 1);
}

function calculer(){
    
    
    var valeurScreen = document.getElementById("screenCurrent").value;
    
    
    
    var lastelement = valeurScreen.charAt(valeurScreen.length - 1);     // pour la puissance
    if(lastelement == "²"){
        valeurScreen = valeurScreen.substring(0, valeurScreen.length-1);
        console.log(valeurScreen);
        valeurScreen = "(" + valeurScreen + ")" + "*" + "(" + valeurScreen + ")";
       }
    
    
    try{
        console.log(valeurScreen);
        var res = eval(valeurScreen);
        
        document.getElementById("screenCurrent").value = res;
        document.getElementById("screen").value = valeurScreen;
    }catch(e){
        document.getElementById("screen").style.backgroundColor= "#f00";
        document.getElementById("screen").value = " Expression invalide : click --> 'c' to clear ";
        document.getElementById("screenCurrent").style.backgroundColor= "#f00";
        document.getElementById("screenCurrent").value = "";
    }
    
    if(valeurScreen == "")
        document.getElementById("screenCurrent").value = "0";

}

