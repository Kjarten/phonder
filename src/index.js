//import List from './lib/list';

const API_URL = '../lectures.json';

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
    lecture[8].addEventListener('click', navigate);
    lecture[9].addEventListener('click', navigate);
    lecture[10].addEventListener('click', navigate);
    lecture[11].addEventListener('click', navigate);
    lecture[12].addEventListener('click', navigate);

    //fetchData(['html','css','javascript'])

  }
  //buttonL er bara test nafn
  function buttonL() {
    const lectures = document.querySelector('.lectures');
    const lecture = lectures.querySelectorAll('.lecture');
    lecture[0].addEventListener('click', filter('javascript', binFilter));

    // Hlustum eftir því hvort einhver smelli á takka og hefjumst handa við að
    // reita arfa:
    //const css__button = _buttons.querySelectorAll('.css__button');
    //css__button.addEventListener('click', filter('css', binFilter));

    //const html__button = _buttons.querySelectorAll('.html__button');
    //html__button.addEventListener('click', filter('html', binFilter));

    //const javascript__button = _buttons.querySelectorAll('.javascript__button');
    //javascript__button.addEventListener('click', filter('javascript', binFilter));

  }

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
    console.log('Máni þekkir tölvunarfræðinginn Óla');
  });
}

// Hreinsum alla lecture__col til að setja upp aftur miðað við binFilter
function deleteItem(binFilter) {

  const lectures__row = document.querySelector('.lectures__row');

  let parentDelete = lectures__row.parentElement;
  parentDelete.removeChild(lectures__row);

  fetchData(binFilter);
}

function filter(value, binFilter) {

  console.log('Máni filter')

  // Breytum staki í streng, eftir því hvað hefur verið smellt á:

  switch(value) {
    case 'html':
    binFilter[0] = 'html';
    break;

    case 'css':
    binFilter[1] = 'css';
    break;

    case 'javascript':
    binFilter[2] = 'javascript';
    break;
  }
  // Ef allir takkar eru gráir, þá á að birta alla rununa:
  const zeroSUM = binFilter[0]+binFilter[1]+binFilter[2];

  // Þarf að endurskoða
  if (zeroSUM == 0) {

    binFilter = ['html', 'css', 'javascript'];
  }
  console.log(binFilter);
  deleteItem(binFilter);
}

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
