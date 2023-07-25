import React , {useState} from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = ({children}) =>{
    const [cartItem , setCartItem] = useState(new Map());

    return (
        <GlobalContext.Provider value = {{cartItem , setCartItem}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;