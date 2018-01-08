let App = new FaceManager()

let Elmts =  { 

  fstName : App.DomSelector("first_name"),
  lstName : App.DomSelector('last_name') ,
  phone   : App.DomSelector('phone'),
  email   : App.DomSelector("email")
 
}
for (let i in Elmts) { 

	Elmts[i].required=true

}
 
let suBnt  = document.querySelector("input[type ='submit']")
let ProgressBare = App.DomSelector('loader')




let getParent = App.DomSelector("collect") ; 
 
let NameSpace = { 

	Color : { 
		success : "#388e3c",
		error   : "#c62828"
	},

	ControlInput : { 

		checkNum  : function (){ 
			Elmts.phone.addEventListener('blur' , function (){ 
			if (this.value.length > 6 && App.regexCheck(this.value)) { 
				App.getTooltip(this).textContent = "You're almost there !"
				App.getTooltip(this).style.color = NameSpace.Color.success
				suBnt.disabled =false
			}else { 
				App.getTooltip(this).textContent = "nope you did mistake"
				App.getTooltip(this).style.color = NameSpace.Color.error
				suBnt.disabled =true
			}

		})


		},

		checkEmail : function (){ 
			Elmts.email.addEventListener('blur' ,function(){ 

					if (App.regexCheck(this.value)) { 
					App.getTooltip(this).textContent = "your are on stage  "
					App.getTooltip(this).style.color = NameSpace.Color.success
					suBnt.disabled =false
				}else { 
					App.getTooltip(this).textContent = "not a good Format please check this out"
					App.getTooltip(this).style.color = NameSpace.Color.error
					suBnt.disabled =true
				}


			})

		}
	},

// user name 
	userName  :  { 

		names : function() { 
			if ( Elmts.fstName.value.length > 0 && Elmts.lstName.value.length > 0 ){ 

				return  { 
					Fname : Elmts.fstName.value,
					Lname : Elmts.lstName.value
				}
			}else{ 

				suBnt.disabled =true
				return false

			}
			
		}

	} , 

// Submit Handler 

   Submission : { 

   		sub : function(){ 
   			suBnt.addEventListener('click'  ,function(ev){ 

   				
   				suBnt.disabled =true
   			
   				let fname , lname  , tel ,phone ; 

   				if (NameSpace.userName.names()) { 

   					localStorage['Fname'] += fname = NameSpace.userName.names().Fname +'-'
   					localStorage['Lname'] += lname = NameSpace.userName.names().Lname  +' *'
   				}
   			        localStorage['tel'] += tel =Elmts.phone.value +' !'
   			        localStorage['email']+= email =Elmts.email.value +'-'

   			    //Create Element on click 
   			    let liElm = App.DomCreate('li')
   			    liElm.id='li'
   			    liElm.className="collection-item avatar yellow accent-4"
			 	let img   = App.DomCreate('img')
			 	let spanEl= App.DomCreate('span')
			 	let pElm  = App.DomCreate('p')
			 	let small = App.DomCreate('small')
			 	 // Style Element 
   			 	spanEl.textContent= fname + " " + lname
   			 	pElm.textContent = email
   			 	small.textContent = tel
   			 	img.src="assets/img/icon/p.png"
   			 	img.className ="circle"
   			 	img.style.height="50px"
   			 	img.style.width ="50px"
   			 		//adding ellement 
   			 	liElm.appendChild(img)
   			 	liElm.appendChild(spanEl)
   			 	liElm.appendChild(pElm)
   			 	liElm.appendChild(small)
   			 	
   			  	  
   			    getParent.appendChild(liElm)	

   			    ProgressBare.style.display= "block"
   			      	App.DomSelector("task").textContent =" Adding item"
   			        let reload =  window.setTimeout (function (){ 

   			      	 	 ProgressBare.style.display= "none"
   			      	 	 App.DomSelector("task").textContent ="Done"
   			      	 	 setTimeout(function(){
   			      	 	 	App.DomSelector("task").textContent =""
   			      	 	 },1000)

   			      	 }, 1000)


   			  
            	  	for (let i in Elmts)  { 
	   					try { 
	   			 		Elmts[i].value =" "
	   			 		App.getTooltip(Elmts[i]).textContent =" "

	   			 	    }catch (err) {

	   			 		//console.warn(err.message)
	   			 	    }
   			 	   }
   			})

   		}
   	},

   	Storage : { 

   		  RestoreData  :  function (){ 

   			if (localStorage['Fname'] && localStorage['Lname'] && localStorage['tel'] && localStorage['email']) { 

   				let F_name = App.SplitData(localStorage['Fname'] , "-")
   				let L_name = App.SplitData(localStorage['Lname'] , "*") 
   				let Phone = App.SplitData(localStorage['tel'] , "!") 
   				let Email = App.SplitData(localStorage['email'] , "-") 

   				F_name[0] =F_name[0].replace(/undefined/ ,"") 
   				L_name[0] =L_name[0].replace(/undefined/ , "")
   				Phone[0]  =Phone[0].replace(/undefined/ , "")
   				Email[0]  = Email[0].replace(/undefined/ , "")

   				F_name.forEach((name , index) => { 
   					  //Create Element on click 
   			    let liElm = App.DomCreate('li')
   			    liElm.id="li"
   			    liElm.className="collection-item avatar yellow accent-4"
			 	let img   = App.DomCreate('img')
			 	let spanEl= App.DomCreate('span')
			 	let pElm  = App.DomCreate('p')
			 	let small = App.DomCreate('small')
			 	
			 	// Style Element 
   			 	spanEl.textContent= name + " " + L_name[index]
   			 	pElm.textContent = Email[index]
   			 	small.textContent = Phone[index]
   			 	img.src="assets/img/icon/p.png"
   			 	img.className ="circle"
   			 	img.style.height="50px"
   			 	img.style.width ="50px"
   			 		//adding ellement 
   			 	liElm.appendChild(img)
   			 	liElm.appendChild(spanEl)
   			 	liElm.appendChild(pElm)
   			 	liElm.appendChild(small)
   			 	
   			  	  
   			    getParent.appendChild(liElm)	



   				})
   			}
   		}
   	},

   	ClearItem: { 

   		ClearlocateStorage : function (){ 
   		 let getli = document.querySelectorAll('#li')
   		 if (getli)  { 
   		 	for (let i= 0 ; i<getli.length ; i++) { 

   		 		getli[i].addEventListener('dblclick', function(ev){ 
   		 		  let childs = ev.currentTarget.childNodes
                  getParent.removeChild(ev.currentTarget)
                  console.log(getli)
   		 		})
   		 	}
   		 }
   		
   		}
   	}, 

   	ClearStorage : function(){ 

   			App.DomSelector("cls").addEventListener('click' , function(ev){
   			       ev.preventDefault(ev) 
   						
   			      let confirmation  = confirm("Are you sure to delete all stuf !")
   					
   			      if(confirmation){ 
   			      	
   			      	localStorage.clear()
   			      	
   			      	ProgressBare.style.display= "block"
   			      	App.DomSelector("task").textContent ="Please Wait...cleaning the cache on process"
   			      	
   			        let reload =  window.setTimeout (function (){ 

   			      	 	location.reload()
   			      	 }, 4000)

   			      }else { 
   			      	alert("Processus Cancled")
   			      }
   			     

   	   		})
   	},

   		ActiveSave : function (){ 

   		     App.DomSelector("autoSave").onclick= function (){ 

   			let ActivationStorage = confirm('your are going to active the Storage please read the version  before use !IMPORTANT!') 
   			localStorage['savelist'] = ActivationStorage

   			 if (localStorage['savelist'] == "true") {
   			 	
   			 	NameSpace.Storage.RestoreData()
   			 	NameSpace.ClearStorage()
   			 	App.DomSelector('cls').hidden =false 
   			 	App.DomSelector('autoSave').hidden =true

   			 	ProgressBare.style.display= "block"
   			      	App.DomSelector("task").textContent ="Activating Storage "
   			      	
   			        let reload =  window.setTimeout (function (){ 

   			      	 	location.reload()
   			      	 }, 3000)

   			 }else { 


   			 }
   		}
   	}, 

   	AddWidgetMap : function (){ 

   			App.GoogleMapWidget(initMap, error)
   			let Elmt = App.DomSelector('map')
   			console.log(Elmt)

   			function initMap(position) { 
				 try { 

				 let lat = position.coords.latitude ; 
				 let lng = position.coords.longitude ;
				
			     const Opts = { 
			          center: {lat: lat, lng:lng},
			          zoom: 12
			     
			        }
			   let map = new google.maps.Map(Elmt,Opts);

			   let giveMark = new google.maps.Marker( {

			   		position : Opts.center , 
			   		map :map
			   })


			}catch(err) { 

				console.warn("Not a precise " + err.message)
			}

			}

			function error () { 

			let randomCoordlat= Math.floor(Math.random()* 100)
			let randomCoordlong= Math.floor(Math.random()* -100)

			const Opts = { 

		          center: {lat: randomCoordlat, lng: randomCoordlong},
		          zoom: 0
		     
		        }
		   let map = new google.maps.Map(Elmt,Opts);

		   let giveMark = new google.maps.Marker( {

		   		position : Opts.center , 
		   		map :map
		   })


         }
   	},




 }

window.addEventListener("load" , function() { 
ProgressBare.hidden = true
suBnt.disabled =true 
NameSpace.ControlInput.checkNum()
NameSpace.ControlInput.checkEmail()
NameSpace.Submission.sub();
if (localStorage['savelist'] == "true") {

   if(localStorage['Fname'] && localStorage['Lname'] && localStorage['tel'] && localStorage['email']) { 
   App.DomSelector('cls').hidden =false
   App.DomSelector('autoSave').hidden= true
   NameSpace.Storage.RestoreData()
   NameSpace.ClearStorage()
    }
   
}else{
    NameSpace.ActiveSave()
    NameSpace.ClearItem.ClearlocateStorage()
}
NameSpace.ClearItem.ClearlocateStorage()
console.log(App.DomSelector("li"))
NameSpace.AddWidgetMap()


})