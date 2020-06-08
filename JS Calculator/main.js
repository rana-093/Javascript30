function getHistory(){
  return document.getElementById("history-value").innerText;
}

function printHistory(num){
  document.getElementById("history-value").innerText = num;
}

function printOutput(num){
  document.getElementById("output-value").innerText = getFormattedNumber(num);
}

function getOutput(){
  return document.getElementById("output-value").innerText;
}

function getFormattedNumber(num){
  if(num=="-"){ return ""; }
  var x = Number(num);
  var value = x.toLocaleString("en");
  return value;
}

function reverseFormattedNumber(num){
  return Number(num.replace(/,/g,''));
}


var op = document.getElementsByClassName("operator");
for(var i = 0; i < op.length; i++){
  op[i].addEventListener('click',function(){
    if(this.id=="clear"){
      printOutput("");
      printHistory("");
    }
    else if(this.id=="backspace"){
      var cur = reverseFormattedNumber(getOutput()).toString();
      if(cur){
        var len = cur.length;
        var res = cur.substr(0,len-1);
        printOutput(res);
      }
    }
    else{
      var output = getOutput();
      var history = getHistory();
      if(output!=""){
          output = reverseFormattedNumber(output);
          history = history + output;
          if(this.id== "=" ){
            var result = eval(history);
//            alert(result);
            printOutput(result);
            printHistory("");
          }
          else{
            history = history + this.id;
            printHistory(history);
            printOutput("");
          }
      }
    }
  });
}

var op = document.getElementsByClassName("number");
for(var i = 0; i < op.length; i++){
  op[i].addEventListener('click',function(){
    var res = reverseFormattedNumber(getOutput());
    if(res!=NaN){
      res = res + this.id;
      printOutput(res);
    }
  });
}
