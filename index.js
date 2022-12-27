function getValue() {
  var value = document.getElementById('name').value
  document.getElementById('result').innerHTML = "Bem Vindo," + value + "!";
}

function removeValue() {
  document.getElementById("name").value = ""
  document.getElementById("result").innerHTML = ""
}

