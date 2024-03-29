import { useState } from "react";


function Api(){


    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[lastName,setlastName]=useState("")
    let sbojct={
      name:name,
      email:email,
      lastname:lastName
    
    }
  console.log(sbojct)
   
  
  function Namechangehandler(event){
    setname(event.target.value)
  }
  function emailchangehandler(event){
    setemail(event.target.value)
  }
  function lastnamechangehandler(event){
    setlastName(event.target.value)
  }



  function sbtdatahandler(event){
    event.preventDefault();

    fetch("https://crudapi.co.uk/api/v1/kunal",{
      method:'POST',
      headers:{
        // 'Authorization':'Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw', 
      'Accept':"application/json",
      'Content-Type':"application/json"
      },
      body:JSON.stringify([sbojct])
  
    })
   
  
  };

    return(   
        <div>
            
       <form className="maincontainer">
     <div>
         <label>Name:</label>
         <input type="text" placeholder="Enter your Name"  value={name} onChange={Namechangehandler}/>
       </div>
       <br></br>
      <div>
         <label>Eamil:</label>
         <input type="email" placeholder="Enter your Addres" value={email} onChange={emailchangehandler}/>
      </div>
       <br></br>
      <div>
         <label>LastName:</label>
        <input type="text" placeholder="Enter your Number" value={lastName} onChange={ lastnamechangehandler}/>
       </div> 
       <br></br>
       <div>
         <button onClick={sbtdatahandler}>Save New User</button>
         
       </div>
     </form>
     </div>
      
    );
};
export default Api


