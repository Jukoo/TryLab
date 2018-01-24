class Utilities  { 

	constructor (input ,btn) { 
		this.elments = { 

			input : document.querySelector(input),
			save  : document.querySelector(btn) 
		}


		this.WindowsReady = function(getTargetfocus ,setMode=true)  { 

			getTargetfocus.focus() ; 

			this.elments.save.disabled = setMode ;

		}
	}

	__RequestAutoload__ (NameSpace){ 

			if (typeof NameSpace == "object") {

				window.addEventListener('load' , ()=> { 

					for (let i in NameSpace)  { 

						for(let x in NameSpace[i]) { 

							NameSpace[i][x]()	
						}
					}
				})

			}


	}

	Create (elements) {

		elements  = document.createElement(elements)

		return elements
	}

	getElement (elements) { 

		if (elements){ 

			let regex = /^#\w+|^.\w+/ 

			 if (regex.test(elements))return document.querySelector(elements) ; 			
			 
		}

	}

	split(Data,separator) {

		return Data.split(separator)
	}


	TabRow(Eval ,timestemps) { 

	    const taBody = this.Create('tr')

	    let  tdEvent  = this.Create('td') 
	    tdEvent.textContent = Eval 

	    let moment = tdEvent.cloneNode(false) , closeBtn = tdEvent.cloneNode(false);
	    moment.textContent = timestemps
	   
	    closeBtn.className ="btn btn-danger" ; 
	    closeBtn.title= "Delete Item ! "

		taBody.appendChild(tdEvent)
		taBody.appendChild(moment)
		taBody.appendChild(closeBtn)

		return taBody ;

	}
	// on build 
	Edit(elm ,typeEvent) { 

		if (elm.nodeType == Node.ELEMENT_NODE) { 

 			elm.addEventListener(typeEvent , function(ev){ 

 		  	let  edit = confirm("Vous voulez supprimer cette element?")

 		  	if (edit)elm.parentNode.removeChild(ev.currentTarget) ; 

 		  		
 		   })
 		}

	}

}