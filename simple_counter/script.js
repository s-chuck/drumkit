const count = document.getElementById("count");
const inc = document.getElementById("increase");
const res = document.getElementById("reset");
const dec = document.getElementById("decrease");

let counter = 0;

function update(){
    count.textContent = counter;
}

inc.addEventListener('click', () =>{
    counter++;
    update();
})

dec.addEventListener('click', () =>{
    counter--;
    update();
})

res.addEventListener('click', () =>{
    counter = 0;
    update();
})

update();