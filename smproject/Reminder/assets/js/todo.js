//Instantiation de mon objet 
let Use = new Utilities("input[type = 'text']" , "input[type='submit']") ; 

Use.WindowsReady(Use.elments.input,true)

let shortCuts =  { 

	input : Use.elments.input,

	btnSave : Use.elments.save
}

//DataStore 
localStorage['Event'], localStorage['Timestemps'] ; 


let DOMtarget  = { 

 getTableBody  : Use.getElement("#tableBody") , 

}

let Globalspace  = { 


// # EVENT HANDLER 
	addEvent :  {  

		EventInput : function () { 

				shortCuts.input.addEventListener('input',function(ev) { 

					if(shortCuts.input.value.length > 5 ) { 

						shortCuts.btnSave.disabled= false; 

					}else { 

						shortCuts.btnSave.disabled = true

					}			


					})



		},

		//Save Event 
		EventAddItem  : function () { 

			        shortCuts.btnSave.addEventListener('click',function(ev) { 

     		
 					if (shortCuts.input.value) { 

 						let TableRow = Use.Create('tr') ; 
 						let tdEvent= Use.Create("td") , Currtimes = tdEvent.cloneNode(false) , tdDel = tdEvent.cloneNode(false) ; 	

 					   localStorage['Event']+= tdEvent.textContent = shortCuts.input.value +"*"

 					   localStorage['Timestemps']+= Currtimes.textContent = new Date() + '!' ; 

 					     
 					   tdDel.className ="btn btn-danger" ; 
 					    
 					   TableRow.appendChild(tdEvent) ;
 					   TableRow.appendChild(Currtimes) ; 
 					   TableRow.appendChild(tdDel)
 					   
 					   DOMtarget.getTableBody.appendChild(TableRow)

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

				if (localStorage['Event'] && localStorage['Timestemps']) { 

					let event =  localStorage['Event'] ; 
					let times =localStorage['Timestemps'] ; 


					let RestoreData =Use.split(event,"*")
					
					let remindeTime = Use.split(times,'!')
			
					RestoreData[0] = RestoreData[0].replace(/undefined/, " ")

					remindeTime[0] =remindeTime[0].replace(/undefined/, " ")

					RestoreData.forEach((restore , index )=>  { 

					DOMtarget.getTableBody.appendChild(Use.TabRow(restore,remindeTime[index]))

					})

					

				}

			},

			//clear LocalStorage 
		/*ClearStorage :  function (status) { 

				Use.getElement('.clear').addEventListener('click', function(ev) {

				let confirmation = confirm("Reinitializer votre invantaire ? >_ ") 
		  
				confirmation?localStorage.clear(): alert("Operation rejettée ! ")

				})

			}*/
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
//Globalspace.Storage.ClearStorage();


})

