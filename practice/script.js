function findTheAge() {
  var dobInput = document.getElementById('dob');
  var dob = new Date(dobInput.value);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();

  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
  }

  let printing = document.querySelector('.result');
  printing.textContent = 'Your age is: ' + age + ' years';
}
