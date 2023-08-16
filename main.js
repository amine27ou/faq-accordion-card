let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

questions.forEach(function(question, index){
    question.addEventListener("click", function(){
        this.classList.toggle("active");
        answers[index].classList.toggle("active");
    });
});