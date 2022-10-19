var key = 'X';
var tttdata = ["", "", "", "", "", "", "", "", ""];
var winnum =["", "" ,""];
var tiechecker = 0;
var winchecker = 0;

function myFunction(clicked_id) {
	//document.querySelector('#'+clicked_id).innerHTML = key;
	datasaver(clicked_id);
	writedata();
	document.querySelector('#'+ clicked_id).disabled = true;
	xochecker();
	wincheck(clicked_id);
	//console.log(tttdata[0] + tttdata[1] + tttdata[2] + tttdata[3] + tttdata[4] + tttdata[5] + tttdata[6] + tttdata[7] + tttdata[8]);
}

function writedata(){
	for (var i = 0; i <= 8; i++) {
		document.querySelector('#button'+ (i+1)).innerHTML = tttdata[i];
	}
}

function xochecker(){
	if (key == 'X') {
		key = 'O';
	}else{
		key = 'X';
	}
}

function datasaver(input){
	switch(input) {
		case 'button1':
		tttdata[0] = key; 
		break;
		case 'button2':
		tttdata[1] = key; 
		break;
		case 'button3':
		tttdata[2] = key; 
		break;
		case 'button4':
		tttdata[3] = key; 
		break;
		case 'button5':
		tttdata[4] = key; 
		break;
		case 'button6':
		tttdata[5] = key; 
		break;
		case 'button7':
		tttdata[6] = key; 
		break;
		case 'button8':
		tttdata[7] = key; 
		break;
		case 'button9':
		tttdata[8] = key; 
		break;
		default:
    // code block
}
}

function reset(){
	for (var i = 1; i <= 9; i++) {
		document.querySelector('#button'+i).disabled = false;
		document.querySelector('#button'+i).innerHTML = "";
		document.querySelector('#button'+i).style.backgroundColor = "";
	}
	document.querySelector('#win').style.display = "none";
	tttdata = ["", "", "", "", "", "", "", "", ""];
	winnum = ["", "" ,""];
	tiechecker = 0; winchecker = 0;
}

function youwon(){
	winchecker = 1;
	document.querySelector('#win').style.display = "block";
	xochecker();
	document.querySelector('#win').innerHTML = key +" won";
}

function wincon(){
	for (var i = 0; i <= 2; i++) {
		document.querySelector(winnum[i]).style.backgroundColor = "#661C85";
 	}
 	//disable all the buttons
	for (var i = 1; i <= 9; i++) {
		document.querySelector('#button'+i).disabled = true;
	}
	youwon();
}

function tie(){
	//disable all the buttons
	for (var i = 1; i <= 9; i++) {
		document.querySelector('#button'+i).disabled = true;
	}
	document.querySelector('#win').style.display = "block";
	document.querySelector('#win').innerHTML = "It's a Tie";
}

// function winrow(x){
// 	var check = x.slice(0,3);
// 	var row = Number(x.slice(3,4)) + 1;
// 	if (check == "hor") {
// 		if (row == 1 || row == 2 || row == 3) {
// 			for (var i = 1; i <= 3; i++) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}else if (row == 4 || row == 5 || row == 6) {
// 			for (var i = 4; i <= 6; i++) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}
// 		else if (row == 7 || row == 8 || row == 9) {
// 			for (var i = 7; i <= 9; i++) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}
// 	}else if (check == "ver") {
// 		if (row == 1 || row == 4 || row == 7) {
// 			for (var i = 1; i <= 7; i= i + 3) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}else if (row == 2 || row == 5 || row == 8) {
// 			for (var i = 2; i <= 8; i = i + 3) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}
// 		else if (row == 3 || row == 6 || row == 9) {
// 			for (var i = 3; i <= 9; i = i + 3) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 		}
// 	}else if(check == "cr1"){
// 			for (var i = 1; i <= 9; i = i + 4) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 	}else if(check == "cr2"){
// 			for (var i = 3; i <= 7; i = i + 2) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 	}else{
// 		for (var i = 1; i <= 9; i = i + 2) {
// 				document.querySelector('#button'+i).style.backgroundColor = "#661C85";
// 			}
// 	}
// 	wincon();
// }

// function wincheck(butt){
// 	var res = Number( butt.slice(6, 7) ) - 1;
// 	var windata;
// 	if 
// 		(tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res + 2] ||
// 		tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res - 1] ||
// 		tttdata[res] == tttdata[res - 1] && tttdata[res] == tttdata[res -2] ) {
// 		//Horizontal win
// 	windata = "hor" +  res ;
// 	winrow(windata);
// 	}else if 
// 		(tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res + 6] ||
// 		tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res - 3] ||
// 		tttdata[res] == tttdata[res - 3] && tttdata[res] == tttdata[res - 6]) {
// 		//Horizontal win
// 	windata = "ver" +  res ;
// 	winrow(windata);
// 	}else if 
// 		(tttdata[res] == tttdata[res + 4] && tttdata[res] == tttdata[res + 8] ||
// 		tttdata[res] == tttdata[res + 4] && tttdata[res] == tttdata[res - 4] ||
// 		tttdata[res] == tttdata[res - 4] && tttdata[res] == tttdata[res - 8]) {
// 		//Horizontal win
// 	windata = "cr1" +  res ;
// 	winrow(windata);
// 	}else if 
// 		(tttdata[res] == tttdata[res + 2] && tttdata[res] == tttdata[res + 4] ||
// 		tttdata[res] == tttdata[res + 2] && tttdata[res] == tttdata[res - 2] ||
// 		tttdata[res] == tttdata[res - 2] && tttdata[res] == tttdata[res - 4]) {
// 		//Horizontal win
// 	windata = "cr2" +  res ;
// 	winrow(windata);
// 	}
// 	console.log(windata);
// }

function wincheck(butt){
	var res = Number( butt.slice(6, 7) ) - 1;
	var windata;
	//Top left
	if (res == 0) {
		if (tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res + 2]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 2);
			winnum[2] = '#button'+ (res + 3);
			wincon();
		}
		else if (tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res + 6]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 4);
			winnum[2] = '#button'+ (res + 7);
			wincon();
		}
		else if (tttdata[res] == tttdata[res + 4] && tttdata[res] == tttdata[res + 8]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 5);
			winnum[2] = '#button'+ (res + 9);
			wincon();
		}
	}
	//Top Mid
	else if(res == 1){
		if (tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res -1]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 2);
			winnum[2] = '#button'+ (res);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res + 6]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 4);
			winnum[2] = '#button'+ (res + 7);
			wincon();
		}
	}
	//Top right
	else if(res == 2){
		if (tttdata[res] == tttdata[res - 1] && tttdata[res] == tttdata[res - 2]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res);
			winnum[2] = '#button'+ (res - 1);
			wincon();
		}
		else if (tttdata[res] == tttdata[res + 2] && tttdata[res] == tttdata[res + 4]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 3);
			winnum[2] = '#button'+ (res + 5);
			wincon();
		}
		else if (tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res + 6]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 4);
			winnum[2] = '#button'+ (res + 7);
			wincon();
		}
	}
	//Mid left
	else if(res == 3){
		if (tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res + 2]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 2);
			winnum[2] = '#button'+ (res + 3);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res - 3]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 4);
			winnum[2] = '#button'+ (res - 2);
			wincon();
		}
	}
	//Mid mid
	else if(res == 4){
		if (tttdata[res] == tttdata[res - 4] && tttdata[res] == tttdata[res + 4]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 3);
			winnum[2] = '#button'+ (res + 5);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 2] && tttdata[res] == tttdata[res - 2]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 1);
			winnum[2] = '#button'+ (res + 3);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res - 1]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res);
			winnum[2] = '#button'+ (res + 2);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res - 3]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 2);
			winnum[2] = '#button'+ (res + 4);
			wincon();
		}
	}
	//Mid right
	else if(res == 5){
		if (tttdata[res] == tttdata[res - 1] && tttdata[res] == tttdata[res - 2]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res);
			winnum[2] = '#button'+ (res - 1);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 3] && tttdata[res] == tttdata[res - 3]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 4);
			winnum[2] = '#button'+ (res - 2);
			wincon();
		}
	}
	//Bot left
	else if(res == 6){
		if (tttdata[res] == tttdata[res - 3] && tttdata[res] == tttdata[res - 6]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 2);
			winnum[2] = '#button'+ (res - 5);
			wincon();
		}
		else if(tttdata[res] == tttdata[res - 2] && tttdata[res] == tttdata[res - 4]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 1);
			winnum[2] = '#button'+ (res - 3);
			wincon();
		}
		else if(tttdata[res] == tttdata[res + 1] && tttdata[res] == tttdata[res + 2]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res + 2);
			winnum[2] = '#button'+ (res + 3);
			wincon();
		}
	}
	//Bot mid
	else if(res == 7){
		if(tttdata[res] == tttdata[res - 3] && tttdata[res] == tttdata[res - 6]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 2);
			winnum[2] = '#button'+ (res - 5);
			wincon();
		}else if(tttdata[res] == tttdata[res - 1] && tttdata[res] == tttdata[res + 1]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res);
			winnum[2] = '#button'+ (res + 2);
			wincon();
		}
	}
	//Bot right
	else if(res == 8){
		if (tttdata[res] == tttdata[res - 3] && tttdata[res] == tttdata[res - 6]) {
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 2);
			winnum[2] = '#button'+ (res - 5);
			wincon();
		}
		else if(tttdata[res] == tttdata[res - 4] && tttdata[res] == tttdata[res - 8]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res - 3);
			winnum[2] = '#button'+ (res - 7);
			wincon();
		}
		else if(tttdata[res] == tttdata[res - 1] && tttdata[res] == tttdata[res - 2]){
			winnum[0] = '#button'+ (res + 1);
			winnum[1] = '#button'+ (res);
			winnum[2] = '#button'+ (res - 1);
			wincon();
		}
	}
	
	tiechecker++;
	if (tiechecker >= 9) {
		if (winchecker != 1) {
			tie();
		}
	}
}
