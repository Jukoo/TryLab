
export const Weather  =  { 
	  appName  : "Weather" , 
      codeName :"frisly" , 
      version  :"0.1.0" , // Experiment 
      Lang   : "ENG:en"
      URLat  : "http://api.openweathermap.org/data/2.5/weather?lat=Lat&" , 
      URLon  : "lon=Lon&units=metric&appid=defc64c9162e149b4a1d12b2d4650fa6",
      notif_opt : {
       icon:"icone.png" , 
       body:"on process"
      }, 

    /**
     * @protected 
     * CoordsLocation get the target location  
     * -@param  array {Coord} -the coords  
     * -@return Object {Latitude , longitude}
     *  this methode 'll be called on 
     *  URL_response 
     */ 
      
    CoordsLocation (...Coord) {
        let Location = new Set([]) ; 
        for(let args of Coord) {
            
            Location.add(encodeURIComponent(args))  
        }
        let [Lat , Long ] = Location  

        return {
            Lat , 
            Long 
         }

    } , 
    /**
     * @private 
     * Urlbind recontitute  the url  
     * -@param  integer {Lat} -the laltitude coord
     * -@param  integer {Long} -Longitude coord
     *  return string {the complete url} 
     */ 
    Urlbind (Lat , Long) {
    
       if (!arguments) return false  ; 
        return (
        Weather
        ["URLat"].replace(/Lat/i , Lat) 
        + 
        Weather
        ["URLon"].replace(/Lon/i , Long) 
        ) 
       
    } ,
    /**
     * @public 
     * URL_response build the URL source 
     * -@param Object {CoordsLocation} - the Coords 
     * -@return string {metadata} 
     */ 
    URL_response (CoordsLocation) {
        let metadata = new String () ; 
        if ("Lat" in CoordsLocation && 
            "Long" in CoordsLocation) 
        {
            
            let {Lat , Long } = CoordsLocation
            metadata = Weather.Urlbind(Lat , Long) 
        }
        return metadata
    } , 

    getElement(element) {

		const getClass = /^\.+/  , getId = /^#+/ ; 

		if (~getClass.test(element)) {

		 return document.querySelector(element)

		 }else if (~getId.test(element)) { 

		 	return document.getElementById(element)
		 }

	}, 


	getPosition (success, error) { 
        if ("geolocation" in navigator) {
            navigator
            ["geolocation"]
            .getCurrentPosition(success , error)
        } 

	}

}
