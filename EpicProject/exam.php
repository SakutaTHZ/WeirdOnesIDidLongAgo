<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>Japanese Glossary Test Chapter 3</h1>
	<p>Please click the button below to generate a text</p>
	<button onclick="generateMyanmar()">Generate</button>
	<p id="myanmarsar"></p>
	<input type="text" id="input_text">
	<button onclick="checkAnswer()">Check Answer</button>
	<p id="answer">true or false</p>
	<p id="value" hidden></p>
</body>
<script>
	
	var MyanmarValues = ["စာသင်ခန်း", "ထမင်းစားဆောင်", "ရုံးခန်း", "အစည်းအဝေးခန်း", "ဧည့်ကြိုကောင်တာ", "ဧည့်ခန်း", "အခန်း", "သန့်စင်ခန်း", "လှေကား", "ဓာတ်လှေကား"];
	var JapaneseValues =["きょうしつ", "しょくどう", "じむしょ", "かいぎしつ", "うけつけ", "ロビー", "ヘや", "トイレ おてあらい", "かいだん", "エレベーター"];
	function generateMyanmar() {	
		var x = Math.floor(Math.random() * 9);	
		document.getElementById('myanmarsar').innerHTML = MyanmarValues[x];
		document.getElementById('value').innerHTML = x;
		document.getElementById('answer').innerHTML = "";
	}

	function checkAnswer() {
		var number = document.getElementById('value').innerHTML;
		console.log(number);
		var your_answer = document.getElementById('input_text').value;
		if(your_answer == JapaneseValues[number]){
			document.getElementById('answer').innerHTML = "TRUE";
		}
		else document.getElementById('answer').innerHTML = "FALSE";
		document.getElementById('input_text').value = "";
	}
</script>
</html>