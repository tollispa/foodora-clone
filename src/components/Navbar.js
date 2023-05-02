import {AiOutlineClose, AiOutlineMenu,} from "react-icons/ai"
import { FaInstagram, FaFacebook,FaLinkedin,FaUserCircle, FaUtensils, FaShoppingCart} from 'react-icons/fa';


import {useState} from "react"

const Navbar = () => {
    
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="text-white flex justify-between items-center h-auto bg-red-400 mx-auto px-4 w-full">
        <h1 className="w-full text-xl font-bold sm:text-3xl ">Tollis Foodora App.</h1>
        <ul className="hidden md:flex uppercase">
            <li className="p-4 cursor-pointer hover:text-red-600 flex text-xl">
          
            <FaUserCircle size={25}className="mr-2 mt-0.5"/> Login 
                 
            </li>
            <li className="p-4 cursor-pointer hover:text-red-600 flex">
                  
                   <FaUtensils size={25} className="ml-2 mt-0.5"/>
                    
</li>
         <li className="p-4 cursor-pointer hover:text-red-600">
              <FaShoppingCart size={25} className="ml-2 mt-0.5"/>
         </li>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav ? "absolute left-0 top-0 w-[70%] h-[30%] border-r border-r-gray-1200 bg-red-400 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
       
        <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-200 cursor-pointer flex font-bold">
           
            <FaUserCircle size={20}className="mr-2 mt-0.5"/> Login 
                
            </li>
            <li className="p-4 border-b border-gray-200 cursor-pointer">
          
            <FaUtensils size={20}/>
                  
            </li>
            <li className="p-4 border-b border-gray-200 cursor-pointer">
            <FaShoppingCart size={20}/>
            </li>
            <div className=" relative">
                <div className="absolute top-10 flex gap-2">
                <FaFacebook size={40}/>
                <FaInstagram size={40}/>
                <FaLinkedin size={40}/>
                </div>
        
            </div>
            

          

        </ul>
        </div>
        </div>
    )
}

export default Navbar