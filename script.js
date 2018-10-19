
//declareren van vars en elementen in de dom
var article = document.querySelector('section > article');
var checkbutton = document.querySelector('article > footer > button');
//console.log("button? ",checkbutton);

checkbutton.addEventListener('click', function() {
    //console.log("we hebben een klik dames en heren");
    checkbutton.classList.toggle("show");

})




/*


check.addEventListener('click', function() {
                       article.classList.add('show');
                       })

var header = document.querySelector('body > header');
var form = document.querySelector('li > img');

form.addEventListener('click', function() {
    form.classList.add('down');
})
*/
