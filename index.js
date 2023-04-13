
/* Question-Answer*/
const answerButton1 = document.querySelector('[data-js="answer-button1"]');
console.log(answerButton1);
const answerButton2 = document.querySelector('[data-js="answer-button2"]');
const answerText1 = document.querySelector('[data-js="answer-text1"]');
const answerText2 = document.querySelector('[data-js="answer-text2"]');
answerButton1.addEventListener("click", () => {
  answerText1.classList.toggle("question-box__answer-text1-visible");
  const y = document.getElementById("ShowAnswer1");
        if (y.innerHTML === "Show Answer") {
          y.innerHTML = "Hide Answer";
        } else {
          y.innerHTML = "Show Answer";
        }
});

answerButton2.addEventListener("click", () => {
    answerText2.classList.toggle("question-box__answer-text2-visible");
    const c = document.getElementById("ShowAnswer2");
        if (c.innerHTML === "Show Answer") {
          c.innerHTML = "Hide Answer";
        } else {
          c.innerHTML = "Show Answer";
        }
});
/*Bookmark-choose*/
const bookmarkButton =document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="ribbon"]');
/* const bookmarkButton2 =document.querySelector('[data-js="bookmark2-button]');
const bookmarkIcon2 = document.querySelector('[data-js="bookmark2-icon"]');
const bookmarkIconFooter = document.querySelector('[data-js="bookmark-icon-footer"]'); */

bookmarkButton.addEventListener("click", () => {
  bookmarkIcon.classList.toogle("choose");
  /* bookmarkIconFooter.classList.toogle("question-box__bookmark-icon--corner-choose"); */

});

