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
//console.log(myForm);

function validate(event) {
	event.preventDefault();
	//console.log(event);
	var myName = document.getElementById("name"); 
	//console.log(myName);
	var myNameValue = myName && myName.value; 
	console.log(myNameValue);

	if (myNameValue === ''){
		//console.log("ошибка");
		myName.style.borderBottom = "5px solid red"; 
	} 
	else {
		myName.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
	}
	var myEmail = document.getElementById("email"); 
	var myEmailValue = myEmail && myEmail.value; 

	if (myEmailValue === ''){
		myEmail.style.borderBottom = "5px solid red";  
	} 
	else {
		myEmail.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
	}

	var mySubject = document.getElementById("subject"); 
	var mySubjectValue = mySubject && mySubject.value; 

	if (mySubjectValue === ''){
		mySubject.style.borderBottom = "5px solid red"; 
	} 
	else {
		mySubject.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
	}

    var myMessage = document.getElementById("message"); 
	var myMessageValue = mySubject && myMessage.value; 
	
	if (myMessageValue === ''){
		myMessage.style.borderBottom = "5px solid red"; 
	} 
	else {
		myMessage.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
	}
}
form.addEventListener('submit', validate);


//var myInpyt =[document.getElementById("name"), document.getElementById("email"), document.getElementById("subject"),
	//document.getElementById("message")] ; len = myInpyt.length;
	//for (var i = 0; i < len; i++){ 
		//alert(myInpyt[i]);
	//	console.log(myInpyt);
	//}

	//var myInpytValue =[document.getElementById("name"), document.getElementById("email"), document.getElementById("subject"),
	//document.getElementById("message")] ; len = myInpytValue.length;
	//for (var i = 0; i < 4; i++)
	//var myInpytValue = (myInpyt[i] && myInpyt[i]+'.value');
	//{ 
	//	alert(myInpytValue[i]);
	//	console.log(myInpytValue);
	//}

	//if (myInpytValue === '')
	//for (var i = 0; i < len; i++){
	//console.log("ошибка");
	//myInpyt.style.borderBottom = "5px solid red"; 
	//} 
	//else {
	//myInpyt.style.borderBottom = "5px solid rgba(0, 0, 0, 0.6)"; 
	//}
