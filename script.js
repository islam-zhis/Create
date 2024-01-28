const input = document.querySelector(".input")
const email = document.querySelector(".email")
const img = document.querySelector(".img")
const btn = document.querySelector(".btn")
const content = document.querySelector(".title")
const contacts = document.querySelector(".title-hero")
const ten = document.querySelector(".while")



newTask()
ten.addEventListener("click", () => {
   contacts.style.display = "none"
})

function newTask () {
content.innerHTML = ""
let task = JSON.parse(localStorage.getItem("res")) || []
task.map(el => {
    content.innerHTML += `<div class="block"> 
    <img src = "${el.image}" alt = "img"/>
    <div>
    <h5>
      ${el.text}
    </h5>
    <h5>
      ${el.gmail}
    </h5>
    </div>
    <button class="delete"> DELETE</button
    </div>`
})
redTask()
}


btn.addEventListener("click", () => {
   if (input.value === ""){
    alert("Заполните")
   }else {
    let task = JSON.parse(localStorage.getItem("res")) || []
    let obj= {
         id:1,
         text:input.value,
         image:img.value,
         gmail:email.value
   
    }
    let task1 = [...task,obj]
    localStorage.setItem("res", JSON.stringify(task1))
    newTask()
    input.value = ""
    img.value = ""
    email.value = ""
   }
})

function redTask () {
    let task = JSON.parse(localStorage.getItem("res")) || []
const btn1 = document.querySelectorAll(".delete")
 btn1.forEach((btn,index) => {
    btn.addEventListener("click",() => {
        task = task.filter((el,idx) => {
             return idx !== index
        })
        localStorage.setItem("res",JSON.stringify(task))
        newTask()
    })
 })
}

const read = document.querySelector(".read-btn")
read.addEventListener("click",() => {
    contacts.style.display = "block"
})