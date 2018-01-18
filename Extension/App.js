let weather  = new Weather() ; 

let Elmt =  { 

	_link  : weather.getElement('.link') , 
	_info  : weather.getElement('.info'),
	_icon  : weather.getElement('.icon'),
	_temp  : weather.getElement('.temp'),
	_Redirect  :()=> { 

		Elmt._link.addEventListener('click', ()=> { 
			 chrome.tabs.create({url:"https://openweathermap.org"})
		})
	}
}

let WeatherExtention = { 

	EnableLocation  : ()=> { 

		weather.getPosition(success,error) ; 

		function success (pos) { 
			let lat ,long ; 
			localStorage['lat'] = lat = pos.coords.latitude 
			localStorage['lon'] = long = pos.coords.longitude

			weather.getUrl(weather.QueryUrlbyCoords(lat,long)).then(res => { 

				let dataWeather = JSON.parse(res)
				console.log(dataWeather)
				localStorage['info'] = Elmt._info.textContent = dataWeather.weather[0].description
				Elmt._temp.textContent  = dataWeather.main.temp                 

			})
		
		}

		function error () { 
		/**
		* force to use localStorage to store histocal weather
		*/
			if (localStorage['lat'] && localStorage['lon']) { 

				weather.getUrl(weather.QueryUrlbyCoords(localStorage['lat'],localStorage['lon'])).then(res => { 

				let dataWeather = JSON.parse(res)
				console.log(dataWeather)
				localStorage['info'] = Elmt._info.textContent = dataWeather.weather[0].description
				Elmt._temp.textContent  = dataWeather.main.temp                 

				})
			}

		}
	}

}

	

 
	
window.onload = function (){ 

// Notification 
let getNotified = new Notification('Weather' , { 

		icon : "icone.png" , 
		body :  "on process"
	})

// redirect  

Elmt._Redirect();

// Weather

WeatherExtention.EnableLocation() ; 

}