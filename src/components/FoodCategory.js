import { TextField } from '@mui/material';
import { useState} from "react"
import Cart from "./Cart"
import { foodIcons } from './foodIcons';
import { cartItems } from './foodIcons';
import { price } from './foodIcons';

import { FaSearch,FaCartPlus} from 'react-icons/fa';

function FoodCategory() {
    const [items, setItems] = useState([])
   
   const [itemPrice, setItemPrice] = useState(0)
  
    
   
        const addItem = (title, price) => {
            
            
            setItems(prevItems => [...prevItems, title]);
            setItemPrice(itemPrice + price);
            cartItems.push(title)
            
            
           }
  
     console.log(cartItems)
      
    return ( 
        <>
        <span className='flex justify-center items-center text-gray-800 bg-white text-xl sm:text-4xl'>Välj Maträtter ({items.length}) Totalt pris: ({itemPrice})kr</span>
        {itemPrice > 0 ? <p className='flex justify-center items-center m-1'>Färdighandlat? Gå till <span className='ml-1 underline text-blue-400 cursor-pointer m-2'>varukorg</span></p> : <p className='text-white'>F</p>}
        <p className='flex justify-center items-center mt-3'><TextField label="Filtrera efter..."/>
        <button className='text-xl black shadow-lg bg-slate-50 p-3 rounded-full ml-2 hover:bg-slate-100'><FaSearch /></button></p>
        
        <div className="bg-white sm:h-[300px] h-[150px] flex flex-row gap-3 text-white w-full justify-center items-center"> 
        <div className='bg-gray-100 rounded-full p-4 w-auto h-[250px] mr-10 relativ hidden sm:block'>
            <img className='w-full h-[200px]' src="https://th.bing.com/th/id/R.77324b7bffe240d5a698091928296d44?rik=fdlLXNIjIY9u5g&riu=http%3a%2f%2fthesplendidlifestyle.com%2fwp-content%2fuploads%2f2019%2f08%2fdelivery.png&ehk=6it3QaR03%2bUA%2fYaNsq5JJQvYeFoIx8eusDr1b59eMps%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
        </div>
        
        <div className='flex h-auto w-[50%] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative ml-10' style={{ '--scrollbar-thumb-color': 'red' }}>
        {foodIcons.map((icon, index) => {
            return (
                <div className='justify-center relative items-center w-full sm:text-7xl text-xl bg-white text-gray-800 h-[65px] sm:h-[150px] rounded border-2 border-gray-200 p-4 ml-2 mb-4 hover:bg-red-400 hover:border-red-400 hover:text-white' key={index}>
                   <FaCartPlus onClick={() => addItem(icon.title, icon.price)} className='cursor-pointer absolute top-0 right-1 text-white hover:text-gray-400 m-1 transform hover:scale-150 transition duration-200 active:text-gray-800' size={20}/>
                    <p className='absolute top-[0%] left-1 text-sm'>{icon.title}</p>
                    <p className='absolute top-[11%] left-1 text-sm'>{icon.price}kr</p>
                        
                 

                    <p className='justify-center items-center mt-[35%]'>{icon.icon}</p> </div>
            )
        })}
        </div>
 
     
        </div>
        <div className='hidden'>
      {itemPrice && <Cart itemPrice={itemPrice}/> }
            </div>
        </>
     );
}

export default FoodCategory;