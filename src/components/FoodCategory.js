import { TextField } from '@mui/material';
import { FaSearch, FaAppleAlt, FaBacon, FaBreadSlice, FaCarrot, FaCheese, FaCoffee, FaCookie, FaDrumstickBite, FaEgg, FaFish, FaHamburger, FaHotdog, FaIceCream, FaLemon, FaPepperHot, FaPizzaSlice, } from 'react-icons/fa';

function FoodCategory() {

    const foodIcons = [
        <FaAppleAlt />,
        <FaBacon />,
        <FaBreadSlice />,
        <FaCarrot />,
        <FaCheese />,
        <FaCoffee />,
        <FaCookie />,
        <FaDrumstickBite />,
        <FaEgg />,
        <FaFish />,
        <FaHamburger />,
        <FaHotdog />,
        <FaIceCream />,
        <FaLemon />,
      
      
        <FaPepperHot />,
        <FaPizzaSlice />,
        
    
      ];
    return ( 
        <>
        <span className='flex justify-center items-center text-gray-800 bg-white text-xl sm:text-4xl'>Välj Maträtter</span>
        <p className='flex justify-center items-center mt-3'><TextField label="Filtrera efter..."/>
        <button className='text-xl black shadow-lg bg-slate-50 p-3 rounded-full ml-2 hover:bg-slate-100'><FaSearch /></button></p>
        
        <div className="bg-white sm:h-[300px] h-[150px] flex flex-row gap-3 text-white w-full justify-center items-center"> 
        <div className='bg-gray-100 rounded-full p-4 w-auto h-[250px] mr-10 relativ hidden sm:block'>
            <img className='w-full h-[200px]' src="https://th.bing.com/th/id/R.77324b7bffe240d5a698091928296d44?rik=fdlLXNIjIY9u5g&riu=http%3a%2f%2fthesplendidlifestyle.com%2fwp-content%2fuploads%2f2019%2f08%2fdelivery.png&ehk=6it3QaR03%2bUA%2fYaNsq5JJQvYeFoIx8eusDr1b59eMps%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
        </div>
        
        <div className='flex h-auto w-[50%] overflow-x-auto ml-10'>
        {foodIcons.map((icon, index) => {
            return (
                <button className='w-full sm:text-7xl text-xl bg-white text-gray-800 h-[65px] sm:h-[150px] rounded border-2 border-gray-200 p-4 ml-2 mb-4 hover:bg-red-400 hover:border-red-400 hover:text-white' key={index}>
                    {icon}</button>
            )
        })}
        </div>
 
     
        </div>
        </>
     );
}

export default FoodCategory;