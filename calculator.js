const btns = document.querySelectorAll("button")
const input = document.querySelector("#result")

for(let i=0; i<btns.length;i++){
    btns[i].addEventListener("click",(e)=>{
    // console.log(e.target);
        if(e.target.innerText == "C"){
            input.innerText = input.innerText.slice(0,input.innerText.length-1)
        }
        else if(e.target.innerText == "AC"){
            input.innerText = "";
        }
        else if(e.target.innerText != "="){
            input.innerText += e.target.innerText
        }
        else{
            const list = input.innerText.split("")
            // console.log(list)
            input.innerText = calculation(list[0],list[1],list[2])
        }
    })
}
function calculation(firstNum,operator,secondNum){
if(operator == "+"){
   return Number(firstNum)+Number(secondNum)
}
else if(operator == "-"){
    return Number(firstNum)-Number(secondNum)
}
else if(operator == "*"){
    return Number(firstNum)*Number(secondNum)
}
else{
    return  Number(firstNum)/Number(secondNum)
}
}


// console.log("5"+"8")