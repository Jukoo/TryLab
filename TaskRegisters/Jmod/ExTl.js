/**
 *this module will be deployed on NPM for specific uses that targets a certain design pattern
 *however, it does not partially support the prototype Design pattern to automatically reload the subNamespace  ...
 *Info: this module is in beta version 0.0.1 
Improvements will be made and other features for more wealth
 */

module.exports = {

        /* 
         *  NSLaod 
         *  **only prototype Desing partern is halfly supported**
         *  this Module is for Automatic laod subNameSpace
         *  this is for Prototye Desing Pattern 
         *
         *  STUCTURE : 
         *  MainNameSpace : 
         *      |
         *      subNameSpace :| 
         *          |         |  /<-\
         *          methode1 :|  |  | Laod
         *          |         |  \->/  
         *          methode2 :|
         *          .
         *          .
         *          .
         * @param subNamepace 
         * @return void 
         */ 

        NSLoad: (subNameSpace) => {
            
            let NScount = [] ; 

            for (let i  in subNameSpace) {
                
                let Sloader =  setInterval(()=> {
        
                console.log("\x1b[32m",`[ ok ] ${i} is loaded\n`) ;
                NScount.push(i); 
                if (NScount.length == NScount.length){
                    clearInterval(Sloader) ; 
                 }

                }, 2000)
    
            subNameSpace[i]() ; 
    
           
      }  
    }
}
