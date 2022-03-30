const btnNameList = document.querySelector('#btnNameList');
const pList       = document.querySelector('#pList');
const btnRandom   = document.querySelector('#btnRandom');
const pRandom     = document.querySelector('#pRandom');

btnRandom.addEventListener('click', () => {
    fetch('http://localhost:3000/food/random')
    .then(res => res.json())
    .then(data => pRandom.textContent = JSON.stringify(data.name))
});
btnNameList.addEventListener('click', () => {
    fetch('http://localhost:3000/food/name')
    .then(res => res.json())
    .then(data => pList.textContent = data)
});