import React, {useState} from 'react';

import { navigate } from '@reach/router';


const Search = props => {
    const [category, setCategory] = useState("People");
    const [id, setId] = useState(1);



    const search = e =>{
  
        e.preventDefault();
      
    navigate(`/${category}/${id}`);
      }


    
    return (
    <form onSubmit = {search}>
    <div className = "row" >
          <div className = "col-sm-5">
             <select  className="form-control" onChange = {e => setCategory(e.target.value)} value={category}>
             
               <option value = "People">people</option>
               <option value = "Planets">Planets</option>
         </select>
      </div>



        <div className = "col-sm-5">
        <input type = "number" className = "form-control"  min = "1" onChange={e => setId(e.target.value)} value={id}  />
      </div>



             <div className = "col-sm-2">
            <input type = "submit" className = "btn btn-primary"  value ="search"/>
           </div>


       </div>
    </form>






    );
}

export default Search;