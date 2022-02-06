var windowSize = document.documentElement.clientWidth;
var headerEl = document.getElementById("desktop");
var isDesktop = false;
var isMobile = false;

var buttonArray = ["Resume", "Projects", "Jason Offenbaker", "Github", "Socials"];

function mobileCheck() {
    setInterval(function () {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize >= 700 && isDesktop == false) {
            isMobile = false;
            isDesktop = true;
            desktopHeaderSize()
        } else if (windowSize < 700 && isMobile == false) {
            isDesktop = false;
            isMobile = true;
            mobileHeaderSize()
        }
    }, 75);
}

function desktopHeaderSize() {
    headerEl.innerHTML = 'test';
    var scrollspyDelay = 500;
    console.log("Changed to desktop")


    for (var i = 0; i < 5; i++) {
        //special name animation

        //Creating the objects
        var buttonEl = document.createElement('div');
        var buttonAnimationType = document.createElement('div');
        var buttonFlexType = document.createElement('div');
        var buttonLink = document.createElement('a');
        var buttonH3 = document.createElement('h3');
        var buttonH1 = document.createElement('h1');
        var buttonBadge = document.createElement('span');

        if (i == 2) {
            //modifying the elements
            buttonEl.setAttribute('uk-scrollspy', 'target: > div; cls: uk-animation-fade; delay: 2000');
            buttonEl.setAttribute('className', 'uk-flex uk-flex-middle');
            buttonAnimationType.setAttribute('uk-scrollspy-className', 'uk-animation-slide-top');
            buttonLink.setAttribute('href', '#');
            buttonH1.textContent = buttonArray[i];
        } else if (i == 3) {
            //modifying the elements
            buttonEl.setAttribute('uk-scrollspy', 'target: > div; cls: uk-animation-fade; delay: ' + scrollspyDelay);
            buttonEl.setAttribute('className', 'uk-flex uk-flex-middle');
            buttonAnimationType.setAttribute('uk-scrollspy-className', 'uk-animation-fade');
            buttonLink.setAttribute('href', 'https://github.com/JasOffen');
            buttonLink.setAttribute('target', '_blank');
            buttonH3.textContent = buttonArray[i];
            buttonFlexType.setAttribute('className', 'uk-flex-inline')
            buttonBadge.setAttribute('className', 'uk-badge');
            buttonBadge.textContent = 10;
        } else {

            //modifying the elements
            buttonEl.setAttribute('uk-scrollspy', 'target: > div; cls: uk-animation-fade; delay: ' + scrollspyDelay);
            buttonEl.setAttribute('className', 'uk-flex uk-flex-middle');
            buttonAnimationType.setAttribute('uk-scrollspy-className', 'uk-animation-fade');
            buttonLink.setAttribute('href', '#' + buttonArray[i]);
            buttonH3.textContent = buttonArray[i];
        }
        headerEl.setAttribute('className', 'uk-flex uk-flex-row uk-flex-around')
        //append to the page
        headerEl.appendChild(buttonEl);
        buttonEl.appendChild(buttonAnimationType);
        buttonAnimationType.appendChild(buttonFlexType)
        buttonFlexType.appendChild(buttonLink);
        if (i == 2) {
            buttonLink.appendChild(buttonH1);
        } else {
            buttonLink.appendChild(buttonH3);
            scrollspyDelay = scrollspyDelay + 200;
        }
        buttonFlexType.appendChild(buttonBadge);

    }
}


var mobileHeaderSize = function (size) {
    headerEl.innerHTML = '';
    headerEl.setAttribute('className', 'uk-flex uk-flex-row uk-flex-around')
    console.log("Changed to mobile")

    //create Elements
    var navbar = document.createElement('nav');
    var navbarLeft = document.createElement('div');
    var navbarNav = document.createElement('ul');
    var navbarli = document.createElement('li')
    var navbarClick = document.createElement('a');
    var navbarMenuToggle = document.createElement('span');
    var navbarContainer = document.createElement('div');
    var navbarList = document.createElement('ul');

    //modify Elements

    navbar.setAttribute('className', '');
    navbar.setAttribute('uk-navbar', 'mode: click');

    navbarLeft.setAttribute('className', 'uk-navbar-left');

    navbarNav.setAttribute('className', 'uk-navbar-nav');

    navbarli.setAttribute('id', 'hi')

    navbarClick.setAttribute('href', '#');

    navbarMenuToggle.setAttribute('uk-navbar-toggle-icon', '');

    navbarContainer.setAttribute('className', 'uk-navbar-dropdown')

    navbarList.setAttribute('className', 'uk-navbar-nav uk-flex-column');





    //append Elements
    headerEl.appendChild(navbar);
    navbar.appendChild(navbarLeft);
    navbarLeft.appendChild(navbarNav);
    navbarNav.appendChild(navbarli);
    navbarli.appendChild(navbarClick);
    navbarClick.appendChild(navbarMenuToggle);
    navbarli.appendChild(navbarContainer);
    navbarContainer.appendChild(navbarList);

    for (var i = 0; i < 5; i++) {

        if (i == 2) {
        } else {
            var navbarOptions = document.createElement('li');
            var navbarOptionsLink = document.createElement('a');

            navbarOptionsLink.textContent = buttonArray[i];

            navbarList.appendChild(navbarOptions);
            navbarOptions.appendChild(navbarOptionsLink);
        }
    }
    var buttonEl = document.createElement('div');
    var buttonAnimationType = document.createElement('div');
    var buttonFlexType = document.createElement('div');
    var buttonLink = document.createElement('a');
    var buttonH1 = document.createElement('h1');

    buttonEl.setAttribute('uk-scrollspy', 'target: > div; cls: uk-animation-fade; delay: 900');
    buttonEl.setAttribute('className', 'uk-flex uk-flex-middle');
    buttonAnimationType.setAttribute('uk-scrollspy-className', 'uk-animation-slide-top');
    buttonLink.setAttribute('href', '#');
    buttonH1.textContent = buttonArray[2];

    headerEl.appendChild(buttonEl);
    buttonEl.appendChild(buttonAnimationType);
    buttonAnimationType.appendChild(buttonFlexType)
    buttonFlexType.appendChild(buttonLink);
    buttonLink.appendChild(buttonH1);

}


mobileCheck();