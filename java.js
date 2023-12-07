const table = document.querySelector("#tblTombola");
const letter = document.querySelectorAll(".lettere");

let numeri = Array.from({ length: 90 }, (_, index) => index + 1);
console.log(numeri);

const shuffle = (arr) => {
  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
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

//! DA FINIRE
