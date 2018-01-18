let img  = new Image() ; 

let Elmts = { 

	Overlay: document.getElementById('overlay'), 	
	links: document.getElementsByTagName("a"),
	btNext : document.getElementById('next'),
	btPrev : document.getElementById('previous'),
	spanTitle : document.getElementById("imgTitle")
}
	
let images  = [] ; 

let getCurrentTitle = []

	for (var i = 0; i < Elmts.links.length; i++) {
		images.push(Elmts.links[i].href) ; 
	}

	for (var i = 0; i < Elmts.links.length; i++) {
		getCurrentTitle.push(Elmts.links[i].title)
	}

let viewImgIndex = 0
const imgLen = images.length 

let Imgloader =  { 

//display image 
		Display : (linkTag)=>{ 

			img.addEventListener('load', ()=> { 

				Elmts.Overlay.appendChild(img)

			}) 
					
				img.src = linkTag.href 

			    Elmts.Overlay.style.display ="block"
				Elmts.spanTitle.textContent = linkTag.title


		}, 

	  ShowImg : { 

		loadImg : ()=> { 

			const aTags = Elmts.links
			
			for (let i = 0; i < aTags.length; i++) {

				aTags[i].addEventListener('click',(ev)=> { 

					ev.preventDefault()
					
					Imgloader.Display(ev.currentTarget)

				})
			}

		} , 

	// close Overlay on dblclick
		CloseOverlay : ()=> { 

			Elmts.Overlay.addEventListener('dblclick', (ev)=>{ 

				ev.currentTarget.style.display = "none"
			})	

		},

		Next : ()=> { 
			
			Elmts.btNext.addEventListener('click' , ()=> { 
			  viewImgIndex++

			    if (viewImgIndex >=imgLen)  {

			  	  viewImgIndex = 0
			  }
			  Elmts.spanTitle.textContent = getCurrentTitle[viewImgIndex]

			  img.src = images[viewImgIndex]; 
			
			})

      },

      Previous: ()=> { 

      		Elmts.btPrev.addEventListener('click' , ()=> { 

      		 viewImgIndex--

      		 if (viewImgIndex = 0 )  {

			  	  viewImgIndex = imgLen 
			  }

			  Elmts.spanTitle.textContent = getCurrentTitle[viewImgIndex]

			  img.src = images[viewImgIndex]; 

			  

      		})
      }
	
    }
}

window.onload = ()=> { 
	
	for ( let i in Imgloader.ShowImg) { 

		Imgloader.ShowImg[i]()
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> 7c06af7c8282cedb7fd12653dbb81fac7435685a
