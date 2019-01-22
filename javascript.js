function bouton(){
  var nombre1 = document.getElementById('shoeSize').value;
  var nombre2 = document.getElementById('yearOfBirth').value;
  var result = ((nombre1*2)+5)*50-nombre2+1766;
  alert(result);

}
