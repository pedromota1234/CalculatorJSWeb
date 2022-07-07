function clearScreen() {
    document.getElementById('result').value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate(){
    var p = document.getElementById("result").value;
    var q = document.getElementById("result").value = eval(p);
}