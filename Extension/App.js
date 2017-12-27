window.onload = ()=>  {

	 let getNotified = new Notification('Weather' , { 

		icon : "icone.png" , 
		body : "On build"
	})
 
	let _Weather  = new Weather()

	_Weather.getPosition(success,error)
	

	// if user accept to use location 
    function success (pos) { 

      	   const lat = pos.coords.latitude , lon = pos.coords.longitude ; 

           console.log(_Weather.xhr)

           let StoragePosition = { 

           	latitude  : localStorage['latitude'] = lat , 

           	longitude  : localStorage['longitude'] = lon
           
           } ; 

           if (StoragePosition.latitude && StoragePosition.longitude ) { 

		      _Weather.getUrl( _Weather.QueryUrlbyCoords(lat , lon)).then(res=> { 

		      	 let DataWeather = JSON.parse(res) ; 

		      	 console.log(DataWeather)
		      }).catch(err => { 

		      	 console.warn(err)
		      })
           }

 	}  
 	

 	
 	function error () { 

 		/*let id = navigator.geolocation.watchPosition( success , error) ; 

 		function success (pos) { 

 			let crd = pos.coords; 
 			  console.log( { 

 				lat : crd.latitude , 
 				lon : crd.longitude
 			})

 		}*/
 	}
    
 	

	document.querySelector(".link").onclick=()=> {

	     chrome.tabs.create({url:"https://openweathermap.org"})
	  
    }

 	

 }
    
