window.addEventListener("load", init);
function init() {
  const list = [
    { szemszin: "barna", kor: 20, tesok: 2, nev: "Peti", mondat: "A kedd!" },
    {
      szemszin: "barna",
      kor: 23,
      tesok: 2,
      nev: "Gergo",
      mondat: "A kedd masodszor!",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Niki",
      mondat: "Délelőtt kint játszottam a kutyussal",
    },
    {
      szemszin: "kék",
      kor: 20,
      tesok: 2,
      nev: "Asztrik",
      mondat: "Kedden, mert ott nem történt semmi.",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 3,
      nev: "GergőT",
      mondat: "Kedd a legjóbb nap.",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Sanyi",
      mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    },
    {
      szemszin: "zöld",
      kor: 20,
      tesok: 2,
      nev: "Márton",
      mondat: "Nem volt angol hétfőn",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Dominik",
      mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    },
    {
      szemszin: "barna",
      kor: 21,
      tesok: 2,
      nev: "Marci",
      mondat: "Ha gyenge vagy akkor legalább ne sírj",
    },
    {
      szemszin: "kék",
      kor: 20,
      tesok: 4,
      nev: "Bence",
      mondat: "Pillanat türelmet kérek javítom a mikrofont.",
    },
  ];
  tablazatMegjelenit(list);
  let atlag = atlagEletkor(list);
  console.log(atlag);
}

function megjelenit(lista) {
  for (let index = 0; index < lista.length; index++) {
    let div1 = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(lista[index].nev);
    div1.appendChild(p);
    document.body.appendChild(div1);
    p.appendChild(text);
    let br = document.createElement("br");
    p.appendChild(br);
    text = document.createTextNode(lista[index].mondat);
    p.appendChild(text);
  }
}

function megjelenit2(lista) {
  const ARTICLE = document.querySelector("article");
  let szoveg;
  for (let index = 0; index < lista.length; index++) {
    szoveg += `<div>
                <h2>${lista[index].nev}</h2>
                <p>${lista[index].mondat}</p>
              </div>`;
  }
  ARTICLE.innerHTML = szoveg;
}

function tablazatMegjelenit(lista) {
  const ARTICLE = document.querySelector("article");
  let szoveg = `<table>
                  <thead>
                    <tr>
                      <th>Név:</th>
                      <th>Mondat:</th>
                    </tr>
                  </thead>`;

  for (let index = 0; index < lista.length; index++) {
    szoveg += `<tr>`;
    for (const key in lista[index]) {
      szoveg += `<td>${lista[index][key]}</td>`;
    }
    szoveg += `<td><button>Katt</button></td>`;
    szoveg += `</tr>`;
  }
  szoveg += `</table>`;
  ARTICLE.innerHTML = szoveg;

  const buttonElemek = document.querySelectorAll('button');
  for (let index = 0; index < buttonElemek.length; index++) {
    buttonElemek[index].addEventListener("click", function(){
      torles(index, lista);
    });
  }

}

function torles(index, lista) {
  // this = itt az az elem ami az eseményt kiváltotta
  console.log(lista[index]);
}

function atlagEletkor(lista) {
  let korOsszeg = 0;
  let listaHossz = lista.length;
  for (let index = 0; index < listaHossz; index++) {
    korOsszeg += lista[index].kor;
  }
  let atlag = korOsszeg / listaHossz;
  return "Átlag életkor:", atlag;
}