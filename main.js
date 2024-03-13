import { PALYA } from "./palya.js";

const articleELEM = document.querySelector("article");
const jatekTerTELEM = document.querySelector("#jatekTer");
jatekTerTELEM.innerHTML += palyaGeneralas(PALYA);
const eredmenyELEM = document.querySelectorAll(".eredmeny");

function palyaGeneralas(PALYA) {
  let txt = "";
  for (let index = 0; index < PALYA.length; index++) {
    txt += "<div class='elem'>";
    txt += `<p class='eredmeny'>${PALYA[index]}</p>`;
    txt += `</div>`;
  }
  return txt;
}

let db = 0;
jatekTerTELEM.addEventListener("click", function () {
  let aktIndex = event.target;
  console.log(aktIndex);
  db++;
  console.log(db);
  if (db % 2 === 0) {
    eredmenyELEM.innerHTML = "X";
  }else{
    eredmenyELEM.innerHTML = "O";
  }
  
});
