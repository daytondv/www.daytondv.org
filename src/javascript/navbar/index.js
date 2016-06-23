'use strict';
const $ = require('jquery');

const SEL_BTN = '#ddv-menu-btn';
const SEL_MENU = '.navmenu';
const SEL_MENU_CLOSE = '.navmenu__close-btn';

const TIME_NAV_SLIDE = 250;


class Navbar {

    constructor() {

        if (!this.hasNavbar()) {
            return;
        }

        console.log('Initializing navbar...');

        $(SEL_BTN).click(function() {
            console.log('opening navmenu...');
            // $(SEL_MENU).animate({
            //     left: '50%'
            // } , TIME_NAV_SLIDE);
            $(SEL_MENU).toggleClass('open');
        });

        $(SEL_MENU_CLOSE).click(function() {
            console.log('closing navmenu...');
            $(SEL_MENU).toggleClass('open');
            // $(SEL_MENU).animate({
            //     left: '100%'
            // }, TIME_NAV_SLIDE);
        });
    }

    hasNavbar() {
        return $(SEL_BTN).length > 0;
    }

}

export { Navbar };
