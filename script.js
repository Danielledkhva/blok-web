/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//plusje laten veranderen in een vinkje
//var article = document.querySelector('section > article');
var checkbutton = document.querySelectorAll('article > footer > button');

for (var i = 0; i < checkbutton.length; i++) {
    checkbutton[i].addEventListener('click', function () {
        this.classList.toggle("show");
    });
}



//comment laten verschijnen
document.getElementById('trigger').addEventListener('click', function (e) {
    e.preventDefault();
    comment.classList.add("down");
});
var comment = document.querySelector('section:nth-of-type(2)');
