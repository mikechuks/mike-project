const getHistory = () =>{
    return document.getElementById("history-value").innerText;
}
const printHistory = (num) =>{
    document.getElementById("history-value").innerText=num;
}
const getOutPut = () =>{
    return document.getElementById("output-value").innerText;
}
const printOutPut = (num) =>{
    if(num == ""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
const getFormattedNumber = (num) =>{
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
const reverseNumberFormat = (num) =>{
return Number(num.replace(/,/g,''));
}
const operator = document.getElementsByClassName("operator");
for(let i = 0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
if(this.id =="clear"){
    printHistory("");
    printOutPut("");
}else if(this.id == "backspace"){
    let output = reverseNumberFormat(getOutPut()).toString();
    if(output){//if output has a value
    output = output.substr(0, output.length-1);
    printOutPut(output);
    }
}else {
    let output = getOutPut();
    let history = getHistory();
    if(output == "" && history != ""){
        if(isNaN(history[history.length-1])){
            history = history.substr(0, history.length-1);
        }
    }
    if(output!="" || history!=""){
        output = output==""?output:reverseNumberFormat(output);
        history = history + output;
        if(this.id == "="){
            let result = eval(history);
            printOutPut(result);
            printHistory("");
        }else{
          history = history + this.id;
          printHistory(history);
          printOutPut("");  
        }
    }
}
    });
}
const number = document.getElementsByClassName("number");
for(let i = 0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        let output = reverseNumberFormat(getOutPut());
        if(output!=NaN){//if output is number
        output = output+this.id;
        printOutPut(output);
        }
    });
}