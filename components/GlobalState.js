import React , {useState} from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = ({children}) =>{
    const [cartItem , setCartItem] = useState({});
    const [showCart , setShowCart] = useState(0);

    return (
        <GlobalContext.Provider value = {{cartItem , setCartItem , showCart , setShowCart}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;