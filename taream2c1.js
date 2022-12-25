    const fondo = document.getElementById("uno")
    fondo.addEventListener("click",colorBack);
    const fondo1 = document.getElementById("dos")
    fondo1.addEventListener("click",colorBack1);  
    const fondo2 = document.getElementById("tres")
    fondo2.addEventListener("click",colorBack2);  
    const fondo3 = document.getElementById("reset")
    fondo3.addEventListener("click",colorBack3);  
 
function colorBack() {
    let body = document.getElementsByTagName('body')[0]
   body.style.backgroundColor='brown'
}
function colorBack1() {
    let body = document.getElementsByTagName('body')[0]
   body.style.backgroundColor='blueviolet'
}
function colorBack2() {
    let body = document.getElementsByTagName('body')[0]
   body.style.backgroundColor='rgb(42, 165, 44)'
}
function colorBack3() {
    let body = document.getElementsByTagName('body')[0]
   body.style.backgroundColor='white'
}