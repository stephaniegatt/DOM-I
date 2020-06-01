const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const theNav = document.querySelector('nav');
console.log('the nav', theNav);
const childrenOfNav = theNav.children;
console.log('childrenOfNav', childrenOfNav);

const firstLink = childrenOfNav[0];
console.log(firstLink, "firsLink");
// firstLink.href = 'https://google.com'
firstLink.textContent = siteContent["nav"]["nav-item-1"];

const secondLink = childrenOfNav[1];
console.log(secondLink, "secondLink");
secondLink.textContent = siteContent["nav"]["nav-item-2"];

const thirdLink = childrenOfNav[2];
console.log(thirdLink, "thirdLink");
thirdLink.textContent = "Vision";

const fourthLink = childrenOfNav[3];
console.log(fourthLink, "fourthLink");
fourthLink.textContent = "Features";

const fifthLink = childrenOfNav[4];
console.log(fifthLink, "fifthLink");
fifthLink.textContent = "About";

const sixthLink = childrenOfNav[5];
console.log(sixthLink, "sixthLink");
sixthLink.textContent = "Contact";

const cta = document.querySelector(".cta");
console.log(cta);
const ctaText = document.querySelector(".cta-text")
console.log(ctaText);

const h1 = document.querySelector('h1');
console.log(h1);
h1.innerHTML = `DOM <br> Is <br> Awesome`;
const button = document.querySelector('button');
button.textContent = "Get Started";

let headerImg = document.getElementById("cta-img");
console.log(headerImg);
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const mainContent = document.querySelector(".main-content");
console.log(mainContent);

const allH4s = document.querySelectorAll("h4");
console.log(allH4s);


const firstH4 = allH4s[0];
firstH4.textContent = siteContent["main-content"]["features-h4"];

const secondH4 = allH4s[1];
secondH4.textContent = "About";

const thirdH4 = allH4s[2];
thirdH4.textContent = "Services";

const fourthH4 = allH4s[3];
fourthH4.textContent = "Product";

const fiveH4 = allH4s[4];
fiveH4.textContent = "Vision";

// const sixthH4 = allH4s[5];
// sixthH4.textContent = "Contact";

const allPs = document.querySelectorAll("p");
console.log(allPs);

const p1 = allPs[0];
p1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const p2 = allPs[1];
p2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const p3 = allPs[2];
p3.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const p4 = allPs[3];
p4.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const p5 = allPs[4];
p5.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.getElementById("middle-img");
console.log(middleImg);
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contact = document.querySelector(".contact");
console.log(contact);
const contactH4 = allH4s[5];
console.log(contactH4);
contactH4.textContent = siteContent["contact"]["contact-h4"];

const p6 = allPs[5];
p6.innerHTML = `123 Way 456 Street <br> Somewhere, USA`;

const p7 = allPs[6];
p7.textContent = siteContent["contact"]["phone"];

const p8 = allPs[7];
p8.textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer");
console.log(footer);
footer.textContent = siteContent["footer"]["copyright"];

let greenLinks = document.querySelectorAll('a')
greenLinks[0].style.color = 'green';

greenLinks = document.querySelectorAll('a')
greenLinks[1].style.color = 'green';

greenLinks = document.querySelectorAll('a')
greenLinks[2].style.color = 'green';

greenLinks = document.querySelectorAll('a')
greenLinks[3].style.color = 'green';

greenLinks = document.querySelectorAll('a')
greenLinks[4].style.color = 'green';

greenLinks = document.querySelectorAll('a')
greenLinks[5].style.color = 'green';