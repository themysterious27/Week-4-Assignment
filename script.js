class QAItem {

constructor(question, answer){
this.question = question
this.answer = answer
}

render(){

const item = document.createElement("div")
item.className = "faq-item"

const questionDiv = document.createElement("div")
questionDiv.className = "question"

const qText = document.createElement("span")
qText.textContent = this.question

const icon = document.createElement("span")
icon.textContent = "+"
icon.className = "icon"

questionDiv.appendChild(qText)
questionDiv.appendChild(icon)

const answerDiv = document.createElement("div")
answerDiv.className = "answer"
answerDiv.textContent = this.answer

item.appendChild(questionDiv)
item.appendChild(answerDiv)

questionDiv.addEventListener("click", () => {

document.querySelectorAll(".faq-item").forEach(faq=>{
if(faq !== item){
faq.classList.remove("active")
faq.querySelector(".icon").textContent = "+"
}
})

item.classList.toggle("active")

if(item.classList.contains("active")){
icon.textContent = "-"
}else{
icon.textContent = "+"
}

})

return item
}

}

const faqData = [

new QAItem(
"What is web development?",
"Web development is the process of creating websites and web applications."
),

new QAItem(
"What technologies are used in web development?",
"Common technologies include HTML, CSS, and JavaScript."
),

new QAItem(
"Do I need coding experience to start learning?",
"No, beginners can start learning step by step with basic tutorials."
),

new QAItem(
"Can I access this website on mobile devices?",
"Yes, the website works on mobile phones, tablets, and computers."
),

new QAItem(
"Is the content updated regularly?",
"Yes, the website content is updated to provide the latest information."
)


]

const container = document.getElementById("faqContainer")

faqData.forEach(item=>{
container.appendChild(item.render())
})