const theTop = document.getElementById('topbar');
const surprise = document.getElementById('surprise');
const surprisetop = document.getElementById('surprise-top');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('hand').style = "display: none";
    theTop.style.transition = '0.75s';
    theTop.style.height = '75%';
    theTop.style.bottom = '30%';
    toplogo.style.bottom = '-98%';
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '30%';
    surprisetop.style.height = '100%';
    document.getElementById('nacho-rule').classList.add('fadein');
}