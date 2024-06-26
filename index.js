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

const aboutHTML = `<div id="about-us">
<h1>About Us</h1>
<p>Bar games, hanging out with friends, nachos.</p>
<p>Styles ranging from classic veggies-in-melted-cheese to your dad's favorite gas station nachos smothered in queso 
    and ground beef. We have a nacho for everyone, wrapped in a '90s Trapper Keeper Psychedelia aesthetic.</p>
    <p>Our opportunity to create an exciting environment for Bellingham's diverse communities to gather in a safe space 
    that maximizes irreverent fun.</p>
    </div>
`;

const nachosHTML = `<div id="nacho-styles">
<h1>NACHOS</h1>
<br>
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
<h2>Elote</h2>
<p>Jack and cheddar, cotija, garlic, cilantro, corn, tajin</p>
</div>
`;

const drinksHTML = `<div id="drink-menu">
<h1>DRINKS</h1>
<br>
<h2>Draught Cocktails</h2>
<h3>Airport Margarita</h3>
<p>Tequila, triple sec, mf'ing sour mix</p>
<h3>Rapid Test Result</h3>
<p>Horchata, cinnamon whiskey, rum</p>
<br>
<h2>Draught Beers</h2>
<p>Pacifico</p>
<p>Kulshan Transporter</p>
<p>Menance Tirith Pale</p>
<p>Crux Golden Pilsner</p>
<p>Georgetown Bodhizafa IPA</p>
<p>Larrabee Lager Co. Hefeweizen</p>
<p>Menace Brewing Nitro Stout</p>
<p>Kulshan Brewing Storm Clouds Doppelbock</p>
<p>Dry Humor Cider</p>
<br>
<h2>Bottles / Cans</h2>
<p>Modelo</p>
<p>Coors Light Tallboy</p>
<p>Corona</p>
<p>White Claw (mango)</p>
<p>Yonder Cider (Blackberry & Sage)</p>
<br>
<h2>Non-Alcoholic</h2>
<p>Athletic Brewing Golden Dawn</p>
<p>Athletic Brewing IPA</p>
<p>Phony Negroni</p>
<p>H<sub>2</sub>O (free with a smile)</p>
</div>
`;

const linksHTML = `<div id="links">
<h1>Visit our sister bars:</h1>
<h2><a href="https://www.theadmiraltylounge.com">The Admiralty Lounge</a>
<br><br>
<a href="https://www.bellaciao.bar">Bella Ciao Pizza Tavern</a></h2>
</div>
`;

const defaultText = `<h2>A 21 & up eclectic nacho experience.</h2>`;

function toggleTopBar() {
    if (theTop.style.height != '75%') {
        pullTopBar();
    } else {
        retractTopBar();
    }
}

function pullTopBar() {
    console.log('pullTopBar');
    if (mainText.innerHTML == defaultText) {
        console.log('defaultText');
    }
    document.getElementById('nacho-rule').classList.remove('fadeout');
    document.getElementById('nacho-rule').classList.add('fadein');
    document.getElementById('hand').style = "display: none";
    theTop.style.transition = '0.75s';
    theTop.style.height = '75%';
    theTop.style.bottom = '30%';
    toplogo.style.bottom = '-98%';
    surprise.style.transition = '0.75s';
    surprise.style.bottom = '30%';
    surprisetop.style.height = '100%';
    surprise.style.position = 'fixed';
    // mainText.innerHTML = "";
}

function retractTopBar(event) {
    surprise.style.position = 'absolute';
    document.getElementById('nacho-rule').classList.remove('fadein');
    document.getElementById('nacho-rule').classList.add('fadeout');

    if (event) {
        if (event.target.id === 'menu-about') {
            mainText.innerHTML = aboutHTML;
        } else if (event.target.id === 'menu-nachos') {
            mainText.innerHTML = nachosHTML;
        } else if (event.target.id === 'menu-drinks') {
            mainText.innerHTML = drinksHTML;
        } else if (event.target.id === 'menu-links') {
            mainText.innerHTML = linksHTML;
        } else if (event.target.id === 'top-logo') {
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
}

document.getElementById('hand').style = "display: block";