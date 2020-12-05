import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';


const People = props => {
const [error, setErr] = useState("");
const [person, setPerson] = useState({});

const [isErr, setIsErr] = useState(false);



useEffect(() => {
    setIsErr(false);

axios.get(`https://swapi.dev/api/people/${props.id}`)
.then(res =>{
console.log(res);
setErr("")
setPerson(res.data);

}).catch(err => {setErr("These aren't the droids you're looking for")
 if(err.response && err.response.status === 404) {


// person.name = "";
// person.height ="";
// person.mass = "";
// person.hair_color = ""; 
// person.skin_color = "";

setIsErr(true);

 } else {
     console.error(err);}

});

  }, [props]);



    return (
        
<div className = "row my-5">
          <div className = "col-sm-5">
            <div className="card">
              <div className="card-body">
               
       
            {/* <p> {JSON.stringify(person} </p> */}
             
            {/* <p> <span  style={{color: ""}} > <b> Name: </b></span>  {person.name} </p> */}
            {
            !isErr ? 
              <>
      
           <h2>  {person.name}</h2> 
            <p  > <b>height:</b> {person.height} 
            <br/>
            <b>Mass:</b> {person.mass}<br/>
             <b>Hair color:</b> {person.hair_color} <br/>
             <b>Skin color:</b> {person.skin_color}</p>
             <a href={"" + person.homeworld}>homeworld</a>



             </>:
              <p>These are not the droids you're looking for!</p>
          }
              </div>
            </div>

            
          </div>
        </div>
    );
};


export default People;