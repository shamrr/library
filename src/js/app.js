import * as flsFunctions from "./modules/functions.js";
import * as favoritesFilter from "./modules/favoritesFilter.js";
import * as hamburger from "./modules/hamburger.js";
import * as carousel from "./modules/carousel.js"; 
import * as menu from "./modules/dropMenu.js";
// import * as auth from "./modules/authorization.js";
import * as registr from "./modules/registration.js";
import * as auth from "./modules/authorization.js";

flsFunctions.isWebp();
favoritesFilter.filter();
hamburger.toggleHamburger();


window.menu = menu;
window.carousel = carousel;
window.registr = registr;
window.auth = auth;