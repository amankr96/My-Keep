import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote =(props)=>{
    const[expand,setExpand] = useState(false);
    const[note, setNote]=useState({
        title:"",
        content:"",
    });
    const inputEvent=(event)=>{
      const value=event.target.value;
      const name=event.target.name; //by the help of object destructuring, we can also write this as: const[value,name]=event.target

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
                
            }
        })
    };
    const addEvent =()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        }); 
    };
    const expandIt=()=>{
        setExpand(true);
    };
    const backtonormal=()=>{
        setExpand(false);
    }

    return(
        <React.Fragment>
        <div className="main_note" onDoubleClick={backtonormal}>
            <form>
            {expand?
            <input 
            type='text' 
            name="title"
            value={note.title}
            onChange={inputEvent} 
            placeholder='Title' 
            autoComplete="off"
            />:null}
            <textarea 
            rows="" 
            column="" 
            name="content"
            value={note.content} 
            onChange={inputEvent}  
            placeholder="Write a note"
            onClick={expandIt}
            />\
            {expand?
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button>:null}
            </form>
        </div>
        </React.Fragment>
    )
}

export default CreateNote;