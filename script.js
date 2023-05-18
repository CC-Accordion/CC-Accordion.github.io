const accord = document.getElementsByClassName('container');
var i;

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
