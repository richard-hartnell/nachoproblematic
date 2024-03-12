const theTop = document.getElementById('topbar');
const surprise = document.getElementById('surprise');
const surprisetop = document.getElementById('surprise-top');
const mainText = document.getElementById('coming-soon');
const toplogo = document.getElementById('toplogo');
document.getElementById('menu-about').addEventListener("click", retractTopBar);
document.getElementById('menu-nachos').addEventListener("click", retractTopBar);
document.getElementById('menu-drinks').addEventListener("click", retractTopBar);
document.getElementById('menu-links').addEventListener("click", retractTopBar);
document.getElementById('toplogo').addEventListener("click", toggleTopBar);

function toggleTopBar() {
    if (theTop.style.height === '40px') {
        pullTopBar();
    } else {
        retractTopBar();
    }
}

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

function retractTopBar(event) {
    if (event) {
        console.log(event.target.id);
    }
    theTop.style.transition = '0.75s';
    toplogo.style.transition = '0.75s';
    theTop.style.height = '40px';
    theTop.style.bottom = 'initial';
    toplogo.style.bottom = 'initial';
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '130vh';
    surprisetop.style.height = '100%';
    document.getElementById('nacho-rule').classList.add('fadein');
}