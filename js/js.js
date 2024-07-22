// Ahmed Youssef
function showUL() {
  var ulContent = document.getElementById("ulContent");
  if (ulContent.classList.contains("show")) {
    ulContent.classList.remove("show");
  } else {
    ulContent.classList.add("show");
  }
}

function close_slide(){
    ulContent.classList.remove("show");
}

function onClick(element) {
  document.getElementById("img1").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  document.getElementById("modal").style.display = "block";
}
