

const numberEl=document.getElementById("number")
const button0=document.getElementById("button0")
const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")

let count=0

button0.addEventListener("click", function(){
    count=1
    numberEl.textContent=count
})

button1.addEventListener("click", function(){
 count+=1
 numberEl.textContent=count
})

button2.addEventListener("click", function(){
   count-=1
    numberEl.textContent=count
})

button3.addEventListener("click", function(){
count=0
numberEl.textContent=count
})
//console.log(button2)


