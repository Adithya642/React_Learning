import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import {MouseEvent, useState} from "react";
function ListGroup() {
    let items=['paris','london',
     'New York',
      'France'];
     // items=[];
      const getMessage=()=>{
      return  items.length===0? <p>No Item Found</p>:null;
      }
const [selectedIndex,newIndex]=useState(-1);
     // const handleClick=(event:MouseEvent)=>console.log(event);
  return (
    <Fragment>
        <h1>List</h1>
        {items.length===0 && <h1>No Item Found</h1>}
        <ul className="list-group">
        {items.map((item,index)=>(
        
        <li className={selectedIndex==index? "list-group-item active":"list-group-item"} key={item} onClick={()=>newIndex(index)}>{item}</li>
      ))}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
