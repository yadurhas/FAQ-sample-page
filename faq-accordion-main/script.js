"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const questions = Array.from(document.getElementsByClassName("question_container"));
    const parentDivs = questions.map((question) => question.parentElement);
    const answerDivs = parentDivs.map((parentDiv) => parentDiv.querySelector(".answer"));
    const imageDivs = questions.map((question) => question.querySelector(".symbol img"));
    const plusImage = new Array(questions.length).fill(true);
    const images = ["./assets/images/icon-plus.svg", "./assets/images/icon-minus.svg"]
    for (let i = 0; i < questions.length; i++) {
        plusImage[i] = true;
        questions[i].addEventListener("click", () => {
            if(plusImage[i] === true) {
                imageDivs[i].src = images[1];
                answerDivs[i].style.display = "block";
                plusImage[i] = false;
            }
            else {
                imageDivs[i].src = images[0];
                answerDivs[i].style.display = "none";
                plusImage[i] = true;
            }
        });
    }
});