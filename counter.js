const b1 = document.getElementsByClassName("b1")[0];
const b2 = document.getElementsByClassName("b2")[0];
const b3 = document.getElementsByClassName("b3")[0];

const h1 = document.getElementsByClassName("count")[0];

let count = 0;
function dec() {
    if (count > 0)
        count--;
    h1.innerText = count
}

function reset() {
    count = 0;
    h1.innerText = count
}

function inc() {
    count++;
    h1.innerText = count
}
// console.log(b1)
// console.log(b2)
// console.log(b3)
b1.addEventListener('click', dec);
b2.addEventListener('click', reset);
b3.addEventListener('click', inc);