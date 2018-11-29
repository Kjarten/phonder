const API_URL = '../../lectures.json';

const lectgram = (() => {
  function el(element, className, clickHandler) {
    const elem = document.createElement(element);
    elem.setAttribute('class', className);

   // if (clickHandler != 0) {
      // XXX má henda út?
   //   elem.addEventListener(clickHandler, navigate);
   // }
    return elem;
  }

  function addP(part, mainEl) {
    const txtEl = el('p', 'lect__text', '0');
    const txt = document.createTextNode(contentList[i].data);
    txtEl.append(txt);
    mainEl.append(txtEl);
  }

  function takeFive(mainEl, tempList) {
    // Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json
    console.log('takefive'); // For debugging
    const contentList = tempList.content;
    console.log('contentList');
    // Hér er contentList[i] vísun í einhvern vigur eða aðferð til að kalla á "type".
    // For-lykkjan keyrir svo í gegnum alla "type" og smíðar þá með switch lykkju
    // Mögulega er sniðugra að nota while lykkju þannig að við þurfum ekki að vita
    // xxx.length
    for (let i = 0; i < contentList.length; i += 1) {
      // Finna alla "type" og "data" innan data[X]
      switch (contentList[i].type) {
        case 'youtube': {
          console.log('youtube');
          const containerEl = el('div', 'lect__container container--video', '0');
          const videoEl = el('iframe', 'lect__video', '0');
          videoEl.src = contentList[i].data;
          //videoEl.width = videoEl.contentWindow.document.body.scrollWidth;
          //videoEl.height = videoEl.contentWindow.document.body.scrollHeight;
          //videoEl.style.width = '420p'; //Þarf líklega að breyta
          //videoEl.style.height = '315px'; //Þarf líklega að breyta
          //videoEl.style = 'height:100%; width: 100%;';
          //const wth = lecture_.clientWidth;
          //console.log(wth);
          videoEl.style.width = '100%';
          videoEl.style.height = '100%';
          //mainEl.append(videoEl);
          mainEl.append(containerEl);
          containerEl.append(videoEl);
          break;
        }
        case 'text': {
          console.log('text');
          const txtConEl = el('p', 'lect__text', '0');
          let txtEl = el('p', 'lect__text', '0');
          //let txt = contentList[i].data;
          //let nline = txt.indexOf('\n');
          //console.log(nline);
          //let part;
          //while (nline > 0) {
          //  //var txtEl = el('p', 'lect__text', '0');
          //  part = txt.substr(0, nline);
          //  addP(part, mainEl);
          //  txt = txt.substring(nline + 1);
          //  nline = txt.indexOf('\n');
          //}
          //         //  console.log(part);
          //  console.log(txt);
          //  console.log(nline);
          //  txtPart = document.createTextNode(part);
          //  txtEl.appened(txtPart);
          //  mainEl.append(txtEl);
          //}
          //console.log(txt.length);
          //console.log(txt.indexOf('\n'));
          //console.log(part.length);
          //console.log(part);
          //txt.replace(/\n/gi, '\n\n');
          //console.log(txt);
          const txtTxtEl = document.createTextNode(contentList[i].data);
          txtConEl.append(txtTxtEl);
          mainEl.append(txtConEl);
          break;
        }
        case 'quote': {
          console.log('quote');
          const quoteEl = el('div', 'lect__quote', '0');
          const quoteTxt = el('p', 'quote__text', '0');
          const quoteAuthor = el('p', 'quote__author', '0');
          const txt = document.createTextNode(contentList[i].data);
          const author = document.createTextNode(contentList[i].attribute);
          quoteTxt.append(txt);
          quoteEl.append(quoteTxt);
          quoteAuthor.append(author);
          quoteEl.append(quoteAuthor);
          mainEl.append(quoteEl);
          break;
        }
        case 'image': {
          console.log('image');
          const imgContainer = el('div', 'lect__container container--img', '0');
          const imgEl = el('img', 'lect__img', '0');
          const captionEl = el('div', 'lect__caption', '0');
          const txt = document.createTextNode(contentList[i].caption);
          imgEl.src = `../../${contentList[i].data}`;
          imgContainer.append(imgEl);
          captionEl.append(txt);
          imgContainer.append(captionEl);
          mainEl.append(imgContainer);
          break;
        }
        case 'heading': {
          console.log('heading');
          const h2El = el('h2', 'lect__heading', '0');
          const h2TxtEl = document.createTextNode(contentList[i].data);
          h2El.append(h2TxtEl);
          mainEl.append(h2El);
          break;
        }
        case 'list': {
          console.log('list')
          const tempL = contentList[i].data;
          const listConEl = el('ul', 'lect__listContainer', '0');
          let listItEl;
          let listItTxtEl;
          for (let j = 0; j < tempL.length; j += 1) {
            listItEl = el('li', 'lect__listItem', '0');
            listItTxtEl = document.createTextNode(tempL[j]);
            listItEl.append(listItTxtEl);
            listConEl.append(listItEl);
          }
          mainEl.append(listConEl);
          break;
        }
        case 'code': {
          console.log('code');
          const codeEl = el('pre', 'lect__code', '0');
          const codeTxtEl = document.createTextNode(contentList[i].data);
          codeEl.append(codeTxtEl);
          mainEl.append(codeEl);
          break;
        }
        default:
      }
    }
  }


  function init() {
    const check = document.querySelector('.footer__check');
    check.addEventListener('click', checkIt);
  }

  function add(data) {
    console.log('Function: add'); // For debugging

    const lect = document.querySelector('.lect__row');

    const mainEl = el('div', 'lect__col', '0');
    lect.append(mainEl);
  
    // const tempURL = window.location.href; XXX

    const queryString = new URLSearchParams(document.location.search.substring(1));
    const tempSlug = queryString.get('slug');
    const done = window.localStorage.getItem(tempSlug);
    const check = document.querySelector('.footer__check');

    if (done) {
      check.textContent = '\u2713 Fyrirlestur kláraður';
      check.classList.add('footer--done');
    } else {
      check.textContent = 'Klára fyrirlestur';
      check.setAttribute('class', 'footer__check');
    }

    // Leita í lectures.json, finna hvern category og setja inn í vigur
    let tempConst;
    let tempID;
    for (let l = 0; l < data.length; l += 1) {
      tempConst = data[l].slug;
      if (tempConst === tempSlug) {
        tempID = l;
      }
    }

    const tempCat = data[tempID].category;
    const tempTitle = data[tempID].title;

    const hCont = document.querySelector('.header__container');

    const subEl = el('h2', 'header__title', '0');
    subEl.classList.add('header--subtitle');
    const subTxtEl = document.createTextNode(tempCat);
    const headEl = el('h1', 'header__title', '0');
    const headTxtEl = document.createTextNode(tempTitle);

    subEl.append(subTxtEl);
    hCont.append(subEl);
    headEl.append(headTxtEl);
    hCont.append(headEl);

    takeFive(mainEl, data[tempID]);
    init();
  }

  function fetchData() {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa kom upp');
      })
      .then((data) => {
        add(data.lectures);
      })
      .catch(() => {
      });
  }

  function checkIt() {
    const tempSearch = new URLSearchParams(document.location.search.substring(1));
    const slugCheck = tempSearch.get('slug');

    const saved = window.localStorage.getItem('dataItem');
    const check = document.querySelector('.footer__check');
    if (saved) {
      check.textContent = 'Klára fyrirlestur';
      check.setAttribute('class', 'footer__check');
      window.localStorage.removeItem('dataItem');
      window.localStorage.removeItem(slugCheck);
    } else {
      const dataItem = slugCheck;
      check.textContent = '\u2713 Fyrirlestur kláraður';
      check.classList.add('footer--done');
      window.localStorage.setItem('dataItem', dataItem);
      window.localStorage.setItem(slugCheck, dataItem);
    }
  }

  return {
    init, fetchData,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  // const page = document.querySelector('body'); //Frá OSK XXX
  // const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK XXX

  console.log('Ný síða');
  lectgram.fetchData();

  // const list = new List(); XXX
  // list.load(); XXX
});
