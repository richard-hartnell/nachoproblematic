const theTop = document.getElementById('topbar');
const surprise = document.getElementById('surprise');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('hand').style = "display: none";
    theTop.style.transition = '0.75s';
    theTop.style.height = '70%'; // this is the next fix.
    theTop.style.bottom = '30%';
    toplogo.style.bottom = '-98%'; // this is the next fix. change this to bottom so it aligns with #surprise
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '30vh';
    document.getElementById('nacho-rule').classList.add('fadein');
    
}