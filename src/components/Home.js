import {TextField} from "@mui/material"
import FoodCategory from "./FoodCategory";
import Footer from "./Footer"

function Home() {
    return ( 
        <>
        <div 
        className="max-w-[1240px]' rounded h-[300px] sm:h-[600px] bg-cover bg-center items-center justify-center hidden sm:flex"
        style={{backgroundImage: `url("https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4233505/1820/1213/m1/fpnw/wm1/th6dcidge1e8u2cjh7qznbf7o7fefd3wmb0exr1zupcsmvydd0suh6auhmmxbv0h-.jpg?1522764671&s=e38e80deeed0ccefdc17071a21afb43c")`}}>
           
            <div className="bg-white flex p-3 shadow-lg rounded">
                <TextField className="w-[400px]" variant="outlined" label="Din adress (t.ex. Tulegatan1)"/>
                <button className="bg-red-400 rounded text-white p-2 mr-1 ml-4 hover:bg-red-500 w-[120px]">Leverans</button>
                <p className="pt-4 ml-3 mr-3">Eller</p>
                <button className="bg-red-400 rounded text-white p-2 mr-1 ml-1 hover:bg-red-500 w-[120px] ">Pick-Up</button>
            </div>
          
        </div>
          <FoodCategory/>
          <Footer/>
          </>
    );
}

export default Home;