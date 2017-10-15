'use strict';
const $ = require('jquery');

const SEL_BTN = '#ddv-menu-btn';
const SEL_MENU = '.navmenu';
const SEL_MENU_CLOSE = '.navmenu__close-btn';


class Navbar {

    constructor() {

        if (!this.hasNavbar()) {
            return;
        }

        console.log('Initializing navbar...');

        $(SEL_BTN).click(function() {
            $(SEL_MENU).toggleClass('open');
        });

        $(SEL_MENU_CLOSE).click(function() {
            $(SEL_MENU).toggleClass('open');
        });
    }

    hasNavbar() {
        return $(SEL_BTN).length > 0;
    }

}

export { Navbar };
