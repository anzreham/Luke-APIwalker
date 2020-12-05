import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Planets = props => {

    const [error, setErr] = useState("");
    const [planet, setplanet] = useState({});
    const [isErr, setIsErr] = useState(false);


    useEffect(() => {
     setIsErr(false);

    axios.get(`https://swapi.dev/api/planets/${props.id}`)
    .then(res =>{
    console.log(res);
    setErr("")
    setplanet(res.data);

}).catch(err => {setErr("These aren't the droids you're looking for")
if(err.response && err.response.status === 404) {

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
             
             {
            !isErr ? 
              <>
      
           <h2>  {planet.name}</h2> 
            <p > <b>climate:</b> {planet.climate} 
            <br/>
            <b>terrain:</b> {planet.terrain}<br/>
             <b>surface water:</b> {planet.surface_water} <br/>
             <b>population:</b> {planet.population}</p>



             </>:
              <p>These are not the droids you're looking for!</p>
          } 
              </div>
            </div>

          </div>
        </div>
    );
};


export default Planets;