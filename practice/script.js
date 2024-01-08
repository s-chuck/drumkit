let bill_value;
let tip_value;

function update() {
  const bill_element = document.getElementById('Bill');
  bill_value = parseFloat(bill_element.value);
}

function another() {
  const tip_element = document.getElementById('Tip');
  tip_value = parseFloat(tip_element.value);
}

function calculateTotal() {
    tip_value = (tip_value/100) * (bill_value);
    const final = tip_value + bill_value;
    console.log(final);
    const total = document.querySelector('.Total');
    total.textContent = `Total: ${final.toFixed(2)}`;
}
