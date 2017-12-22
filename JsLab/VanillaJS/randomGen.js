

let  mainApp = new Define () ; 

mainApp.setValue = function(valueDiv , valueSpn) { 

	div_El  =  this.AutoBuild('container').textContent = valueDiv ; 

	span_El  = this.AutoBuild('autor').textContent = valueSpn ; 

}

 
let Print_Def = Object.create(make) ;

console.log(Print_Def.getSelect.selectSize(descriptions))

 let storage = Print_Def.getSelect.selectSize(descriptions) ; 


const keyIndex = Object.keys(storage) ; 

function shuffle () { 

  let id = Print_Def.RandomGenerator.randomize(keyIndex)

  mainApp.setValue(storage[id].dataDefinition  , storage[id].dataTerm) ; 


 }
 

mainApp.AutoBuild('btn').addEventListener("click" ,shuffle);

window.onload = function () { 
	shuffle()
}


