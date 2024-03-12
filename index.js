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

aboutHTML = `<div id="about-us">
<h1>About Us</h1>
<p>Bar games, hanging out with friends, nachos.</p>
<p>Styles ranging from classic veggies-in-melted-cheese to your dad's favorite gas station nachos smothered in queso 
    and ground beef. We have a nacho for everyone, wrapped in a '90s Trapper Keeper Psychedelia aesthetic.</p>
    <p>Our opportunity to create an exciting environment for Bellingham's diverse communities to gather in a safe space 
    that maximizes irreverent fun.</p>
    </div>
`;

nachosHTML = `<div id="nacho-styles">
<h1>Nacho Menu</h1>
<h2>Cheese</h2>
<p>Jack and cheddar, Oaxaca, fresco</p>
<h2>Street Taco</h2>
<p>Jack and cheddar, onion, asada, cilantro, pickled radish</p>
<h2>BBQ Pork</h2>
<p>Pork, red onion, cilantro, black olives, BBQ sauce</p>
<h2>Chicken</h2>
<p>Pulled chicken, green onion, black olives, pickled jalapeno</p>
<h2>Flaming Hot</h2>
<p>Pepper jack, Chorizo, jalapenos, fresco, hot Valentina, cilantro</p>
<h2>Veggie</h2>
<p>Jack and cheddar, black beans, avocado, bell peppers, green onion, tomatoes</p>
<h2>Gas Station</h2>
<p>Cheese sauce, ground beef, black olives, pickled jalapenos</p>
<h2>Street Corn</h2>
<p>Jack and cheddar, cotija, garlic, cilantro, corn, tajin</p>
</div>
`;

drinksHTML = `
<h1>Drink menu</h1>
<p>Coming soon!</p>
`;

linksHTML = `
<h1>Visit our sister bars:</h1>
<h2><a href="https://www.theadmiraltylounge.com">The Admiralty Lounge</a>
<br><br>
<a href="https://www.bellaciao.bar">Bella Ciao</a></h2>
`;

function toggleTopBar() {
    if (theTop.style.height != '75%') {
        pullTopBar();
    } else {
        retractTopBar();
    }
}

function pullTopBar() {
    document.getElementById('nacho-rule').classList.add('fadein');
    document.getElementById('hand').style = "display: none";
    theTop.style.transition = '0.75s';
    theTop.style.height = '75%';
    theTop.style.bottom = '30%';
    toplogo.style.bottom = '-98%';
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '30%';
    surprisetop.style.height = '100%';
    mainText.innerHTML = "";
}

function retractTopBar(event) {
    if (event) {
        if (event.target.id === 'menu-about') {
            console.log(event.target.id);
            mainText.innerHTML = aboutHTML;
        } else if (event.target.id === 'menu-nachos') {
            console.log(event.target.id);
            mainText.innerHTML = nachosHTML;
        } else if (event.target.id === 'menu-drinks') {
            console.log(event.target.id);
            mainText.innerHTML = drinksHTML;
        } else if (event.target.id === 'menu-links') {
            console.log(event.target.id);
            mainText.innerHTML = linksHTML;
        }
    }
    theTop.style.transition = '0.75s';
    toplogo.style.transition = '0.75s';
    theTop.style.height = '40px';
    theTop.style.bottom = 'initial';
    toplogo.style.bottom = 'initial';
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '130vh';
    surprisetop.style.height = '100%';
    document.getElementById('nacho-rule').classList.remove('fadein');
}