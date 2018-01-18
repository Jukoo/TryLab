class Weather  { 

	constructor () { 

		this.xhr = new XMLHttpRequest() ; 
		
	}
	
	getElement(element) {

		const getClass = /^\.+/  , getId = /^#+/ ; 

		if (~getClass.test(element)) {

		 return document.querySelector(element)

		 }else if (~getId.test(element)) { 

		 	return document.getElementById(element)
		 }

	}

	getUrl(url) { 

		 return new Promise((resolve ,reject )=> { 
		 	let xhr = this.xhr ; 

			xhr.open("GET" ,url ,true) ; 

			xhr.onreadystatechange = ()=> { 

			    if (xhr.readyState == xhr.DONE && xhr.status === 200)  { 

			 	   resolve(xhr.responseText)

			    }else if ( xhr.status > 400 ) { 

			 	 reject(`NetWork Error : ${xhr.statusText}`)
			    }
			}
			xhr.onerror = ()=>  { 

				console.warn("unable to contact the server")
				
			}

			xhr.send(null)

			 }) ; 
		
	}

	getPosition (success, error) { 

 	navigator.geolocation.getCurrentPosition(success , error)


	}

	QueryUrlbyCoords (lat , lon ) { 

	const saticUrl =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=defc64c9162e149b4a1d12b2d4650fa6`; 

	 return saticUrl ; 
	}


	QueryUrlbyTown ( cityOrTown) { 

		const saticUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityOrTown}&units=metric&appid=defc64c9162e149b4a1d12b2d4650fa6` ; 

		return saticUrl ; 
	}


	getData (datafromUrl)  { 

		 return console.log(datafromUrl)

	}


}