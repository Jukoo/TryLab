/**
 * Weather extension for Chrome Browser  
 * author : jukoo <funscript@outlook.fr>
 */ 

const {CoordsLocation , 
    URL_response, 
    getElement ,
    getPosition ,
    notif_opt } = import {Weather} from "./main"

let Elmt =  { 
	_link  : getElement('.link') , 
	_info  : getElement('.info'),
	_icon  : getElement('.icon'),
	_temp  : etElement('.temp'),
	_Redirect()=> { 
		Elmt._link.addEventListener('click', ()=> { 
			 chrome.tabs.create({url:"https://openweathermap.org"})
		})
	}
}

const {EnableLocation} = WeatherExtention = { 

    EnableLocation () { 
		getPosition(success,error) ; 

        function success (pos) { 
			let lat ,lon  ; 
			localStorage['lat'] = lat = pos.coords.latitude 
			localStorage['lon'] = lon = pos.coords.longitude
			 fetch(URL_response(CoordsLocation(lat , lon)).then(res => { 
				const  dataMetric= JSON.parse(res)
				localStorage['info'] = Elmt._info.textContent = dataMetric.weather[0].description
				Elmt._temp.textContent  = dataMetric.main.temp                 
			})
		}

		function error () { 
		/**
		* force to use localStorage to store histocal weather
		*/
			if (localStorage['lat'] && localStorage['lon']) { 
				fetch(URL_response(CoordsLocation(localStorage['lat'],localStorage['lon'])).then(res => { 
				const dataMetric = JSON.parse(res)
				localStorage['info'] = Elmt._info.textContent = dataMetric.weather[0].description
				Elmt._temp.textContent  = dataMetric.main.temp                 

				})
			}
		}
	}, 

    Enable_notif () {
        return new Notification(Weather.appName , notif_opt)
    }
}
WeatherExtention["Enable_notif"] 
EnableLocation() 
Elmt
._Redirect() 
