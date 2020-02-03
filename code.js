
const canvas = document.querySelector('.canvas');
const largeur = canvas.width = window.innerWidth;
const hauteur = canvas.height = window.innerHeight;
const dessin = canvas.getContext('2d');

var audios = [["move_left", "plus_vite", "pression1"],
              ["pression2", "alone", "consigne"],
              ["consigne2", "finish", "marteau"]]

var couleur;
var couleurs = ['255, 0, 0',
               '255, 106, 0',
               '255, 216, 0',
               '182, 255, 0',
               '76, 255, 0',
               '0, 255, 33',
               '0, 255, 144',
               '0, 255, 255',
               '0, 148, 255',
               '0, 38, 255',
               '72, 0, 255',
               '178, 0, 255',
               '255, 0, 220',
               '255, 0, 110']

var matrice = [["", "", ""],
               ["", "", ""],
               ["", "", ""]]

for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    couleur = couleurs.splice(Math.trunc(couleurs.length * Math.random()), 1)
    dessin.fillStyle = 'rgb(' + couleur + ')';
    dessin.fillRect(j * largeur / 3, i * hauteur / 3, largeur / 3, hauteur / 3)
    matrice[i][j] = couleur
  }
}

canvas.addEventListener('click', function(){
  var x = event.pageX
  var y = event.pageY

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(j * largeur / 3 < x && x < (j + 1) * largeur / 3 && i * hauteur / 3 < y && y < (i + 1) * hauteur / 3){
        couleur = couleurs.splice(Math.trunc(couleurs.length * Math.random()), 1)
        couleurs.push(matrice[i][j])
        matrice[i][j] = couleur
        dessin.fillStyle = 'rgb(' + couleur + ')';
        dessin.fillRect(j * largeur / 3, i * hauteur / 3, largeur / 3, hauteur / 3)

        var audio = document.querySelector('#' + audios[i][j])
        audio.play()
      }
    }
  }

}, false);
