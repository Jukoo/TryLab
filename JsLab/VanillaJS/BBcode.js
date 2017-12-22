/*
	Test BBcode  ! 

*/


function getElements (ElmtParttern) { 

 let regex = /^#\w+|^.\w+/ ; 
 
 	if(regex.test(ElmtParttern)) { 

 		return document.querySelector(ElmtParttern) ; 

 	}else  { 

 		 // Au cas ou il decide de ne pas mettre un signe devant 

 		return document.querySelector(ElmtParttern) ; 
 	}


}

let Elmts = { 

	blink : getElements("strong > span[class = 'blockToggle']"), 

	textArea:getElements("#text"),

	suBtn :getElements("input[type ='submit']"),

	show  : getElements("#show"),

	BBcode : function (Elmt,partern , transforme) { 

	if (partern && transforme) { 

	return Elmt.replace(partern,transforme) ; 

    }

  }
}


window.setInterval(function () { 
	
Elmts.blink.classList.toggle("blockToggle") ; 

},500)



	
Elmts.suBtn.addEventListener('click', function(ev) {

	ev.preventDefault() ; 


	let value = Elmts.textArea.value

	   	value=  Elmts.BBcode(value,/\[b\]([\s\S]*?)\[\/b\]/g,"<strong>$1</strong>")

                value = Elmts.BBcode(value,/\[i\]([\s\S]*?)\[\/i\]/g, '<em>$1</em>');
		value = Elmts.BBcode(value,/\[s\]([\s\S]*?)\[\/s\]/g, '<del>$1</del>');
		value = Elmts.BBcode(value,/\[u\]([\s\S]*?)\[\/u\]/g, '<span style="text-decoration: underline">$1</span>');

		Elmts.show.innerHTML= value 
	

})
