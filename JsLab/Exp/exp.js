
/**
 : Inverser une chaîne de caractères 
  je vous propose un exercice qui consiste à inverser l'ordre des lettres d'un mot en JavaScript.
**/

let getWord = document.querySelector('#word')
let txt = getWord.textContent; 

function reverString (mot) { 
	mot = mot.split('') ; 
	stock = [] ; 
	for (var i = mot.length ; i >=0 ; i--) {
		stock.push(mot[i])
	}

	return stock.join('') ; 
}

getWord.textContent= reverString(txt).toUpperCase() ;


//factoriser un nombre 

function factor(number) {
	
	
	for (var i = 1, nombre = 1 ; i <=number; i++) {

		
		nombre *= i

	}

	return nombre ; 

}
console.log(factor(10))
// le palindrome 

function palindrome(mot) {

	 let word = mot.trim()
	 console.log(word.trim())
	 word = word.split('') ; 
	 let str = [] ; 
	 for (var i = word.length; i >= 0 ;i--) {

	 	str.push(word[i])

	 }
	 str = str.join("")  ; 

	  mot == str ? console.log("c'est un palindrome") : console.log("c'est pas un palindrome") ; 
}


