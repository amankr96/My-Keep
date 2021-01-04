import React, { useState } from 'react';    
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import zIndex from '@material-ui/core/styles/zIndex';


const App=()=>{
    const[addItem,setAddItem]=useState([]);
    const addNote=(note)=>{
        setAddItem((prevData)=>{
            return [...prevData,note];
        });
    };
    const onDelete=(id)=>{
        setAddItem((oldData)=>
            oldData.filter((currData,indx)=>{
                return indx!=id;
            })
        );
    };

return(
    <React.Fragment>
        <Header />       
        <CreateNote passNote={addNote} />
        {addItem.map((val,index)=>{
            return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            />
        })}
        <Footer />

    </React.Fragment>
)
};

export default App;