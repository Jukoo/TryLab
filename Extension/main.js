class Weather  { 

	constructor () { 

		this.xhr = new XMLHttpRequest() ; 
		
	}

	getUrl(url , callback) { 

		let xhr = this.xhr ; 

		xhr.open("GET" ,url ,true) ; 

		xhr.onreadystatechange = ()=> { 

		 if (xhr.readyState == xhr.DONE && xhr.status < 400)  { 

		 	callback(xhr.responseText)

		 }else if ( xhr.status > 400 ) { 
		 	console.log(`connexion Error ${xhr.statusText}`)
		 }
		}
		xhr.onerror = ()=>  { 

			console.warn("Connot find this url")
		}

		xhr.send(null)
	}

	getPosition (success, error) { 

 	navigator.geolocation.getCurrentPosition(success , error)


	}

}