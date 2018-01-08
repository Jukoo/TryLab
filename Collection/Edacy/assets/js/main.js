class FaceManager { 

		constructor() { 
			

		}
		// Select Element 
		DomSelector(element) { 

			let getElmt ; 
 		
 		  return getElmt = element?document.getElementById(element) : console.warn(error) ; 


		}

		// Patterne Check  telephone and Email format 
		regexCheck (value) { 

			let regexNum = /^\d+$/g; 
		    let regexMail = /\w+@\w+\.[a-zA-Z]{2,4}/g ; 

			if (regexNum.test(value) || regexMail.test(value)) { 

			 	return true

		     }else { 

			 	return false
		     }

		}

		getTooltip (element) { 

			if (element.nodeType == Node.ELEMENT_NODE) { 

		        return element.nextElementSibling
	         }
		}
		// Create Element 

		DomCreate(element) { 

			return document.createElement(element)
		}

		SplitData (data,separator) {

		    return data.split(separator)

		}
   // Not Supported by browser 
   // do no try to use it 
		getNotified ( title ,Icon , Body){ 

			let option = { 
				icon : Icon,
				body : Body

			}
		   let notification = new Notification(title,option)
		}

	  GoogleMapWidget (initMap , error){ 

	  		
	  		navigator.geolocation.getCurrentPosition(initMap , error)
	  		//navigator.geolocation.watchPosition(initMap , error)

	  }


}

