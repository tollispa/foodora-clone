import { FaInstagram, FaFacebook,FaLinkedin} from 'react-icons/fa';

function Footer() {
    return (  <div className="h-auto bg-red-400 text-white">
        <h1 className="mb-5 p-4">Fler leverantörer</h1>
        <p className="p-4">McDonald's   |   Max   |   Burger King   |   Hemmakväll   |   Sibylla   |   Subway   |   Hemmakvall   |   Pizzabakeren   |   Beijing8   |   Shamiat   |   Pizzeria Bari   |   SUSHI YAMA   |   Hawaii poké   |   Sushi Room   |   Brödernas   |   Taco Bar   |   Mukut   |   Jimmy & Joan's New York   |   Wing It   |   Sushi Yamma   |   Jenin Grill   |   Bastard Burgers    </p>
        <p className='flex gap-1 p-1 cursor-pointer'><FaFacebook className='hover:text-gray-200' size={25}/><FaLinkedin className='hover:text-gray-200' size={25}/></p>
        
        <p className="p-2">© 2023 foodora AB</p>
    </div>);
}

export default Footer;