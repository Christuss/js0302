window.addEventListener("load", init);
function init() {
  const list = [
    { nev: "Peti", mondat: "A kedd!" },
    {
      nev: "Gergo",
      mondat: "A kedd masodszor!",
      szemszin: "Kek/Zold",
      kor: 23,
    },
    { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
    { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
    { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
    {
      név: "Sanyi",
      mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    },
    { nev: "Márton", mondat: "Nem volt angol hétfőn" },
    {
      nev: "Dominik",
      mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    },
    { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
    { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." },
  ];
  megjelenit(list);
}

function megjelenit(lista) {
  for (let index = 0; index < lista.length; index++) {
    let div1 = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(lista[index].nev);
    div1.appendChild(p);
    document.body.appendChild(div1);
    p.appendChild(text);
    let br = document.createElement('br');
    p.appendChild(br)
    text = document.createTextNode(lista[index].mondat);
    p.appendChild(text);
  }
}
