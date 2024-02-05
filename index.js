const theTop = document.getElementById('topbar');
const surprise = document.getElementById('nacho-surprise');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('hand').style = "display: none";
    theTop.style.backgroundImage = "purple";
    theTop.style.transition = '0.75s';
    theTop.style.height = '70%';
    toplogo.style.top = '98%';
    surprise.style.transition = '0.75s';
    surprise.style.top = '30vh';
    document.getElementById('nacho-rule').classList.add('fadein');
    
}