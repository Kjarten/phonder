const API_URL = '../../lectures.json';

const lectgram = (() => {

  function el(element, className, clickHandler) {

    const el = document.createElement(element);
    el.setAttribute('class', className);

    if (clickHandler != 0) {
      el.addEventListener(clickHandler, navigate);
    }
    return el;
  }

  function takeFive(main_el, tempList) {;
    //Smíðum síðan nýja lectures__col og náum í category etc. frá lecture.json
    console.log('takefive'); //For debugging
    contentList = tempList.content;
    console.log('contentList');
    //Hér er contentList[i] vísun í einhvern vigur eða aðferð til að kalla á "type".
    //For-lykkjan keyrir svo í gegnum alla "type" og smíðar þá með switch lykkju
    //Mögulega er sniðugra að nota while lykkju þannig að við þurfum ekki að vita
    //xxx.length
    for (i = 0; i < contentList.length; i += 1) {
      //Finna alla "type" og "data" innan data[X]
      console.log('for');
      console.log(i);
      console.log(contentList[i]["type"]);
      switch(contentList[i]["type"]) {
        case 'youtube':
        console.log('youtube')
        video_el = el('iframe', 'lect__video' ,'0');
        video_el.src = contentList[i]["data"];
        video_el.style.width = "420px"; //Þarf líklega að breyta
        video_el.style.height = "315px"; //Þarf líklega að breyta
        main_el.append(video_el);
        break;

        case 'text':
        console.log('text')
        let txtCon_el = el('p','lect__text','0');
        let txtTxt_el = document.createTextNode(contentList[i]["data"]);
        txtCon_el.append(txtTxt_el);
        main_el.append(txtCon_el);
        break;

        case 'quote':
        console.log('quote')
        quote_el = el('div','lect__quote','0');
        quoteTxt_el = document.createTextNode(contentList[i]["data"]);
        quote_el.append(quoteTxt_el);
        main_el.append(quote_el);
        break;

        case 'image':
        console.log('image')
        img_el = el('img','lect__img','0');
        img_el.src = "../../" + contentList[i]["data"];
        main_el.append(img_el);
        break;

        case 'heading':
        console.log('heading')
        h2_el = el('h2','lect__heading','0');
        h2Txt_el = document.createTextNode(contentList[i]["data"]);
        h2_el.append(h2Txt_el);
        main_el.append(h2_el);
        break;

        case 'list':
        console.log('list')
        let tempL = contentList[i]["data"]
        let listCon_el = el('ul','lect__listContainer','0');
        for (j = 0; j < tempL.length; j += 1) {
          listIt_el = el('li','lect__listItem','0');
          listItTxt_el = document.createTextNode(tempL[j]);
          listIt_el.append(listItTxt_el);
          listCon_el.append(listIt_el);
        }
        main_el.append(listCon_el);
        break;

        case 'code':
        console.log('code')
        code_el = el('div', 'lect__code','0');
        codeTxt_el = document.createTextNode(contentList[i]["data"]);
        code_el.append(codeTxt_el);
        main_el.append(code_el);
        break;
      }
    }
  }

  function add(data) {

    console.log('Function: add'); //For debugging

    const lect = document.querySelector('.lect__row');

    main_el = el('div', 'lect__col', '0');
    lect.append(main_el);

    //Mögulega er hægt að nota þetta til að leita af öllum types og data.
    //let params = new URLSearchParams(document.location.search.substring(1));
    //let name = params.get("slug"); // is the string "Box-model"
    let tempURL = window.location.href;

    let shitTest = new URLSearchParams(document.location.search.substring(1));



    let tempSlug = shitTest.get("slug");

    const done = window.localStorage.getItem(tempSlug);
    const check = document.querySelector('.footer__check');
    if (done) {
      check.textContent = `\u2713 Fyrirlestur kláraður`;
      check.classList.add('footer--done')
    } else {
      check.textContent = 'Klára fyrirlestur';
      check.setAttribute('class', 'footer__check')
    }


    //Leita í lectures.json, finna hvern category og setja inn í vigur

    let tempConst;
    let tempID;

    for (l = 0; l < data.length; l += 1 ) {
      tempConst = data[l]["slug"];

      if (tempConst == tempSlug) {
        tempID = l;
      }
    }

    let tempCat = data[tempID]["category"];
    let tempTitle = data[tempID]["title"];

    const hCont = document.querySelector('.header__container');

    sub_el = el('h2', 'header__title', '0');
    sub_el.classList.add('header--subtitle');
    subTxt_el = document.createTextNode(tempCat);
    head_el = el('h1', 'header__title', '0');
    headTxt_el = document.createTextNode(tempTitle);

    sub_el.append(subTxt_el);
    hCont.append(sub_el);
    head_el.append(headTxt_el);
    hCont.append(head_el);

    takeFive(main_el, data[tempID]);

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
      console.log('Máni þekkir tölvunarfræðinginn Arnar');  //Fyrir debug
    });
  }

  function checkIt() {

    let tempSearch = new URLSearchParams(document.location.search.substring(1));
    let slugCheck = tempSearch.get("slug")

    const saved = window.localStorage.getItem('dataItem');
    const check = document.querySelector('.footer__check');
    if (saved) {
      //const parsed = JSON.parse(saved);
      //console.log('Vistuð gögn:', parsed);
      check.textContent = 'Klára fyrirlestur';
      check.setAttribute('class', 'footer__check')
      window.localStorage.removeItem('dataItem');
      window.localStorage.removeItem(slugCheck);
    } else {
      const dataItem = slugCheck;
      //console.log('Ekkert vistað, vista:', dataItem);
      check.textContent = `\u2713 Fyrirlestur kláraður`;
      check.classList.add('footer--done')
      //const json = JSON.stringify(dataItem);
      window.localStorage.setItem('dataItem', dataItem);
      window.localStorage.setItem(slugCheck, dataItem);
    }
  }

  function init() {

    const check = document.querySelector('.footer__check');
    check.addEventListener('click', checkIt);
  }

  return {

    init, fetchData,

  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body'); //Frá OSK
  const isLecturePage = page.classList.contains('lecture-page'); //Frá OSK

  console.log('Ný síða');
  lectgram.fetchData();



  //const list = new List();
  //list.load();
});
