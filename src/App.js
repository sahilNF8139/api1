import { useState,useEffect} from "react"      
import "./App.css"
import Api from "./comonents/api";

function App(){
  const[user,setuser]=useState([]);
  // useEffect(() => {
  //   fetch("https://crudapi.co.uk/api/v1/kunal", {
  //     method: "GET",
  //     headers: {
  //       'Authorization':'Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw' 
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data" , data);
  //       setuser(data.items)
  //     })
  //     .catch((error) => console.log("error" , error));
  // }, []);

                                                                                     
      
console.log("user" , user);
  return(
    <div>

   <Api></Api>

<h1>API calling </h1>
<table>
  <th>id</th>
<th>Name</th>
<th>Email</th>
<th>lastname</th>
{
 user && user.map(k=><tr>
    <td>{k.id}</td>
    <td>{k.name}</td>
    <td>{k.email}</td>
    <td>{k.lastname}</td>
    </tr>
    )
}
{/* <tr>
<td>sahil</td>
<td>sahilkhalani83@gmail.com</td>
<td>Khalani</td>
</tr> */}
</table>
    </div>
  );
}
export default App 


// all tpoic cover*//
