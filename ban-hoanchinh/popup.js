function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var i = 0

function clickCounter() {
    i++ + 1;
    document.getElementById("result").innerHTML = i ;
}
