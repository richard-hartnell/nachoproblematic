const topbar = document.getElementById('topbar');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('topbar').style.transition = '0.75s';
    document.getElementById('topbar').style.height = '70%';
    document.getElementById('toplogo').style.top = '90%';
    document.getElementById('toplogo').style.paddingTop = '2vw';
}