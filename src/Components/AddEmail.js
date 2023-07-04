import React , {useState}  from 'react';

function AddEmail(){
    const [item , setItem] = useState('')
    const[items , setItems] = useState([])

    const handleChange = (event) =>{
        setItem(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();

        if (item.trim()!==''){
            setItems([...items, item]);
            setItem('');
        }
    };
    // Persist the value in db 
    console.log(items)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display :'block' ,  textAlign: 'left'}}>
                <input type="text" style = {{ borderRadius:'0.375rem', width: '300px', height: '40px' ,marginRight:'10px' } }value={item} onChange={handleChange}/>
                <button type="submit" style={{ borderRadius: '0.375rem' , width:'150px' , height:'30px'}}>Join our  WaitList </button>
                </div>
            </form>
            
        </div>
    )
};
export default AddEmail;