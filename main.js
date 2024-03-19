import { PALYA } from "./palya.js";

const articleELEM = document.querySelector("article");
const jatekTerTELEM = document.querySelector("#jatekTer");
jatekTerTELEM.innerHTML += palyaGeneralas(PALYA);
const articleElemELEM = document.querySelectorAll(".elem");

function palyaGeneralas(PALYA) {
  let txt = "";
  for (let index = 0; index < PALYA.length; index++) {
    txt += `<div class='elem' id = '${index}'>`;

    txt += `<p class='eredmeny'>${PALYA[index]}</p>`;
    txt += `</div>`;
  }
  return txt;
}

let db = 1;
jatekTerTELEM.addEventListener("click", function (event) {
  let aktIndex = event.target.id;
  if (db % 2 === 1 && PALYA[aktIndex] === " ") {
    let valtas = "X";
    event.target.innerHTML = "X";
    PALYA[aktIndex] = valtas;
    db++;
    console.log(PALYA);
    console.log(aktIndex);
    nyerte(PALYA);
  }else if(db % 2 === 0 && PALYA[aktIndex] === " "){
  let valtas = "O";
  event.target.innerHTML = "O";
  PALYA[aktIndex] = valtas;
  nyerte(PALYA);
  db++;
  }
});
gepLep(db);

function nyerte(PALYA) {
  let jatekos = "X";
  let gep = "O";
  //visszintbe
  if (PALYA[0] === jatekos && PALYA[1] === jatekos && PALYA[2] === jatekos) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[0] === gep && PALYA[1] === gep && PALYA[2] === gep) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA[3] === jatekos &&
    PALYA[4] === jatekos &&
    PALYA[5] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[3] === gep && PALYA[4] === gep && PALYA[5] === gep) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA[6] === jatekos &&
    PALYA[7] === jatekos &&
    PALYA[8] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[6] === gep && PALYA[7] === gep && PALYA[8] === gep) {
    return alert(`Gép Nyert!`);
  }
  //függölegesbe
  else if (
    PALYA[0] === jatekos &&
    PALYA[3] === jatekos &&
    PALYA[6] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[0] === gep && PALYA[3] === gep && PALYA[6] === gep) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA[2] === jatekos &&
    PALYA[5] === jatekos &&
    PALYA[8] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[2] === gep && PALYA[5] === gep && PALYA[8] === gep) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA[1] === jatekos &&
    PALYA[4] === jatekos &&
    PALYA[7] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[1] === gep && PALYA[4] === gep && PALYA[7] === gep) {
    return alert(`Gép Nyert!`);
  }
  //keresztbe
  else if (
    PALYA[0] === jatekos &&
    PALYA[4] === jatekos &&
    PALYA[8] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[0] === gep && PALYA[4] === gep && PALYA[8] === gep) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA[6] === jatekos &&
    PALYA[4] === jatekos &&
    PALYA[2] === jatekos
  ) {
    return alert(`Játékos Nyert!`);
  } else if (PALYA[6] === gep && PALYA[4] === gep && PALYA[2] === gep) {
    return alert(`Gép Nyert!`);
  }
  //döntetlenek
  //visszint
  else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[0] === jatekos &&
        PALYA[1] === jatekos &&
        PALYA[2] === jatekos
      )) ||
    (PALYA[0] === gep && PALYA[1] === gep)
  ) {
    return alert(`Döntetlen`);
  } else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[3] === jatekos &&
        PALYA[4] === jatekos &&
        PALYA[5] === jatekos
      )) ||
    (PALYA[3] === gep && PALYA[4] === gep && PALYA[5] === gep)
  ) {
    return alert(`Döntetlen`);
  } else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[6] === jatekos &&
        PALYA[7] === jatekos &&
        PALYA[8] === jatekos
      )) ||
    (PALYA[6] === gep && PALYA[7] === gep && PALYA[8] === gep)
  ) {
    return alert(`Döntetlen`);
  }
  //függöleges
  else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[0] === jatekos &&
        PALYA[3] === jatekos &&
        PALYA[6] === jatekos
      )) ||
    (PALYA[0] === gep && PALYA[3] === gep && PALYA[6] === gep)
  ) {
    return alert(`Döntetlen`);
  } else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[2] === jatekos &&
        PALYA[5] === jatekos &&
        PALYA[8] === jatekos
      )) ||
    (PALYA[2] === gep && PALYA[5] === gep && PALYA[8] === gep)
  ) {
    return alert(`Döntetlen`);
  } else if (
    (uresPalya(PALYA) === false &&
      !(
        PALYA[1] === jatekos &&
        PALYA[4] === jatekos &&
        PALYA[7] === jatekos
      )) ||
    (PALYA[1] === gep && PALYA[4] === gep && PALYA[7] === gep)
  ) {
    return alert(`Döntetlen`);
  } else if (
    PALYA === false &&
    !(PALYA[0] === jatekos && PALYA[4] === jatekos && PALYA[8] === jatekos)
  ) {
    return alert(`Játékos Nyert!`);
  } else if (
    PALYA === false &&
    !(PALYA[0] === gep && PALYA[4] === gep && PALYA[8] === gep)
  ) {
    return alert(`Gép Nyert!`);
  } else if (
    PALYA === false &&
    !(PALYA[6] === jatekos && PALYA[4] === jatekos && PALYA[2] === jatekos)
  ) {
    return alert(`Játékos Nyert!`);
  } else if (
    PALYA === false &&
    !(PALYA[6] === gep && PALYA[4] === gep && PALYA[2] === gep)
  ) {
    return alert(`Gép Nyert!`);
  }
}

function uresPalya(PALYA) {
  return PALYA.includes(" ");
}
/*function gepLep(db) {
  let randomHely = Math.floor(Math.random()*9);
  while (PALYA[randomHely] === " ") {
    randomHely = Math.floor(Math.random(0, 9));
  }
  if (db % 2 === 0 && PALYA[randomHely] === " ") {
    
  }
 
  let valtas = "O";
  PALYA[randomHely] = valtas;
  nyerte(PALYA);
  db++;
  return PALYA[randomHely] = valtas
}*/
