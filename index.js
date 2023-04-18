// импортируем картинки
import { mainSrc, galerySrc, fonsSrc, templSrc } from "./src/data.js";

// Логика слайдера
let sliderPosition = 0;
let pageNum = 1;
let view = document.getElementById('view-content');
let left = document.getElementById('left');
let rigth = document.getElementById('rigth');
let page = document.getElementById('page-num');

let renderView = () => {
    view.innerHTML = ''
    for(let i =0; i< mainSrc.length; i++) {
        let div = document.createElement('div');
        div.className = "content-item";
        div.innerHTML = `<img src=${mainSrc[i]} id="img${i}" alt="img${i}">`;
        view.append(div);
    }
}

renderView();

left.addEventListener('click', ()=>{
    if (sliderPosition > 0) {
        sliderPosition -=400;
        pageNum -=1;
    } else {
        sliderPosition =1600;
        pageNum =5;
    } 
    view.style.right = sliderPosition + 'px';
    page.textContent= 'Страница ' + pageNum;
})

rigth.addEventListener('click', ()=>{
    if (sliderPosition < 1600) {
        sliderPosition +=400;
        pageNum +=1;
    } else {
        sliderPosition =0;
        pageNum =1;
    }    
    view.style.right = sliderPosition + 'px';
    page.textContent= 'Страница ' + pageNum;
})

// Логика переключателя Галерея/Шаблоны/Фон
let selector = document.getElementById('sel');
let galery = document.getElementById('galery');
let templ = document.getElementById('templ');
let fons = document.getElementById('fons');
let gridImage = document.getElementById('grid-galery');


let renderGrid = (data) => {
    gridImage.innerHTML= '';
    for(let i =0; i< data.length; i++) {
        let div = document.createElement('div');
        div.className = "item-galery";
        div.innerHTML = `<img src=${data[i]}  alt="gal${i} ">`;
        gridImage.append(div);
    }
}

let clearModeSelector = () => {
    galery.classList.remove('mode-active')
    templ.classList.remove('mode-active')
    fons.classList.remove('mode-active')
}

clearModeSelector()
galery.classList.add('mode-active')
renderGrid(galerySrc);

selector.addEventListener('click', () => {
    clearModeSelector()
    if(event.target.id === 'galery') {
        galery.classList.add('mode-active')
        renderGrid(galerySrc);
    } else if (event.target.id === 'templ') {
        templ.classList.add('mode-active')
        renderGrid(templSrc)
    } else if (event.target.id === 'fons') {
    fons.classList.add('mode-active')
    renderGrid(fonsSrc)
    } 
})

// логика замены
gridImage.addEventListener('click', ()=> {
    mainSrc[pageNum-1] = event.target.src;
    renderView();
} )

// окно при нажатии на корзину
let backet = document.getElementById('basket');
let modalWind = document.getElementById('modal')
modalWind.style.display = 'block'
backet.addEventListener('click', ()=> {
    modalWind.style.display = 'block'
    modalWind.style.opacity = 0.9;
    setTimeout(()=>{
        modalWind.style.opacity = 0;
    }, 8000)
})