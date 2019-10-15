// var x = prompt("Укажите число x", 3);
// var xNumber = parseInt (x, 10);
// var yNumber = parseInt (y, 10);
// var sum = xNumber + yNumber;
// alert (sum);

//let myName = document.getElementById("name");
//console.log(myName);


//var myForm=document.getElementById("form");
//function validate(){
//	event.preventDefault();
//var myName=document.getElementById("name");
	//console.log(myName);
//}

var myForm = document.getElementById("form");


function checkForm(element){
	var value = element && element.value; 
	if (value === ''){
		element.style.borderBottom = "5px solid red"; 
		return false;
	    } 
	else{
		 element.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
		 return true;
	}

}

function validate(event) {
	event.preventDefault();
	var elementsForm = document.getElementsByClassName("required");
	var correctElements=0;
	for (var i = 0; i<elementsForm.length; i++) {
		const isCorrect=checkForm(elementsForm[i]);
		if(isCorrect===true){
			correctElements++;
		}
	}
	if (correctElements===elementsForm.length){
		console.log(correctElements);
		document.getElementById('thanks').innerHTML="Спасибо, ваша заявка отправлена!";
	}

}
form.addEventListener('submit', validate);

