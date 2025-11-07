(() => {
  const switcher = document.querySelector(".switcher");
  const ball = document.querySelector(".moving-object");
  let ballCurrantLeftValue = 0;



  switcher.addEventListener("click", function (e) {
    if (e.target.className == "theme-one") {
      if (ballCurrantLeftValue != 0) {
        ball.style.left = "5%";
        ball.style.transform = "translate(-0%)";
        ballCurrantLeftValue = 0;
        document.body.className = "theme";
      }
    }

    if (e.target.className == "theme-two") {
      if (ballCurrantLeftValue != 50) {
        ball.style.left = "50%";
        ball.style.transform = "translate(-50%)";
        ballCurrantLeftValue = 50;
        document.body.className = "theme-one";
      }
    }

    if (e.target.className == "theme-three") {
      if (ballCurrantLeftValue != 100) {
        ball.style.left = "100%";
        ball.style.transform = "translate(-110%)";
        ballCurrantLeftValue = 100;
        document.body.className = "theme-two";
      }
    }
  });

  let output = document.querySelector(".output")
  let calculation = ""
  let containDot = false

  addEventListener("click", (e) => {
    // this here is our calc logic //
    try {
      if (!isNaN(Number(e.target.textContent))) {
      output.textContent += e.target.textContent
      calculation = output.textContent
    }
    if (e.target.className == "operation" && !/[+\-x/]$/.test(calculation)) {
      output.textContent += " " + e.target.textContent + " "
      calculation = output.textContent.trim()
      containDot = false
    }
    if (e.target.className == "dot" && containDot == false) {
      containDot = true
      output.textContent += e.target.textContent
      calculation = output.textContent.trim()
    }
    if (e.target.className == "del") {
      if (output.textContent[(output.textContent.length - 1)] == " ") {
        output.textContent = output.textContent.slice(0, -3)
        calculation = output.textContent.trim()
      } else {
        output.textContent = output.textContent.slice(0, -1)
        calculation = output.textContent.trim()
      }
    }
    if (e.target.className == "reset") {
      calculation = calculation.replace(/\s+/g, "");
      output.textContent = ""
      calculation = ""
    }
    if (e.target.className == "equal") {
      output.textContent = eval(calculation.replace(/x/g, "*"))
    }
    } catch (error) {
      alert("incorrect format, please try again")
    }
  })
})();
