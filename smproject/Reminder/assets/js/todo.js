//Instantiation de mon objet 
let Use = new Utilities("input[type = 'text']" , "input[type='submit']") ; 

Use.WindowsReady(Use.elments.input,true)

const shortCuts =  { 

	_input : Use.elments.input,

	_btnSave : Use.elments.save
}

//DataStore 
localStorage['Event'], localStorage['Timestemps'] ; 


let DOMtarget  = { 

 getTableBody  : Use.getElement("#tableBody") , 

}

let Globalspace  = { 
// # EVENT HANDLER 
	addEvent :  {  

		EventInput :  function() { 

			shortCuts._input.addEventListener('input',()=>{ 
			
				shortCuts._btnSave.disabled =(shortCuts._input.value.length > 2 )?false:true ; 
	


		     })


	   },

		//Save Event 
		EventAddItem  : function ()  { 

			        shortCuts._btnSave.addEventListener('click',(ev)=> { 
			        	ev.preventDefault();
     				
	 					if (shortCuts._input.value) { 

	 						let TableRow = Use.Create('tr') ; 
	 						let tdEvent= Use.Create("td") , Currtimes = tdEvent.cloneNode(false) , tdDel = tdEvent.cloneNode(false) ; 	

	 					   localStorage['Event']+= tdEvent.textContent = shortCuts._input.value +"*"

	 					   localStorage['Timestemps']+= Currtimes.textContent = new Date() + '!' ; 

	 					     
	 					   tdDel.className ="btn btn-danger" ; 
	 					    
	 					   TableRow.appendChild(tdEvent) ;
	 					   TableRow.appendChild(Currtimes) ; 
	 					   TableRow.appendChild(tdDel)
	 					   
	 					   DOMtarget.getTableBody.appendChild(TableRow)

	 					   shortCuts._input.value =""
	 					   shortCuts._input.focus()

	 
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


}

/*******

Autoloader

******/

Use.__RequestAutoload__(Globalspace) ; 
