//import List from './lib/list';

    // Bý til vigur sem geymir upplýsingar um hvað hefur verið smellt á:
let binFilter = [0, 0, 0];

const program = (() => {
  let lectures;

  //function init(_lectures, _buttons) { - Tímabundið
  function init(_lectures) {
    lectures = _lectures;
    //_form.addEventListener('submit', formHandler);

    // Hlustum eftir því hvort einhver smelli á fyrirlestur og beinum aðila á
    // fyrirlestrar síðu með function navigate:
    const lecture = _lectures.querySelectorAll('.lecture');
    lecture[0].addEventListener('click', buttonL); //Tímabundið
    lecture[1].addEventListener('click', navigate);
    lecture[2].addEventListener('click', navigate);
    lecture[3].addEventListener('click', navigate);
    lecture[4].addEventListener('click', navigate);
    lecture[5].addEventListener('click', navigate);
    lecture[6].addEventListener('click', navigate);
    lecture[7].addEventListener('click', navigate);
    //lecture[8].addEventListener('click', navigate());
    //lecture[9].addEventListener('click', navigate());
    //lecture[10].addEventListener('click', navigate());
    //lecture[11].addEventListener('click', navigate());
    //lecture[12].addEventListener('click', navigate());

  }
//buttonL er bara test nafn
  function buttonL() {
    const lectures = document.querySelector('.lectures');
    const lecture = lectures.querySelectorAll('.lecture');
    lecture[0].addEventListener('click', filter('css', binFilter));

    // Hlustum eftir því hvort einhver smelli á takka og hefjumst handa við að
    // reita arfa:
    //const css__button = _buttons.querySelectorAll('.css__button');
    //css__button.addEventListener('click', filter('css', binFilter));

    //const html__button = _buttons.querySelectorAll('.html__button');
    //html__button.addEventListener('click', filter('html', binFilter));

    //const javascript__button = _buttons.querySelectorAll('.javascript__button');
    //javascript__button.addEventListener('click', filter('javascript', binFilter));

  }

  function filter(value, binFilter) {

    console.log('Máni filter')

    // Breytum staki í streng, eftir því hvað hefur verið smellt á:

    switch(value) {
    case 'css':
    binFilter[0] = 'css';
    break;

    case 'html':
    binFilter[1] = 'html';
    break;

    case 'javascript':
    binFilter[2] = 'javascript';
    break;
    }
    // Ef allir takkar eru gráir, þá á að birta alla rununa:
    const zeroSUM = binFilter[0]+binFilter[1]+binFilter[2];

    if (zeroSUM == 0) {

      binFilter = [1, 1, 1];
    }

    deleteItem(binFilter);
    }

  // Hreinsum alla lecture__col til að setja upp aftur miðað við binFilter
  function deleteItem(binFilter) {

    const lectures__row = document.querySelector('.lectures__row');

    let parentDelete = lectures__row.parentElement;
    parentDelete.removeChild(lectures__row);

    console.log('Máni, hringdu þegar þú sérð þetta');

    add(binFilter);
    }

  function add(binFilter) {

    //let catCat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let catCat = ['css', 'x', 'x', 'css', 'x', 'x', 'x', 'x'];

    //Leita í lectures.json, finna hvern category og setja inn í vigur
    //getum notað 'html', 'javascript' og 'css'

    // for loop upp í fjölda lectures, ef category = binFilter þá skrifar hún
    // streng inn í vigur, annars 0.

    for (i = 0; i <= catCat.length; i += 1 ) {
      if (catCat[i] == binFilter[0]) {
        catCat[i] = binFilter[0];
      } else {
        catCat [i] = 'c';
      }
    }

      //Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json

    console.log('Máni...Hringja!');
    //const items = document.querySelector('.items');

  //  for(binThumb) //Fyrir öll slug active

  //    switch(binThumb) {

//        }
      }

/*
// Þetta eru öll elemntin sem Máni setti inn í html:
col_el = el('div', '0', 'lectures__col', '0');
section_el = el('section', '0', 'lecture', 'click');
thumb_el = el('div', '0', 'lecture__thumbnail', '0');
img_el = el('img', '0', 'img__thumbnail', '0'); //Hér þurfum við að leita í lecture.json
info_el = el('div', '0', 'lecture__info', '0');
category_el = el('div', '0', 'lecture__category', '0');
h3_el = el('h3', '0', '0', '0');
h3Text_el = document.createTextNode(value); //Hér þurfum við að leita í lecture.json
detail_el = el('div', '0', 'lecture__detail', '0');
title_el = el('div', '0', 'lecture__title', '0');
h2Text_el = document.createTextNode(value); //Hér þurfum við að leita í lecture.json

//Röðum upp:
items.append(col_el);
col_el.append(section_el);
section_el.append(thumb_el, info_el);
thumb_el.append(img_el);
info_el.append(category_el, detail_el);
category_el.append(h3_el);
detail_el.append(title_el, finished_el);
title_el.append(h2Text_el);
finished_el.append(marker_el);

//Ef element vigur gildi er 1
if ( x == 1) {
finished_el = el('div', '0', 'lecture__finished', '0');
marker_el = document.createTextNode(value); //Hér þurfum við að leita í lecture.json

detail_el.append(title_el, finished_el);
title_el.append(h2Text_el);
finished_el.append(marker_el);

} else {
detail_el.append(title_el);
title_el.append(h2Text_el);

}

}


//tekur inn
function el(element, type, className, clickHandler) {

const el = document.createElement(element);
el.setAttribute('class', className);
if (type != 0) {
el.setAttribute('type', type);
}
if (className == 'item__button') {
el.addEventListener(clickHandler, deleteItem);
} else if (className == 'item__checkbox') {
el.addEventListener(clickHandler, finish);
} else if (className == 'item__text') {
el.addEventListener(clickHandler, edit);
}
return el;
*/
  function navigate(e) {

    //Hér þarf að vísa á rétta slóð.
    console.log('Máni Navigate');

  }

return {

  init,
};

})();

document.addEventListener('DOMContentLoaded', () => {
  //const page = document.querySelector('body'); //Frá OSK
  //const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK

  const lectures = document.querySelector('.lectures');
  //const buttons = document.querySelector('.buttons'); - Tímabundið

  console.log('Sæll Máni');

  //program.init(lectures, buttons); - Tímabundið
  program.init(lectures);

/* Frá OSK
  if (isLecturePage) {

  } else {
    const list = new List();
    list.load();
  }
  */
});
