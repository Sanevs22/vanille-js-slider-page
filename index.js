import { mainSrc, galerySrc, fonsSrc, templSrc } from "./src/data.js";

// Логика слайдера
let sliderPosition = 0;
let pageNum = 1;
let view = document.getElementById('view-content');
let left = document.getElementById('left');
let rigth = document.getElementById('rigth');
let page = document.getElementById('page-num');


let renderView = () => {
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

galery.addEventListener('click', () => {
    clearModeSelector()
    galery.classList.add('mode-active')
    renderGrid(galerySrc);
})

templ.addEventListener('click', () => {
    clearModeSelector()
    templ.classList.add('mode-active')
    renderGrid(templSrc)
})

fons.addEventListener('click', () => {
    clearModeSelector()
    fons.classList.add('mode-active')
    renderGrid(fonsSrc)
})


// логика замены
