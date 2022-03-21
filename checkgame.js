var p1 = localStorage.getItem("p1-username");
console.log(p1);
var p2 = localStorage.getItem("p2-username");
console.log(p2);
var iou = 0;
var itu = 0;
var p1_score = 0;
var p2_score = 0;
var question_turn = p1;
var answer_turn = p2;
var cal = "plus";
let answer = "0";
function load()
{
document.getElementById("p1-score").innerHTML = p1 + " : " + p1_score;
document.getElementById("p2-score").innerHTML = p2 + " : " + p2_score;
document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
}
function dk()
{
    x = document.getElementById("utem");
    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
    }
}
