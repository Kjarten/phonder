//import List from './lib/list';
//import empty from './lib/helpers';

const API_URL = '../lectures.json';

const program = ((binFilter) => {

  let lectures;

  function el(element, className, clickHandler) {

    const el = document.createElement(element);
    el.setAttribute('class', className);

    if (clickHandler != 0) {
      el.addEventListener(clickHandler, navigate);
    }
    return el;
  }

  function takeFive(row_el, tempList) {;
    //Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json
    // Þetta eru öll elemntin sem Máni setti inn í html:

    col_el = el('div', 'lectures__col', '0');
    section_el = el('section', 'lecture', 'click');
    thumb_el = el('div', 'lecture__thumbnail', '0');
    img_el = el('img', 'img__thumbnail', '0');
    if (typeof tempList["thumbnail"] != "undefined") {
      img_el.src = "../" + tempList["thumbnail"];
    }
    info_el = el('div', 'lecture__info', '0');
    category_el = el('div', 'lecture__catContainer', '0');
    h3_el = el('h3', 'lecture__category', '0');
    h3Text_el = document.createTextNode(tempList["category"]);
    detail_el = el('div', 'lecture__detail', '0');
    title_el = el('div', 'lecture__titleContainer', '0');
    h2_el = el('h3', 'lecture__title', '0');
    h2Text_el = document.createTextNode(tempList["title"]);

    //Röðum upp:
    row_el.append(col_el);
    col_el.append(section_el);
    section_el.append(thumb_el, info_el);
    thumb_el.append(img_el);
    info_el.append(category_el, detail_el);
    category_el.append(h3_el);
    h3_el.append(h3Text_el);
    detail_el.append(title_el);
    title_el.append(h2_el); //Þarf að færa niður í if setningu
    h2_el.append(h2Text_el); //Þarf að færa niður í if setningu

    /*
    //Þarf að bæta við þegar OK merkið er komið:
    if ( x == 1) {
    finished_el = el('div', '0', 'lecture__finished', '0');
    marker_el = document.createTextNode(value); //Hér þurfum við að leita í lecture.json

    detail_el.append(title_el, finished_el);
    title_el.append(h2_el); //Þarf að færa niður í if setningu
    h2_el.append(h2Text_el);
    finished_el.append(marker_el);
  } else {
  detail_el.append(title_el);
  title_el.append(h2_el); //Þarf að færa niður í if setningu
  h2_el.append(h2Text_el);
  */
}

function add(data, binFilter) {

  console.log(binFilter);

  row_el = el('div', 'lectures__row', '0');
  lectures.append(row_el);

  //Leita í lectures.json, finna hvern category og setja inn í vigur
  let catCat= new Array(data.length);

  for (j = 0; j < data.length; j += 1 ) {
    catCat[j] = data[j]["category"];
  }

  for (i = 0; i <= catCat.length; i += 1 ) {

    switch(catCat[i]) {
      case binFilter[0]:
      takeFive(row_el, data[i]);
      console.log('html')
      break;
      case binFilter[1]:
      takeFive(row_el, data[i]);
      console.log('css')
      break;
      case binFilter[2]:
      takeFive(row_el, data[i]);
      console.log('JavaScript')
      break;
    }
  }
  program.init(lectures, buttons, binFilter);
}

function fetchData(binFilter) {
  fetch(API_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Villa kom upp');
  })
  .then((data) => {
    add(data.lectures, binFilter);
  })
  .catch(() => {
    console.log('Máni þekkir tölvunarfræðinginn Arnar');
  });
}

// Hreinsum alla lecture__col til að setja upp aftur miðað við binFilter
function deleteItem(binFilter) {
  let lectures__row = document.querySelector('.lectures__row');
  parentDelete = lectures__row.parentElement;
  parentDelete.removeChild(lectures__row);

  fetchData(binFilter);
}

function filter(value, binFilter) {
  // Breytum staki í streng, eftir því hvað hefur verið smellt á:

  switch(value) {
    case 'html':
    if (binFilter[0] == 0) {
      binFilter[0] = 'html';
    } else if (binFilter[0] == 'html') {
      binFilter[0] = 0;
    }
    break;

    case 'css':
    if (binFilter[1] == 0) {
      binFilter[1] = 'css';
    } else if (binFilter[1] == 'css') {
      binFilter[1] = 0;
    }
    break;

    case 'javascript':
    if (binFilter[2] == 0) {
      binFilter[2] = 'javascript';
    } else if (binFilter[2] == 'javascript') {
      binFilter[2] = 0;
    }
    break;
  }

  console.log(binFilter);
  // Ef allir takkar eru gráir, þá á að birta alla rununa:
  const zeroSUM = binFilter[0]+binFilter[1]+binFilter[2];

  // Þarf að endurskoða
  if (zeroSUM == 0) {

    binFilter = ['html', 'css', 'javascript'];
  }
  console.log(binFilter);
  deleteItem(binFilter);
}

//buttonL er bara test nafn
function butt() {

  console.log(this.className)
  let tempClass = this.className;

  switch(tempClass) {
    case 'htmlButton':
    filter('html', binFilter);
    break;

    case 'cssButton':
    filter('css', binFilter);
    break;

    case 'jsButton':
    filter('javascript', binFilter);
    break;
  }
}

function navigate(e) {

  //Hér þarf að vísa á rétta slóð.
  console.log('Máni Navigate');

}

function init(_lectures, _buttons, _binFilter) {
  lectures = _lectures;
  buttons = _buttons;
  binFilter = _binFilter;

  const lecture = _lectures.querySelectorAll('.lecture');

  lecture[0].addEventListener('click', navigate);
  lecture[1].addEventListener('click', navigate);
  lecture[2].addEventListener('click', navigate);
  lecture[3].addEventListener('click', navigate);
  lecture[4].addEventListener('click', navigate);
  lecture[5].addEventListener('click', navigate);
  lecture[6].addEventListener('click', navigate);
  lecture[7].addEventListener('click', navigate);
  lecture[8].addEventListener('click', navigate);
  lecture[9].addEventListener('click', navigate);
  lecture[10].addEventListener('click', navigate);
  lecture[11].addEventListener('click', navigate);
  lecture[12].addEventListener('click', navigate);

  const cssButton = _buttons.querySelector('.cssButton');
  cssButton.addEventListener('click', butt);

  const htmlButton = _buttons.querySelector('.htmlButton');
  htmlButton.addEventListener('click', butt);

  const jsButton = _buttons.querySelector('.jsButton');
  jsButton.addEventListener('click', butt);

}
//fetchData(['html','css','javascript'])

return {

  init,

};
})();

document.addEventListener('DOMContentLoaded', () => {
  //const page = document.querySelector('body'); //Frá OSK
  //const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK

  const lectures = document.querySelector('.lectures');
  const buttons = document.querySelector('.buttons');

  // Bý til vigur sem geymir upplýsingar um hvað hefur verið smellt á:
  let binFilter = [0, 0, 0];

  program.init(lectures, buttons, binFilter);

  /* Frá OSK
  if (isLecturePage) {

} else {
const list = new List();
list.load();
}
*/
});
