
function buttonClicked(x) {
    switch(x) {
       case "1": document.getElementById('exp').value = document.getElementById('exp').value + "1";
        break;
       case "2": document.getElementById('exp').value = document.getElementById('exp').value + "2";
        break;
       case "3": document.getElementById('exp').value = document.getElementById('exp').value + "3";
        break;
       case "4": document.getElementById('exp').value = document.getElementById('exp').value + "4";
        break;
       case "5": document.getElementById('exp').value = document.getElementById('exp').value + "5";
        break;
       case "6": document.getElementById('exp').value = document.getElementById('exp').value + "6" ;
        break;
       case "7": document.getElementById('exp').value = document.getElementById('exp').value + "7";
        break;
       case "8": document.getElementById('exp').value = document.getElementById('exp').value + "8";
        break;
       case "9": document.getElementById('exp').value = document.getElementById('exp').value + "9";
        break;
       case "0": document.getElementById('exp').value = document.getElementById('exp').value  + "0";
        break;
       case "+": document.getElementById('exp').value = document.getElementById('exp').value + "+";
        break;
       case "-": document.getElementById('exp').value = document.getElementById('exp').value  + "-";
        break;
       case "*": document.getElementById('exp').value = document.getElementById('exp').value  + "*";
        break;
       case "/": document.getElementById('exp').value = document.getElementById('exp').value  + "/";
        break;
       case ".": document.getElementById('exp').value = document.getElementById('exp').value  + ".";
        break;

        case "=":
        
                    try{
                        document.getElementById('exp').value = eval(document.getElementById('exp').value);
                    }catch(e){
                        document.getElementById('exp').value = "syntax errors";
                    }
                    break;
        case "Clear": document.getElementById('exp').value = "";
        break;

        case "Back": var str =  document.getElementById('exp').value;
        str = str.substr(0, str.length-1);
        document.getElementById('exp').value = str;
        break;
        
    }
        
    }
  
