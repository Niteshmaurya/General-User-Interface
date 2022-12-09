let names = [
  "Ayla",
  "Jake",
  "Sean",
  "Henry",
  "Brad",
  "Stephen",   
  "Taylor",
  "Timmy",
  "Cathy",
  "John",
  "Amanda",
  "Amara",
  "Sam",
  "Sandy",
  "Danny",
  "Ellen",
  "Camille",
  "Chloe",
  "Emily",
  "Nadia",
  "Mitchell",
  "Harvey",
  "Lucy",
  "Amy",
  "Glen",
  "Peter",
"413"
];

let sortedNames = names.sort();
let input = document.getElementById("input_1");

input.addEventListener("keyup", (e) => {
var input_1_str = document.getElementById('input_1').value;
var matches = input_1_str.match(/(\d+)/);

if (matches) {
  document.getElementById('input_1').innerHTML = matches[0];
  alert("Not Valid Input");
  document.getElementById('input_1').value = " ";
  document.getElementById('input_1').placeholder="Type a name here...";
}

  removeElements();
  for (let i of sortedNames) {
   if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
     
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
     
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}


function validate()
{
  var mail= document.getElementById("input_2").value;
var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(regx.test(mail))
{
alert("Valid email address!");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function check(){
  var txt=document.getElementById("input_4").value;
    var exp= /^\d{10}$/
    if(txt.match(exp))
    {
      return true;
    }
    else
    {
      alert("invalid mobile no");
      return false;
  }
}

  
    
const phoneInputField = document.querySelector("#input_4");
const phoneInput = window.intlTelInput(phoneInputField, {
utilsScript:-
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});