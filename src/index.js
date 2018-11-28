// import List from './lib/list';

const API_URL = '../lectures.json';
let checkDone;

const program = (() => {
  // let lectures;
  // let buttons;
  // let binFilter;

  function memory(_item) {
    const tempMemory = window.localStorage.getItem(_item);
    console.log(tempMemory);
    return tempMemory;
  }

  function lectureDone(lectureNo, data) {

    let tempConst;
    const tempMemory = new Array(data.length);
    const _doneSave = new Array(data.length);

    for (let l = 0; l < lectureNo; l += 1) {

      tempConst = data[l].slug;

      tempMemory[l] = memory(tempConst);
      console.log(tempMemory[l]);

      if (tempConst === tempMemory[l]) {
        _doneSave[l] = 1;
      } else {
        _doneSave[l] = 0;
      }
    }

    return _doneSave;
  }

  function el(element, className, clickHandler) {
    const elem = document.createElement(element);
    elem.setAttribute('class', className);

    if (clickHandler !== 0) {
      elem.addEventListener(clickHandler, navigate);
    }
    return elem;
  }

  function takeFive(rowEl, tempList, checked) {
    // Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json
    const slugID = tempList.slug;

    const colEl = el('div', 'lectures__col', '0');
    const sectionEl = el('section', 'lecture', 'click');
    sectionEl.setAttribute('id', slugID);
    const thumbEl = el('div', 'lecture__thumbnail', '0');
    const imgEl = el('img', 'img__thumbnail', '0');
    if (typeof tempList.thumbnail !== 'undefined') {
      imgEl.src = `../${tempList.thumbnail}`;
    }
    const infoEl = el('div', 'lecture__info', '0');
    const categoryEl = el('div', 'lecture__catContainer', '0');
    const h3El = el('h3', 'lecture__category', '0');
    const h3TextEl = document.createTextNode(tempList.category);
    const detailEl = el('div', 'lecture__detail', '0');
    const titleEl = el('div', 'lecture__titleContainer', '0');
    const h2El = el('h3', 'lecture__title', '0');
    const h2TextEl = document.createTextNode(tempList.title);

    // Röðum upp:
    rowEl.append(colEl);
    colEl.append(sectionEl);
    if (typeof tempList.thumbnail !== 'undefined') {
      sectionEl.append(thumbEl, infoEl);
      thumbEl.append(imgEl);
    } else {
      sectionEl.setAttribute('class', 'lecture lecture--noThumb');
      sectionEl.append(infoEl);
    }
    infoEl.append(categoryEl, detailEl);
    categoryEl.append(h3El);
    h3El.append(h3TextEl);
    detailEl.append(titleEl);

    if (checked !== 0) {
      const finishedEl = el('p', 'lecture__finished', '0');
      const markerEl = document.createTextNode('\u2713');
      detailEl.append(titleEl, finishedEl);
      titleEl.append(h2El);
      h2El.append(h2TextEl);
      finishedEl.append(markerEl);
    } else {
      detailEl.append(titleEl);
      titleEl.append(h2El);
      h2El.append(h2TextEl);
    }
  }

  function fetchData(binFilter, lectures, buttons) {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa kom upp við að ná í gögn');
      })
      .then((data) => {
        add(data.lectures, binFilter, lectures, buttons);
      })
      .catch(() => {
        throw new Error('Villa við að vinnslu gagna');
      });
  }

  function init(_lectures, _buttons, _binFilter) {
    lectures = _lectures;
    buttons = _buttons;
    binFilter = _binFilter;

    //const lecture = _lectures.querySelectorAll('.lecture');
    /*
    lecture[0].addEventListener('click', navigate);
    lecture[1].addEventListener('click', navigate);
    lecture[2].addEventListener('click', navigate);
    lecture[3].addEventListener('click', navigate);
    lecture[4].addEventListener('click', navigate);
    lecture[5].addEventListener('click', navigate);
    lecture[6].addEventListener('click', navigate);
    lecture[7].addEventListener('click', navigate);
    lecture[8].addEventListener('click', navigate);Fyrirlestur
    lecture[9].addEventListener('click', navigate);
    lecture[10].addEventListener('click', navigate);
    lecture[11].addEventListener('click', navigate);
    lecture[12].addEventListener('click', navigate);
    */

    const button = _buttons.querySelectorAll('.button');
    button[0].addEventListener('click', butt);
    button[1].addEventListener('click', butt);
    button[2].addEventListener('click', butt);
  }

  return {

    init, fetchData,

  };

  function add(data, binFilter, lectures, buttons) {
    const rowEl = el('div', 'lectures__row', '0');
    lectures.append(rowEl);

    //Leita í lectures.json, finna hvern category og setja inn í vigur

    const lectureNo = data.length;
    const doneSave = lectureDone(lectureNo, data);

    console.log(doneSave);
    
    const catCat = new Array(data.length);

    for (let j = 0; j < data.length; j += 1) {
      catCat[j] = data[j].category;
    }

    const zeroSUM = binFilter[0] + binFilter[1] + binFilter[2];

    for (let i = 0; i < catCat.length; i += 1) {
      if (zeroSUM === 0) {
        takeFive(rowEl, data[i], doneSave[i]);
      } else {
        switch (catCat[i]) {
          case binFilter[0]:
            takeFive(rowEl, data[i], doneSave[i]);
            break;

          case binFilter[1]:
            takeFive(rowEl, data[i], doneSave[i]);
            break;

          case binFilter[2]:
            takeFive(rowEl, data[i], doneSave[i]);
            break;

          default:
        }
      }
    }
    init(lectures, buttons, binFilter);
  }

  // Hreinsum alla lecture__col til að setja upp aftur miðað við binFilter
  function deleteItem(binFilter) {
    const lecturesRow = document.querySelector('.lectures__row');
    const parentDelete = lecturesRow.parentElement;
    parentDelete.removeChild(lecturesRow);

    fetchData(binFilter, lectures, buttons);
  }

  function filter(value, binFilter) {
    // Breytum staki í streng, eftir því hvað hefur verið smellt á:
    const bins = binFilter;
    switch (value) {
      case 'html':
        if (bins[0] === 0) {
          bins[0] = 'html';
        } else if (bins[0] === 'html') {
          bins[0] = 0;
        }
        break;

      case 'css':
        if (bins[1] === 0) {
          bins[1] = 'css';
        } else if (bins[1] === 'css') {
          bins[1] = 0;
        }
        break;

      case 'javascript':
        if (bins[2] === 0) {
          bins[2] = 'javascript';
        } else if (bins[2] === 'javascript') {
          bins[2] = 0;
        }
        break;
      default:
    }
    deleteItem(bins);
  }

  function butt() {
    console.log('butt'); // Fyrir debug

    const tempID = this.id;
    const tempClass = this.className;

    const activeButton = document.getElementById(tempID);

    if (tempClass === 'button') {
      activeButton.classList.add('button--active');
    } else {
      activeButton.setAttribute('class', 'button');
    }

    switch (tempID) {
      case 'html':
        filter('html', binFilter);
        break;

      case 'css':
        filter('css', binFilter);
        break;

      case 'javascript':
        filter('javascript', binFilter);
        break;

      default:
    }
  }

  function navigate() {
    const tempSlug = this.id;
    const tempUrl = `../fyrirlestur.html?slug=${tempSlug}`;

    window.location.href = tempUrl;
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body'); //Frá OSK
  //const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK
  /*
  //Frá OSK
  if (page.className = isLecturePage) {

  } else {
    */
    const lectures = document.querySelector('.lectures');
    const buttons = document.querySelector('.button__container');

    // Bý til vigur sem geymir upplýsingar um hvað hefur verið smellt á:
    let binFilter = [0, 0, 0];

    program.fetchData(binFilter, lectures, buttons);

    //const list = new List();
    //list.load();
  //}
});
