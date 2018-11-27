// import List from './lib/list';

const API_URL = '../lectures.json';
let checkDone;

const program = (() => {

  let lectures;

  function memory(_item) {
    let tempMemory = window.localStorage.getItem(_item);
    console.log(tempMemory);
    return tempMemory
  }

  function lectureDone(lectureNo, data) {

    let tempConst;
    let tempMemory = new Array(data.length);
    let _doneSave = new Array(data.length);

    for (l = 0; l < lectureNo; l += 1 ) {

      tempConst = data[l]["slug"];

      tempMemory[l] = memory(tempConst);
      console.log(tempMemory[l]);

      if (tempConst == tempMemory[l]) {
        _doneSave[l] = 1;

      } else {
        _doneSave[l] = 0;
      }
    }

    return _doneSave
  }

  function el(element, className, clickHandler) {

    const el = document.createElement(element);
    el.setAttribute('class', className);

    if (clickHandler != 0) {
      el.addEventListener(clickHandler, navigate);
    }
    return el;
  }

  function takeFive(row_el, tempList, checkDone) {;
    //Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json
    let slugID = tempList["slug"];

    col_el = el('div', 'lectures__col', '0');
    section_el = el('section', 'lecture', 'click');
    section_el.setAttribute('id', slugID);
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

    let checked = checkDone;

    //Þarf að bæta við þegar OK merkið er komið:
    if (checked !== 0) {
      finished_el = el('p', 'lecture__finished', '0');
      marker_el = document.createTextNode("\u2713");
      detail_el.append(title_el, finished_el);
      title_el.append(h2_el);
      h2_el.append(h2Text_el);
      finished_el.append(marker_el);
    } else {
      detail_el.append(title_el);
      title_el.append(h2_el);
      h2_el.append(h2Text_el);
    }
  }

  function add(data, binFilter, lectures, buttons) {

    row_el = el('div', 'lectures__row', '0');
    lectures.append(row_el);

    //Leita í lectures.json, finna hvern category og setja inn í vigur

    let lectureNo = data.length;
    let doneSave = lectureDone(lectureNo, data);

    checkDone = doneSave
    console.log(checkDone);
    //    }
    catCat = new Array(data.length);

    for (j = 0; j < data.length; j += 1 ) {
      catCat[j] = data[j]["category"];
    }

    const zeroSUM = binFilter[0]+binFilter[1]+binFilter[2];

    for (i = 0; i < catCat.length; i += 1 ) {

      if (zeroSUM == 0) {
        takeFive(row_el, data[i], checkDone[i]);
      } else {
        switch(catCat[i]) {
          case binFilter[0]:
          takeFive(row_el, data[i], checkDone[i]);
          break;

          case binFilter[1]:
          takeFive(row_el, data[i], checkDone[i]);
          break;

          case binFilter[2]:
          takeFive(row_el, data[i], checkDone[i]);
          break;
        }
      }
    }
    init(lectures, buttons, binFilter);
  }

  function fetchData(binFilter, lectures, buttons) {
    fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Villa kom upp');
    })
    .then((data) => {
      add(data.lectures, binFilter, lectures, buttons);
    })
    .catch(() => {
      console.log('Máni þekkir tölvunarfræðinginn Arnar');  //Fyrir debug
    });
  }

  // Hreinsum alla lecture__col til að setja upp aftur miðað við binFilter
  function deleteItem(binFilter) {
    let lectures__row = document.querySelector('.lectures__row');
    parentDelete = lectures__row.parentElement;
    parentDelete.removeChild(lectures__row);

    fetchData(binFilter, lectures, buttons);
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
    deleteItem(binFilter);
  }

  function butt() {
    console.log('butt'); //Fyrir debug

    let tempID = this.id;
    let tempClass = this.className;

    let activeButton = document.getElementById(tempID);

    if (tempClass == 'button') {
      activeButton.classList.add('button--active');
    } else {
      activeButton.setAttribute('class', 'button')
    }

    switch(tempID) {
      case 'html':
      filter('html', binFilter);
      break;

      case 'css':
      filter('css', binFilter);
      break;

      case 'javascript':
      filter('javascript', binFilter);
      break;
    }
  }

  function navigate() {
    let tempSlug = this.id;
    let tempUrl = "../fyrirlestur.html?slug=" + tempSlug;

    window.location.href = tempUrl;
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

    const button = _buttons.querySelectorAll('.button');
    button[0].addEventListener('click', butt);
    button[1].addEventListener('click', butt);
    button[2].addEventListener('click', butt);
  }

  return {

    init, fetchData,

  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body'); //Frá OSK
  const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK

  //Frá OSK
  if (page.className = isLecturePage) {

  } else {

    const lectures = document.querySelector('.lectures');
    const buttons = document.querySelector('.button__container');

    // Bý til vigur sem geymir upplýsingar um hvað hefur verið smellt á:
    let binFilter = [0, 0, 0];

    program.fetchData(binFilter, lectures, buttons);

    //const list = new List();
    //list.load();
  }

});
