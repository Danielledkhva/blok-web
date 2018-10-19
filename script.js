/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var article = document.querySelector('section > article');
var check = document.querySelector('footer > button');

check.addEventListener('click', function() {
                       article.classList.add('show');
                       })

var header = document.querySelector('body > header');
var form = document.querySelector('li > img');

form.addEventListener('click', function() {
    form.classList.add('down');
})
