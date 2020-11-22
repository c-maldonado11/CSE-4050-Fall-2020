
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
