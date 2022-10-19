//global variables

function checkanswer(){  
	var number = document.getElementById("numericinput").value;
	numerictobinary();
	binarytonumeric();
}

//Number Checker
function isNumber(evt) {
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
	if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
		return false;

	return true;
}  

function numerictobinary(){
	var test = 0;
	var temp1 = 0;//division result
	var temp2 = 0;//Modulus result
	var binaryanswer = ""; var calculation = "";
	do{
		if(test == 0){
			test = document.getElementById("numericinput").value;
		}else{
			test = parseInt(temp1);
		}
		temp1 = test / 2;
		temp2 = parseInt(test) % 2;
		binaryanswer = temp2.toFixed(0) + binaryanswer ;
		calculation = calculation +"<tr><td class=\"text-left\"> 2 </td><td class=\"text-left\"> "+test+" </td><td class=\"text-left\"> "+temp2+" </td></tr>"; 
	}while(temp1 >= 1);
	document.getElementById("answerbinary").innerHTML = binaryanswer;
	document.getElementById("testing").innerHTML = calculation;
}

function binarytonumeric(){
	var binary = Array.from(document.getElementById("binaryinput").value);
	binary.reverse();
	var limit = binary.length; var answerarray = [];
	var o = 0; var numericanswer = ""; var errorbinary = 0;
	do{
		if(binary[o] == 1){
			answerarray.push(2**o);
		}else if(binary[o] != 1 && binary[o] != 0){
			errorbinary = 1;
		}
		limit--; o++;
	}while(limit > 0);
	// function for adding two numbers. Easy!
	const add = (a, b) =>
	a + b
	// use reduce to sum our array
	const sum = answerarray.reduce(add)
	if(errorbinary == 0){
		document.getElementById("answernumeric").innerHTML = sum;
	}else{
		document.getElementById("answernumeric").innerHTML = "Non numeric value detected";
	}
}