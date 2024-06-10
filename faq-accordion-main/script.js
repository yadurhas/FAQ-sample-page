"use strict"

document.addEventListener('DOMContentLoaded', () => {

    const focusableElements = document.querySelectorAll('[tabindex]:not([tabindex="-1"])');
    console.log(focusableElements);

    document.addEventListener('keydown', (e) => {
        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (document.activeElement === focusableElements[0]){
                    e.preventDefault();
                    focusableElements[focusableElements.length - 1].focus();
                }
            }
            else {
                if (document.activeElement === focusableElements[focusableElements.length - 1]) {
                    e.preventDefault();
                    focusableElements[0].focus();
                }
            }
        }
    });

    const questions = Array.from(document.getElementsByClassName("question_container"));
    const parentDivs = questions.map((question) => question.parentElement);
    const answerDivs = parentDivs.map((parentDiv) => parentDiv.querySelector(".answer"));
    const imageDivs = questions.map((question) => question.querySelector(".symbol img"));
    const plusImage = new Array(questions.length).fill(true);
    const images = ["./assets/images/icon-plus.svg", "./assets/images/icon-minus.svg"]
    for (let i = 0; i < questions.length; i++) {
        plusImage[i] = true;
        questions[i].addEventListener("click", () => {
            //questions[i].blur();
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
        questions[i].addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.target.click();
            }
        });
    }
});