
function increase_func()
{
    {
    document.getElementById("intro").style.fontSize='30px'
    }
    
}

function decrease_func()
{
    {
    document.getElementById("intro").style.fontSize='15px'
    }
    
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  //dropdown list
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // JSON stringify

  myObj = {city: "San Bernardino"};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("cityJSON", myJSON);


  // JSON parse
function cityJSON()
  {
  text = localStorage.getItem("cityJSON");
  obj = JSON.parse(text);
  alert("This webpage was made in " + obj.city);
}

//Root Calculator
function sqrtMath(){
  var sqrtNum=document.sqrtForm.sqrt1.value;
  var result = Math.sqrt(sqrtNum);
  document.sqrtForm.sqrtAnswer.value = result;
  };

//Divide Calculator
function division(){
  var number1 = document.divForm.divNum1.value;
  var number2 = document.divForm.divNum2.value;
  var result = number1 / number2;
  document.divForm.divAnswer.value = result;
  };

//Multiplication Calculator
function multiply()
{
  var number1 = document.multForm.multNum1.value;
  var number2 = document.multForm.multNum2.value;
  var result = number1 * number2;
  document.multForm.multAnswer.value = result;
}

// Currency Converter
const currency_Top = document.getElementById('from_currency');
const currency_Top_Amount = document.getElementById('from_ammount');
const currency_Bottom = document.getElementById('to_currency');
const currency_Bottom_Amount = document.getElementById('to_ammount');
const rate_1 = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
currency_Top.addEventListener('change', calculate);
currency_Top_Amount.addEventListener('input', calculate);
currency_Bottom.addEventListener('change', calculate);
currency_Bottom_Amount.addEventListener('input', calculate);
 
exchange.addEventListener('click', () => {
	const temp = currency_Top.value;
	currency_Top.value = currency_Bottom.value;
	currency_Bottom.value = temp;
	calculate();
});
 
function calculate() {
	const from_currency = currency_Top.value;
	const to_currency = currency_Bottom.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		rate_1.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		currency_Bottom_Amount.value = (currency_Top_Amount.value * rate).toFixed(2);
	})
}
 
calculate();
