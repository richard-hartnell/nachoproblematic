const theTop = document.getElementById('topbar');
const surprise = document.getElementById('surp');
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
    setTimeout(function() {document.getElementById('surp').classList.add('fadein');
    surprise.style.display = 'block';}, 400);

}