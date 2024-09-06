import React, { useState } from "react";


const AppTD = ()=>
{
    const[List, setList]=useState("");
    const[Item, setItem]=useState([]);

    const insert=(event)=>{
        setList(event.target.value);
    };
    const onSubmit=()=>
    {
        setItem((oldItem)=>{
            
         return[...oldItem,List];
        }
        );
        setList("");

    };
    
    return(
        <>
            <div className="main-div">
            <div>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item" value={List} onChange={insert}
                    
                />
                <button onClick={onSubmit}>+</button>


                <ul>
               { Item.map((itemv)=>{
                        return <li> {itemv} </li>
                    })}
                </ul>
            </div>

            </div>
        </>

    );
};

export default AppTD;