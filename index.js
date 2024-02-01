const theTop = document.getElementById('topbar');
const surprise = document.getElementById('nacho-surprise');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('hand').style = "display: none";
    theTop.style.backgroundImage = "purple";
    theTop.style.transition = '0.75s';
    theTop.style.height = '70%';
    document.getElementById('toplogo').style.top = '98%';
    // document.getElementById('toplogo').style.paddingTop = '4vw';
    document.getElementById('nacho-rule').classList.add('fadein');
    setTimeout(100);
    document.getElementById('surprise').classList.add('fadein');
    surprise.style.display = 'block';

}