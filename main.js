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
  } else if (db % 2 === 0 && PALYA[aktIndex] === " ") {
    let valtas = "O";
    event.target.innerHTML = "O";
    PALYA[aktIndex] = valtas;
    db++;
    console.log(PALYA);
    console.log(aktIndex);
  }
});
function nyerte(PALYA) {
  let jatekos = "X";
  let gep = "O";
  //visszintbe
  if (PALYA[(0, 1, 2)] === jatekos || PALYA[(0, 1, 2)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  } else if (PALYA[(3, 4, 5)] === jatekos || PALYA[(3, 4, 5)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  } else if (PALYA[(6, 7, 8)] === jatekos || PALYA[(6, 7, 8)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  } 
  //függölegesbe
  else if (PALYA[(0, 3, 6)] === jatekos || PALYA[(0, 3, 6)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  } else if (PALYA[(2, 5, 8)] === jatekos || PALYA[(2, 5, 8)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  } else if (PALYA[(1, 4, 7)] === jatekos || PALYA[(1, 4, 7)] === gep) {
    alert(`${jatekos} Nyert!`) || alert(`${gep} Nyert!`);
  }
}
