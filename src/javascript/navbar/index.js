'use strict';
const $ = require('jquery');

module.exports = {

    init: function() {
        console.log('Initializing navbar...');
        $('#ddv-menu-btn').click(function() {
            console.log('Hey! You clicked the navbar menu button!');
        });
    }

};
