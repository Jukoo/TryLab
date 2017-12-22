//Instantiation de mon objet 
let Use = new Utilities("input[type = 'text']" , "input[type='submit']") ; 
//DataStore 
localStorage['storageData']

Use.WindowsReady(Use.elments.input,true)

let shortCuts =  { 

	input : Use.elments.input,

	btnSave : Use.elments.save
}

let Globalspace  = { 


// # EVENT HANDLER 
	addEvent :  { 

		EventInput : function () { 

				shortCuts.input.addEventListener('input',function(ev) { 

					if(shortCuts.input.value.length > 5 ) { 

						shortCuts.btnSave.disabled= false; 

					}else { 

						shortCuts.btnSave.disabled  = true
					}			


					})



		},
		EventAddItem  : function () { 

			        shortCuts.btnSave.addEventListener('click',function(ev) { 

     				ev.preventDefault() 

 					if (shortCuts.input.value) { 

 						let makeLi  = Use.Create("li")

 						makeLi.id ="item"
 						
 						localStorage['storageData'] += 	makeLi.textContent = shortCuts.input.value + " " ; 

 						
 						Use.getElement(".list").appendChild(makeLi) ;

 						shortCuts.input.value =""
 						shortCuts.input.focus()

 
 					}


			})


		},


	},

	// # LOCALSTORAGE MANAGEMENT


		Storage :  { 

			// restore LocalStorage 
			DataStore : function () { 

				if (localStorage['storageData']) { 

					 let  data =  localStorage['storageData'] ; 

					let RestoreData =Use.split(data," ")
					
				//	console.log(RestoreData)

					 RestoreData[0] = RestoreData[0].replace(/undefined/, " ")

					for (let i = 0; i < RestoreData.length; i++) {

						let lielm = Use.Create('li')

						lielm.textContent = RestoreData[i]

						Use.getElement(".list").appendChild(lielm)
					}

				}

			},

			//clear LocalStorage 
		ClearStorage :  function (status) { 

				Use.getElement('.clear').addEventListener('click', function(ev) {

				let confirmation = confirm("Reinitializer votre invantaire ? >_ ") 
		  
				confirmation?localStorage.clear(): alert("Operation rejettée ! ")

				})

			}
		}	

/*
TODO : add an event on the li (tag) to edit the  LocalStorage  ! 
*/



}

/*******

Experiment Section 

******/



window.addEventListener('load', function (ev)  { 

Globalspace.addEvent.EventInput();
Globalspace.addEvent.EventAddItem();
Globalspace.Storage.DataStore();
Globalspace.Storage.ClearStorage();
})

