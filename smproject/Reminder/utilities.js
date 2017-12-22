function Utilities  (input, btn) {
	
	this.elments = { 

		input : document.querySelector(input),
		save  : document.querySelector(btn) 
	}


	this.WindowsReady = function(getTargetfocus ,setMode)  { 

		getTargetfocus.focus() ; 

		this.elments.save.disabled = setMode ; 

	}



}

 // Create Element 
Utilities.prototype.Create = function(elements) { 


	elements  = document.createElement(elements)

	return elements
}


 // get Element
Utilities.prototype.getElement  = function (elements) { 

	if (elements){ 

		let regex = /^#\w+|^.\w+/ 

		 if (regex.test(elements)) { 

		 	return document.querySelector(elements) ; 			
		 }else  { 

		   // stattement 
		 }

	}
}


if(!Object.prototype.split) { 


	Utilities.prototype.split= function(Data,separator)  { 


		 return Data.split(separator) 

	}
}


// on build 
Utilities.prototype.edit = function (elm , typeEvent){ 

 // Edition   Delete or edit 
 		if (elm.nodeType == Node.ELEMENT_NODE) { 

 		  elm.addEventListener(typeEvent , function(ev){ 

 		  		let  edit = confirm("Vous voulez supprimer cette element?")

 		  		if (edit) { 

 		  			elm.parentNode.removeChild(ev.currentTarget) ; 

 		  		}else  { 


 		  		}

 		   })
 		}

 		
}
