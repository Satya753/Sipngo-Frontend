import React , {useEffect, useState} from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = ({children}) =>{
    const [cartItem , setCartItem] = useState({});
    const [showCart , setShowCart] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( ()=> {
        let amountArray = Object.keys(cartItem).map( item => (cartItem[item].amount*cartItem[item].cnt));
        let total = amountArray.reduce((totalValue, currentValue)=> currentValue+totalValue , 0);
        setTotalAmount(total);
    },[cartItem]);

    return (
        <GlobalContext.Provider 
            value = {{
                cartItem , setCartItem , 
                showCart , setShowCart,
                totalAmount
                }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;