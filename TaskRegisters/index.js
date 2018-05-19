
const V_Requires =  { 

     express    : require("express")  
   , ejs        : require("ejs") 
   , session    : require ("cookie-session")  
   , UE_parser  : require("body-parser")
   , NSLoad     : require("./Jmod/ExTl")
}
Object.defineProperty(V_Requires, "Port" , {
         value        : 1337  //LEET ;) 
       , configurable : false 
       , enumarable   : false 
       , writable     : false 
})

const {express , ejs , session, UE_parser , Port , NSLoad} = V_Requires ; 

let Tdl = express() ; 

Tdl.set("view engine" , "ejs" ) ; 
Tdl.use(express.static("public")) ; 
let CoreApp =  {
        
    version  :"0.0.1 [Alpha development] |Testing| " , 

    Code_Name : "" , 

    lang : "en-EN" ,  

    template  : "ejs", 

    DataBase : "Redis" ,

    MiddleWares :{
    
        M_session : ()=>{
            
            Tdl.use(session({secret :"CryptedKey"})) // Cypher key in Developpement

            .use((req ,res , next)=>{
                if (req.session.session_Register == undefined) req.session.session_Register = new Object([]); 
                next() ; 
            })
        } , 

        M_BodyParser : ()=> UE_parser.urlencoded({extended :false})       
    },

    Router :  { 
        
        homePage : () => {
        
            CoreApp.MiddleWares.M_session(); 
           
            Tdl.get("/" , (req, res)=> {
                
             res.setHeader("Content-type" , "text/html") ; 

                let SessionStorage = req.session.ession_Register ;

                res.render("index.ejs" , {data  : SessionStorage});
            })
            .listen(Port , ()=> console.log("The  server is running  on [::1]1337"))
        } , 

       Post  : ()=> {
       
        Tdl.post("/post" , CoreApp.MiddleWares.M_BodyParser(), (req, res)=> {
        
            if (req.body.task !="") req.session.session_Register.push(req.body.task)
            
             res.redirect("/") ; 
        })

       } , 
     Delete  : ()=> {
        
         Tdl.get("/:id" , ( req ,res )=> {      

             if ( req.params.id != "") req.session.session_Register.splice(req.params.id , 1 )  ;  
             res.redirect ("/") ; 
         })
      }, 
    redirectIfUrlisWrong: ()=> {
        
        Tdl.use((err, req ,res , next)=>{    
           
             res.redirect("/") ; 
        })
    }

    }
    
}

NSLoad.NSLoad(CoreApp.Router); 




