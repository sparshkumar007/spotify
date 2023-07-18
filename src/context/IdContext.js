import { useState } from 'react';
import MyContext from './createContext';


const IdState=(props) => {
    const id='m8wmw14hbql9teek767hzs5ru';
    const [Id,setId]=useState(id);
    return (
        <MyContext.Provider value={{ Id,setId }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default IdState;