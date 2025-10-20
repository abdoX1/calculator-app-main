const switcher = document.querySelector(".switcher")
const ball = document.querySelector(".moving-object")
let ballCurrantLeftValue = 0



switcher.addEventListener("click", function (e) {
  if (e.target.className == "theme-one") {
    if (ballCurrantLeftValue != 0) {
      ball.style.left = "5%"
      ball.style.transform = "translate(-0%)"
      ballCurrantLeftValue = 0
      document.body.className = "theme"
    }
  } 
  if (e.target.className == "theme-two") {
    if (ballCurrantLeftValue != 50) {
      ball.style.left = "50%"
      ball.style.transform = "translate(-50%)"
      ballCurrantLeftValue = 50
      document.body.className = "theme-one"
    }
  } 
  if (e.target.className == "theme-three") {
    if (ballCurrantLeftValue != 100) {
      ball.style.left = "100%"
      ball.style.transform = "translate(-110%)"
      ballCurrantLeftValue = 100
      document.body.className = "theme-two"
    }
  } 
})

