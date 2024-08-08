//javaScript_Logiskt_Puzzel

Lös 3 nedan javascript puzzlen. 

Fråga 1: Rengör rummet function: om du har inputen [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], skapa en function som organiserear arrayen så den blir sorterad.
Till exempel svar(arrayFranOvan) ger return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

//Vi sparar arrayen i minne även fast den är inte organiserad
const array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Vi behöver skapa en funktion för att ge en instruktion
function arrayFranOvan(array1) {
	//Här börjar vi sortera och förklarar att alla tal ska jämföras med varandra
let arraySortera = array1.toSort
(function(a, b){
	return a-b
});
let org = [arraySortera[0]]

//Vi har ett värde som spottar ut allt när det är klart
let ans = []

//Ser till att köra igenom värdena en och en
for (let i = 0; i < arraySortera.length; i++) {
	if (arraySortera[1] === arraySortera[i+1]) {
		org.push(arraySortera[i+1])
	} else {
		(org.length === 1)? ans.push(org[0]) : ans.push(org)
		org = [arraySortera[i+1]];
	}
}
return ans
}


arrayFranOvan(array1);

Fråga 2: Skriv en javascript function som tar en array med nummer och siktar på ett nummer. Funktionen ska hitta två olika nummer i den arrayen, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]



//En funktion för att göra det vi önskar
function arraySplice(arrayIn, target) {
	//Vi har ett ställe att spotta ut svaret ifrån
	let ans = []
	//Jämför alla numren med varandra och sortera och spara det
	let length = arrayIn.length
let array2 = arrayIn.toSort(function(a, b){
	return a-b
})
//For loop för att köra igenom alla numren 
for (let i = 0; i < length; i++) {
	if (array[i] >= target / 2) {break}

		let lookFor = target - array2[1];


	for (let j = (i + 1); j < array2.length; j++)
	{
if (array2[j] === lookFor) {
	let answer = [array2[i], array2[j]];
	ans.push(answer)
	break
}
	}
	while (array2[i] === array2[i+1]) {i++}
}


	if (ans.length === 0) {
		return "Nummren matchar inte"
	} else {
		return ans
	}
}


Fråga 3: Skriv en javascript function som konverterar HEX till RGB. Efter det skapa en function auto-hittar så om du skriver HEX färg formateras det och ger RGB och tvärtom med HEX.

function kollaHexLangd(hex) {
	if (((hex.length === 7) || (hex.length === 4)) && (hex[0] === "#")) {
		return true
	} else if ((hex.length === 6) || (hex.length === 3)) {
		return true
	} else {
		return false
	}
} 

function kollaHexVarde() {
	let kolla = [];

	hex = hex.replace("#","");

	if ((hex.length !== 3) && (hex.length !==6)) {
		kolla = [false];
	}
	let digit = /[0123456789]/;
	let alphabet = /[ABCDEFabcdef]/;
	for (let i = 0; i < hex.length; i++) {
		kolla.push(digit.test(hex[i])||alphabet.test(hex[i]))
	}
	if (kolla.includes(false)) {
		return false
	} else {
		return true
	}
}
























































































