
# Hópverkefni 2 - phonder

## Uppsetningar:

node.js: https://nodejs.org/en/

`stylelint-config-primer` - Sama og notað var í hópverkefni 1. Þetta var víst vitlaust upp sett hjá mér síðast.

Í terminal:
```
> cd /*slóð á verkefni*
> npm init
..*svara spurningum*
> npm install --save-dev stylelint
...
> npm install --save-dev stylelint-config-primer
```

`node-sass` - Sama og notað var í hópverkefni 1.

Í terminal:
```
> cd /*slóð á verkefni*
> npm init
..*svara spurningum*
> npm install --save node-sass
```

`eslint` - Er þegar sett upp í verkefninu, mæli með að setja upp `package`, til þess að fá villumeldingar í rauntíma. Í Atom má t.d. finna þetta í `Packages` > `Settings View` > `Install Packages/Themes` - `linter-eslint` frá `AtomLinter`

Vantar að setja inn upplýsingum um `rollup` og `babel`.
--------------------------------------------------------------------------------------------------------------------------------------

## Keyra tól:

ATH! Keyra tól í terminal!

Keyra `sass`:
```
> cd /*slóð á verkefni*
> npm run sass
```

Keyra `stylelint`:
```
> cd /*slóð á verkefni*
> npm run stylelint
```

Keyra `eslint`:
```
> cd /*slóð á verkefni*
> npm run eslint
```
Keyra bæði `eslint` og `stylelint`:
```
> cd /*slóð á verkefni*
> npm run test
```
Keyra `browser-sync`: - ATH! Það verður að nota `browser-sync` til að skoða í browser, annars virkar ekki neitt.
```
> cd /*slóð á verkefni*
> npm run dev
```
--------------------------------------------------------------------------------------------------------------------------------------

## git:

`Branching`:
```
> cd /*slóð á verkefni*
> git init
> git checkout - b "nafn á grein"
> git add .
> git commit -m "*verklýsing*"
> git push origin "nafn á grein"  - *NOTE: Án gæsalappa.*
```

`Pull`:
```
> cd /*slóð á verkefni*
> git init
> git pull https://github.com/Kjarten/phonder.git
```
--------------------------------------------------------------------------------------------------------------------------------------

## Stílbrigði:

### Litapalletta (skilgreint í `config.scss`):

- ![#000](https://placehold.it/15/000/000000?text=+) Hexadecimal color code: `#000`. - Reference: `$black` - Notkun: Allur texti.
- ![#999](https://placehold.it/15/999/000000?text=+) Hexadecimal color code: `#999`. - Reference: `$darkgray` - Notkun: Takki og gráu boxin `:hover`.
- ![#aaa](https://placehold.it/15/aaa/000000?text=+) Hexadecimal color code: `#aaa`. - Reference: `$gray` - Notkun: Takki og gráu boxin.
- ![#ccc](https://placehold.it/15/ccc/000000?text=+) Hexadecimal color code: `#ccc`. - Reference: `$lightgray`
- ![#2d2](https://placehold.it/15/2d2/000000?text=+) Hexadecimal color code: `#2d2`. - Reference: `$lightgreen` - Notkun: "Active" takki.
- ![#1a1](https://placehold.it/15/1a1/000000?text=+) Hexadecimal color code: `#1a1`. - Reference: `$darkgreen` - Notkun: "Active" takki `:hover`.
- ![#fcffd2](https://placehold.it/15/fcffd2/000000?text=+) Hexadecimal color code: `#fcffd2`. - Reference: `$yellow`
- ![#cc9694](https://placehold.it/15/cc9694/000000?text=+) Hexadecimal color code: `#cc9694`. - Reference: `$red`
- Hvítur, 60% gegnsær litur. - Reference: `$white` - Notkun: Yfir allar bakgrunnsmyndir í haus.

___

### Leturgerðir (skilgreint í `config.scss`):

Letur fyrir meginmál er:
- Lora, https://fonts.google.com/specimen/Lora
- Times New Roman eða
- serif letur
- Reference: `$font-title`

Letur fyrir fyrirsagnir er:
- Roboto Mono, https://fonts.google.com/specimen/Roboto+Mono
- Courier New eða 
- monospace
- Reference: `$font-main`

--------------------------------------------------------------------------------------------------------------------------------------

## Validators:

- HTML villur: https://validator.w3.org/
- Aðgengisvillur: http://wave.webaim.org/
- CSS villur: https://jigsaw.w3.org/css-validator/

--------------------------------------------------------------------------------------------------------------------------------------

## Uppsetning á verkefni - Þarf að breyta
```
> phonder
   > img *- .jpg, .png, .gif og .svg með myndum sem notast skal við í verkefninu.*
   > src
     > lib
     > styles *- .scss skrár*
   > node_modules *- Ekki eiga við "Má ekki skafa".*
   > pages *- .html skrár fyrir undirsíður*
     > cart.html *- Undirsíða*
     > products.html *- Undirsíða*
     > staff.html *- Undirsíða*
    > scss *- .scss skrár*
      > button.scss *- "Stylesheet" fyrir takka.*
      > cart.scss *- "Stylesheet" fyrir cart.html.*
      > config.scss *- "Stylesheet" fyrir grunnstíla.*
      > footer.scss *- "Stylesheet" fyrir fót, allar síður.*
      > header.scss *- "Stylesheet" fyrir haus, allar síður.*
      > index.scss *- "Stylesheet" fyrir forsíðu (indes.html).*
      > products.scss *- "Stylesheet" fyrir products.html.*
      > staff.scss *- "Stylesheet" fyrir staff.html.*
    > utlit *- Mappa sem geymir skjáskot af fyrirmynd af útliti.*
    ...
    > stylelintrc *- Nauðsynlegt fyrir stylint, ekki eiga við "Má ekki skafa".*
    > grid.css *- "Stylesheet" fyrir grid.*
    > index.html *- Forsíða*
    > package.json *- NPM scripts.*
    > styles.scss - 
```
--------------------------------------------------------------------------------------------------------------------------------------
## Upplýsingar um "contributors" - Birt í stafsetningarröð

Guðrún Úlfarsdóttir (guu4@hi.is)
Námsleið: Tölvunarfræði, BS

Kjartan Þór Birgisson (kthb2@hi.is)
Námsleið: Vélaverkfræði, MS

Máni Bernharðsson (mab27@hi.is)
Námsleið: Tölvunarfræði, BS

--------------------------------------------------------------------------------------------------------------------------------------
# Verklýsing frá Ólafi Sverri Kjartanssyni - Aðjunkt

Verkefnið felst í því að smíða prótótýpu af fyrirlestravef fyrir vefforritun. Gefin eru gögn sem unnin eru uppúr námsefni vetrarins.

Gefnar eru [fyrirmyndir](utlit/) í `500px` og `1500px` án grindar ásamt `1500px` með grind. Allt efni skal skalast snyrtilega á milli.

## Almennt

Gögn eru gefin í `lectures.json` sem sækja skal með _ajax_ virkni. Keyra verður verkefnið með `browser-sync` til að það virki.

Efni síðu skal ekki vera breiðara en `1200px`. Litir og myndir í haus skulu fylla út í allt lárétt pláss. Yfir myndum er 60% gegnsær hvítur litur. Myndir fyrir hvern fyrirlestur eru skilgreindir í `json` skrá.

Grunn leturstærð er 16px og fylgja allar aðrar leturgerðir eftirfarandi skala: `16 24 32 48`.

Litapalletta fyrir vef er `#000`, `#999`, `#aaa`, `#ccc`, `#2d2`, `#1a1`, `#fcffd2` og `#cc9694`.

Letur fyrir meginmál er Lora, Times New Roman eða serif letur.
Letur fyrir fyrirsagnir er Roboto Mono, Courier New eða monospace.

Flest allt er sett upp í 12 dálka grind með `20px` gutter.

Öll bil eru hálft, heilt, tvöfalt eða þrefalt margfeldi af gutter. Hægt er að nota reglustiku tól (t.d. http://www.arulerforwindows.com/ eða http://www.pascal.com/software/freeruler/) til að finna nákvæmar stærðir en mestu skiptir að lausn svipi til en sé ekki nákvæmlega eins og fyrirmynd.

Allar hreyfingar gerast á `300ms` með `ease-in-out` hröðunarfalli. Hreyfingar eru þegar svimað er yfir fyrirlestri í lista og síunar tökkum.

## Forsíða

Forsíða inniheldur lista af öllum fyrirlestrum. Fram kemur hvort búið sé að klára fyrirlestur eða ekki. Nota skal `✓` til að tákna að fyrirlestri séð lokið, sjá að neðan hvernig virkni er.

Fyrir ofan lista skulu vera þrír takkar fyrir hvern af flokkunum: `HTML`, `CSS` og `JavaScript`. Í byrjun er engin takki virkur en um leið og takki er virkur skal aðeins sýna fyrirlestra í þeim flokk og takki litaður með `#2d2`. Ef fleiri takkar eru virkjaðir skal einnig sína þá fyrirlestra. Ef allir takkar eru virkir sést það sama og ef allir eru óvirkir—allir fyrirlestrar.

Þegar smellt er á fyrirlestur er farið yfir á `fyrirlestur.html?slug=<slug>` þar sem `<slug>` er _slug_ fyrir fyrirlesturinn, t.d. `fyrirlestur.html?slug=html-sagan`. Hægt er að nota `URLSearchParams` og `window.location.search` til að vita hvaða fyrirlestur átt er við á `fyrirlestur.html` síðu.

## Fyrirlestur

Fyrir hvern fyrirlestur skal birta haus og allt efni fyrirlesturs á eftir honum. Í haus kemur fram flokkur og titill.

Efni fyrirlesturs er geymt í fylki og skal birta það í sömu röð og það er skilgreint. Útbúa þarf birtingu fyrir hverja einingu eftir útliti.

Neðst er takki til að merkja fyrirlestur kláraðann og hlekkur til að fara til baka.

### Kláraður fyrirlestur

Ef fyrirlestur er merktur kláraður skal sýna `✓ Fyrirlestur kláraður` í `#2d2`. Annars `Klára fyrirlestur`. Þegar fyrirlestur er kláraður skal vista upplýsingar um það í `localStorage` og birta í lista og á fyrirlestra síðu.

Nota skal `slug` sem auðkenni yfir kláraða fyrirlestra.

## Fyrirlestragögn

`lectures.json` inniheldur fylki af fyrirlestrum sem birta skal. Hver fyrirlestur getur haft:

* `slug`, notað til að hlekkja á fyrirlestur
* `title`, titill fyrirlesturs
* `category`, flokkur fyrirlesturs
* `image`, mynd í hausi fyrirlesturs, má sleppa, þá skal birta gráan lit í staðinn
* `thumbnail`, mynd á yfirliti fyrirlestra, má sleppa, þá skal birta gráan lit í staðinn
* `content`, fylki af efni fyrirlesturs

Fyrir efni fyrirlesturs er efni alltaf með:

* `type`, gerð efnis
* `data`, gögn efnis

þar sem `type` getur verið:

* `youtube`, `data` inniheldur hlekk á youtube myndband
* `text`, `data` inniheldur gögn þar sem `\n` merkir á milli málsgreina, þ.e.a.s. texta skal birta innan `<p>`, skipt á `\n`
* `quote`, `data` inniheldur tilvitnun, aukalega getur verið `attribute` með þeim sem vitnað er í
* `image`, `data` inniheldur slóð á mynd, aukalega getur verið `caption` með texta með mynd
* `heading`, `data` inniheldur fyrirsögn
* `list`, `data` inniheldur fylki af textum í lista
* `code`, `data` inniheldur kóða þar sem bil og nýjar línur skipta máli

Athugið að meira efni mun bætast við það sem gefið er í byrjun. Virkni ætti að ráða við hvaða efni sem er í hvaða formi sem er, svo lengi sem það fylgir reglum að ofan.

## Hópavinna

Verkefnið skal unnið í hóp með þremur einstaklingum. Hafið samband við kennara ef ekki er mögulegt að vinna í hóp.

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS og JavaScript er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni
* Leyfilegt er að halda eftir þessari verkefnalýsingu en hún skal þá koma _á eftir_ ykkar lýsingu

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

Setja þarf upp

* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða

og bæta við í tól að ofan.

## Mat

* 30% - `README` eftir forskrift, tæki og tól uppsett. Snyrtilegt, gilt (skv. eslint) JavaScript. Snyrtilegt, gilt (skv. stylelint) CSS/Sass, gilt og aðgengilegt HTML. Git notað
* 30% – Yfirlitssíða með síu
* 30% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður

## Sett fyrir

Verkefni sett fyrir á Uglu föstudaginn 9. nóvember 2018.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 29. nóvember 2018, seinustu dæmatímar eru þann fimmtudag.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `gorri4`, `mimiqkz`, `hinriksnaer`, `gunkol`, `freyrdanielsson` og `osk`
* Slóð á verkefnið keyrandi á vefnum

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

## Myndir

Myndir frá:

* https://unsplash.com/photos/xekxE_VR0Ec
* https://unsplash.com/photos/C4G18Paw0d4
* https://unsplash.com/photos/iar-afB0QQw

---

> Útgáfa 0.2

### Útgáfusaga

| Útgáfa | Lýsing                                |
|--------|---------------------------------------|
| 0.1    | Fyrsta útgáfa                         |
| 0.2    | Setja inn auka efni í `lectures.json` |
