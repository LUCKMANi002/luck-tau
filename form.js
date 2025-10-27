const inputEl=document.getElementById("inputEl")
const buttonEl=document.getElementById("buttonEl")
const outPut=document.getElementById("outPut")


let arey=[]

function add(){
arey.push(inputEl.value)
outPut.textContent=arey;
inputEl.value="";
}

buttonEl.addEventListener("click", function(){
add()
})

  //console.log("click")