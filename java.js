const table = document.querySelector("#tbltombola");
const letter = document.querySelectorAll(".lettere");

let numeri = Array.from({ length: 90 }, (_, index) => index + 1);
console.log(numeri);

const shuffle = (arr) => {
  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [numeri[currentIndex], numeri[randomIndex]] = [
      numeri[randomIndex],
      numeri[currentIndex],
    ];
  }
  return numeri;
};

shuffle(numeri);
console.log(numeri);

let index = 0;

for (i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for (j = 0; j < 5; j++) {
    let td = document.createElement("td");
    td.id = numeri[index].toString();
    td.classList.add("main-table");
    const div = document.createElement("div");
    div.classList.add("celle-formato");
    div.innerText = numeri[index].toString();
    td.appendChild(div);
    tr.appendChild(td);
    index++;
  }
}

const celle = document.querySelectorAll(".main-table");
celle.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("linea-check");
  });
});

const posizioneVincente = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
];
//! DA FINIRE
