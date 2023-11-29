const topbar = document.getElementById('topbar');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('hand').style = "display: none";
    const theTop = document.getElementById('topbar');
    theTop.style.backgroundImage = "purple";
    theTop.style.transition = '0.75s';
    theTop.style.height = '70%';
    document.getElementById('toplogo').style.top = '98%';
    // document.getElementById('toplogo').style.paddingTop = '4vw';
    document.getElementById('nacho-rule').classList.add('fadein')
}