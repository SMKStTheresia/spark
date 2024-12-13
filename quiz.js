let slideIndex = [1, 1];
let slideId = ["page"];
let score = 0;
let m = 1;
showSlides(1, 0);

// slide transition
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  m += 1;
  //disable buttons
  let allButtons = document.querySelectorAll(".option button");
  allButtons.forEach((button) => {
    button.disabled = true;
  });
  //color
  let yesElements = document.getElementsByClassName("yes");
  let noElements = document.getElementsByClassName("no");
  let wrongprog = document.getElementsByClassName("rprog");
  for (i = 0; i < yesElements.length; i++) {
    yesElements[i].style.backgroundColor = "#77d65b";
    yesElements[i].style.color = "black";
  }
  for (i = 0; i < noElements.length; i++) {
    noElements[i].style.backgroundColor = "#ff0000";
  }
  for (i = 0; i < wrongprog.length; i++) {
    let currentWidth = parseFloat(wrongprog[i].style.width) || 0;
    wrongprog[i].style.width = currentWidth + 6 + "%";
  }
  //delay
  setTimeout(() => {
    for (i = 0; i < yesElements.length; i++) {
      yesElements[i].style.backgroundColor = " #ffbd43";
      yesElements[i].style.color = "white";
    }
    for (i = 0; i < noElements.length; i++) {
      noElements[i].style.backgroundColor = " #ffbd43";
    }
    //enable
    allButtons.forEach((button) => {
      button.disabled = false;
    });
    //slide
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "flex";
  }, 2000);
}

//this one is only for start
function plusQ(n, no) {
  showQ((slideIndex[no] += n), no);
}

function showQ(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  //disable buttons
  let allButtons = document.querySelectorAll(".option button");
  allButtons.forEach((button) => {
    button.disabled = true;
  });
  setTimeout(() => {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    //enable
    allButtons.forEach((button) => {
      button.disabled = false;
    });
    x[slideIndex[no] - 1].style.display = "flex";
  }, 2);
}

function back() {
  if (m > 1) {
    showSlides((slideIndex[0] = 1), 0); 
  } else {
    console.log("You are already on the first page.");
  }
  score = 0;
  m = 1; // Reset navigation counter
  let wrongprog = document.getElementsByClassName("rprog");
  let yesprog = document.getElementsByClassName("gprog");
  let yesElements = document.getElementsByClassName("yes");
  let noElements = document.getElementsByClassName("no");
  for (i = 0; i < wrongprog.length; i++) {
    wrongprog[i].style.width = "0%";
  }
  for (i = 0; i < yesprog.length; i++) {
    yesprog[i].style.width = "0%";
  }
  for (i = 0; i < yesElements.length; i++) {
    yesElements[i].style.backgroundColor = "#ffbd43";
    yesElements[i].style.color = "white";
  }
  for (i = 0; i < noElements.length; i++) {
    noElements[i].style.backgroundColor = "#ffbd43";
  }
}
//slide transition end

//score system
function addScore() {
  score += 10;
  let yesprog = document.getElementsByClassName("gprog");
  for (i = 0; i < yesprog.length; i++) {
    let currenteWidth = parseFloat(yesprog[i].style.width) || 0;
    yesprog[i].style.width = currenteWidth + 6 + "%";
  }
  document.getElementById("TotalScore").textContent = "Score: " + score;
  if (score >= 90) {
    document.getElementById("message").textContent = "Excellent";
  } else if (score >= 70) {
    document.getElementById("message").textContent = "Good Work";
  } else if (score >= 50) {
    document.getElementById("message").textContent = "Not Bad";
  } else if (score >= 20) {
    document.getElementById("message").textContent = "You Can Do Better";
  } else if (score >= 10) {
    document.getElementById("message").textContent = "Please Study";
  } else if ((score = 0)) {
    document.getElementById("message").textContent =
      "I Highly Suggest Studying";
  }
}

function toggleMode() {
  console.log("toggleMode called");
  const body = document.body;
  const icons = document.querySelectorAll(".icon-mode");
  console.log("Before toggle:", body.classList);
  console.log("Selected icons:", icons);
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    icons.forEach((icon) => {
      icon.classList.remove("fa-moon-o"); // Remove moon icon
      icon.classList.add("fa-sun-o"); // Add sun icon
    });
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    icons.forEach((icon) => {
      icon.classList.remove("fa-sun-o"); // Remove sun icon
      icon.classList.add("fa-moon-o"); // Add moon icon
    });
  }
  console.log("After toggle:", body.classList);
}
