import { useRef } from "react";

const SearchBox = ({fn}:{fn:Function})=>{
    const searchTxt= useRef<HTMLInputElement | null>(null);
    const getSearchValue = () =>{
 console.log('Search Value' , searchTxt?.current?.value)
 fn(searchTxt?.current?.value);
    }
   // const getChangeValue = (event:any) => {
    //    console.log('Change Event',event.target.value );
   // }
    
    
    return (<div className = "form-group">
        <label>Search:</label>
       {/*  <input onChange = {getChangeValue} className="form-control" type ="text" placeholder="Type to Search Here"/>*/ }
       <input ref = {searchTxt} className="form-control" type ="text" placeholder="Type to Search Here"/>
        <button onClick={getSearchValue} className="btn btn-primary">Search</button>
    </div>)
}
export default SearchBox;