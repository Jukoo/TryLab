window.onload = ()=>  {

	 let _Weather   = new Weather()

	 _Weather.getPosition(success,error)
	
      function success (pos) { 

      	 let lat = pos.coords.latitude , lon = pos.coords.longitude ; 

       console.log(_Weather.xhr)

      _Weather.getUrl(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=defc64c9162e149b4a1d12b2d4650fa6` , (res)=>  { 

 	 let result = JSON.parse(res) ; 

	 console.log(result)

      })

 	}  
 	

 	
 	function error () { 
 		console.log("not found ")
 	}

      let getNotified = new Notification('info' , { 

		icon : "icone.png" , 
		body : " info de climat"
	})

      document.querySelector(".link").onclick=()=> {

	chrome.tabs.create({url:"https://openweathermap.org"})



}

 	

 }
    
