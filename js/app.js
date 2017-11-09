// document.getElementById('button-click').addEventListener('click',function(){
//   var contain = document.querySelector('div').classList.contains('existir');
//   console.log(contain)
//   // document.querySelector('div').classList.remove('existir');
// })
// document.getElementById('input-sensible').addEventListener('keyup', function(e) {
window.addEventListener('keyup', function(e) {
  var ascii = e.keyCode;
  console.log(ascii)
  var divColor = document.querySelector('div');
  if(ascii==38){
    divColor.classList.add('yellow');
    divColor.classList.remove('blue');
    divColor.innerHTML = '<p>F</p>'
  }
})
