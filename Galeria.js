var x = Galeria.querySelectorAll('img#Hearts-T');
var novaImg = 'img/Coracao_TInta_Redimensionado';

for (var i = 0; i < x.length; i++) {
    novoX = x[i];
    novoX.addEventListener('mouseover', function(event){
        this.querySelector('img').src = novaImg;
    });
}
 