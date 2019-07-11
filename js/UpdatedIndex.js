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

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItems = document.querySelectorAll("a");
navItems[0].textContent = (siteContent["nav"]["nav-item-1"]);
navItems[1].textContent = (siteContent["nav"]["nav-item-2"]);
navItems[2].textContent = (siteContent["nav"]["nav-item-3"]);
navItems[3].textContent = (siteContent["nav"]["nav-item-4"]);
navItems[4].textContent = (siteContent["nav"]["nav-item-5"]);
navItems[5].textContent = (siteContent["nav"]["nav-item-6"]);

let ctaButton = document.querySelector("button");
ctaButton.textContent = (siteContent["cta"]["button"]);

let mainHeader = document.querySelector("h1");
mainHeader.textContent = (siteContent["cta"]["h1"]);

let mainItems = document.querySelectorAll("h4");
mainItems[0].textContent = (siteContent["main-content"]["features-h4"]);
mainItems[1].textContent = (siteContent["main-content"]["about-h4"]);
mainItems[2].textContent = (siteContent["main-content"]["services-h4"]);
mainItems[3].textContent = (siteContent["main-content"]["product-h4"]);
mainItems[4].textContent = (siteContent["main-content"]["vision-h4"]);

mainItems[5].textContent = (siteContent["contact"]["contact-h4"]);

let paraItems = document.querySelectorAll("p");
paraItems[0].textContent = (siteContent["main-content"]["features-content"]);
paraItems[1].textContent = (siteContent["main-content"]["about-content"]);
paraItems[2].textContent = (siteContent["main-content"]["services-content"]);
paraItems[3].textContent = (siteContent["main-content"]["product-content"]);
paraItems[4].textContent = (siteContent["main-content"]["vision-content"]);

paraItems[5].textContent = (siteContent["contact"]["address"]);
paraItems[6].textContent = (siteContent["contact"]["phone"]);
paraItems[7].textContent = (siteContent["contact"]["email"]);
paraItems[8].textContent = (siteContent["footer"]["copyright"]);