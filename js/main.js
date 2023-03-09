// CAROSELLO IMMAGINI

//  Creo l'array con la lista immagini da inserire nel carosello

// Array immagini
const listaImmagini = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Variabili dal DOM
const imagesListDom = document.querySelector(".images-list");
const upDom = document.getElementById("up");
const downDom = document.getElementById("down");
const sidebarImgDom = document.querySelector(".sidebar-container");

// Ciclo per aggiunger immagini degli oggetti dell'array all'HTML

for (let i = 0; i < listaImmagini.length; i++) {
    const newImgContainer = `
        
        <div class="img-container">
            <img class="image" src="${listaImmagini[i].image}">
            <div class="description">
                <h2 class="img-title">${listaImmagini[i].title}</h2>
                <span class="img-text">${listaImmagini[i].text}</span>            
            </div>
        </div>

    `
    const newThumbnail = `

    <div class="img-sidebar-container"> 
        <img src="${listaImmagini[i].image}">
        <div class="overlay"></div>
    </div>   
    `
    ;
    
    imagesListDom.innerHTML += newImgContainer; 
    sidebarImgDom.innerHTML += newThumbnail;
}

// Seleziono elementi array con classe 'img-container' e 'img-sidebar-container'
const imgContainerDom = document.getElementsByClassName("img-container");
const imgSidebarOverlayDom = document.getElementsByClassName("overlay");
const sidebarContainerDom = document.getElementsByClassName('img-sidebar-container');


// Rendo visibile la prima immagine della lista
let immagineCorrente = 0;
imgContainerDom[immagineCorrente].classList.add('show');
imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
sidebarContainerDom[immagineCorrente].classList.add('border');
/* upDom.classList.add('hide'); */


// Creo programma per cambiare immagine al clic sui pulsanti up e down

// Pulsante Down

downDom.addEventListener('click',

    function() {
        if (immagineCorrente < imgContainerDom.length - 1) {
            
            cambiaImmagineRemove(immagineCorrente);

            immagineCorrente++;

            cambiaImmagineAdd(immagineCorrente);
                        
        } else if (immagineCorrente == imgContainerDom.length - 1) {

            cambiaImmagineRemove(immagineCorrente);

            immagineCorrente = 0;

            cambiaImmagineAdd(immagineCorrente);        
        }
    }
);

// Pulsante Up
upDom.addEventListener('click',

    function() {
        if (immagineCorrente > 0) {
            
            cambiaImmagineRemove(immagineCorrente);

            immagineCorrente--;

            cambiaImmagineAdd(immagineCorrente);

            downDom.classList.remove('hide');
            
            
        } else if (immagineCorrente == 0) {

            cambiaImmagineRemove(immagineCorrente);

            immagineCorrente = imgContainerDom.length -1;

            cambiaImmagineAdd(immagineCorrente);
        }
    }
);


// FUNZIONI

function cambiaImmagineRemove(immagineCorrente) {
    imgContainerDom[immagineCorrente].classList.remove('show');
    imgSidebarOverlayDom[immagineCorrente].classList.remove('hide');
    sidebarContainerDom[immagineCorrente].classList.remove('border');
}

function cambiaImmagineAdd(immagineCorrente) {
    imgContainerDom[immagineCorrente].classList.add('show');
    imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
    sidebarContainerDom[immagineCorrente].classList.add('border');

}
