

function Define () { 

		this.AutoBuild = function(target) { 

		return document.getElementById(target) ; 
	} 

}

//NameSpace

let make  = { 

	getSelect: { 

	selectSize:function (Selections) { 

	 	 	if (typeof Selections == "object")  { 

	 	 		let storage  = Object([]) ; 

	 	 		 for (var i = 0; i < Selections.length; i++) {

	 	 		 	 storage.push(Selections[i])

	 	 		
	 	 		 }

	 	 		  return storage
	 	 	}else { 

				console.warn(typeof Selections) ; 
	 	}

	   }

	}  ,

       	  RandomGenerator :  { 

 	    randomize : function (props) { 
			 
	    return Math.floor(Math.random() * props.length)
    }

  }

}
