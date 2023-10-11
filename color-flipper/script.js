const button = document.getElementById('btn');

const bod = document.querySelector('body');
const color = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#6610f2", "#6f42c1"];
button.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * color.length);
    const randomColor = color[randomIndex];
    bod.style.backgroundColor = randomColor;
});