let mynumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(mynumber);
document.getElementById("score").innerHTML += score;
document.getElementById("highscore").innerHTML += highscore;
function checknum() {
  let enterednum = document.getElementById("num").value;
  let enterednum1 = Number(enterednum);
  //   console.log(typeof enterednum1);
  //   console.log(mynumber);
  if (enterednum1 > mynumber) {
    document.getElementById("add_info").innerHTML = "📈Too Large";
    score--;
    document.getElementById("score").innerHTML = score;
  } else if (enterednum1 < mynumber) {
    document.getElementById("add_info").innerHTML = "📈Too Small";
    score--;
    document.getElementById("score").innerHTML = score;
  } else if (enterednum1 == mynumber) {
    document.getElementById("add_info").innerHTML = "🎉 Correct Number!";
    document.getElementById("score").innerHTML = score;
    document.getElementById("maincont").style.backgroundColor = "green";
    document.getElementById("number1").innerHTML = mynumber;
    if (highscore < score) {
      highscore = score;
      document.getElementById("highscore").innerHTML = score;
    } else {
      document.getElementById("highscore").innerHTML = highscore;
    }
  }
}
function again() {
  mynumber = Math.floor(Math.random() * 20 + 1);
  console.log(mynumber);
  score = 20;
  document.getElementById("add_info").innerHTML = "";
  document.getElementById("score").innerHTML = score;
  document.getElementById("maincont").style.backgroundColor = "black";
  document.getElementById("number1").innerHTML = "?";
  document.getElementById("num").value = "";
}
