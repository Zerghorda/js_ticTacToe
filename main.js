import { PALYA } from "./palya.js";

const articleELEM = document.querySelector("article");
const jaTerTerELEM = document.querySelector("#jatekTer");
jaTerTerELEM.innerHTML += palyaGeneralas(PALYA);
jaTerTerELEM.addEventListener("click", kattint);

function palyaGeneralas(PALYA) {
  let txt = "";
  for (let index = 0; index < PALYA.length; index++) {
    txt += "<div class='elem'>";
    txt += `<p>${PALYA[index]}</p>`;
    txt += `</div>`;
  }
  return txt;
}
function kattint() {
  jaTerTerELEM = document.querySelector("#jatekTer");
  let db = 0;
  for (let index = 0; index < PALYA.length; index++) {
    if (db % 2 === 0) {
      PALYA[index] = "X";
    } else {
      PALYA[index] = "O";
    }
    db++;
  }
}
