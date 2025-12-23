var imagenes = ['img/img_01.webp','img/img_02.webp','img/img_03.webp','img/img_04.webp','img/img_05.webp'],
    cont = 0;

function carrousel(contenedor){

    contenedor.addEventListener('click', e=> {
        let atras = contenedor.querySelector('.btn_back'),
            adelante = contenedor.querySelector('.btn_next'),
            img = contenedor.querySelector('#imagenS'),
            img2 = contenedor.querySelector('#imagenF'),
            tgt = e.target;
        console.log("valor: " + cont)
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont -1];
                img2.src = imagenes[cont];
                cont--;
            }
            else{
                img.src = imagenes[imagenes.length - 1];
                img2.src = imagenes[cont];
                cont = imagenes.length -1;
            }

        } else if(tgt == adelante){
            if(cont < imagenes.length -2){
                img.src = imagenes[cont +1];
                img2.src = imagenes[cont +2];
                cont++;
            }
            else if (cont < imagenes.length -1){
                img.src = imagenes[cont +1];
                img2.src = imagenes[0];
                cont++;
            }
            else{
                img.src = imagenes[0];
                img2.src = imagenes[1];
                cont = 0;
            }
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('#body_carrusel');

    carrousel(contenedor);
});