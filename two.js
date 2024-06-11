
function getbmi(){
let cm = Number(document.getElementById('one').value);

let kg  = Number(document.getElementById('two').value);

let h = parseFloat(cm/100);
let bmi = kg/(h*h);
bmi = bmi.toFixed(1);
if (cm === 0 || kg === 0) {
    alert("please enter the values!! ");
  } else {
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
  }
}

