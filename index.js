const topbar = document.getElementById('topbar');
const toplogo = document.getElementById('toplogo');
document.getElementById('toplogo').addEventListener("click", pullTopBar)

function pullTopBar() {
    document.getElementById('topbar').style.height = '80%';
}