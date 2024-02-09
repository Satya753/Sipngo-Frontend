import React , {useEffect, useState} from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = ({children}) =>{
    const [cartItem , setCartItem] = useState({});
    const [showCart , setShowCart] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [userDetails , setUserDetails] = useState({email:'' , password:'', user_name:'', phone_no:'' , error:'', user_location:'-'});

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
                totalAmount, setTotalAmount,
                userDetails, setUserDetails
                }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;